import { type AiTool } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";
import { useState } from "react";
import { ToolModal } from "./tool-modal";

interface ToolCardProps {
  tool: AiTool;
  featured?: boolean;
}

export function ToolCard({ tool, featured = false }: ToolCardProps) {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleDirectLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(tool.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Card 
        className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden cursor-pointer"
        onClick={handleCardClick}
      >
        <CardContent className="p-0">
          <div className="relative">
            {/* Tool Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={tool.imageUrl}
                alt={tool.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // إذا الصورة الحالية هي Clearbit، جرب thum.io
                  if (!target.dataset.fallback) {
                    try {
                      const urlObj = new URL(tool.url);
                      target.src = `https://image.thum.io/get/width/400/${urlObj.hostname}`;
                      target.dataset.fallback = "thumio";
                    } catch {
                      target.style.display = "none";
                    }
                  } else {
                    // إذا فشل thum.io أيضًا، أخفِ الصورة
                    target.style.display = "none";
                  }
                }}
              />
              
              {/* Featured Badge */}
              {featured && (
                <div className="absolute top-3 left-3">
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Star className="w-3 h-3 mr-1" fill="currentColor" />
                    Featured
                  </Badge>
                </div>
              )}
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <Button 
                  size="sm" 
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0"
                  onClick={handleDirectLink}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Tool
                </Button>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                {tool.description}
              </p>
              
              {/* Tags */}
              {tool.tags && tool.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {tool.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {tool.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{tool.tags.length - 3}
                    </Badge>
                  )}
                </div>
              )}
              
              <Button 
                size="sm" 
                className="w-full"
                onClick={handleDirectLink}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Try Tool
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <ToolModal 
        tool={tool} 
        open={showModal} 
        onOpenChange={setShowModal} 
      />
    </>
  );
}

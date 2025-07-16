import { type AiTool } from "@shared/schema";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";

interface ToolModalProps {
  tool: AiTool;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ToolModal({ tool, open, onOpenChange }: ToolModalProps) {
  const handleVisitTool = () => {
    window.open(tool.url, '_blank', 'noopener,noreferrer');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <DialogTitle className="text-2xl">{tool.name}</DialogTitle>
            {tool.featured && (
              <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                <Star className="w-3 h-3 mr-1" fill="currentColor" />
                Featured
              </Badge>
            )}
          </div>
          <DialogDescription className="text-base">
            {tool.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Tool Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src={tool.imageUrl}
              alt={tool.name}
              className="w-full h-64 object-cover"
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
          </div>
          
          {/* Tags */}
          {tool.tags && tool.tags.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          {/* Action Button */}
          <div className="pt-4">
            <Button onClick={handleVisitTool} size="lg" className="w-full">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit {tool.name}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

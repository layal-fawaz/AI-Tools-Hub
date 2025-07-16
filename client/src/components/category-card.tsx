import { type Category } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { type AiTool } from "@shared/schema";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const { data: tools } = useQuery<AiTool[]>({
    queryKey: [`/api/categories/${category.id}/tools`],
  });

  const toolCount = tools?.length || 0;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          {/* خلفية البطاقة */}
          <div 
            className={`h-32 bg-gradient-to-br ${category.gradient} relative overflow-hidden flex items-center justify-center`}
          >
            {/* أيقونة القسم كبيرة وملونة */}
            <span className="text-5xl" style={{ color: '#fff', textShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>
              <i className={category.icon}></i>
            </span>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {category.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {category.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {toolCount} {toolCount === 1 ? 'tool' : 'tools'}
              </span>
              
              <Link href={`/category/${category.id}`}>
                <Button size="sm" className="group-hover:scale-105 transition-transform">
                  Explore
                  <ChevronRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

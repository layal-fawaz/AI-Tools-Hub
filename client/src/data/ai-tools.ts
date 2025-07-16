import { type AiTool } from "@shared/schema";

// This file contains type definitions and helper functions for AI tools data
// The actual data is fetched from the backend API

export interface ToolWithCategory extends AiTool {
  categoryName?: string;
}

export const getToolsByCategory = (tools: AiTool[], categoryId: number): AiTool[] => {
  return tools.filter(tool => tool.categoryId === categoryId);
};

export const searchTools = (tools: AiTool[], query: string): AiTool[] => {
  const lowerQuery = query.toLowerCase();
  return tools.filter(tool => 
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

export const getFeaturedTools = (tools: AiTool[]): AiTool[] => {
  return tools.filter(tool => tool.featured);
};

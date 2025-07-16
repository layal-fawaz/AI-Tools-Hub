import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatToolCount(count: number): string {
  if (count === 0) return "No tools";
  if (count === 1) return "1 tool";
  return `${count} tools`;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map(word => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function formatUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return url;
  }
}

export function generateMetaDescription(toolName: string, description: string): string {
  const truncatedDesc = truncateText(description, 120);
  return `${toolName} - ${truncatedDesc} Discover and explore this AI tool and many more in our curated collection.`;
}

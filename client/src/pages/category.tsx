import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { type Category, type AiTool } from "@shared/schema";
import { ToolCard } from "@/components/tool-card";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowLeft, Home } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Category() {
  const [, params] = useRoute("/category/:id");
  const categoryId = parseInt(params?.id || "0");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: category, isLoading: categoryLoading } = useQuery<Category>({
    queryKey: [`/api/categories/${categoryId}`],
    enabled: categoryId > 0,
  });

  const { data: allTools, isLoading: toolsLoading } = useQuery<AiTool[]>({
    queryKey: [`/api/categories/${categoryId}/tools`],
    enabled: categoryId > 0,
  });

  const { data: searchResults, isLoading: searchLoading } = useQuery<AiTool[]>({
    queryKey: ["/api/tools", { search: searchQuery }],
    enabled: searchQuery.length > 0,
  });

  const tools = searchQuery.length > 0 ? searchResults : allTools;
  const filteredTools = searchQuery.length > 0 && searchResults ? 
    searchResults.filter(tool => tool.categoryId === categoryId) : tools;

  const isLoading = categoryLoading || toolsLoading || (searchQuery.length > 0 && searchLoading);

  if (categoryLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-8 w-64 mb-4" />
          <Skeleton className="h-12 w-full mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-64 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Category not found.
            </p>
            <Link href="/">
              <Button>
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Header */}
      <header className="border-b border-white/20 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{category.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Category Header */}
          <div className="flex items-center gap-4 mb-6">
            <div 
              className="p-3 rounded-xl text-white"
              style={{ background: category.gradient ? `linear-gradient(to right, ${category.gradient.replace('from-', '').replace('to-', '').replace('-400', '').replace('-600', '')})` : category.color }}
            >
              <div className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {category.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {category.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Categories
              </Button>
            </Link>
            <div className="flex-1">
              <SearchBar onSearch={setSearchQuery} placeholder={`Search in ${category.name}...`} />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {searchQuery.length > 0 ? `Search Results in ${category.name}` : `${category.name} Tools`}
          </h2>
          {filteredTools && (
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {filteredTools.length} tools
            </span>
          )}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-64 w-full rounded-xl" />
            ))}
          </div>
        ) : filteredTools && filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              {searchQuery.length > 0 
                ? `No tools found for "${searchQuery}" in ${category.name}.`
                : `No tools available in ${category.name} yet.`
              }
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

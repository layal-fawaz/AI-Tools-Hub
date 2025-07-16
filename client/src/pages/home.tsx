import { useQuery } from "@tanstack/react-query";
import { type Category, type AiTool } from "@shared/schema";
import { SearchBar } from "@/components/search-bar";
import { CategoryCard } from "@/components/category-card";
import { ToolCard } from "@/components/tool-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Sparkles, TrendingUp } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: categories, isLoading: categoriesLoading } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: featuredTools, isLoading: featuredLoading } = useQuery<AiTool[]>({
    queryKey: ["/api/tools/featured"],
  });

  const { data: searchResults, isLoading: searchLoading } = useQuery<AiTool[]>({
    queryKey: ["/api/tools", { search: searchQuery }],
    enabled: searchQuery.length > 0,
  });

  const isLoading = categoriesLoading || (searchQuery.length > 0 && searchLoading);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Header */}
      <header className="border-b border-white/20 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Tools Hub
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Discover the best AI tools for every need
                </p>
              </div>
            </div>
          </div>
          
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {searchQuery.length > 0 ? (
          /* Search Results */
          <div>
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Search Results for "{searchQuery}"
              </h2>
              {searchResults && (
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  ({searchResults.length} results)
                </span>
              )}
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-64 w-full rounded-xl" />
                ))}
              </div>
            ) : searchResults && searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">
                  No tools found for "{searchQuery}". Try a different search term.
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Default Home Content */
          <>
            {/* Featured Tools Section */}
            {featuredTools && featuredTools.length > 0 && (
              <section className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="h-6 w-6 text-orange-500" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Featured Tools
                  </h2>
                </div>
                
                {featuredLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Skeleton key={i} className="h-64 w-full rounded-xl" />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredTools.map((tool) => (
                      <ToolCard key={tool.id} tool={tool} featured />
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* Categories Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Explore Categories
              </h2>
              
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <Skeleton key={i} className="h-48 w-full rounded-xl" />
                  ))}
                </div>
              ) : categories && categories.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categories.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400">
                    No categories available at the moment.
                  </p>
                </div>
              )}
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 AI Tools Hub. Discover the best AI tools for your needs.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

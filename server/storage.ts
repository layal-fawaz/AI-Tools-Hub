import { categories, aiTools, users, type User, type InsertUser, type Category, type InsertCategory, type AiTool, type InsertAiTool } from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Category methods
  getAllCategories(): Promise<Category[]>;
  getCategoryById(id: number): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  
  // AI Tool methods
  getAllTools(): Promise<AiTool[]>;
  getToolsByCategory(categoryId: number): Promise<AiTool[]>;
  getToolById(id: number): Promise<AiTool | undefined>;
  createTool(tool: InsertAiTool): Promise<AiTool>;
  searchTools(query: string): Promise<AiTool[]>;
  getFeaturedTools(): Promise<AiTool[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private categories: Map<number, Category>;
  private aiTools: Map<number, AiTool>;
  private currentUserId: number;
  private currentCategoryId: number;
  private currentToolId: number;

  constructor() {
    this.users = new Map();
    this.categories = new Map();
    this.aiTools = new Map();
    this.currentUserId = 1;
    this.currentCategoryId = 1;
    this.currentToolId = 1;
    
    // Initialize with sample data
    this.initializeData();
  }

  private async initializeData() {
    // Create categories
    const categoryData = [
      { name: "Conversational & Chatbots", description: "AI-powered chat interfaces and conversational tools", icon: "MessageCircle", color: "#3B82F6", gradient: "from-blue-400 to-blue-600" },
      { name: "Resume & Interviews", description: "Tools for creating resumes and preparing for interviews", icon: "FileText", color: "#10B981", gradient: "from-green-400 to-green-600" },
      { name: "Video Tools", description: "AI-powered video editing and creation tools", icon: "Video", color: "#8B5CF6", gradient: "from-purple-400 to-purple-600" },
      { name: "Audio Tools", description: "Audio production and editing AI tools", icon: "Music", color: "#F59E0B", gradient: "from-amber-400 to-amber-600" },
      { name: "Technical Tools", description: "Programming and development AI assistants", icon: "Code", color: "#EF4444", gradient: "from-red-400 to-red-600" },
      { name: "Image Generation & Editing", description: "AI-powered image creation and editing tools", icon: "Image", color: "#EC4899", gradient: "from-pink-400 to-pink-600" },
      { name: "Marketing & Plans", description: "Marketing strategy and planning AI tools", icon: "TrendingUp", color: "#06B6D4", gradient: "from-cyan-400 to-cyan-600" },
      { name: "Automation Tools", description: "Workflow automation and productivity tools", icon: "Zap", color: "#84CC16", gradient: "from-lime-400 to-lime-600" },
      { name: "Research & Knowledge", description: "AI tools for research and knowledge management", icon: "BookOpen", color: "#6366F1", gradient: "from-indigo-400 to-indigo-600" },
      { name: "Business Management", description: "Business operations and management tools", icon: "Briefcase", color: "#F97316", gradient: "from-orange-400 to-orange-600" },
      { name: "Translation & Proofreading", description: "Language translation and text editing tools", icon: "Languages", color: "#14B8A6", gradient: "from-teal-400 to-teal-600" },
      { name: "Learning & Stories", description: "Educational content and storytelling tools", icon: "GraduationCap", color: "#A855F7", gradient: "from-violet-400 to-violet-600" },
      { name: "Visuals & Summaries", description: "Data visualization and diagram creation tools", icon: "BarChart3", color: "#22D3EE", gradient: "from-sky-400 to-sky-600" },
      { name: "AI Agents", description: "Smart AI agents and all-in-one companions for research, productivity, and automation", icon: "Bot", color: "#6366F1", gradient: "from-indigo-400 to-indigo-600" },
      { name: "Presentations", description: "AI-powered tools for creating and sharing presentations", icon: "Presentation", color: "#EAB308", gradient: "from-yellow-400 to-yellow-600" },
      { name: "Mix", description: "Miscellaneous AI tools and utilities", icon: "Sparkles", color: "#FB7185", gradient: "from-rose-400 to-rose-600" }
    ];

    for (const cat of categoryData) {
      await this.createCategory(cat);
    }

    // Create sample tools for each category
    const toolsData = [
      // Conversational & Chatbots
      { name: "ChatGPT", description: "Advanced AI chatbot for conversations and assistance", url: "https://chat.openai.com", imageUrl: "https://pixabay.com/get/ge15c9a922fe119abd674acd673154304c00c2208370489c2f1abadde55a47ad6d9f9600134b6b138eec566ba9e2e86a21f2af148f45ef5b2282fb5b11ba1e004_1280.jpg", categoryId: 1, tags: ["chat", "assistant", "openai"], featured: true },
      { name: "Claude", description: "Anthropic's AI assistant for helpful conversations", url: "https://claude.ai", imageUrl: "https://pixabay.com/get/ge77bd8a96afc64fc88207f183013b485786fa2156d83c03203a7a53f240fff1dbd1f0335fd58c5d777538978f499f2f0b8a4323496afe3ca28c20691536c34af_1280.jpg", categoryId: 1, tags: ["chat", "assistant", "anthropic"], featured: false },
      { name: "Bard", description: "Google's conversational AI service", url: "https://bard.google.com", imageUrl: "https://pixabay.com/get/g02cb2ba09d4e83d68114ce0231f61e3d77d55f6583000fe3a194edc5b98b2b994f0cb256db14524f15fa279ff0365cfde4530a9eb08e0444e1a25ab93bc6612d_1280.jpg", categoryId: 1, tags: ["chat", "google", "conversation"], featured: false },
      { name: "Botpress Chatbot", description: "Open-source conversational AI platform for building chatbots", url: "https://botpress.com/", imageUrl: "https://botpress.com/favicon.ico", categoryId: 1, tags: ["chatbot", "platform", "ai"], featured: false },
      { name: "Tidio Chatbot", description: "Live chat and chatbot solution for customer support and sales", url: "https://www.tidio.com/", imageUrl: "https://www.tidio.com/favicon.ico", categoryId: 1, tags: ["chatbot", "customer service", "live chat"], featured: false },
      { name: "ManyChat", description: "Chat marketing platform for Facebook Messenger, Instagram, and WhatsApp", url: "https://manychat.com/", imageUrl: "https://manychat.com/favicon.ico", categoryId: 1, tags: ["chatbot", "automation", "facebook", "instagram"], featured: false },
      { name: "Landbot", description: "No-code chatbot builder for conversational websites and messaging", url: "https://landbot.io/", imageUrl: "https://landbot.io/favicon.ico", categoryId: 1, tags: ["chatbot", "website", "interactive"], featured: false },

      // Resume & Interviews
      { name: "Resume.io", description: "AI-powered resume builder with templates", url: "https://resume.io", imageUrl: "https://pixabay.com/get/gb8de033ab8218e204f1a856091dd73bae03e3b41a86c48e4be122f12edbf11b4626bbabe9b9d48f630f9d804ebb55244c4c00fe63e7f5dda358386311f62c8b0_1280.jpg", categoryId: 2, tags: ["resume", "cv", "templates"], featured: true },
      { name: "InterviewBuddy", description: "AI interview practice and feedback tool", url: "https://interviewbuddy.com", imageUrl: "https://pixabay.com/get/g31e21a3200636389771539f43648024ee3e0d3011abf6aae838adf4c7f600dc053a54be800f6d850162d0a2c05bc186472cc65c3a4f21294f7e7e4ba114b358e_1280.jpg", categoryId: 2, tags: ["interview", "practice", "feedback"], featured: false },
      { name: "Zety", description: "Professional resume and cover letter builder", url: "https://zety.com", imageUrl: "https://pixabay.com/get/g91f5d64a8754a15a4c54ff50330ef11ddfdcc4edc4b3582d1693efcb20b66450ed8b1b6e6e9896407f9fd571054625b1095904261f30ea1e08b840fef3a4291a_1280.jpg", categoryId: 2, tags: ["resume", "cover letter", "professional"], featured: false },

      // Video Tools
      { name: "RunwayML", description: "AI video editing and generation platform", url: "https://runwayml.com", imageUrl: "https://pixabay.com/get/g537d685e54f181be571e2730341b82e146bfc63e44a4819aebcba1a70c49ea1a05f6c7408aeaae1f1b42f3a69d27a4aef8920b7814ca82ad75577c95ffc39404_1280.jpg", categoryId: 3, tags: ["video", "editing", "generation"], featured: true },
      { name: "Pictory", description: "AI-powered video creation from text", url: "https://pictory.ai", imageUrl: "https://pixabay.com/get/g2cc7a0385ee6f04103bd3164667c8886e896c4ef13b76438690585dfe8ba48cb9bfac8196e523d065c3cc37cd0d4469682da6cfb8407c7ef0318b351b554df72_1280.jpg", categoryId: 3, tags: ["video", "text-to-video", "creation"], featured: false },
      { name: "Synthesia", description: "AI video generation with avatars", url: "https://synthesia.io", imageUrl: "https://pixabay.com/get/g756185b730306d4691cd5ceb8941d8799b06c8096255592f2a4e38554fd06ea3956e6e469ecb86df77b0f0548a439dd6b4c021963ae0e1979b9d2294eabd6e16_1280.jpg", categoryId: 3, tags: ["video", "avatars", "synthesis"], featured: false },
      { name: "InVideo", description: "Online video editor and AI-powered video creation platform", url: "https://invideo.io/", imageUrl: "https://invideo.io/favicon.ico", categoryId: 3, tags: ["video", "editor", "ai"], featured: false },
      { name: "FlexClip", description: "Easy-to-use video maker and editor for everyone", url: "https://www.flexclip.com/", imageUrl: "https://www.flexclip.com/favicon.ico", categoryId: 3, tags: ["video", "editor", "maker"], featured: false },
      { name: "Lumen5", description: "AI-powered video creation from text and blog posts", url: "https://lumen5.com/", imageUrl: "https://lumen5.com/favicon.ico", categoryId: 3, tags: ["video", "ai", "content"], featured: false },
      { name: "Kapwing", description: "Collaborative online video editor and content creation platform", url: "https://www.kapwing.com/", imageUrl: "https://www.kapwing.com/favicon.ico", categoryId: 3, tags: ["video", "editor", "collaboration"], featured: false },
      { name: "Kling AI", description: "AI video generation by Kling", url: "https://kling.ai", imageUrl: "https://kling.ai/favicon.ico", categoryId: 3, tags: ["video", "ai", "generation"], featured: false },
      { name: "Vmake AI", description: "Talking head video solution", url: "https://vmake.ai", imageUrl: "https://vmake.ai/favicon.ico", categoryId: 3, tags: ["video", "ai", "talking head"], featured: false },
      { name: "Canva Video Editor", description: "Online video editor by Canva", url: "https://www.canva.com/video-editor/", imageUrl: "https://static.canva.com/static/images/favicon.ico", categoryId: 3, tags: ["video", "editor", "canva"], featured: false },
      { name: "Imagine Explainers", description: "Create explainer videos with AI", url: "https://imagineexplainers.com", imageUrl: "https://imagineexplainers.com/favicon.ico", categoryId: 3, tags: ["video", "ai", "explainer"], featured: false },
      { name: "Flow", description: "AI video workflow platform", url: "https://flow.video", imageUrl: "https://flow.video/favicon.ico", categoryId: 3, tags: ["video", "ai", "workflow"], featured: false },

      // Audio Tools
      { name: "Murf", description: "AI voice generator for voiceovers", url: "https://murf.ai", imageUrl: "https://pixabay.com/get/g37afea262389f41b71ca9816d585dd8284271908eb9054fdf932d87cbb12f5a4b366d86f91be829f0d077b33b71b26db7c9797452ab136f189f1adab66c6b1f6_1280.jpg", categoryId: 4, tags: ["voice", "generation", "voiceover"], featured: true },
      { name: "Descript", description: "Audio and video editing with AI transcription", url: "https://descript.com", imageUrl: "https://pixabay.com/get/gf21a920d8fd7a1658b16ff703311448e541162d842be6eae7f84304708294805c1453ef9e1fb8a84bc8f873d02ae615f9d73c35eccc2fedfd8ca4002a11cbace_1280.jpg", categoryId: 4, tags: ["audio", "transcription", "editing"], featured: false },
      { name: "Cleanvoice", description: "AI audio cleaning and enhancement", url: "https://cleanvoice.ai", imageUrl: "https://pixabay.com/get/g1def98a34026195bcdd9a274aa4f03e96e2ce01258011701207a97f8a5334dad12f5c6680be2856d62471eb74fd2d403d2e679665e930e5c4a03a5c953fafd98_1280.jpg", categoryId: 4, tags: ["audio", "cleaning", "enhancement"], featured: false },
      { name: "Vocal Remover", description: "Remove vocals and clean audio", url: "https://vocalremover.org/", imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop", categoryId: 4, tags: ["audio", "remover", "clean"], featured: false },
      { name: "Auphonic", description: "Audio recording and cleaning", url: "https://auphonic.com/", imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop", categoryId: 4, tags: ["audio", "record", "clean"], featured: false },
      { name: "TTSMaker", description: "Free text to speech online", url: "https://ttsmaker.com/", imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop", categoryId: 4, tags: ["audio", "tts", "speech"], featured: false },
      { name: "ElevenLabs", description: "AI voice generator and TTS", url: "https://elevenlabs.io/", imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop", categoryId: 4, tags: ["audio", "ai", "voice", "tts"], featured: false },
      { name: "character.ai", description: "Personalized AI voices", url: "https://character.ai/", imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop", categoryId: 4, tags: ["audio", "ai", "voice"], featured: false },
      { name: "Hume AI", description: "AI-powered voice and emotion", url: "https://hume.ai/", imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop", categoryId: 4, tags: ["audio", "ai", "emotion"], featured: false },
      { name: "Generate Media (Google AI Studio)", description: "AI audio and media generation", url: "https://aistudio.google.com/", imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop", categoryId: 4, tags: ["audio", "ai", "google"], featured: false },

      // Technical Tools
      { name: "GitHub Copilot", description: "AI pair programmer for code suggestions", url: "https://github.com/features/copilot", imageUrl: "https://pixabay.com/get/g224503abcb7220ec1f2beb506622f294107c4cc5d8ad98b59258bf3449dbcc5650cee0d7ec5074cfc71f57a0c9eb22ac7be1e4d91d30e735bc80755349334eb3_1280.png", categoryId: 5, tags: ["programming", "code", "assistant"], featured: true },
      { name: "Cursor", description: "AI-first code editor", url: "https://cursor.sh", imageUrl: "https://pixabay.com/get/g73beace3086470d02ed55f8b05b0866d91bd4f35f97aeb070c23fff02700085218cc7e43ffe44faf151f1c8629b82a6f3ad0529195cffb4ce43ffa23bf963935_1280.jpg", categoryId: 5, tags: ["code editor", "ai", "development"], featured: false },
      { name: "Tabnine", description: "AI code completion tool", url: "https://tabnine.com", imageUrl: "https://pixabay.com/get/ga34841bc89a8ac97f4c26776d7b0c2959b6765ef37f66865bf00587a379fa54b76d66241a0910c3cc1ab9fd7f653158aecc7e85f45e28317af7ca0a16ad99b06_1280.jpg", categoryId: 5, tags: ["code completion", "ai", "productivity"], featured: false },

      // Image Generation & Editing
      { name: "Midjourney", description: "AI image generation from text prompts", url: "https://midjourney.com", imageUrl: "https://pixabay.com/get/g05cb167ed0f05c43a81a0b80c51b1840a4eebd802f6e200a912b069f75cc9099a37f8fbac70b0cb4d08eac97ad870b2ea399aaec411f9961500ee86184babb32_1280.jpg", categoryId: 6, tags: ["image generation", "art", "creativity"], featured: true },
      { name: "DALL-E", description: "OpenAI's image generation model", url: "https://openai.com/dall-e-3", imageUrl: "https://pixabay.com/get/g6eecdc4c7a1fc40d7b222912f8a0682dd6efd5a13dea4af2ebe67ddae6e529a0ae188b41313e37cdf44cf6e50b1a5072d21e36b6bb6eefe0142374daa6e800e7_1280.jpg", categoryId: 6, tags: ["image generation", "openai", "art"], featured: false },
      { name: "Canva AI", description: "AI-powered design and image editing", url: "https://canva.com", imageUrl: "https://pixabay.com/get/g77c07c1ac2e7c93d6893c913b8a44cf224d9ea9b30265ba2838137e5b4b3008c645e06ce2514afe80b6f10a1db80b0155de4c17a360c101a4a54f008997b898b_1280.jpg", categoryId: 6, tags: ["design", "editing", "templates"], featured: false },

      // Visuals & Summaries
      { name: "Mermaid Live Editor", description: "Create diagrams and visualizations using Mermaid.js online", url: "https://mermaid-js.github.io/mermaid-live-editor/", imageUrl: "https://mermaid.js.org/img/logo.svg", categoryId: 13, tags: ["visualization", "diagram", "mermaid"], featured: false },
      { name: "Excalidraw", description: "Virtual whiteboard for sketching hand-drawn like diagrams", url: "https://excalidraw.com/", imageUrl: "https://excalidraw.com/og-image.png", categoryId: 13, tags: ["visualization", "diagram", "whiteboard"], featured: false },
      { name: "draw.io", description: "Free online diagram drawing application", url: "https://app.diagrams.net/", imageUrl: "https://app.diagrams.net/img/logo.svg", categoryId: 13, tags: ["visualization", "diagram", "draw"], featured: false },
      { name: "ChartBlocks", description: "Online chart builder for creating visual data representations", url: "https://www.chartblocks.com/en/", imageUrl: "https://www.chartblocks.com/assets/images/logo.svg", categoryId: 13, tags: ["visualization", "chart", "data"], featured: false },
      { name: "MindMeister", description: "Collaborative mind mapping tool for brainstorming and organizing ideas", url: "https://www.mindmeister.com/", imageUrl: "https://www.mindmeister.com/assets/images/logo.svg", categoryId: 13, tags: ["visualization", "mindmap", "brainstorm"], featured: false },

      // Business Management
      { name: "Notion", description: "All-in-one workspace for notes, tasks, wikis, and databases", url: "https://www.notion.so/", imageUrl: "https://www.notion.so/images/meta/default.png", categoryId: 10, tags: ["business", "management", "workspace"], featured: false },
      { name: "ClickUp", description: "Productivity platform for project management and collaboration", url: "https://clickup.com/", imageUrl: "https://clickup.com/favicon.ico", categoryId: 10, tags: ["business", "project", "management"], featured: false },
      { name: "Monday.com", description: "Work OS for managing teams, projects, and workflows", url: "https://monday.com/", imageUrl: "https://monday.com/favicon.ico", categoryId: 10, tags: ["business", "workflow", "management"], featured: false },
      { name: "Asana", description: "Project and task management platform for teams", url: "https://asana.com/", imageUrl: "https://asana.com/favicon.ico", categoryId: 10, tags: ["business", "task", "management"], featured: false },
      { name: "Odoo", description: "All-in-one business management software with CRM, ERP, and more", url: "https://www.odoo.com/", imageUrl: "https://www.odoo.com/favicon.ico", categoryId: 10, tags: ["business", "management", "erp", "crm"], featured: false },

      // Presentations
      { name: "Tome", description: "AI-powered presentation maker", url: "https://tome.app/", imageUrl: "https://tome.app/favicon.ico", categoryId: 16, tags: ["presentation", "ai", "slides"], featured: false },
      { name: "SlideShare", description: "Share and discover presentations", url: "https://slideshare.net/", imageUrl: "https://slideshare.net/favicon.ico", categoryId: 16, tags: ["presentation", "slides", "share"], featured: false },
      { name: "Slidesgo", description: "Free Google Slides and PowerPoint templates", url: "https://slidesgo.com/", imageUrl: "https://slidesgo.com/favicon.ico", categoryId: 16, tags: ["presentation", "templates", "slides"], featured: false },
      { name: "Gamma", description: "Create beautiful presentations easily", url: "https://gamma.app/", imageUrl: "https://gamma.app/favicon.ico", categoryId: 16, tags: ["presentation", "ai", "slides"], featured: false },
      { name: "Decktopus", description: "AI presentation assistant", url: "https://decktopus.com/", imageUrl: "https://decktopus.com/favicon.ico", categoryId: 16, tags: ["presentation", "ai", "assistant"], featured: false },

      // AI Agents
      { name: "Manus", description: "AI agent for research, writing, and productivity", url: "https://manus.ai/", imageUrl: "https://manus.ai/favicon.ico", categoryId: 15, tags: ["ai agent", "research", "writing"], featured: false },
      { name: "Genspark", description: "All-in-one AI companion for productivity and knowledge", url: "https://genspark.ai/", imageUrl: "https://genspark.ai/favicon.ico", categoryId: 15, tags: ["ai agent", "companion", "productivity"], featured: false },
      { name: "flowith", description: "AI creation workspace, with knowledge and automation", url: "https://flowith.com/", imageUrl: "https://flowith.com/favicon.ico", categoryId: 15, tags: ["ai agent", "workspace", "automation"], featured: false },
      { name: "Convergence.ai", description: "AI agent platform for advanced automation and integration", url: "https://convergence.ai/", imageUrl: "https://convergence.ai/favicon.ico", categoryId: 15, tags: ["ai agent", "automation", "integration"], featured: false },

      // Research & Knowledge
      { name: "Schobot", description: "AI assistant for research writing and academic work", url: "https://schobot.com/", imageUrl: "https://schobot.com/favicon.ico", categoryId: 9, tags: ["research", "writing", "ai"], featured: false },
      { name: "Connected Papers", description: "Visual tool to explore academic papers and their connections", url: "https://www.connectedpapers.com/", imageUrl: "https://www.connectedpapers.com/favicon.ico", categoryId: 9, tags: ["research", "papers", "visualization"], featured: false },
      { name: "Perplexity", description: "AI-powered research and market insights", url: "https://www.perplexity.ai/", imageUrl: "https://www.perplexity.ai/favicon.ico", categoryId: 9, tags: ["research", "market", "ai"], featured: false },
      { name: "Google Scholar", description: "Google's academic search engine for scholarly articles and research papers", url: "https://scholar.google.com/", imageUrl: "https://scholar.google.com/favicon.ico", categoryId: 9, tags: ["research", "scholar", "academic", "google"], featured: false },

      // Translation & Proofreading
      { name: "Reverso", description: "Free translation and dictionary", url: "https://www.reverso.net/", imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop", categoryId: 11, tags: ["translation", "dictionary", "free"], featured: false },
      { name: "DeepL", description: "Accurate AI-powered translator", url: "https://www.deepl.com/", imageUrl: "https://www.deepl.com/favicon.ico", categoryId: 11, tags: ["translation", "ai", "deepl"], featured: false },
      { name: "Lara Translate", description: "AI translation tool", url: "https://laratranslate.com/", imageUrl: "https://laratranslate.com/favicon.ico", categoryId: 11, tags: ["translation", "ai", "lara"], featured: false },

      // Marketing & Plans
      { name: "TopView", description: "AI-powered video creation platform", url: "https://topview.ai/", imageUrl: "https://topview.ai/favicon.ico", categoryId: 7, tags: ["marketing", "video", "ai"], featured: false },
      { name: "Higgsfield", description: "Explore AI marketing with Higgsfield", url: "https://higgsfield.ai/", imageUrl: "https://higgsfield.ai/favicon.ico", categoryId: 7, tags: ["marketing", "explore", "ai"], featured: false },
      { name: "FLORA", description: "AI marketing and automation tool", url: "https://flora.com/", imageUrl: "https://flora.com/favicon.ico", categoryId: 7, tags: ["marketing", "automation", "ai"], featured: false },
      { name: "Dream Machine", description: "Boards and marketing automation", url: "https://dreammachine.ai/", imageUrl: "https://dreammachine.ai/favicon.ico", categoryId: 7, tags: ["marketing", "boards", "automation"], featured: false },
      { name: "Hedra", description: "AI platform for image, video, and audio marketing", url: "https://hedra.com/", imageUrl: "https://hedra.com/favicon.ico", categoryId: 7, tags: ["marketing", "media", "ai"], featured: false },
      { name: "Conversion Blitz", description: "AI lead generation and sales automation", url: "https://conversionblitz.com/", imageUrl: "https://conversionblitz.com/favicon.ico", categoryId: 7, tags: ["marketing", "lead", "automation"], featured: false },
      { name: "Nordy", description: "AI marketing assistant", url: "https://nordy.com/", imageUrl: "https://nordy.com/favicon.ico", categoryId: 7, tags: ["marketing", "assistant", "ai"], featured: false },
      { name: "Hunter", description: "Find emails and send campaigns", url: "https://hunter.io/", imageUrl: "https://hunter.io/favicon.ico", categoryId: 7, tags: ["marketing", "email", "hunter"], featured: false },
      { name: "Benchmark Email", description: "Email marketing platform", url: "https://www.benchmarkemail.com/", imageUrl: "https://www.benchmarkemail.com/favicon.ico", categoryId: 7, tags: ["marketing", "email", "benchmark"], featured: false },
      { name: "BillionMail", description: "Open-source email marketing platform", url: "https://github.com/aaPanel/BillionMail", imageUrl: "https://github.com/favicon.ico", categoryId: 7, tags: ["marketing", "email", "opensource"], featured: false },
      { name: "Keak", description: "A/B testing automation for marketing", url: "https://keak.com/", imageUrl: "https://keak.com/favicon.ico", categoryId: 7, tags: ["marketing", "abtest", "automation"], featured: false },
      { name: "Head", description: "AI marketing analytics tool", url: "https://head.com/", imageUrl: "https://head.com/favicon.ico", categoryId: 7, tags: ["marketing", "analytics", "ai"], featured: false },

      // Automation Tools
      { name: "Zapier", description: "Automate workflows between apps", url: "https://zapier.com", imageUrl: "https://zapier.com/favicon.ico", categoryId: 8, tags: ["automation", "workflow", "integration"], featured: false },
      { name: "Make", description: "Visual workflow automation platform", url: "https://make.com", imageUrl: "https://make.com/favicon.ico", categoryId: 8, tags: ["automation", "visual", "workflow"], featured: false },
    ];

    for (const tool of toolsData) {
      await this.createTool(tool);
    }
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Category methods
  async getAllCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategoryById(id: number): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = this.currentCategoryId++;
    const category: Category = { ...insertCategory, id };
    this.categories.set(id, category);
    return category;
  }

  // AI Tool methods
  async getAllTools(): Promise<AiTool[]> {
    return Array.from(this.aiTools.values());
  }

  async getToolsByCategory(categoryId: number): Promise<AiTool[]> {
    return Array.from(this.aiTools.values()).filter(
      (tool) => tool.categoryId === categoryId
    );
  }

  async getToolById(id: number): Promise<AiTool | undefined> {
    return this.aiTools.get(id);
  }

  async createTool(insertTool: InsertAiTool): Promise<AiTool> {
    const id = this.currentToolId++;
    const tool: AiTool = { 
      ...insertTool, 
      id,
      tags: insertTool.tags || null,
      featured: insertTool.featured || null
    };
    this.aiTools.set(id, tool);
    return tool;
  }

  async searchTools(query: string): Promise<AiTool[]> {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.aiTools.values()).filter(
      (tool) =>
        tool.name.toLowerCase().includes(lowerQuery) ||
        tool.description.toLowerCase().includes(lowerQuery) ||
        tool.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  }

  async getFeaturedTools(): Promise<AiTool[]> {
    return Array.from(this.aiTools.values()).filter(tool => tool.featured);
  }
}

export const storage = new MemStorage();

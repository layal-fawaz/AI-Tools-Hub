// AI Tools Hub JavaScript

// AI Tools Data
const aiToolsData = {
    categories: [
        {
            id: 1,
            name: "Conversational & AI Agents",
            description: "AI-powered chat interfaces, conversational tools, and intelligent agents",
            icon: "fas fa-comments",
            gradient: "gradient-blue",
            subcategories: [
                {
                    id: 'chatbots',
                    name: 'Chatbots & Conversational AI',
                    icon: 'fas fa-comments',
                    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'
                },
                {
                    id: 'ai-agents',
                    name: 'AI Agents & Assistants',
                    icon: 'fas fa-robot',
                    imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop'
                }
            ]
        },
        {
            id: 2,
            name: "Resume & Interviews",
            description: "Tools for creating resumes and preparing for interviews",
            icon: "fas fa-file-alt",
            gradient: "gradient-green"
        },
        {
            id: 3,
            name: "Video Tools",
            description: "AI-powered video editing and creation tools",
            icon: "fas fa-video",
            gradient: "gradient-purple"
        },
        {
            id: 4,
            name: "Audio Tools",
            description: "Audio production and editing AI tools",
            icon: "fas fa-music",
            gradient: "gradient-amber"
        },
        {
            id: 5,
            name: "Technical Tools",
            description: "Programming and development AI assistants",
            icon: "fas fa-code",
            gradient: "gradient-red",
            subcategories: [
                {
                    id: 'programming',
                    name: 'Programming',
                    icon: 'fas fa-code',
                    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80'
                },
                {
                    id: 'mobile-dev',
                    name: 'Mobile Development',
                    icon: 'fas fa-mobile-alt',
                    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop'
                },
                {
                    id: 'database',
                    name: 'Database',
                    icon: 'fas fa-database',
                    imageUrl: 'https://supabase.com/docs/img/supabase-logo.svg'
                },
                {
                    id: 'front-end',
                    name: 'Front-end',
                    icon: 'fas fa-desktop',
                    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80'
                },
                {
                    id: 'ux-ui',
                    name: 'UX/UI',
                    icon: 'fas fa-pencil-ruler',
                    imageUrl: 'https://www.visily.ai/_next/static/media/logo.2e6e2e2e.svg'
                },
                {
                    id: 'wordpress',
                    name: 'WordPress',
                    icon: 'fab fa-wordpress',
                    imageUrl: 'https://10web.io/wp-content/uploads/2021/10/10Web-logo.svg'
                },
                {
                    id: 'testing-qa',
                    name: 'Testing & QA',
                    icon: 'fas fa-check-circle',
                    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop'
                },
                {
                    id: 'game-dev',
                    name: 'Game Development',
                    icon: 'fas fa-gamepad',
                    imageUrl: 'https://rosebud.ai/favicon.ico'
                },
                {
                    id: 'cyber-security',
                    name: 'Cyber Security Tools',
                    icon: 'fas fa-shield-alt',
                    imageUrl: 'https://img.icons8.com/ios-filled/100/000000/lock-2.png'
                },
                {
                    id: 'automation',
                    name: 'Automation',
                    icon: 'fas fa-robot',
                    imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop'
                },
                {
                    id: 'data-science',
                    name: 'Data Science & Business Analysis',
                    icon: 'fas fa-chart-bar',
                    imageUrl: 'https://images.unsplash.com/photo-1508385082359-f48b1c1b1f57?w=400&h=300&fit=crop'
                }
            ]
        },
        {
            id: 6,
            name: "Image Generation & Editing",
            description: "AI-powered image creation and editing tools",
            icon: "fas fa-image",
            gradient: "gradient-pink"
        },
        {
            id: 7,
            name: "Marketing & Plans",
            description: "Marketing strategy and planning AI tools",
            icon: "fas fa-chart-line",
            gradient: "gradient-cyan",
            subcategories: [
                {
                    id: 'content-writing',
                    name: 'Content Writing',
                    icon: 'fas fa-pen-fancy',
                    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop'
                }
            ]
        },

        {
            id: 9,
            name: "Research & Knowledge",
            description: "AI tools for research and knowledge management",
            icon: "fas fa-book-open",
            gradient: "gradient-indigo"
        },
        {
            id: 10,
            name: "Business Management",
            description: "Business operations and management tools",
            icon: "fas fa-briefcase",
            gradient: "gradient-orange"
        },
        {
            id: 11,
            name: "Translation & Proofreading",
            description: "Language translation and text editing tools",
            icon: "fas fa-language",
            gradient: "gradient-teal"
        },
        {
            id: 12,
            name: "Learning & Stories",
            description: "Educational content and storytelling tools",
            icon: "fas fa-graduation-cap",
            gradient: "gradient-violet"
        },
        {
            id: 13,
            name: "Visuals & Summaries",
            description: "Data visualization and diagram creation tools",
            icon: "fas fa-chart-bar",
            gradient: "gradient-sky"
        },
        {
            id: 16,
            name: "Presentations",
            description: "AI-powered tools for creating and sharing presentations.",
            icon: "fas fa-chalkboard-teacher",
            gradient: "gradient-amber"
        },
        {
            id: 17,
            name: "Interior Design",
            description: "AI-powered interior design and home decoration tools",
            icon: "fas fa-home",
            gradient: "gradient-emerald"
        },
        {
            id: 18,
            name: "AI Detection",
            description: "Tools for detecting and analyzing AI-generated content",
            icon: "fas fa-search",
            gradient: "gradient-rose"
        },
        {
            id: 19,
            name: "Prompt Generation",
            description: "AI tools for creating effective prompts and commands for AI models",
            icon: "fas fa-magic",
            gradient: "gradient-lime"
        }
    ],
    
    tools: [
        // Conversational & Chatbots
        {
            id: 1,
            name: "ChatGPT",
            description: "Advanced AI chatbot for conversations and assistance",
            url: "https://chat.openai.com",
            imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
            categoryId: 1,
            subcategoryId: "chatbots",
            tags: ["chat", "assistant", "openai"]
        },
        {
            id: 2,
            name: "Claude",
            description: "Anthropic's AI assistant for helpful conversations",
            url: "https://claude.ai",
            imageUrl: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&h=300&fit=crop",
            categoryId: 1,
            subcategoryId: "chatbots",
            tags: ["chat", "assistant", "anthropic"]
        },
        {
            id: 3,
            name: "Gemini",
            description: "Google's conversational AI service",
            url: "https://gemini.google.com",
            imageUrl: "https://images.unsplash.com/photo-1674464194458-12f3e0ab0b23?w=400&h=300&fit=crop",
            categoryId: 1,
            subcategoryId: "chatbots",
            tags: ["chat", "google", "conversation"],
            featured: false
        },
        {
            id: 3000,
            name: "Botpress Chatbot",
            description: "Open-source conversational AI platform for building chatbots.",
            url: "https://botpress.com/",
            imageUrl: "https://botpress.com/favicon.ico",
            categoryId: 1,
            subcategoryId: "chatbots",
            tags: ["chatbot", "platform", "ai"],
            featured: false
        },
        {
            id: 3002,
            name: "Tidio Chatbot",
            description: "Live chat and chatbot solution for customer support and sales.",
            url: "https://www.tidio.com/",
            imageUrl: "https://www.tidio.com/favicon.ico",
            categoryId: 1,
            subcategoryId: "chatbots",
            tags: ["chatbot", "customer service", "live chat"],
            featured: false
        },
        {
            id: 3003,
            name: "ManyChat",
            description: "Chat marketing platform for Facebook Messenger, Instagram, and WhatsApp.",
            url: "https://manychat.com/",
            imageUrl: "https://manychat.com/favicon.ico",
            categoryId: 1,
            subcategoryId: "chatbots",
            tags: ["chatbot", "automation", "facebook", "instagram"],
            featured: false
        },
        {
            id: 3004,
            name: "Landbot",
            description: "No-code chatbot builder for conversational websites and messaging.",
            url: "https://landbot.io/",
            imageUrl: "https://landbot.io/favicon.ico",
            categoryId: 1,
            subcategoryId: "chatbots",
            tags: ["chatbot", "website", "interactive"],
            featured: false
        },
        {
            id: 3005,
            name: "Grok",
            description: "AI chatbot from X/Twitter with real-time information access",
            url: "https://grok.x.ai/",
            imageUrl: "https://landbot.io/favicon.ico",
            categoryId: 1,
            subcategoryId: "chatbots",
            tags: ["chat", "ai", "twitter", "x"],
            featured: false
        },
        {
            id: 3006,
            name: "DeepSeek",
            description: "Advanced AI assistant with powerful reasoning capabilities",
            url: "https://deepseek.com/",
            imageUrl: "https://logo.clearbit.com/deepseek.com",
            categoryId: 1,
            subcategoryId: "chatbots",
            tags: ["chat", "ai", "assistant", "reasoning"],
            featured: false
        },
        {
            id: 3007,
            name: "Felo",
            description: "AI-powered conversational chatbot platform",
            url: "https://felo.ai/",
            imageUrl: "https://images.unsplash.com/photo-1674464194458-12f3e0ab0b23?w=400&h=300&fit=crop",
            categoryId: 1,
            subcategoryId: "chatbots",
            tags: ["chat", "ai", "conversational"],
            featured: false
        },
        {
            id: 3008,
            name: "GPTGO",
            description: "Combines Google search results with ChatGPT answers in one interface",
            url: "https://gptgo.ai/",
            imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
            categoryId: 1,
            subcategoryId: "chatbots",
            tags: ["chat", "search", "google", "gpt"],
            featured: false
        },
        {
            id: 3009,
            name: "Take Me Out of Office",
            description: "AI-powered out-of-office message generator and email automation tool",
            url: "https://www.takemeoutofoffice.com/",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            categoryId: 1,
            subcategoryId: "chatbots",
            tags: ["chat", "email", "automation", "out-of-office"],
            featured: false
        },

        // Resume & Interviews
        {
            id: 4,
            name: "Resume.io",
            description: "AI-powered resume builder with templates",
            url: "https://resume.io",
            imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
            categoryId: 2,
            tags: ["resume", "cv", "templates"]
        },
        {
            id: 5,
            name: "InterviewBuddy",
            description: "AI interview practice and feedback tool",
            url: "https://interviewbuddy.com",
            imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
            categoryId: 2,
            tags: ["interview", "practice", "feedback"],
            featured: false
        },
        {
            id: 6,
            name: "Zety",
            description: "Professional resume and cover letter builder",
            url: "https://zety.com",
            imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
            categoryId: 2,
            tags: ["resume", "cover letter", "professional"],
            featured: false
        },
        {
            id: 7,
            name: "Trupeer",
            description: "AI platform for creating product videos and documentation for training and onboarding",
            url: "https://www.trupeer.ai/",
            imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
            categoryId: 2,
            tags: ["training", "video", "documentation", "onboarding", "ai"],
            featured: false
        },
        {
            id: 8,
            name: "read.ai",
            description: "Meeting Summaries, Transcripts, AI Notetaker & Enterprise Search for comprehensive meeting management",
            url: "https://read.ai/",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            categoryId: 2,
            tags: ["meeting", "transcripts", "ai", "notes", "search"],
            featured: false
        },
        {
            id: 9,
            name: "Tactiq.io",
            description: "AI Meeting Transcripts for Google Meet, Zoom & Teams with real-time transcription",
            url: "https://tactiq.io/",
            imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
            categoryId: 2,
            tags: ["meeting", "transcripts", "zoom", "teams", "google-meet"],
            featured: false
        },
        {
            id: 10,
            name: "Otter.ai",
            description: "AI Meeting Note Taker & Real-time AI Transcription for seamless meeting documentation",
            url: "https://otter.ai/",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            categoryId: 2,
            tags: ["meeting", "notes", "transcription", "ai", "real-time"],
            featured: false
        },
        {
            id: 11,
            name: "Fathom AI Notetaker",
            description: "Never Take Notes Again - AI-powered automatic meeting note taking and summarization",
            url: "https://fathom.ai/",
            imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
            categoryId: 2,
            tags: ["meeting", "notes", "ai", "automatic", "summarization"],
            featured: false
        },
        {
            id: 12,
            name: "timeOS",
            description: "AI-powered meeting management and productivity platform for teams",
            url: "https://timeos.ai/",
            imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
            categoryId: 2,
            tags: ["meeting", "management", "productivity", "ai", "teams"],
            featured: false
        },
        {
            id: 13,
            name: "Enhancv Onboarding",
            description: "AI-powered onboarding and training platform for new employees",
            url: "https://enhancv.com/",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            categoryId: 2,
            tags: ["onboarding", "training", "ai", "employees"],
            featured: false
        },
        {
            id: 14,
            name: "Resume Screening AI",
            description: "Screen Resumes in bulk with AI ATS. Save time and improve hiring efficiency",
            url: "https://resumescreening.ai/",
            imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
            categoryId: 2,
            tags: ["resume", "screening", "ai", "ats", "hiring"],
            featured: false
        },
        {
            id: 15,
            name: "TrueInterviewAI",
            description: "Top Interview Questions & Job Prep with AI-powered interview preparation",
            url: "https://www.trueinterviewai.com/",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            categoryId: 2,
            tags: ["interview", "preparation", "ai", "questions", "job"],
            featured: false
        },
        {
            id: 16,
            name: "Jobscan",
            description: "ATS Resume Checker and Job Search Tools for optimizing resumes and job applications",
            url: "https://jobscan.co/",
            imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
            categoryId: 2,
            tags: ["resume", "ats", "job-search", "optimization", "tools"],
            featured: false
        },

        // Interior Design (categoryId: 17)
        {
            id: 1700,
            name: "Maket",
            description: "AI-powered floorplan generator for interior design",
            url: "https://maket.ai/",
            imageUrl: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=400&h=300&fit=crop",
            categoryId: 17,
            tags: ["interior", "design", "floorplan", "ai", "home"],
            featured: false
        },
        {
            id: 1701,
            name: "RoomsGPT",
            description: "AI interior designer for rooms, homes and gardens",
            url: "https://www.roomsgpt.io/",
            imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
            categoryId: 17,
            tags: ["interior", "design", "rooms", "garden", "ai", "virtual"],
            featured: false
        },

        // AI Detection (categoryId: 18)
        {
            id: 1800,
            name: "GPTZero",
            description: "AI text detection and analysis tool",
            url: "https://gptzero.me/",
            imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
            categoryId: 18,
            tags: ["ai", "detection", "text", "analysis", "gpt"],
            featured: false
        },
        {
            id: 1801,
            name: "Humanize AI",
            description: "AI text humanizer to make AI-generated content more natural and human-like",
            url: "https://humanizeai.com/",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            categoryId: 18,
            tags: ["ai", "humanize", "text", "natural", "content"],
            featured: false
        },
        {
            id: 1802,
            name: "Undetectable AI",
            description: "AI Detector & AI Checker for ChatGPT & More - Advanced AI content detection",
            url: "https://undetectable.ai/",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            categoryId: 18,
            tags: ["ai", "detection", "checker", "chatgpt", "content"],
            featured: false
        },

        // Prompt Generation (categoryId: 19)
        {
            id: 1900,
            name: "Free Image to Prompt Generator",
            description: "Convert images to effective prompts for AI image generation tools",
            url: "https://imageprompt.org/",
            imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop",
            categoryId: 19,
            tags: ["prompt", "image", "generation", "ai", "converter"]
        },
        {
            id: 1901,
            name: "MonsInfo Prompt Generator",
            description: "Free AI prompt generator for ChatGPT, Midjourney, DALL-E and other AI tools",
            url: "https://www.monsinfo.com/p/prompt-generator.html",
            imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
            categoryId: 19,
            tags: ["prompt", "generator", "chatgpt", "midjourney", "dalle", "free"],
            featured: false
        },
        {
            id: 1902,
            name: "Originality AI",
            description: "Plagiarism and fact checker for AI-generated content with integrity verification",
            url: "https://originality.ai/",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            categoryId: 19,
            tags: ["plagiarism", "fact-checker", "ai", "content", "integrity"],
            featured: false
        },

        {
            id: 1904,
            name: "Promptly AI",
            description: "Your personal prompt engineer for creating effective AI prompts and commands",
            url: "https://promptly.ai/",
            imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
            categoryId: 19,
            tags: ["prompt", "engineer", "ai", "personal", "assistant"],
            featured: false
        },

        // Video Tools
        {
            id: 7,
            name: "RunwayML",
            description: "AI video editing and generation platform",
            url: "https://runwayml.com",
            imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
            categoryId: 3,
            tags: ["video", "editing", "generation"]
        },
        {
            id: 8,
            name: "Pictory",
            description: "AI-powered video creation from text",
            url: "https://pictory.ai",
            imageUrl: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=300&fit=crop",
            categoryId: 3,
            tags: ["video", "text-to-video", "creation"],
            featured: false
        },
        {
            id: 9,
            name: "Synthesia",
            description: "AI video generation with avatars",
            url: "https://synthesia.io",
            imageUrl: "https://images.unsplash.com/photo-1611532736788-a811aa4d3b63?w=400&h=300&fit=crop",
            categoryId: 3,
            tags: ["video", "avatars", "synthesis"],
            featured: false
        },
        {
            id: 4000,
            name: "InVideo",
            description: "Online video editor and AI-powered video creation platform.",
            url: "https://invideo.io/",
            imageUrl: "https://invideo.io/favicon.ico",
            categoryId: 3,
            tags: ["video", "editor", "ai"],
            featured: false
        },
        {
            id: 4001,
            name: "FlexClip",
            description: "Easy-to-use video maker and editor for everyone.",
            url: "https://www.flexclip.com/",
            imageUrl: "https://www.flexclip.com/favicon.ico",
            categoryId: 3,
            tags: ["video", "editor", "maker"],
            featured: false
        },
        {
            id: 4002,
            name: "Lumen5",
            description: "AI-powered video creation from text and blog posts.",
            url: "https://lumen5.com/",
            imageUrl: "https://lumen5.com/favicon.ico",
            categoryId: 3,
            tags: ["video", "ai", "content"],
            featured: false
        },
        {
            id: 4003,
            name: "Kapwing",
            description: "Collaborative online video editor and content creation platform.",
            url: "https://www.kapwing.com/",
            imageUrl: "https://www.kapwing.com/favicon.ico",
            categoryId: 3,
            tags: ["video", "editor", "collaboration"],
            featured: false
        },
        {
            id: 32,
            name: "Kling AI",
            description: "AI video generation by Kling.",
            url: "https://klingai.com/global/",
            imageUrl: "https://kling.ai/favicon.ico",
            categoryId: 3,
            tags: ["video", "ai", "generation"],
            featured: false
        },
        {
            id: 34,
            name: "Vmake AI",
            description: "Talking head video solution.",
            url: "https://vmake.ai",
            imageUrl: "https://vmake.ai/favicon.ico",
            categoryId: 3,
            tags: ["video", "ai", "talking head"],
            featured: false
        },
        {
            id: 35,
            name: "Canva Video Editor",
            description: "Online video editor by Canva.",
            url: "https://www.canva.com/video-editor/",
            imageUrl: "https://static.canva.com/static/images/favicon.ico",
            categoryId: 3,
            tags: ["video", "editor", "canva"],
            featured: false
        },
        {
            id: 37,
            name: "Imagine Explainers",
            description: "Create explainer videos with AI.",
            url: "https://imagineexplainers.com",
            imageUrl: "https://imagineexplainers.com/favicon.ico",
            categoryId: 3,
            tags: ["video", "ai", "explainer"],
            featured: false
        },
        {
            id: 38,
            name: "Flow",
            description: "AI video workflow platform.",
            url: "https://labs.google/flow/about",
            imageUrl: "https://flow.video/favicon.ico",
            categoryId: 3,
            tags: ["video", "ai", "workflow"],
            featured: false
        },
        {
            id: 39,
            name: "Seedance AI",
            description: "Professional AI video generator.",
            url: "https://seedance.ai",
            imageUrl: "https://seedance.ai/favicon.ico",
            categoryId: 3,
            tags: ["video", "ai", "generator"],
            featured: false
        },
        {
            id: 40,
            name: "Google Gemini Veo",
            description: "AI video by Google Gemini.",
            url: "https://gemini.google.com",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Google_Gemini_logo.svg",
            categoryId: 3,
            tags: ["video", "ai", "google", "gemini"],
            featured: false
        },
        {
            id: 41,
            name: "Video Trimmer",
            description: "Cut and trim videos online for free.",
            url: "https://www.onlinevideocutter.com/",
            imageUrl: "https://www.onlinevideocutter.com/favicon.ico",
            categoryId: 3,
            tags: ["video", "trimmer", "online"],
            featured: false
        },
        {
            id: 42,
            name: "OpusClip",
            description: "AI video clipping and editing tool.",
            url: "https://www.opus.pro/",
            imageUrl: "https://www.opus.pro/favicon.ico",
            categoryId: 3,
            tags: ["video", "ai", "clip", "edit"],
            featured: false
        },
        {
            id: 43,
            name: "Streamlabs Podcast Editor",
            description: "Edit video podcasts by editing text.",
            url: "https://streamlabs.com/podcast-editor",
            imageUrl: "https://streamlabs.com/favicon.ico",
            categoryId: 3,
            tags: ["video", "podcast", "editor"],
            featured: false
        },

        {
            id: 10,
            name: "Murf",
            description: "AI voice generator for voiceovers",
            url: "https://murf.ai",
            imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
            categoryId: 4,
            tags: ["voice", "generation", "voiceover"]
        },
        {
            id: 11,
            name: "Descript",
            description: "Audio and video editing with AI transcription",
            url: "https://descript.com",
            imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
            categoryId: 4,
            tags: ["audio", "transcription", "editing"],
            featured: false
        },
        {
            id: 12,
            name: "Cleanvoice",
            description: "AI audio cleaning and enhancement",
            url: "https://cleanvoice.ai",
            imageUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop",
            categoryId: 4,
            tags: ["audio", "cleaning", "enhancement"],
            featured: false
        },
        {
            id: 44,
            name: "Vocal Remover",
            description: "Remove vocals and clean audio.",
            url: "https://vocalremover.org/",
            imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop",
            categoryId: 4,
            tags: ["audio", "remover", "clean"],
            featured: false
        },
        {
            id: 45,
            name: "Auphonic",
            description: "Audio recording and cleaning.",
            url: "https://auphonic.com/",
            imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop",
            categoryId: 4,
            tags: ["audio", "record", "clean"],
            featured: false
        },
        {
            id: 46,
            name: "TTSMaker",
            description: "Free text to speech online.",
            url: "https://ttsmaker.com/",
            imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop",
            categoryId: 4,
            tags: ["audio", "tts", "speech"],
            featured: false
        },
        {
            id: 47,
            name: "ElevenLabs",
            description: "AI voice generator and TTS.",
            url: "https://elevenlabs.io/",
            imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop",
            categoryId: 4,
            tags: ["audio", "ai", "voice", "tts"],
            featured: false
        },
        {
            id: 48,
            name: "character.ai",
            description: "Personalized AI voices.",
            url: "https://character.ai/",
            imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop",
            categoryId: 4,
            tags: ["audio", "ai", "voice"],
            featured: false
        },
        {
            id: 49,
            name: "Hume AI",
            description: "AI-powered voice and emotion.",
            url: "https://hume.ai/",
            imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop",
            categoryId: 4,
            tags: ["audio", "ai", "emotion"],
            featured: false
        },
        {
            id: 50,
            name: "Generate Media (Google AI Studio)",
            description: "AI audio and media generation.",
            url: "https://aistudio.google.com/",
            imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop",
            categoryId: 4,
            tags: ["audio", "ai", "google"],
            featured: false
        },

        // Technical Tools - Programming
        {
            id: 2001,
            name: "Julius AI",
            description: "AI-powered data science and analytics platform.",
            url: "https://julius.ai/",
            imageUrl: "https://images.unsplash.com/photo-1508385082359-f48b1c1b1f57?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "data-science",
            tags: ["data science", "analytics", "ai"],
            featured: false
        },
        {
            id: 2002,
            name: "LambdaTest",
            description: "AI-powered cloud platform for software testing, automation, and QA.",
            url: "https://www.lambdatest.com/",
            imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "testing-qa",
            tags: ["testing", "qa", "automation", "cloud", "ai"],
            featured: false
        },
        {
            id: 2003,
            name: "Cursor - The AI Code Editor",
            description: "AI-first code editor for developers.",
            url: "https://cursor.sh/",
            imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "programming",
            tags: ["code editor", "ai", "development"],
            featured: false
        },
        {
            id: 2004,
            name: "CodePen: Online Code Editor and Front End Web Developer Community",
            description: "Online code editor and social development environment for front-end designers and developers.",
            url: "https://codepen.io/",
            imageUrl: "https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png",
            categoryId: 5,
            subcategoryId: "programming",
            tags: ["code editor", "frontend", "community"],
            featured: false
        },
        {
            id: 2005,
            name: "Firebase Studio",
            description: "Firebase Studio: Tools for building and managing Firebase projects.",
            url: "https://firebase.studio/",
            imageUrl: "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "programming",
            tags: ["firebase", "tools", "development"],
            featured: false
        },
        {
            id: 2006,
            name: "CopyCoder",
            description: "AI-powered code generation and assistance.",
            url: "https://copycoder.ai/",
            imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "programming",
            tags: ["ai", "code", "generation"],
            featured: false
        },
        {
            id: 2007,
            name: "Replit",
            description: "Collaborative online IDE and code runner.",
            url: "https://replit.com/",
            imageUrl: "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "programming",
            tags: ["ide", "collaborative", "online"],
            featured: false
        },
        {
            id: 2009,
            name: "BASE44 - Build Any Software in Minutes with AI",
            description: "AI-powered platform to build software rapidly.",
            url: "https://base44.com/",
            imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "programming",
            tags: ["ai", "software", "builder"],
            featured: false
        },
        {
            id: 2010,
            name: "v0 by Vercel",
            description: "AI-powered code generation and UI builder by Vercel.",
            url: "https://v0.dev/",
            imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
            categoryId: 5,
            subcategoryId: "programming",
            tags: ["ai", "code", "ui", "vercel"],
            featured: false
        },
        {
            id: 2301,
            name: "CodeRabbit",
            description: "AI-powered code reviews and PR summaries for GitHub and GitLab.",
            url: "https://www.coderabbit.ai/",
            imageUrl: "https://www.coderabbit.ai/assets/logo.svg",
            categoryId: 5,
            subcategoryId: "programming",
            tags: ["ai", "code review", "github", "gitlab"],
            featured: false
        },
        {
            id: 2302,
            name: "GitHub Copilot",
            description: "AI pair programmer for code suggestions and autocompletion.",
            url: "https://github.com/features/copilot",
            imageUrl: "https://github.githubassets.com/images/modules/site/features/copilot/copilot-featured.png",
            categoryId: 5,
            subcategoryId: "programming",
            tags: ["ai", "code", "assistant", "github"],
            featured: false
        },
        {
            id: 2303,
            name: "GitHub - ai Tools for Dev",
            description: "Collection of AI tools and resources for developers on GitHub.",
            url: "https://github.com/topics/ai-tools",
            imageUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            categoryId: 5,
            subcategoryId: "programming",
            tags: ["ai", "github", "tools", "development", "resources"],
            featured: false
        },
        {
            id: 2304,
            name: "bolt.new",
            description: "AI-powered code generation and development platform for rapid prototyping.",
            url: "https://bolt.new/",
            imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "programming",
            tags: ["ai", "code", "generation", "prototyping"],
            featured: false
        },
        {
            id: 2305,
            name: "Windsurf (Codeium)",
            description: "The most powerful AI Code Editor with advanced code completion and generation.",
            url: "https://windsurf.ai/",
            imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "programming",
            tags: ["ai", "code", "editor", "completion", "windsurf"],
            featured: false
        },

        // Technical Tools - Mobile Development
        {
            id: 2201,
            name: "FlutterFlow",
            description: "FlutterFlow: Build mobile apps visually with Flutter.",
            url: "https://flutterflow.io/",
            imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "mobile-dev",
            tags: ["flutter", "mobile", "builder", "no-code"],
            featured: false
        },
        {
            id: 2202,
            name: "Rocket.new | Build Web & Mobile Apps 10x Faster Without Code",
            description: "No-code platform to build web and mobile apps quickly.",
            url: "https://rocket.new/",
            imageUrl: "https://images.unsplash.com/photo-1512499617640-c2f999098c01?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "mobile-dev",
            tags: ["no-code", "web", "mobile"],
            featured: false
        },
        {
            id: 2203,
            name: "Rork — vibe code a mobile app in minutes",
            description: "Rork: Build mobile apps in minutes with AI and no code.",
            url: "https://rork.app/",
            imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "mobile-dev",
            tags: ["ai", "mobile", "no-code"],
            featured: false
        },

        // Technical Tools - Front-end
        {
            id: 2101,
            name: "WindChat - Preview Tailwindcss HTML in ChatGPT",
            description: "Preview React and TailwindCSS code in real-time within the ChatGPT chat window.",
            url: "https://chromewebstore.google.com/detail/windchat-chatgpt-tailwind/ipafbgdehdljgphjgfmpkohhbelebdhm?utm_source=wd_web&utm_medium=referral&utm_campaign=wd_web_chrome_btn",
            imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
            categoryId: 5,
            subcategoryId: "front-end",
            tags: ["tailwindcss", "react", "preview", "chatgpt"],
            featured: false
        },
        {
            id: 2102,
            name: "Gemini (Google Gemini App)",
            description: "Google Gemini: AI-powered assistant for code, UI, and more.",
            url: "https://gemini.google.com/app/5304475f44ca7d9f",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Google_Gemini_logo.svg",
            categoryId: 5,
            subcategoryId: "front-end",
            tags: ["ai", "google", "frontend", "gemini"],
            featured: false
        },
        {
            id: 2103,
            name: "Qwen Chat",
            description: "Official Qwen AI chat app for mobile and web.",
            url: "https://chat.qwen.ai/",
            imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "front-end",
            tags: ["ai", "chat", "frontend"],
            featured: false
        },
        {
            id: 2104,
            name: "Emergent",
            description: "Emergent: AI-powered code and UI assistant.",
            url: "https://app.emergent.sh/",
            imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "front-end",
            tags: ["ai", "ui", "frontend"],
            featured: false
        },
        {
            id: 2105,
            name: "Windframe",
            description: "Windframe: Visual Tailwind CSS builder and AI UI generator.",
            url: "https://windframe.dev/",
            imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "front-end",
            tags: ["tailwindcss", "builder", "frontend", "ai"],
            featured: false
        },
        {
            id: 2106,
            name: "Lovable",
            description: "AI-powered frontend development tool for creating beautiful user interfaces.",
            url: "https://lovable.dev/",
            imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
            categoryId: 5,
            subcategoryId: "front-end",
            tags: ["ai", "frontend", "ui", "development"],
            featured: false
        },

        // Technical Tools - UX/UI
        {
            id: 2501,
            name: "Visily | UI design",
            description: "Visily: Collaborative UI design tool powered by AI.",
            url: "https://www.visily.ai/",
            imageUrl: "https://www.visily.ai/_next/static/media/logo.2e6e2e2e.svg",
            categoryId: 5,
            subcategoryId: "ux-ui",
            tags: ["ui", "design", "ai", "collaborative"],
            featured: false
        },
        {
            id: 2502,
            name: "Stitch - Design with AI",
            description: "Stitch: AI-powered design tool for UI/UX.",
            url: "https://stitch.withgoogle.com/",
            imageUrl: "https://stitch.design/logo192.png",
            categoryId: 5,
            subcategoryId: "ux-ui",
            tags: ["ui", "ux", "design", "ai"],
            featured: false
        },
        {
            id: 2503,
            name: "UX Pilot - Superfast UX/UI Design with AI",
            description: "UX Pilot: Superfast UX/UI design with AI assistance.",
            url: "https://uxpilot.ai/",
            imageUrl: "https://uxpilot.ai/assets/logo.svg",
            categoryId: 5,
            subcategoryId: "ux-ui",
            tags: ["ux", "ui", "design", "ai"],
            featured: false
        },
        {
            id: 2504,
            name: "Windframe - Tailwind builder | AI Visual Editor Tailwind Editor",
            description: "Windframe: Visual Tailwind CSS builder and AI UI generator.",
            url: "https://windframe.dev/",
            imageUrl: "https://windframe.dev/images/logo.png",
            categoryId: 5,
            subcategoryId: "ux-ui",
            tags: ["tailwindcss", "builder", "frontend", "ai", "ui"],
            featured: false
        },
        {
            id: 2505,
            name: "MagicPath",
            description: "MagicPath: AI-powered UI/UX design assistant.",
            url: "https://magicpath.ai/",
            imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "ux-ui",
            tags: ["ui", "ux", "design", "ai"],
            featured: false
        },
        {
            id: 2506,
            name: "Hatch",
            description: "Hatch: AI-powered design and prototyping tool.",
            url: "https://www.hatch.design/",
            imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "ux-ui",
            tags: ["ui", "ux", "design", "ai", "prototyping"],
            featured: false
        },

        // Technical Tools - WordPress
        {
            id: 2401,
            name: "10Web",
            description: "AI-powered WordPress website builder and hosting platform.",
            url: "https://10web.io/",
            imageUrl: "https://10web.io/wp-content/uploads/2021/10/10Web-logo.svg",
            categoryId: 5,
            subcategoryId: "wordpress",
            tags: ["wordpress", "ai", "website builder", "hosting"],
            featured: false
        },

        // Technical Tools - Game Development
        {
            id: 2011,
            name: "Rosebud AI",
            description: "Create 2D and 3D games with AI. No coding or downloads required.",
            url: "https://rosebud.ai/",
            imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "game-dev",
            tags: ["ai", "games", "no-code", "2d", "3d"],
            featured: false
        },

        // Technical Tools - Database
        {
            id: 2601,
            name: "Supabase",
            description: "Supabase: Open source Firebase alternative. Instant APIs, realtime, and Postgres database.",
            url: "https://supabase.com/",
            imageUrl: "https://supabase.com/docs/img/supabase-logo.svg",
            categoryId: 5,
            subcategoryId: "database",
            tags: ["database", "postgres", "api", "realtime", "open source"],
            featured: false
        },

        // Image Generation & Editing
        {
            id: 16,
            name: "Midjourney",
            description: "AI image generation from text prompts",
            url: "https://midjourney.com",
            imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop",
            categoryId: 6,
            tags: ["image generation", "art", "creativity"]
        },
        {
            id: 17,
            name: "DALL-E",
            description: "OpenAI's image generation model",
            url: "https://openai.com/dall-e-3",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/OpenAI_Logo.svg",
            categoryId: 6,
            tags: ["image generation", "openai", "art"],
            featured: false
        },
        {
            id: 18,
            name: "Adobe Firefly",
            description: "Adobe's AI image generation tool.",
            url: "https://firefly.adobe.com",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Adobe_Firefly_logo.svg",
            categoryId: 6,
            tags: ["adobe", "image generation", "ai"],
            featured: false
        },
        {
            id: 19,
            name: "Leonardo.Ai",
            description: "AI art and image generation platform.",
            url: "https://leonardo.ai",
            imageUrl: "https://leonardo.ai/favicon.ico",
            categoryId: 6,
            tags: ["ai", "art", "image generation"],
            featured: false
        },
        {
            id: 20,
            name: "Bing Image Creator",
            description: "Free AI image generator by Bing.",
            url: "https://bing.com/create",
            imageUrl: "https://www.bing.com/sa/simg/bing_p_rr_teal_min.ico",
            categoryId: 6,
            tags: ["bing", "image generation", "free"],
            featured: false
        },
        {
            id: 21,
            name: "Decohere",
            description: "AI image generation by Decohere.",
            url: "https://decohere.ai",
            imageUrl: "https://decohere.ai/favicon.ico",
            categoryId: 6,
            tags: ["decohere", "ai", "image generation"],
            featured: false
        },
        {
            id: 22,
            name: "Recraft",
            description: "AI-powered design and image editing.",
            url: "https://recraft.ai",
            imageUrl: "https://recraft.ai/favicon.ico",
            categoryId: 6,
            tags: ["recraft", "ai", "design"],
            featured: false
        },
        {
            id: 23,
            name: "Google AI Studio",
            description: "Google's platform for AI and image generation.",
            url: "https://aistudio.google.com",
            imageUrl: "https://ssl.gstatic.com/aihub/twa-favicon.ico",
            categoryId: 6,
            tags: ["google", "ai", "studio"],
            featured: false
        },
        {
            id: 24,
            name: "Canva",
            description: "Online design and AI-powered image editing.",
            url: "https://canva.com",
            imageUrl: "https://static.canva.com/static/images/favicon.ico",
            categoryId: 6,
            tags: ["canva", "design", "ai"],
            featured: false
        },
        {
            id: 25,
            name: "Design.com",
            description: "Logo and graphic design with AI.",
            url: "https://design.com",
            imageUrl: "https://design.com/favicon.ico",
            categoryId: 6,
            tags: ["logo", "graphic", "ai", "design"],
            featured: false
        },
        {
            id: 26,
            name: "ImagineArt AI Tools",
            description: "AI tools for creative image generation.",
            url: "https://www.imagine.art/",
            imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
            categoryId: 6,
            tags: ["imagineart", "ai", "tools"],
            featured: false
        },
        {
            id: 27,
            name: "Dreamina",
            description: "Create art and images from text prompts for free.",
            url: "https://dreamina.com",
            imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=400&h=300&fit=crop",
            categoryId: 6,
            tags: ["dreamina", "ai", "image generator"],
            featured: false
        },
        {
            id: 28,
            name: "WheeAI",
            description: "AI-powered poster maker and editor.",
            url: "https://whee.ai/",
            imageUrl: "https://wheeai.com/favicon.ico",
            categoryId: 6,
            tags: ["wheeai", "poster", "ai", "edit"],
            featured: false
        },
{
    id: 29,
    name: "Weights AI",
    description: "AI-powered image generation and editing platform.",
    url: "https://www.weights.com/",
    imageUrl: "https://www.weights.com/favicon.ico",
    categoryId: 6,
    tags: ["ai", "image generation", "editing", "weights"],
    featured: false
},
        {
            id: 1013,
            name: "Topview AI",
            description: "AI-powered video creation platform.",
            url: "https://topview.ai/",
            imageUrl: "https://topview.ai/logo.png",
            categoryId: 7,
            tags: ["marketing", "video", "ai"],
            featured: false
        },
        {
            id: 1014,
            name: "Higgsfield",
            description: "Explore AI marketing with Higgsfield.",
            url: "https://higgsfield.ai/",
            imageUrl: "https://higgsfield.ai/logo.png",
            categoryId: 7,
            tags: ["marketing", "explore", "ai"],
            featured: false
        },
        {
            id: 1015,
            name: "FLORA",
            description: "AI marketing and automation tool.",
            url: "https://flora.com/",
            imageUrl: "https://flora.com/logo.png",
            categoryId: 7,
            tags: ["marketing", "automation", "ai"],
            featured: false
        },
        {
            id: 1016,
            name: "Dream Machine",
            description: "Boards and marketing automation.",
            url: "https://dreammachine.ai/",
            imageUrl: "https://dreammachine.ai/logo.png",
            categoryId: 7,
            tags: ["marketing", "boards", "automation"],
            featured: false
        },
        {
            id: 1017,
            name: "Hedra",
            description: "AI platform for image, video, and audio marketing.",
            url: "https://hedra.com/",
            imageUrl: "https://hedra.com/logo.png",
            categoryId: 7,
            tags: ["marketing", "media", "ai"],
            featured: false
        },
        {
            id: 1018,
            name: "Conversion Blitz",
            description: "AI lead generation and sales automation.",
            url: "https://conversionblitz.com/",
            imageUrl: "https://conversionblitz.com/logo.png",
            categoryId: 7,
            tags: ["marketing", "lead", "automation"],
            featured: false
        },
        {
            id: 1019,
            name: "Nordy",
            description: "AI marketing assistant.",
            url: "https://nordy.com/",
            imageUrl: "https://nordy.com/logo.png",
            categoryId: 7,
            tags: ["marketing", "assistant", "ai"],
            featured: false
        },
        {
            id: 1020,
            name: "Hunter",
            description: "Find emails and send campaigns.",
            url: "https://hunter.io/",
            imageUrl: "https://hunter.io/images/logo/og-image.png",
            categoryId: 7,
            tags: ["marketing", "email", "hunter"],
            featured: false
        },
        {
            id: 1021,
            name: "Benchmark Email",
            description: "Email marketing platform.",
            url: "https://www.benchmarkemail.com/",
            imageUrl: "https://www.benchmarkemail.com/images/logo.png",
            categoryId: 7,
            tags: ["marketing", "email", "benchmark"],
            featured: false
        },
        {
            id: 1022,
            name: "BillionMail",
            description: "Open-source email marketing platform.",
            url: "https://github.com/aaPanel/BillionMail",
            imageUrl: "https://github.com/aaPanel.png",
            categoryId: 7,
            tags: ["marketing", "email", "opensource"],
            featured: false
        },
        {
            id: 1023,
            name: "Keak",
            description: "A/B testing automation for marketing.",
            url: "https://keak.com/",
            imageUrl: "https://keak.com/logo.png",
            categoryId: 7,
            tags: ["marketing", "abtest", "automation"],
            featured: false
        },
        {
            id: 1024,
            name: "Head",
            description: "AI marketing analytics tool.",
            url: "https://head.com/",
            imageUrl: "https://head.com/logo.png",
            categoryId: 7,
            tags: ["marketing", "analytics", "ai"],
            featured: false
        },
        {
            id: 1025,
            name: "QRX Codes",
            description: "Artistic QR codes generated by AI for creative marketing and branding.",
            url: "https://qrx.codes/",
            imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
            categoryId: 7,
            tags: ["marketing", "qr", "ai", "branding", "creative"],
            featured: false
        },
        {
            id: 1026,
            name: "Writesonic",
            description: "AI-powered content writing and copywriting platform",
            url: "https://writesonic.com/",
            imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
            categoryId: 7,
            subcategoryId: "content-writing",
            tags: ["content", "writing", "ai", "copywriting"],
            featured: false
        },
        {
            id: 1027,
            name: "Smodin",
            description: "AI writing assistant for content creation and editing",
            url: "https://smodin.io/",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            categoryId: 7,
            subcategoryId: "content-writing",
            tags: ["content", "writing", "ai", "editing"],
            featured: false
        },
        {
            id: 1028,
            name: "ToolBaz",
            description: "Free AI Writer Tools (GPT-4o, Gemini & More) for content creation",
            url: "https://toolbaz.com/",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            categoryId: 7,
            subcategoryId: "content-writing",
            tags: ["content", "writing", "ai", "free", "gpt"],
            featured: false
        },
        {
            id: 1029,
            name: "QuillBot",
            description: "Your complete writing solution with AI-powered paraphrasing and editing",
            url: "https://quillbot.com/",
            imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
            categoryId: 7,
            subcategoryId: "content-writing",
            tags: ["content", "writing", "ai", "paraphrasing", "editing"],
            featured: false
        },

        // Technical Tools - Automation (نقل من قسم Automation Tools)
        {
            id: 21,
            name: "Zapier",
            description: "Automate workflows between apps",
            url: "https://zapier.com",
            imageUrl: "",
            categoryId: 5,
            subcategoryId: "automation",
            tags: ["automation", "workflow", "integration"],
            featured: false
        },
        {
            id: 22,
            name: "Make",
            description: "Visual workflow automation platform",
            url: "https://make.com",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "automation",
            tags: ["automation", "visual", "workflow"],
            featured: false
        },
        {
            id: 23,
            name: "n8n",
            description: "Open-source workflow automation tool for connecting apps and services",
            url: "https://n8n.io",
            imageUrl: "https://n8n.io/images/n8n-logo.svg",
            categoryId: 5,
            subcategoryId: "automation",
            tags: ["automation", "workflow", "open-source"],
            featured: false
        },
        {
            id: 24,
            name: "MindStudio",
            description: "Build powerful AI agents and workflows with no coding required",
            url: "https://www.mindstudio.ai/",
            imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "automation",
            tags: ["ai", "automation", "agents", "no-code"],
            featured: false
        },
        {
            id: 25,
            name: "DoubleO Agent",
            description: "Intelligent automation agent for complex business processes",
            url: "https://doubleo.ai",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "automation",
            tags: ["ai", "agent", "automation", "business"],
            featured: false
        },
        {
            id: 27,
            name: "Google Apps Script",
            description: "Cloud-based JavaScript platform to automate Google Workspace tasks",
            url: "https://developers.google.com/apps-script",
            imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
            categoryId: 5,
            subcategoryId: "automation",
            tags: ["google", "automation", "javascript", "workspace"],
            featured: false
        },
        {
            id: 28,
            name: "Flowith",
            description: "AI-powered knowledge management and research platform",
            url: "https://flowith.io/blank",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            categoryId: 9,
            tags: ["knowledge", "research", "ai", "management"],
            featured: false
        },
      
        {
            id: 200,
            name: "Reverso",
            description: "Free translation and dictionary.",
            url: "https://www.reverso.net/",
            imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
            categoryId: 11,
            tags: ["translation", "dictionary", "free"],
            featured: false
        },
        {
            id: 201,
            name: "DeepL",
            description: "Accurate AI-powered translator.",
            url: "https://www.deepl.com/",
            imageUrl: "https://static.deepl.com/img/logo/deepl-logo-blue.svg",
            categoryId: 11,
            tags: ["translation", "ai", "deepl"],
            featured: false
        },
        {
            id: 202,
            name: "Lara Translate",
            description: "AI translation tool.",
            url: "https://laratranslate.com/translate",
            imageUrl: "https://www.svgrepo.com/show/324210/language-translation.svg",
            categoryId: 11,
            tags: ["translation", "ai", "lara"],
            featured: false
        },
        {
            id: 203,
            name: "Tashkeel",
            description: "Best Arabic proofreading and diacritics tool for all writers",
            url: "https://rdi-tashkeel.com/",
            imageUrl: "https://tashkeel.app/favicon.ico",
            categoryId: 11,
            tags: ["arabic", "proofreading", "tashkeel", "diacritics"],
            featured: false
        },
        {
            id: 204,
            name: "Diffchecker",
            description: "Compare text online to find the difference between two text files",
            url: "https://www.diffchecker.com/",
            imageUrl: "https://www.diffchecker.com/favicon.ico",
            categoryId: 11,
            tags: ["text comparison", "diff", "proofreading", "online"],
            featured: false
        },
        {
            id: 205,
            name: "Lisan",
            description: "AI-Powered Arabic Proofreading & Writing Assistant",
            url: "https://lisan.ai/",
            imageUrl: "https://lisan.ai/favicon.ico",
            categoryId: 11,
            tags: ["arabic", "proofreading", "ai", "writing", "assistant"],
            featured: false
        },
        {
            id: 100,
            name: "Tome",
            description: "AI-powered presentation maker.",
            url: "https://tome.app/",
            imageUrl: "https://tome.app/logo.png",
            categoryId: 16,
            tags: ["presentation", "ai", "slides"],
            featured: false
        },
        {
            id: 101,
            name: "SlideShare",
            description: "Share and discover presentations.",
            url: "https://slideshare.net/",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
            categoryId: 16,
            tags: ["presentation", "slides", "share"],
            featured: false
        },
        {
            id: 102,
            name: "Slidesgo",
            description: "Free Google Slides and PowerPoint templates.",
            url: "https://slidesgo.com/",
            imageUrl: "https://slidesgo.com/_next/static/media/logo.2b1b6e7e.svg",
            categoryId: 16,
            tags: ["presentation", "templates", "slides"],
            featured: false
        },
        {
            id: 103,
            name: "Gamma",
            description: "Create beautiful presentations easily.",
            url: "https://gamma.app/",
            imageUrl: "https://gamma.app/favicon.svg",
            categoryId: 16,
            tags: ["presentation", "ai", "slides"],
            featured: false
        },
        {
            id: 104,
            name: "Decktopus",
            description: "AI presentation assistant.",
            url: "https://decktopus.com/",
            imageUrl: "https://decktopus.com/logo.png",
            categoryId: 16,
            tags: ["presentation", "ai", "assistant"],
            featured: false
        },
        // AI Agents (categoryId: 15)
        {
            id: 600,
            name: "Manus",
            description: "AI agent for research, writing, and productivity.",
            url: "https://manus.ai/",
            imageUrl: "https://manus.ai/logo.png",
            categoryId: 1,
            subcategoryId: "ai-agents",
            tags: ["ai agent", "research", "writing"],
            featured: false
        },
        {
            id: 601,
            name: "Genspark",
            description: "All-in-one AI companion for productivity and knowledge.",
            url: "https://www.genspark.ai/",
            imageUrl: "https://image.thum.io/get/width/400/genspark.ai",
            categoryId: 1,
            subcategoryId: "ai-agents",
            tags: ["ai agent", "companion", "productivity"],
            featured: false
        },
        {
            id: 602,
            name: "Flowith",
            description: "AI creation workspace, with knowledge and automation.",
            url: "https://flowith.io/blank",
            imageUrl: "https://flowith.com/logo.png",
            categoryId: 1,
            subcategoryId: "ai-agents",
            tags: ["ai agent", "workspace", "automation"],
            featured: false
        },
        {
            id: 603,
            name: "Convergence.ai",
            description: "AI agent platform for advanced automation and integration.",
            url: "https://www.futuretools.io/tools/convergence-ai",
            imageUrl: "https://convergence.ai/logo.png",
            categoryId: 1,
            subcategoryId: "ai-agents",
            tags: ["ai agent", "automation", "integration"],
            featured: false
        },
      
        {
            id: 605,
            name: "SiteSpeak AI",
            description: "Create AI support agents that understand your business and delight your users. Deploy to website, Slack, Telegram, Discord and more.",
            url: "https://sitespeak.ai/",
            imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
            categoryId: 1,
            subcategoryId: "ai-agents",
            tags: ["ai agent", "support", "chatbot", "customer service", "automation"],
            featured: false
        },
        {
            id: 606,
            name: "AutoGPT",
            description: "AI agent that can perform tasks autonomously using GPT-4, browsing the web and using tools",
            url: "https://autogpt.net/",
            imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
            categoryId: 1,
            subcategoryId: "ai-agents",
            tags: ["ai agent", "autonomous", "gpt-4", "automation"],
            featured: false
        },
        {
            id: 607,
            name: "BabyAGI",
            description: "AI-powered task management system that creates, prioritizes, and executes tasks autonomously",
            url: "https://github.com/yoheinakajima/babyagi",
            imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
            categoryId: 1,
            subcategoryId: "ai-agents",
            tags: ["ai agent", "task management", "autonomous", "github"],
            featured: false
        },
        {
            id: 608,
            name: "LangChain",
            description: "Framework for developing applications powered by language models and AI agents",
            url: "https://langchain.com/",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            categoryId: 1,
            subcategoryId: "ai-agents",
            tags: ["ai agent", "framework", "langchain", "development"],
            featured: false
        },
        {
            id: 609,
            name: "CrewAI",
            description: "Framework for orchestrating role-playing autonomous AI agents to work together",
            url: "https://github.com/joaomdmoura/crewAI",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            categoryId: 1,
            subcategoryId: "ai-agents",
            tags: ["ai agent", "crew", "collaboration", "autonomous"],
            featured: false
        },
        {
            id: 610,
            name: "GPT Engineer",
            description: "AI agent that can generate entire codebases from a single prompt",
            url: "https://github.com/AntonOsika/gpt-engineer",
            imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
            categoryId: 1,
            subcategoryId: "ai-agents",
            tags: ["ai agent", "code generation", "gpt", "engineering"],
            featured: false
        },
        {
            id: 611,
            name: "SuperAGI",
            description: "Open-source autonomous AI agent framework for building and deploying AI agents",
            url: "https://github.com/TransformerOptimus/SuperAGI",
            imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
            categoryId: 1,
            subcategoryId: "ai-agents",
            tags: ["ai agent", "open source", "autonomous", "framework"],
            featured: false
        },
        {
            id: 612,
            name: "AgentGPT",
            description: "Assemble, configure, and deploy autonomous AI agents in your browser",
            url: "https://agentgpt.reworkd.ai/",
            imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
            categoryId: 1,
            subcategoryId: "ai-agents",
            tags: ["ai agent", "autonomous", "browser", "deploy"],
            featured: false
        },
        {
            id: 613,
            name: "ChatDev",
            description: "AI-powered software development through multi-agent collaboration",
            url: "https://github.com/OpenBMB/ChatDev",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            categoryId: 1,
            subcategoryId: "ai-agents",
            tags: ["ai agent", "software development", "collaboration", "multi-agent"],
            featured: false
        },
        {
            id: 614,
            name: "MetaGPT",
            description: "Multi-agent framework for efficient software development and task automation",
            url: "https://github.com/geekan/MetaGPT",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            categoryId: 1,
            subcategoryId: "ai-agents",
            tags: ["ai agent", "meta", "software", "automation"],
            featured: false
        },
        // Research & Knowledge (categoryId: 9)
        {
            id: 300,
            name: "Schobot",
            description: "AI assistant for research writing and academic work.",
            url: "https://schobot.com/",
            imageUrl: "https://schobot.com/logo.png",
            categoryId: 9,
            tags: ["research", "writing", "ai"],
            featured: false
        },
        {
            id: 301,
            name: "Connected Papers",
            description: "Visual tool to explore academic papers and their connections.",
            url: "https://www.connectedpapers.com/",
            imageUrl: "https://www.connectedpapers.com/favicon.ico",
            categoryId: 9,
            tags: ["research", "papers", "visualization"],
            featured: false
        },
        {
            id: 302,
            name: "Perplexity",
            description: "AI-powered research and market insights.",
            url: "https://www.perplexity.ai/",
            imageUrl: "https://perplexity.ai/logo.png",
            categoryId: 9,
            tags: ["research", "market", "ai"],
            featured: false
        },
        {
            id: 303,
            name: "Google Scholar",
            description: "Google's academic search engine for scholarly articles and research papers.",
            url: "https://scholar.google.com/",
            imageUrl: "https://scholar.google.com/favicon.ico",
            categoryId: 9,
            tags: ["research", "scholar", "academic", "google"],
            featured: false
        },
        {
            id: 304,
            name: "Google Labs",
            description: "Google's home for AI experiments and experimental AI tools.",
            url: "https://labs.google/",
            imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
            categoryId: 9,
            tags: ["research", "ai", "google", "experiments"],
            featured: false
        },
        {
            id: 305,
            name: "Career Dreamer",
            description: "Grow with Google - AI-powered career development and learning platform.",
            url: "https://careerdreamer.withgoogle.com/",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            categoryId: 9,
            tags: ["research", "career", "google", "learning"],
            featured: false
        },
        {
            id: 306,
            name: "UPDF",
            description: "An AI-integrated PDF Editor, Converter, Annotator, and Reader for document management.",
            url: "https://updf.com/",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            categoryId: 9,
            tags: ["research", "pdf", "editor", "ai", "documents"],
            featured: false
        },
        {
            id: 307,
            name: "OpenEvidence",
            description: "The leading medical information platform featuring clinical findings from Mayo Clinic and JAMA Network",
            url: "https://www.openevidence.com/",
            imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
            categoryId: 9,
            tags: ["research", "medical", "clinical", "healthcare", "mayo-clinic"],
            featured: false
        },
        // Visuals & Summaries (categoryId: 13)
        {
            id: 900,
            name: "Mermaid Live Editor",
            description: "Create diagrams and visualizations using Mermaid.js online.",
            url: "https://mermaid-js.github.io/mermaid-live-editor/",
            imageUrl: "https://cdn.worldvectorlogo.com/logos/mermaid-2.svg",
            categoryId: 13,
            tags: ["visualization", "diagram", "mermaid"],
            featured: false
        },
        {
            id: 901,
            name: "Excalidraw",
            description: "Virtual whiteboard for sketching hand-drawn like diagrams.",
            url: "https://excalidraw.com/",
            imageUrl: "https://excalidraw.com/favicon-192.png",
            categoryId: 13,
            tags: ["visualization", "diagram", "whiteboard"],
            featured: false
        },
        {
            id: 902,
            name: "draw.io",
            description: "Free online diagram drawing application.",
            url: "https://app.diagrams.net/",
            imageUrl: "https://cdn.worldvectorlogo.com/logos/draw-io.svg",
            categoryId: 13,
            tags: ["visualization", "diagram", "draw"],
            featured: false
        },
        {
            id: 903,
            name: "ChartBlocks",
            description: "Online chart builder for creating visual data representations.",
            url: "https://www.chartblocks.com/en/",
            imageUrl: "https://www.chartblocks.com/assets/images/logo.svg",
            categoryId: 13,
            tags: ["visualization", "chart", "data"],
            featured: false
        },
        {
            id: 904,
            name: "MindMeister",
            description: "Collaborative mind mapping tool for brainstorming and organizing ideas.",
            url: "https://www.mindmeister.com/",
            imageUrl: "https://cdn.worldvectorlogo.com/logos/mindmeister.svg",
            categoryId: 13,
            tags: ["visualization", "mindmap", "brainstorm"],
            featured: false
        },
        {
            id: 905,
            name: "Eraser",
            description: "AI-powered file editor and visual collaboration tool for creating diagrams and documents.",
            url: "https://eraser.io/",
            imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
            categoryId: 13,
            tags: ["visualization", "editor", "collaboration", "diagrams"],
            featured: false
        },
        // Business Management (categoryId: 10)
        {
            id: 800,
            name: "Notion",
            description: "All-in-one workspace for notes, tasks, wikis, and databases.",
            url: "https://www.notion.so/",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
            categoryId: 10,
            tags: ["business", "management", "workspace"],
            featured: false
        },
        {
            id: 801,
            name: "ClickUp",
            description: "Productivity platform for project management and collaboration.",
            url: "https://clickup.com/",
            imageUrl: "https://cdn.worldvectorlogo.com/logos/clickup.svg",
            categoryId: 10,
            tags: ["business", "project", "management"],
            featured: false
        },
        {
            id: 802,
            name: "Monday.com",
            description: "Work OS for managing teams, projects, and workflows.",
            url: "https://monday.com/",
            imageUrl: "https://cdn.monday.com/images/logos/logo-full-big.png",
            categoryId: 10,
            tags: ["business", "workflow", "management"],
            featured: false
        },
        {
            id: 803,
            name: "Asana",
            description: "Project and task management platform for teams.",
            url: "https://asana.com/",
            imageUrl: "https://cdn.worldvectorlogo.com/logos/asana-1.svg",
            categoryId: 10,
            tags: ["business", "task", "management"],
            featured: false
        },
        {
            id: 804,
            name: "Odoo",
            description: "All-in-one business management software with CRM, ERP, and more.",
            url: "https://www.odoo.com/",
            imageUrl: "https://cdn.worldvectorlogo.com/logos/odoo.svg",
            categoryId: 10,
            tags: ["business", "management", "erp", "crm"],
            featured: false
        },
        {
            id: 805,
            name: "AI teammates for Your Startup",
            description: "AI-powered team management and collaboration platform for startups and growing businesses.",
            url: "https://aiteammates.com/",
            imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
            categoryId: 10,
            tags: ["business", "startup", "ai", "team", "collaboration"],
            featured: false
        },
        {
            id: 806,
            name: "gozigzag.com",
            description: "Innovative business management and startup platform for modern entrepreneurs.",
            url: "https://gozigzag.com/",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            categoryId: 10,
            tags: ["business", "startup", "entrepreneurs", "management"],
            featured: false
        },
        {
            id: 807,
            name: "Upmetrics",
            description: "Business Plan Software with Automated Financials for comprehensive business planning.",
            url: "https://upmetrics.co/",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            categoryId: 10,
            tags: ["business", "planning", "financials", "automation"],
            featured: false
        },
        {
            id: 808,
            name: "macky",
            description: "AI-powered business management and productivity platform for modern teams.",
            url: "https://macky.ai/",
            imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
            categoryId: 10,
            tags: ["business", "ai", "productivity", "management"],
            featured: false
        },
        // Learning & Stories (categoryId: 12)
        {
            id: 1200,
            name: "Google Labs LLL",
            description: "Google's experimental AI learning and language models platform",
            url: "https://labs.google/lll/en",
            imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
            categoryId: 12,
            tags: ["learning", "ai", "google", "labs"],
            featured: false
        },
        {
            id: 1201,
            name: "Once Upon a Bot",
            description: "AI-powered storytelling platform for creating interactive stories",
            url: "https://onceuponabot.com/users/log_in",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            categoryId: 12,
            tags: ["stories", "ai", "interactive", "narrative"],
            featured: false
        },
        {
            id: 1202,
            name: "MagicSchool",
            description: "AI operating system for schools with 80+ AI teacher tools",
            url: "https://www.magicschool.ai/",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            categoryId: 12,
            tags: ["education", "ai", "school", "teachers"],
            featured: false
        },
        {
            id: 1203,
            name: "Mootion",
            description: "AI video storytelling platform for creating visual stories and educational content",
            url: "https://www.mootion.com/",
            imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
            categoryId: 12,
            tags: ["stories", "video", "ai", "education"],
            featured: false
        },
        {
            id: 1204,
            name: "Little Language Lessons",
            description: "AI-powered language learning platform for interactive lessons and practice",
            url: "https://labs.google/lll/en",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            categoryId: 12,
            tags: ["learning", "language", "ai", "education"],
            featured: false
        }
    ]
};

// State management
let currentView = 'home';
let currentCategory = null;
let searchQuery = '';

// DOM elements
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const searchResults = document.getElementById('searchResults');
const categoriesSection = document.getElementById('categoriesSection');
const categoryToolsSection = document.getElementById('categoryToolsSection');
const toolModal = document.getElementById('toolModal');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
    setupEventListeners();
});

// Event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.trim();
        searchQuery = query;
        
        if (query.length > 0) {
            clearSearchBtn.classList.remove('hidden');
            performSearch(query);
        } else {
            clearSearchBtn.classList.add('hidden');
            showHomeView();
        }
    });

    // Clear search
    clearSearchBtn.addEventListener('click', function() {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.classList.add('hidden');
        showHomeView();
    });

    // Back to categories
    document.getElementById('backToCategories').addEventListener('click', showHomeView);

    // Close modal
    document.getElementById('closeModal').addEventListener('click', closeModal);
    
    // Close modal on backdrop click
    toolModal.addEventListener('click', function(e) {
        if (e.target === toolModal) {
            closeModal();
        }
    });
}



// Render categories
function renderCategories() {
    const container = document.getElementById('categoriesGrid');
    
    container.innerHTML = aiToolsData.categories.map(category => {
        const toolCount = aiToolsData.tools.filter(tool => tool.categoryId === category.id).length;
        return `
            <div class="category-card hover-lift bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20" 
                 onclick="showCategoryTools(${category.id})">
                <div class="relative">
                    <div class="h-32 ${category.gradient} relative overflow-hidden flex items-center justify-center">
                        <span class="text-5xl" style="color: #fff; text-shadow: 0 2px 12px rgba(0,0,0,0.25); z-index:3; position:relative;">
                            <i class="${category.icon}"></i>
                        </span>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-lg text-gray-900 mb-2">${category.name}</h3>
                        <p class="text-sm text-gray-600 mb-4 line-clamp-2">${category.description}</p>
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-500">${toolCount} ${toolCount === 1 ? 'tool' : 'tools'}</span>
                            <button class="btn-primary text-sm">
                                Explore <i class="fas fa-arrow-right ml-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function getDomain(url) {
    try {
        const u = new URL(url);
        return u.hostname.replace(/^www\./, '');
    } catch {
        return '';
    }
}

// إنشاء صورة placeholder مخصصة
function generatePlaceholderImage(toolName) {
    const firstLetter = toolName.charAt(0).toUpperCase();
    const colors = ['4F46E5', '7C3AED', 'DC2626', '059669', 'D97706', '0891B2', 'EC4899', '10B981'];
    const color = colors[firstLetter.charCodeAt(0) % colors.length];
    return `https://via.placeholder.com/400x300/${color}/FFFFFF?text=${firstLetter}&fontSize=60`;
}

function handleImageError(imgElement, domain, toolName) {
    const fallbackSources = [
        `https://www.google.com/s2/favicons?domain=${domain}&sz=256`,
        `https://icon.horse/icon/${domain}`,
        `https://api.faviconkit.com/${domain}/256`,
        generatePlaceholderImage(toolName),
        'https://via.placeholder.com/400x300/f3f4f6/6b7280?text=No+Image'
    ];
    
    let currentIndex = -1;
    fallbackSources.forEach((src, index) => {
        if (imgElement.src.includes(src.split('?')[0]) || imgElement.src === src) {
            currentIndex = index;
        }
    });
    
    const nextIndex = currentIndex + 1;
    if (nextIndex < fallbackSources.length) {
        imgElement.src = fallbackSources[nextIndex];
    } else {
        imgElement.src = generatePlaceholderImage(toolName);
        imgElement.style.opacity = '1';
        const loadingDiv = imgElement.nextElementSibling;
        if (loadingDiv) {
            loadingDiv.style.display = 'none';
        }
    }
}


function createToolCard(tool) {
    const category = aiToolsData.categories.find(cat => cat.id === tool.categoryId);
    const domain = tool.url ? getDomain(tool.url) : '';
    let imageUrl = '';
    if (domain) {
        imageUrl = `https://logo.clearbit.com/${domain}?size=256`;
    } else {
        imageUrl = generatePlaceholderImage(tool.name);
    }
    return `
        <div class="tool-card bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20" 
             onclick="showToolModal(${tool.id})">
            <div class="relative">
                <div class="relative h-48 overflow-hidden bg-gray-100">
                    <img src="${imageUrl}" 
                         alt="${tool.name}" 
                         class="tool-image w-full h-full object-cover transition-all duration-300"
                         onerror="handleImageError(this, '${domain}', '${tool.name}')"
                         onload="this.style.opacity='1'; this.nextElementSibling.style.display='none';"
                         style="opacity: 0;">
                    <!-- Loading placeholder -->
                    <div class="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div class="text-center">
                            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
                            <p class="text-xs text-gray-500">Loading...</p>
                        </div>
                    </div>
                    <div class="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                        <button class="btn-primary" onclick="event.stopPropagation(); openTool('${tool.url}')">
                            <i class="fas fa-external-link-alt mr-2"></i>
                            Visit Tool
                        </button>
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-lg text-gray-900 mb-2">${tool.name}</h3>
                    <p class="text-sm text-gray-600 mb-3 line-clamp-2">${tool.description}</p>
                    ${tool.tags && tool.tags.length > 0 ? `
                        <div class="flex flex-wrap gap-1 mb-3">
                            ${tool.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                            ${tool.tags.length > 3 ? `<span class="tag">+${tool.tags.length - 3}</span>` : ''}
                        </div>
                    ` : ''}
                    <button class="btn-primary w-full" onclick="event.stopPropagation(); openTool('${tool.url}')">
                        <i class="fas fa-external-link-alt mr-2"></i>
                        Try Tool
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Search functionality
function performSearch(query) {
    const results = aiToolsData.tools.filter(tool => 
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.description.toLowerCase().includes(query.toLowerCase()) ||
        (tool.tags && tool.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())))
    );
    
    showSearchResults(results, query);
}

// Show search results
function showSearchResults(results, query) {
    currentView = 'search';
    
    // Hide other sections
    categoriesSection.classList.add('hidden');
    categoryToolsSection.classList.add('hidden');
    
    // Show search results
    searchResults.classList.remove('hidden');
    
    // Update search count
    document.getElementById('searchCount').textContent = `(${results.length} results)`;
    
    // Render results
    const container = document.getElementById('searchResultsGrid');
    
    if (results.length > 0) {
        container.innerHTML = results.map(tool => createToolCard(tool)).join('');
    } else {
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-search text-gray-400 text-4xl mb-4"></i>
                <p class="text-gray-600">No tools found for "${query}". Try a different search term.</p>
            </div>
        `;
    }
}

// Show category tools
function showCategoryTools(categoryId) {
    categoryId = Number(categoryId);
    const category = aiToolsData.categories.find(cat => cat.id === categoryId);
    const tools = aiToolsData.tools.filter(tool => tool.categoryId === categoryId);
    
    currentView = 'category';
    currentCategory = category;
    
    // Hide other sections
    searchResults.classList.add('hidden');
    categoriesSection.classList.add('hidden');
    
    // Show category tools section
    categoryToolsSection.classList.remove('hidden');
    
    // Update category info
    document.getElementById('categoryTitle').textContent = category.name;
    document.getElementById('categoryDescription').textContent = category.description;
    
    // إذا كان القسم هو Conversational & AI Agents وفيه subcategories
    if (category.id === 1 && Array.isArray(category.subcategories)) {
        showConversationalSubcategories(category.subcategories);
        return;
    }
    // إذا كان القسم هو Technical Tools وفيه subcategories
    if (category.id === 5 && Array.isArray(category.subcategories)) {
        showTechnicalSubcategories(category.subcategories);
        return;
    }
    // إذا كان القسم هو Marketing & Plans وفيه subcategories
    if (category.id === 7 && Array.isArray(category.subcategories)) {
        showMarketingSubcategories(category.subcategories);
        return;
    }
    // Render tools
    const container = document.getElementById('categoryToolsGrid');
    if (tools.length > 0) {
        console.log("Tools found:", tools);
        container.innerHTML = tools.map(tool => createToolCard(tool)).join('');
    } else {
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="${category.icon} text-gray-400 text-4xl mb-4"></i>
                <p class="text-gray-600">No tools available in ${category.name} yet.</p>
            </div>
        `;
    }
}

// عرض الأقسام الفرعية لقسم Conversational & AI Agents
function showConversationalSubcategories(subcategories) {
    const container = document.getElementById('categoryToolsGrid');
    // زر العودة للصفحة الرئيسية
    const backButton = `
        <div class="col-span-full mb-6">
            <button onclick="showHomeView()" class="btn-secondary">
                <i class="fas fa-arrow-left mr-2"></i>
                Back to Home
            </button>
        </div>
    `;
    container.innerHTML = backButton + subcategories.map(sub => `
        <div class="tool-card bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 cursor-pointer flex flex-col items-center justify-center py-8 hover:shadow-lg transition" onclick="showConversationalSubcategoryTools('${sub.id}', '${sub.name}', '${sub.icon}')">
            <div class="text-4xl mb-4 text-gray-600"><i class="${sub.icon}"></i></div>
            <h3 class="font-bold text-lg text-gray-900 mb-1">${sub.name}</h3>
        </div>
    `).join('');
}


function showConversationalSubcategoryTools(subcategoryId, subcategoryName, subcategoryIcon) {
    const tools = aiToolsData.tools.filter(tool => tool.categoryId === 1 && tool.subcategoryId === subcategoryId);
    const container = document.getElementById('categoryToolsGrid');
    document.getElementById('categoryTitle').textContent = subcategoryName;
    document.getElementById('categoryDescription').textContent = '';
    // زر العودة لقسم Conversational & AI Agents
    const backButton = `
        <div class="col-span-full mb-6">
            <button onclick="backToConversationalAgents()" class="btn-secondary">
                <i class="fas fa-arrow-left mr-2"></i>
                Back to Conversational & AI Agents
            </button>
        </div>
    `;
    if (tools.length > 0) {
        container.innerHTML = backButton + tools.map(tool => createToolCard(tool)).join('');
    } else {
        container.innerHTML = backButton + `
            <div class="col-span-full text-center py-12">
                <i class="${subcategoryIcon} text-gray-400 text-4xl mb-4"></i>
                <p class="text-gray-600">No tools available in ${subcategoryName} yet.</p>
            </div>
        `;
    }
}

// العودة لقسم Conversational & AI Agents
function backToConversationalAgents() {
    const conversationalCategory = aiToolsData.categories.find(cat => cat.id === 1);
    if (conversationalCategory && Array.isArray(conversationalCategory.subcategories)) {
        showConversationalSubcategories(conversationalCategory.subcategories);
    }
}

// عرض الأقسام الفرعية لقسم Technical Tools
function showTechnicalSubcategories(subcategories) {
    const container = document.getElementById('categoryToolsGrid');
    
    // إضافة زر العودة للصفحة الرئيسية
    const backButton = `
        <div class="col-span-full mb-6">
            <button onclick="showHomeView()" class="btn-secondary">
                <i class="fas fa-arrow-left mr-2"></i>
                Back to Home
            </button>
        </div>
    `;
    
    container.innerHTML = backButton + subcategories.map(sub => `
        <div class="tool-card bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 cursor-pointer flex flex-col items-center justify-center py-8 hover:shadow-lg transition" onclick="showTechnicalSubcategoryTools('${sub.id}', '${sub.name}', '${sub.icon}')">
            <div class="text-4xl mb-4 text-gray-600"><i class="${sub.icon}"></i></div>
            <h3 class="font-bold text-lg text-gray-900 mb-1">${sub.name}</h3>
        </div>
    `).join('');
}



// عرض الأقسام الفرعية لقسم Marketing & Plans
function showMarketingSubcategories(subcategories) {
    const container = document.getElementById('categoryToolsGrid');
    
    // إضافة زر العودة للصفحة الرئيسية
    const backButton = `
        <div class="col-span-full mb-6">
            <button onclick="showHomeView()" class="btn-secondary">
                <i class="fas fa-arrow-left mr-2"></i>
                Back to Home
            </button>
        </div>
    `;
    
    const allToolsCard = `
        <div class="tool-card bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 cursor-pointer flex flex-col items-center justify-center py-8 hover:shadow-lg transition"
            onclick="showAllMarketingTools()">
            <div class="text-4xl mb-4 text-green-600"><i class="fas fa-layer-group"></i></div>
            <h3 class="font-bold text-lg text-gray-900 mb-1">All Marketing Tools</h3>
        </div>
    `;
    
    container.innerHTML = backButton + allToolsCard + subcategories.map(sub => `
        <div class="tool-card bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 cursor-pointer flex flex-col items-center justify-center py-8 hover:shadow-lg transition" onclick="showMarketingSubcategoryTools('${sub.id}', '${sub.name}', '${sub.icon}')">
            <div class="text-4xl mb-4 text-gray-600"><i class="${sub.icon}"></i></div>
            <h3 class="font-bold text-lg text-gray-900 mb-1">${sub.name}</h3>
        </div>
    `).join('');
}

function showTechnicalSubcategoryTools(subcategoryId, subcategoryName, subcategoryIcon) {
    const tools = aiToolsData.tools.filter(tool => tool.categoryId === 5 && tool.subcategoryId === subcategoryId);
    const container = document.getElementById('categoryToolsGrid');
    document.getElementById('categoryTitle').textContent = subcategoryName;
    document.getElementById('categoryDescription').textContent = '';
    
    // إضافة زر العودة لقسم Technical Tools
    const backButton = `
        <div class="col-span-full mb-6">
            <button onclick="backToTechnicalTools()" class="btn-secondary">
                <i class="fas fa-arrow-left mr-2"></i>
                Back to Technical Tools
            </button>
        </div>
    `;
    
    if (tools.length > 0) {
        console.log("Tools found:", tools);
        container.innerHTML = backButton + tools.map(tool => createToolCard(tool)).join('');
    } else {
        container.innerHTML = backButton + `
            <div class="col-span-full text-center py-12">
                <i class="${subcategoryIcon} text-gray-400 text-4xl mb-4"></i>
                <p class="text-gray-600">No tools available in ${subcategoryName} yet.</p>
            </div>
        `;
    }
}

// Show home view
function showHomeView() {
    currentView = 'home';
    currentCategory = null;
    
    // Show home sections
    categoriesSection.classList.remove('hidden');
    
    // Hide other sections
    searchResults.classList.add('hidden');
    categoryToolsSection.classList.add('hidden');
}

// Show tool modal
function showToolModal(toolId) {
    const tool = aiToolsData.tools.find(t => t.id === toolId);
    if (!tool) return;
    
    const category = aiToolsData.categories.find(cat => cat.id === tool.categoryId);
    
    let modalImageUrl = '';
    if (tool.url) {
        modalImageUrl = `https://image.thum.io/get/width/800/crop/600/noanimate/${tool.url}`;
    } else {
        modalImageUrl = 'https://via.placeholder.com/400x300/f3f4f6/6b7280?text=No+Image';
    }
    
    document.getElementById('modalTitle').textContent = tool.name;
    document.getElementById('modalContent').innerHTML = `
        <div class="space-y-4">
            <div class="rounded-lg overflow-hidden">
                <img src="${modalImageUrl}" 
                     alt="${tool.name}" 
                     class="w-full h-64 object-cover"
                     onerror="this.src='https://via.placeholder.com/400x300/f3f4f6/6b7280?text=No+Image'">
            </div>
            
            <div>
                <p class="text-gray-600 mb-4">${tool.description}</p>
                
                <div class="mb-4">
                    <span class="text-sm font-medium text-gray-500">Category: </span>
                    <span class="text-sm text-gray-900">${category.name}</span>
                </div>
                
                ${tool.tags && tool.tags.length > 0 ? `
                    <div class="mb-6">
                        <h4 class="font-semibold mb-2">Tags</h4>
                        <div class="flex flex-wrap gap-2">
                            ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <div class="flex gap-3">
                    <button class="btn-primary flex-1" onclick="openTool('${tool.url}')">
                        <i class="fas fa-external-link-alt mr-2"></i>
                        Visit Tool
                    </button>
                    <button class="btn-secondary flex-1" onclick="closeModal()">
                        <i class="fas fa-times mr-2"></i>
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Show modal
    toolModal.classList.remove('hidden');
}

// Open tool URL
function openTool(url) {
    window.open(url, '_blank');
}

// Close modal
function closeModal() {
    toolModal.classList.add('hidden');
}

// العودة لقسم Technical Tools
function backToTechnicalTools() {
    const technicalCategory = aiToolsData.categories.find(cat => cat.id === 5);
    if (technicalCategory && Array.isArray(technicalCategory.subcategories)) {
        showTechnicalSubcategories(technicalCategory.subcategories);
    }
}


function showMarketingSubcategoryTools(subcategoryId, subcategoryName, subcategoryIcon) {
    const tools = aiToolsData.tools.filter(tool => tool.categoryId === 7 && tool.subcategoryId === subcategoryId);
    const container = document.getElementById('categoryToolsGrid');
    document.getElementById('categoryTitle').textContent = subcategoryName;
    document.getElementById('categoryDescription').textContent = '';
    
    // إضافة زر العودة لقسم Marketing & Plans
    const backButton = `
        <div class="col-span-full mb-6">
            <button onclick="backToMarketingTools()" class="btn-secondary">
                <i class="fas fa-arrow-left mr-2"></i>
                Back to Marketing & Plans
            </button>
        </div>
    `;
    
    if (tools.length > 0) {
        console.log("Tools found:", tools);
        container.innerHTML = backButton + tools.map(tool => createToolCard(tool)).join('');
    } else {
        container.innerHTML = backButton + `
            <div class="col-span-full text-center py-12">
                <i class="${subcategoryIcon} text-gray-400 text-4xl mb-4"></i>
                <p class="text-gray-600">No tools available in ${subcategoryName} yet.</p>
            </div>
        `;
    }
}

function showAllMarketingTools() {
    const tools = aiToolsData.tools.filter(tool => tool.categoryId === 7);
    const container = document.getElementById('categoryToolsGrid');
    document.getElementById('categoryTitle').textContent = 'All Marketing Tools';
    document.getElementById('categoryDescription').textContent = 'Complete collection of marketing and planning AI tools';
    
    // إضافة زر العودة لقسم Marketing & Plans
    const backButton = `
        <div class="col-span-full mb-6">
            <button onclick="backToMarketingTools()" class="btn-secondary">
                <i class="fas fa-arrow-left mr-2"></i>
                Back to Marketing & Plans
            </button>
        </div>
    `;
    
    if (tools.length > 0) {
        console.log("All Marketing Tools found:", tools);
        container.innerHTML = backButton + tools.map(tool => createToolCard(tool)).join('');
    } else {
        container.innerHTML = backButton + `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-chart-line text-gray-400 text-4xl mb-4"></i>
                <p class="text-gray-600">No marketing tools available yet.</p>
            </div>
        `;
    }
}


function showContentWritingTools() {
    const tools = aiToolsData.tools.filter(tool => tool.categoryId === 7 && tool.subcategoryId === 'content-writing');
    const container = document.getElementById('categoryToolsGrid');
    document.getElementById('categoryTitle').textContent = 'Content Writing Tools';
    document.getElementById('categoryDescription').textContent = 'AI-powered content writing and copywriting tools';
    
    // إضافة زر العودة لقسم Marketing & Plans
    const backButton = `
        <div class="col-span-full mb-6">
            <button onclick="backToMarketingTools()" class="btn-secondary">
                <i class="fas fa-arrow-left mr-2"></i>
                Back to Marketing & Plans
            </button>
        </div>
    `;
    
    if (tools.length > 0) {
        console.log("Content Writing Tools found:", tools);
        container.innerHTML = backButton + tools.map(tool => createToolCard(tool)).join('');
    } else {
        container.innerHTML = backButton + `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-pen-fancy text-gray-400 text-4xl mb-4"></i>
                <p class="text-gray-600">No Content Writing tools available yet.</p>
            </div>
        `;
    }
}

// العودة لقسم Marketing & Plans
function backToMarketingTools() {
    const marketingCategory = aiToolsData.categories.find(cat => cat.id === 7);
    if (marketingCategory && Array.isArray(marketingCategory.subcategories)) {
        showMarketingSubcategories(marketingCategory.subcategories);
    }
}

export const slidesData = [
  {
    id: "title",
    layout: "center",
    class: "title-slide",
    content: {
      title: "Augment Code & Claude Code",
      subtitle: "Two AI Coding Assistants Compared",
      description: "",
      footer: "",
    },
  },
  {
    id: "the-problem",
    layout: "default",
    content: {
      title: "The Problem: Limited Context in AI Agents",
      sections: [
        {
          title: "Traditional AI Coding Assistants Struggle With:",
          items: [
            "Understanding large codebases (>1000 files)",
            "Maintaining context across multiple files",
            "Finding relevant code patterns and dependencies",
            "Making changes that don't break existing functionality",
            "Understanding project-specific conventions and architecture",
          ],
        },
        {
          title: "The Result:",
          items: [
            "Generic suggestions that don't fit your codebase",
            "Breaking changes due to missing context",
            "Repetitive explanations of your project structure",
            "Time wasted on manual context gathering",
            "Inability to handle complex, multi-file refactors",
          ],
        },
        {
          title: "What We Need:",
          items: [
            "Deep understanding of entire codebase",
            "Persistent memory of project patterns",
            "Ability to make coordinated changes across files",
            "Context-aware suggestions and refactoring",
          ],
        },
      ],
    },
  },
  {
    id: "how-they-solve-it",
    layout: "default",
    content: {
      title: "How Each Tool Solves the Context Problem",
      sections: [
        {
          title: "Augment Code's Approach:",
          items: [
            "Context Engine: Real-time indexing of entire codebase",
            "Semantic understanding: Maps relationships between files/functions",
            "Persistent sessions: Remembers previous conversations and decisions",
            "IDE integration: Works within your existing development environment",
            "Multi-file awareness: Can coordinate changes across dozens of files",
            "Project patterns: Learns your team's coding conventions over time",
          ],
        },
        {
          title: "Claude Code's Approach:",
          items: [
            "Direct file access: Can read/write any file in your project",
            "Command execution: Runs tests, builds, and debugging tools",
            "Git integration: Understands version history and branch context",
            "Terminal-native: Works with your existing CLI workflow",
            "Custom agents: Specialized contexts for different types of tasks",
            "MCP integration: Extensible with custom tools and data sources",
          ],
        },
        {
          title: "Both Tools Address:",
          items: [
            "Large codebase navigation and understanding",
            "Context-aware code generation and refactoring",
            "Reduced need for manual context explanation",
            "Ability to handle complex, multi-step development tasks",
          ],
        },
      ],
    },
  },
  {
    id: "what-they-are",
    layout: "default",
    content: {
      title: "Two Different Context Solutions",
      sections: [
        {
          title: "Augment Code: The Context Engine Approach",
          items: [
            "Real-time codebase indexing → Always knows your entire project",
            "IDE integration → Context within your development workflow",
            "Persistent sessions → Remembers past conversations and decisions",
            "Multi-model support (GPT-4o, Claude 3.5, Gemini) → Best AI for each task",
            "Enterprise security (SOC 2) → Safe for production codebases",
            "Usage-based pricing ($50-250/month) → Scales with team size",
          ],
        },
        {
          title: "Claude Code: The Direct Access Approach",
          items: [
            "Terminal-native → Works with existing CLI workflows",
            "Direct file manipulation → No abstraction layer between AI and code",
            "Command execution → Can run tests, builds, and debugging tools",
            "Custom agents → Specialized contexts for different problem types",
            "MCP integration → Extensible with custom tools and data sources",
            "Claude Pro included ($20/month) → Lower barrier to entry",
          ],
        },
        {
          title: "Key Difference:",
          items: [
            "Augment: Builds comprehensive context upfront, works within IDE",
            "Claude: Gathers context on-demand, works directly with files/commands",
          ],
        },
      ],
    },
  },
  {
    id: "augment-demo",
    layout: "default",
    content: {
      title: "Augment Code Demo",
      subtitle: "AI-Powered Development That Actually Ships",
      terminal: [
        {
          type: "comment",
          text: "// Real scenario: Friday 5pm, complex refactor needed",
        },
        { type: "prompt", text: "$ augment" },
        {
          type: "command",
          text: "@augment refactor our authentication to OAuth2 with refresh tokens",
        },
        { type: "output", text: "Analyzing 12,000+ files in codebase..." },
        { type: "output", text: "Found 47 files requiring changes" },
        { type: "output", text: "Refactoring authentication flow..." },
        { type: "output", text: "Updated middleware, routes, and models" },
        { type: "output", text: "Generated migration scripts" },
        { type: "output", text: "Updated API documentation" },
        { type: "output", text: "Created PR #234 with full test coverage" },
        { type: "comment", text: "" },
        { type: "comment", text: "// Close laptop, enjoy weekend" },
        { type: "comment", text: "" },
        { type: "comment", text: "// Monday morning - Review the magic" },
        { type: "prompt", text: "$ gh pr view 234" },
        { type: "success", text: "OAuth2 Migration Complete" },
        { type: "success", text: "  • 47 files changed, 2,341 additions" },
        { type: "success", text: "  • All 156 tests passing" },
        { type: "success", text: "  • Zero breaking changes" },
        { type: "success", text: "  • Ready for review" },
      ],
      highlights: [
        "Context Engine runs locally on your machine",
        "Indexes and understands your codebase structure",
        "Maintains context across conversations",
        "Can edit multiple files in sequence",
        "Supports custom prompts and workflows",
        "SOC 2 Type II certified",
      ],
    },
  },
  {
    id: "claude-demo",
    layout: "default",
    content: {
      title: "Claude Code Demo",
      subtitle: "Real-time problem solving in your terminal",
      terminal: [
        {
          type: "comment",
          text: "// Production is down - Redis connection issues",
        },
        {
          type: "prompt",
          text: '$ claude "debug redis connection issues in production logs"',
        },
        { type: "output", text: "Analyzing logs/production.log..." },
        {
          type: "output",
          text: "Found: Connection pool exhausted at 18:42 UTC",
        },
        { type: "output", text: "Creating fix in config/redis.yml..." },
        { type: "output", text: "Increased pool size from 5 to 25" },
        { type: "output", text: "Writing connection pool tests..." },
        { type: "output", text: "Updated package.json with monitoring script" },
        { type: "prompt", text: "$ npm test" },
        { type: "success", text: "All tests passing (42 tests, 0.8s)" },
        {
          type: "prompt",
          text: "$ git commit -m 'Fix Redis connection pool exhaustion'",
        },
        {
          type: "success",
          text: "[main abc123] Fix Redis connection pool exhaustion",
        },
        {
          type: "success",
          text: "3 files changed, 47 insertions(+), 2 deletions(-)",
        },
      ],
      highlights: [
        "Instant production debugging",
        "Direct file editing with context",
        "Automatic test generation",
        "Runs any command directly",
        "Git-aware with smart commits",
      ],
    },
  },
  {
    id: "sub-agents",
    layout: "default",
    content: {
      title: "Claude Code Sub-Agents",
      terminal: [
        { type: "prompt", text: "$ ls .claude/agents/" },
        { type: "output", text: "test-writer.md" },
        { type: "output", text: "refactor-expert.md" },
        { type: "output", text: "performance-optimizer.md" },
        { type: "prompt", text: '$ claude "optimize database queries"' },
        { type: "output", text: "performance-optimizer agent activated" },
      ],
      highlights: [
        "Write your own agents",
        "Community has 56+ ready",
        "Each has separate context",
      ],
    },
  },
  {
    id: "real-usage",
    layout: "table",
    content: {
      title: "What Each Does Best",
      compact: true,
      table: {
        headers: ["Task", "Tool", "Why"],
        rows: [
          [
            "Large codebase refactoring",
            "Augment",
            "Context Engine indexes entire codebase",
          ],
          ["Quick terminal tasks", "Claude Code", "Direct CLI access"],
          ["IDE-based development", "Augment", "VS Code/JetBrains plugins"],
          ["Custom automation scripts", "Claude Code", "Scriptable Hooks"],
          ["MCP and Tools", "Both", "Augments UI is better"],
          ["Learning/experimenting", "Both", "Just try it out"],
        ],
      },
    },
  },
  {
    id: "when-to-use",
    layout: "default",
    content: {
      title: "When to Use Each Tool",
      sections: [
        {
          title: "Use Augment Code When:",
          items: [
            "You need IDE integration (VS Code/JetBrains)",
            "Working with large, complex codebases",
            "You want persistent context across sessions",
            "Enterprise security requirements (SOC 2)",
            "You like 'remote' agents to cook while you afk",
          ],
        },
        {
          title: "Use Claude Code When:",
          items: [
            "You prefer terminal/CLI workflows",
            "Hands-off tasking and debugging",
            "You want direct LLM access without abstraction",
            "Building custom automation scripts",
            "You're already a Claude Pro subscriber",
          ],
        },
      ],
    },
  },
  {
    id: "live-demo",
    layout: "center",
    content: {
      title: "Live Demo",
      subtitle: "Pick one:",
      points: [
        "1. Augment: Show Context Engine indexing a real codebase",
        "2. Claude Code: Live debugging session in terminal",
        "3. Both: How they handle the same refactoring task differently",
      ],
    },
  },
  {
    id: "get-it",
    layout: "default",
    content: {
      title: "Getting Started",
      sections: [
        {
          title: "Augment Code",
          items: [
            "Visit: augmentcode.com",
            "Free tier: 10 messages/month",
            "Pro tiers: $50-250/month",
            "Install: VS Code/JetBrains marketplace",
          ],
        },
        {
          title: "Claude Code",
          items: [
            "Visit: claude.ai/code",
            "Included with Claude Pro ($20/month)",
            "Install: npm install -g @anthropic-ai/claude-code",
            "Start: Type 'claude' in terminal",
          ],
        },
      ],
      footer: "Try both free tiers to find what works best for your team",
    },
  },
  {
    id: "sources",
    layout: "default",
    content: {
      title: "Sources & References",
      sections: [
        {
          title: "Augment Code Resources:",
          items: [
            "Pricing: augmentcode.com/pricing",
            "Documentation: docs.augmentcode.com",
            "Real-time Index Blog: augmentcode.com/blog/a-real-time-index-for-your-codebase",
            "VS Code Extension: marketplace.visualstudio.com/items?itemName=augmentcode",
          ],
        },
        {
          title: "Claude Code Resources:",
          items: [
            "Documentation: docs.anthropic.com/en/docs/claude-code",
            "Quickstart: docs.anthropic.com/en/docs/claude-code/quickstart",
            "GitHub: github.com/anthropics/claude-code",
            "Claude Pro Pricing: anthropic.com/pricing",
            "GitHub Actions: docs.anthropic.com/en/docs/claude-code/github-actions",
          ],
        },
        {
          title: "Related Technologies:",
          items: [
            "Model Context Protocol: modelcontextprotocol.io",
            "MCP Servers: github.com/modelcontextprotocol/servers",
          ],
        },
      ],
    },
  },
  {
    id: "questions",
    layout: "center",
    class: "title-slide",
    content: {
      title: "Questions?",
      subtitle: "",
      description: "",
      footer: "",
    },
  },
];

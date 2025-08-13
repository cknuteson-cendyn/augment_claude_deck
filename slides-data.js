export const slidesData = [
  {
    id: "title",
    layout: "center",
    class: "title-slide",
    content: {
      title: "Augment Code & Claude Code",
      subtitle: "Two AI Coding Assistants Compared",
      description: "What they actually do and how much they cost",
      footer: "",
    },
  },
  {
    id: "what-they-are",
    layout: "default",
    content: {
      title: "What They Actually Are",
      sections: [
        {
          title: "Augment Code:",
          items: [
            "💰 $50-250/month (based on usage)",
            "🔌 VS Code/JetBrains/Cursor integration",
            "🧠 Context Engine indexes your codebase",
            "💬 600-4500 messages/month depending on tier",
            "🔒 SOC 2 Type II compliant",
            "🏢 Enterprise tier with SSO/SCIM",
            "⚡ Uses GPT-4o, Claude 3.5, Gemini models",
          ],
        },
        {
          title: "Claude Code:",
          items: [
            "💰 Part of Claude Pro ($20/month)",
            "⚡ Terminal-based CLI tool",
            "🔍 Grep-like codebase search",
            "🎯 Custom agents via markdown files",
            "🚀 Uses Claude 3.5 Sonnet or Opus",
            "🔧 Direct file editing and command execution",
            "📦 Works with MCP (Model Context Protocol)",
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
        { type: "comment", text: "// Real scenario: Friday 5pm, complex refactor needed" },
        { type: "prompt", text: "$ augment" },
        { type: "command", text: "@augment refactor our authentication to OAuth2 with refresh tokens" },
        { type: "output", text: "🔍 Analyzing 12,000+ files in codebase..." },
        { type: "output", text: "📋 Found 47 files requiring changes" },
        { type: "output", text: "🔨 Refactoring authentication flow..." },
        { type: "output", text: "✅ Updated middleware, routes, and models" },
        { type: "output", text: "🧪 Generated migration scripts" },
        { type: "output", text: "📝 Updated API documentation" },
        { type: "output", text: "✨ Created PR #234 with full test coverage" },
        { type: "comment", text: "" },
        { type: "comment", text: "// Close laptop, enjoy weekend 🎉" },
        { type: "comment", text: "" },
        { type: "comment", text: "// Monday morning - Review the magic" },
        { type: "prompt", text: "$ gh pr view 234" },
        { type: "success", text: "✅ OAuth2 Migration Complete" },
        { type: "success", text: "  • 47 files changed, 2,341 additions" },
        { type: "success", text: "  • All 156 tests passing" },
        { type: "success", text: "  • Zero breaking changes" },
        { type: "success", text: "  • Ready for review" },
      ],
      highlights: [
        "🔌 Context Engine runs locally on your machine",
        "🧠 Indexes and understands your codebase structure",
        "🎯 Maintains context across conversations",
        "✅ Can edit multiple files in sequence",
        "⚡ Supports custom prompts and workflows",
        "🔒 SOC 2 Type II certified",
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
        { type: "comment", text: "// Production is down - Redis connection issues" },
        { type: "prompt", text: '$ claude "debug redis connection issues in production logs"' },
        { type: "output", text: "🔍 Analyzing logs/production.log..." },
        { type: "output", text: "⚠️  Found: Connection pool exhausted at 18:42 UTC" },
        { type: "output", text: "📝 Creating fix in config/redis.yml..." },
        { type: "output", text: "✅ Increased pool size from 5 to 25" },
        { type: "output", text: "🧪 Writing connection pool tests..." },
        { type: "output", text: "📦 Updated package.json with monitoring script" },
        { type: "prompt", text: "$ npm test" },
        { type: "success", text: "✓ All tests passing (42 tests, 0.8s)" },
        { type: "prompt", text: "$ git commit -m 'Fix Redis connection pool exhaustion'" },
        { type: "success", text: "[main abc123] Fix Redis connection pool exhaustion" },
        { type: "success", text: "3 files changed, 47 insertions(+), 2 deletions(-)" },
      ],
      highlights: [
        "🚨 Instant production debugging",
        "📝 Direct file editing with context",
        "🧪 Automatic test generation",
        "🔧 Runs any command directly",
        "📊 Git-aware with smart commits",
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
        { type: "output", text: "→ performance-optimizer agent activated" },
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
          ["Large codebase refactoring", "Augment", "Context Engine indexes entire codebase"],
          ["Quick terminal tasks", "Claude Code", "Direct CLI access"],
          ["IDE-based development", "Augment", "VS Code/JetBrains plugins"],
          ["Custom automation scripts", "Claude Code", "Scriptable with MCP"],
          ["Enterprise compliance", "Augment", "SOC 2 Type II certified"],
          ["Learning/experimenting", "Both", "Free tiers available"],
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
            "Team collaboration features needed",
          ],
        },
        {
          title: "Use Claude Code When:",
          items: [
            "You prefer terminal/CLI workflows",
            "Quick one-off tasks and debugging",
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
          title: "🔷 Augment Code",
          items: [
            "🌐 Visit: augmentcode.com",
            "💳 Free tier: 10 messages/month",
            "💎 Pro tiers: $50-250/month",
            "📦 Install: VS Code/JetBrains marketplace",
          ],
        },
        {
          title: "🤖 Claude Code",
          items: [
            "🌐 Visit: claude.ai/code",
            "💳 Included with Claude Pro ($20/month)",
            "📦 Install: npm install -g @anthropic-ai/claude-code",
            "🚀 Start: Type 'claude' in terminal",
          ],
        },
      ],
      footer: "💡 Try both free tiers to find what works best for your team",
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
      subtitle: "Let's discuss how these tools can help your team",
      description: "",
      footer: "",
    },
  },
];

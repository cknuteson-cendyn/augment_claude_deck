export const slidesData = [
    {
        id: 'title',
        layout: 'center',
        class: 'title-slide',
        content: {
            title: 'Augment Code & Claude Code',
            subtitle: 'Two AI tools that actually work',
            description: '',
            footer: '10 minutes, no BS'
        }
    },
    {
        id: 'what-they-are',
        layout: 'default',
        content: {
            title: 'What They Actually Are',
            sections: [
                {
                    title: 'Augment Code:',
                    items: [
                        'VS Code/JetBrains plugin',
                        'Remote agents work after you close laptop',
                        '$50/month'
                    ]
                },
                {
                    title: 'Claude Code:',
                    items: [
                        'Terminal CLI from Anthropic',
                        'Sub-agents for specialized tasks',
                        'API pricing'
                    ]
                }
            ]
        }
    },
    {
        id: 'augment-demo',
        layout: 'default',
        content: {
            title: 'Augment Code Demo',
            terminal: [
                { type: 'prompt', text: '// Friday 5pm in VS Code' },
                { type: 'output', text: '@augment refactor auth to OAuth2' },
                { type: 'output', text: '// Close laptop, go home' },
                { type: 'output', text: '' },
                { type: 'prompt', text: '// Monday morning' },
                { type: 'output', text: 'PR ready: 47 files changed, tests pass' }
            ],
            highlights: [
                'It actually works offline',
                'Full codebase context',
                'Creates real PRs'
            ]
        }
    },
    {
        id: 'claude-demo',
        layout: 'default',
        content: {
            title: 'Claude Code Demo',
            terminal: [
                { type: 'prompt', text: '$ claude "add rate limiting"' },
                { type: 'output', text: 'Creating middleware...' },
                { type: 'output', text: 'Writing tests...' },
                { type: 'output', text: 'Updated 4 files' },
                { type: 'output', text: '$ git diff  # see actual changes' }
            ],
            highlights: [
                'Direct file editing',
                'Runs commands',
                'Git-aware'
            ]
        }
    },
    {
        id: 'sub-agents',
        layout: 'default',
        content: {
            title: 'Claude Code Sub-Agents',
            terminal: [
                { type: 'prompt', text: '$ ls .claude/agents/' },
                { type: 'output', text: 'test-writer.md' },
                { type: 'output', text: 'refactor-expert.md' },
                { type: 'output', text: 'performance-optimizer.md' },
                { type: 'prompt', text: '$ claude "optimize database queries"' },
                { type: 'output', text: '→ performance-optimizer agent activated' }
            ],
            highlights: [
                'Write your own agents',
                'Community has 56+ ready',
                'Each has separate context'
            ]
        }
    },
    {
        id: 'real-usage',
        layout: 'table',
        content: {
            title: 'What Each Does Best',
            compact: true,
            table: {
                headers: ['Task', 'Tool', 'Why'],
                rows: [
                    ['Understand 500K line codebase', 'Augment', 'Indexes everything'],
                    ['Fix bug while sleeping', 'Augment', 'Remote agents'],
                    ['Complex terminal automation', 'Claude Code', 'Runs commands'],
                    ['Multi-step debugging', 'Claude Code', 'Sub-agents'],
                    ['Work in JetBrains', 'Augment', 'Has plugin'],
                    ['Custom workflows', 'Claude Code', 'Scriptable']
                ]
            }
        }
    },
    {
        id: 'live-demo',
        layout: 'center',
        content: {
            title: 'Live Demo',
            subtitle: 'Pick one:',
            points: [
                '1. Augment: Start remote agent, show PR',
                '2. Claude Code: Build feature from terminal',
                '3. Both: How they work together'
            ]
        }
    },
    {
        id: 'get-it',
        layout: 'center',
        content: {
            title: 'How to Get Them',
            subtitle: '',
            points: [
                'Augment: augmentcode.com',
                'Claude Code: npm install -g @anthropic-ai/claude-code',
                'Both cost ~$50-100/mo total'
            ],
            tagline: 'Questions?'
        }
    }
];
export class SlideBuilder {
    constructor() {
        this.layouts = {
            center: this.buildCenterSlide,
            default: this.buildDefaultSlide,
            comparison: this.buildComparisonSlide,
            table: this.buildTableSlide,
            metrics: this.buildMetricsSlide,
            split: this.buildSplitSlide,
            flow: this.buildFlowSlide,
            timeline: this.buildTimelineSlide,
            pricing: this.buildPricingSlide,
            cta: this.buildCtaSlide
        };
    }

    build(slideData) {
        const layoutBuilder = this.layouts[slideData.layout] || this.buildDefaultSlide;
        return layoutBuilder.call(this, slideData);
    }

    buildCenterSlide(data) {
        const { content } = data;
        return `
            <section class="center ${data.class || ''}">
                <h1>${content.title}</h1>
                ${content.subtitle ? `<h3>${content.subtitle}</h3>` : ''}
                ${content.description ? `<p style="margin-top: 30px;"><em>${content.description}</em></p>` : ''}
                ${content.points ? this.buildList(content.points) : ''}
                ${content.footer ? `<div class="fragment fade-in" style="margin-top: 40px;"><p>${content.footer}</p></div>` : ''}
                ${content.tagline ? `<p class="fragment" style="margin-top: 40px; font-size: 1.2em;"><em>${content.tagline}</em></p>` : ''}
            </section>
        `;
    }

    buildDefaultSlide(data) {
        const { content } = data;
        let html = `<section class="${data.class || ''}">`;
        html += `<h2>${content.title}</h2>`;
        
        if (content.table) {
            html += this.buildTable(content.table, 'fragment');
        }
        
        if (content.sections) {
            content.sections.forEach(section => {
                html += `<div class="highlight-box fragment">`;
                html += `<h3>${section.title}</h3>`;
                html += this.buildList(section.items);
                html += `</div>`;
            });
        }
        
        if (content.terminal) {
            html += this.buildTerminal(content.terminal);
        }
        
        if (content.highlights) {
            html += `<div class="highlight-box fragment">`;
            html += `<h3>Key Features:</h3>`;
            html += this.buildList(content.highlights);
            html += `</div>`;
        }
        
        if (content.callout) {
            html += `<p class="fragment" style="text-align: center; margin-top: 30px; font-size: 1.2em;">`;
            html += `<strong>${content.callout}</strong></p>`;
        }
        
        html += `</section>`;
        return html;
    }

    buildComparisonSlide(data) {
        const { content } = data;
        return `
            <section class="center">
                <h2>${content.title}</h2>
                <div class="tools-comparison">
                    ${content.tools.map((tool, index) => `
                        <div class="tool-card fragment">
                            <h3>${tool.name}</h3>
                            <p><strong>${tool.tagline}</strong></p>
                            <ul>
                                ${tool.features.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                        </div>
                        ${index < content.tools.length - 1 ? '<div class="vs-divider fragment">+</div>' : ''}
                    `).join('')}
                </div>
            </section>
        `;
    }

    buildTableSlide(data) {
        const { content } = data;
        return `
            <section>
                <h2>${content.title}</h2>
                ${this.buildTable(content.table, content.compact ? 'compact' : '')}
            </section>
        `;
    }

    buildMetricsSlide(data) {
        const { content } = data;
        return `
            <section>
                <h2>${content.title}</h2>
                <div class="feature-grid">
                    ${content.metrics.map(metric => `
                        <div class="highlight-box fragment">
                            <h3>${metric.label}</h3>
                            <span class="metric">${metric.value}</span>
                            ${metric.details ? this.buildList(metric.details) : ''}
                        </div>
                    `).join('')}
                </div>
                ${content.outcomes ? `
                    <div class="fragment" style="text-align: center; margin-top: 20px;">
                        <p><strong>Real Results:</strong></p>
                        ${content.outcomes.map(o => `<p>• ${o}</p>`).join('')}
                    </div>
                ` : ''}
            </section>
        `;
    }

    buildSplitSlide(data) {
        const { content } = data;
        return `
            <section>
                <h2>${content.title}</h2>
                <div class="feature-grid">
                    <div class="highlight-box fragment">
                        <h3>${content.left.title}</h3>
                        ${this.buildList(content.left.items)}
                    </div>
                    <div class="highlight-box fragment">
                        <h3>${content.right.title}</h3>
                        ${this.buildList(content.right.items)}
                    </div>
                </div>
            </section>
        `;
    }

    buildFlowSlide(data) {
        const { content } = data;
        return `
            <section class="center">
                <h2>${content.title}</h2>
                <div style="display: flex; align-items: center; justify-content: center; margin: 30px 0; flex-wrap: wrap;">
                    ${content.steps.map((step, index) => `
                        <div class="tool-card" style="flex: 1; min-width: 200px;">
                            <h3>${step.title}</h3>
                            <p><strong>${step.tool}</strong></p>
                            <p>${step.description}</p>
                        </div>
                        ${index < content.steps.length - 1 ? '<div style="font-size: 2em; margin: 0 10px;">→</div>' : ''}
                    `).join('')}
                </div>
                <p class="fragment" style="font-size: 1.2em; margin-top: 20px;">
                    <strong>${content.result}</strong>
                </p>
            </section>
        `;
    }

    buildTimelineSlide(data) {
        const { content } = data;
        return `
            <section>
                <h2>${content.title}</h2>
                <div class="feature-grid">
                    ${content.phases.map(phase => `
                        <div class="feature-card fragment">
                            <h3>${phase.time}</h3>
                            <p><strong>${phase.title}</strong></p>
                            <ul style="font-size: 0.9em;">
                                ${phase.tasks.map(t => `<li>${t}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    buildPricingSlide(data) {
        const { content } = data;
        return `
            <section>
                <h2>${content.title}</h2>
                ${content.plans.map(plan => `
                    <div class="highlight-box fragment">
                        <h3>${plan.name}</h3>
                        <ul>
                            ${plan.tiers.map(tier => `
                                <li><span class="pricing-badge">${tier.label}</span> ${tier.desc}</li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
                <p class="fragment" style="text-align: center; margin-top: 20px; font-size: 1.1em;">
                    <strong>${content.summary}</strong>
                </p>
            </section>
        `;
    }

    buildCtaSlide(data) {
        const { content } = data;
        return `
            <section class="center">
                <h1>${content.title}</h1>
                <div class="feature-grid" style="margin-top: 40px;">
                    ${content.actions.map(action => `
                        <div class="highlight-box">
                            <h3>${action.title}</h3>
                            ${action.links.map(link => `<p>${link}</p>`).join('')}
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    // Helper methods
    buildTable(tableData, className = '') {
        const fragmentClass = className.includes('fragment') ? '' : 'fragment';
        return `
            <table class="comparison-table ${className} ${fragmentClass}">
                <thead>
                    <tr>
                        ${tableData.headers.map(h => `<th>${h}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${tableData.rows.map(row => `
                        <tr class="fragment">
                            ${row.map(cell => {
                                const formatted = this.formatCell(cell);
                                return `<td class="${formatted.class}">${formatted.text}</td>`;
                            }).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    buildTerminal(commands) {
        return `
            <div class="demo-terminal">
                ${commands.map(cmd => `
                    <p class="${cmd.type} ${cmd.type === 'output' ? 'fragment' : ''}">
                        ${cmd.text}
                    </p>
                `).join('')}
            </div>
        `;
    }

    buildList(items) {
        return `
            <ul>
                ${items.map(item => {
                    const formatted = this.formatText(item);
                    return `<li>${formatted}</li>`;
                }).join('')}
            </ul>
        `;
    }

    formatCell(text) {
        if (text.includes('✓')) return { text, class: 'checkmark' };
        if (text.includes('✗')) return { text, class: 'crossmark' };
        return { text, class: '' };
    }

    formatText(text) {
        // Convert **text** to <strong>text</strong>
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }
}
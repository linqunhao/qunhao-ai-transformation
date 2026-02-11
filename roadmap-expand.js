// Expand Roadmap functionality
document.addEventListener('DOMContentLoaded', function() {
    const expandBtn = document.getElementById('expand-roadmap');
    const roadmapContainer = document.getElementById('roadmap-container');
    
    if (expandBtn && roadmapContainer) {
        // Check if full content exists
        const hiddenSprints = roadmapContainer.querySelectorAll('.sprint-hidden');
        
        expandBtn.addEventListener('click', function() {
            const isExpanded = expandBtn.getAttribute('data-expanded') === 'true';
            
            if (!isExpanded) {
                // Generate full 12-week content if not exists
                if (hiddenSprints.length === 0) {
                    generateFullRoadmap();
                }
                
                // Show all sprints
                roadmapContainer.querySelectorAll('.sprint-hidden').forEach(sprint => {
                    sprint.classList.remove('hidden');
                    sprint.classList.add('animate-slide-up');
                });
                
                expandBtn.textContent = currentLang === 'en' ? '← Show Less' : '← 收起';
                expandBtn.setAttribute('data-expanded', 'true');
            } else {
                // Hide additional sprints
                roadmapContainer.querySelectorAll('.sprint-hidden').forEach(sprint => {
                    sprint.classList.add('hidden');
                });
                
                expandBtn.textContent = currentLang === 'en' ? 'View All 12 Weeks →' : '查看全部 12 周 →';
                expandBtn.setAttribute('data-expanded', 'false');
                
                // Scroll back to roadmap section
                document.getElementById('roadmap').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Generate full 12-week roadmap content
function generateFullRoadmap() {
    const container = document.getElementById('roadmap-container');
    const existingSprints = container.querySelectorAll('.sprint-card');
    
    // If we already have 6 sprints, don't regenerate
    if (existingSprints.length >= 6) return;
    
    // Sprint data with Chinese resources
    const sprints = [
        {
            num: 3,
            weeks: 'Week 5-6',
            title: 'Sprint 3: Machine Learning',
            titleZh: '冲刺 3：机器学习',
            desc: 'Master Scikit-learn, supervised/unsupervised learning, and model evaluation',
            descZh: '掌握Scikit-learn，监督/无监督学习，模型评估优化',
            color: 'f59e0b',
            resources: [
                { icon: '📘', text: '吴恩达机器学习 (网易云课堂)', textZh: '吴恩达机器学习 (网易云课堂)', url: 'https://study.163.com/course/introduction/1210076550.htm' },
                { icon: '📄', text: 'GitHub中文笔记', textZh: 'GitHub中文笔记', url: 'https://github.com/fengdu78/Coursera-ML-AndrewNg-Notes' },
                { icon: '🔧', text: 'Scikit-learn中文教程 (B站)', textZh: 'Scikit-learn中文教程 (B站)', url: '#' }
            ]
        },
        {
            num: 4,
            weeks: 'Week 7-8',
            title: 'Sprint 4: Deep Learning',
            titleZh: '冲刺 4：深度学习',
            desc: 'Neural networks, time series analysis, and predictive maintenance models',
            descZh: '神经网络基础，时间序列分析，预测性维护模型',
            color: '06b6d4',
            resources: [
                { icon: '📘', text: 'DeepLearning.AI (网易云课堂)', textZh: 'DeepLearning.AI (网易云课堂)', url: 'https://mooc.study.163.com/university/deeplearning_ai' },
                { icon: '📺', text: 'PyTorch中文教程 (B站)', textZh: 'PyTorch中文教程 (B站)', url: '#' },
                { icon: '📄', text: 'LSTM时间序列中文教程', textZh: 'LSTM时间序列中文教程', url: '#' }
            ]
        },
        {
            num: 5,
            weeks: 'Week 9-10',
            title: 'Sprint 5: LLM Tools',
            titleZh: '冲刺 5：LLM工具',
            desc: 'Large language models, OpenAI API integration, and AI application building',
            descZh: '大语言模型原理，OpenAI API集成，构建AI应用',
            color: 'f59e0b',
            resources: [
                { icon: '📘', text: 'OpenAI中文文档', textZh: 'OpenAI中文文档', url: 'https://openai.xiniushu.com/' },
                { icon: '📺', text: 'Prompt Engineering中文教程', textZh: 'Prompt Engineering中文教程', url: '#' },
                { icon: '🔧', text: 'OpenClaw (本地部署)', textZh: 'OpenClaw (本地部署)', url: '#' }
            ]
        },
        {
            num: 6,
            weeks: 'Week 11-12',
            title: 'Sprint 6: Project Integration',
            titleZh: '冲刺 6：项目整合',
            desc: 'Comprehensive project development, portfolio completion, and career planning',
            descZh: '综合项目开发，作品集完善，职业规划落地',
            color: '06b6d4',
            resources: [
                { icon: '🎯', text: '综合AI项目实战', textZh: '综合AI项目实战', url: '#' },
                { icon: '📝', text: 'GitHub/Gitee项目整理', textZh: 'GitHub/Gitee项目整理', url: '#' },
                { icon: '🎤', text: '项目演示视频制作', textZh: '项目演示视频制作', url: '#' }
            ]
        }
    ];
    
    // Generate HTML for additional sprints
    sprints.forEach(sprint => {
        const sprintHTML = `
            <div class="brutalist-card bg-[#334155] p-6 sprint-card sprint-hidden hidden opacity-75" data-sprint="${sprint.num}">
                <div class="flex flex-col md:flex-row gap-6">
                    <div class="md:w-1/4">
                        <div class="inline-block bg-[#${sprint.color}] text-black px-3 py-1 font-bold text-sm mb-2 brutalist-border">${sprint.weeks}</div>
                        <h3 class="font-['Space_Grotesk'] text-xl font-bold text-[#${sprint.color}]" data-i18n="roadmap.sprint${sprint.num}.title">${sprint.title}</h3>
                        <div class="mt-2">
                            <span class="text-xs px-2 py-1 rounded status-badge bg-gray-600" data-status="not-started">Not Started</span>
                        </div>
                    </div>
                    <div class="md:w-3/4">
                        <p class="text-gray-300 mb-4" data-i18n="roadmap.sprint${sprint.num}.desc">${sprint.desc}</p>
                        <div class="space-y-2">
                            ${sprint.resources.map(r => `
                                <div class="resource-link">
                                    <span class="text-[#${sprint.color}]">${r.icon}</span>
                                    <a href="${r.url}" target="_blank" class="text-[#06b6d4] hover:underline ml-2">${r.text}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Insert before the expand button
        const expandBtn = document.getElementById('expand-roadmap');
        if (expandBtn) {
            expandBtn.parentNode.insertBefore(document.createRange().createContextualFragment(sprintHTML), expandBtn.parentNode.lastElementChild);
        }
    });
    
    // Add i18n data for new sprints
    if (typeof i18n !== 'undefined') {
        sprints.forEach(sprint => {
            i18n.en[`roadmap.sprint${sprint.num}.title`] = sprint.title;
            i18n.en[`roadmap.sprint${sprint.num}.desc`] = sprint.desc;
            i18n.zh[`roadmap.sprint${sprint.num}.title`] = sprint.titleZh;
            i18n.zh[`roadmap.sprint${sprint.num}.desc`] = sprint.descZh;
        });
    }
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    .animate-slide-up {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .sprint-hidden {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }
    
    .sprint-hidden.hidden {
        display: none;
    }
`;
document.head.appendChild(style);

console.log('✅ Roadmap expansion script loaded');

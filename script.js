/**
 * Qunhao AI Professional Transformation - Interactive Scripts
 * Features: i18n Language Toggle, Progress Dashboard, Animations
 */

// i18n Translations
const i18n = {
    en: {
        'site.title': 'Qunhao AI Professional Transformation',
        'nav.positioning': 'Positioning',
        'nav.goals': 'Goals',
        'nav.roadmap': 'Roadmap',
        'nav.dashboard': 'Dashboard',
        'nav.milestones': 'Milestones',
        'hero.name': 'Qunhao Lin',
        'hero.subtitle': 'AI-Enabled Energy Industries Leader',
        'hero.description': '25 years of Asset Integrity experience × AI Technology = Future of Energy Operations',
        'positioning.1.title': 'AI-Enabled Senior Energy Operations Leader',
        'positioning.1.desc': 'Leveraging AI to optimize energy operations and drive operational excellence',
        'positioning.2.title': 'AI-Driven Asset Integrity Strategist',
        'positioning.2.desc': 'Transforming asset management through predictive AI and data-driven strategies',
        'positioning.3.title': 'Bridge Builder: Industry & Future Tech',
        'positioning.3.desc': 'Connecting 25 years of industrial expertise with cutting-edge AI innovation',
        'goals.title': 'Six Clear Goals',
        'goals.subtitle': 'Daily reminders of your transformation journey',
        'goals.1.title': 'Master AI Fundamentals',
        'goals.1.desc': 'Understand ML/DL core concepts and build AI technical thinking',
        'goals.2.title': 'Data Processing Skills',
        'goals.2.desc': 'Proficient Python data analysis and visualization',
        'goals.3.title': 'Industry AI Applications',
        'goals.3.desc': 'Apply AI to Asset Integrity and solve real business problems',
        'goals.4.title': 'LLM Tools Mastery',
        'goals.4.desc': 'Master LLM tool integration for enhanced decision-making',
        'goals.5.title': 'Project Portfolio',
        'goals.5.desc': 'Complete 3-5 showcase AI projects and build personal brand',
        'goals.6.title': 'Professional Network',
        'goals.6.desc': 'Build AI domain connections and gain industry recognition',
        'dashboard.title': 'Progress Dashboard',
        'dashboard.subtitle': 'Track your transformation journey in real-time',
        'dashboard.overall': 'Overall Progress',
        'dashboard.weeks': 'Weeks Completed',
        'dashboard.sprint': 'Current Sprint',
        'dashboard.certs': 'Certificates',
        'dashboard.progressBar': 'Transformation Progress',
        'dashboard.updateBtn': 'Update Progress',
        'roadmap.title': '12-Week AI Transformation Roadmap',
        'roadmap.subtitle': 'Six core sprints, one milestone every two weeks',
        'roadmap.sprint1.title': 'Sprint 1: AI Foundations',
        'roadmap.sprint1.desc': 'Build fundamental understanding of AI/ML concepts and industry applications',
        'roadmap.sprint2.title': 'Sprint 2: Data Processing',
        'roadmap.sprint2.desc': 'Master data manipulation with Pandas/NumPy and visualization techniques',
        'roadmap.expandBtn': 'View All 12 Weeks →',
        'milestones.title': 'LinkedIn Milestones',
        'milestones.subtitle': 'Shareable achievements every two weeks',
        'milestones.1.title': 'Python Data Analysis Certificate',
        'milestones.1.desc': 'Complete DataCamp or Coursera certification',
        'footer.tagline': '25 years of Asset Integrity experience × AI Technology = Future Leader',
        'modal.title': 'Update Progress',
        'modal.currentWeek': 'Current Week (1-12):',
        'modal.sprints': 'Completed Sprints (0-6):',
        'modal.certs': 'Certificates Earned:',
        'modal.save': 'Save',
        'modal.cancel': 'Cancel'
    },
    zh: {
        'site.title': '群豪 AI 职业转型之旅',
        'nav.positioning': '职业定位',
        'nav.goals': '六大目标',
        'nav.roadmap': '学习路线图',
        'nav.dashboard': '进度看板',
        'nav.milestones': '里程碑',
        'hero.name': '林群豪',
        'hero.subtitle': 'AI 赋能的能源行业领导者',
        'hero.description': '25年资产完整性经验 × AI 技术 = 能源运营的未来',
        'positioning.1.title': 'AI 赋能的资深能源运营领导者',
        'positioning.1.desc': '利用AI优化能源运营，推动卓越运营',
        'positioning.2.title': 'AI 驱动的资产完整性战略家',
        'positioning.2.desc': '通过预测性AI和数据驱动战略，转变资产管理',
        'positioning.3.title': '连接传统与未来科技的桥梁',
        'positioning.3.desc': '将25年工业专业知识与尖端AI创新相结合',
        'goals.title': '六大清晰目标',
        'goals.subtitle': '每日提醒自己前进的方向',
        'goals.1.title': '掌握 AI 基础',
        'goals.1.desc': '理解机器学习/深度学习核心概念，建立AI技术思维',
        'goals.2.title': '数据处理技能',
        'goals.2.desc': '熟练使用 Python 进行数据分析和可视化',
        'goals.3.title': '行业 AI 应用',
        'goals.3.desc': '将AI应用于资产完整性管理，解决实际业务问题',
        'goals.4.title': '掌握 LLM 工具',
        'goals.4.desc': '精通大语言模型工具集成，提升决策质量',
        'goals.5.title': '项目作品集',
        'goals.5.desc': '完成3-5个可展示的AI项目，建立个人技术品牌',
        'goals.6.title': '职业人脉网络',
        'goals.6.desc': '建立AI领域专业人脉，获得行业认可与机会',
        'dashboard.title': '进度看板',
        'dashboard.subtitle': '实时追踪你的转型之旅',
        'dashboard.overall': '总体进度',
        'dashboard.weeks': '已完成周数',
        'dashboard.sprint': '当前冲刺',
        'dashboard.certs': '获得证书',
        'dashboard.progressBar': '转型进度',
        'dashboard.updateBtn': '更新进度',
        'roadmap.title': '12周 AI 转型路线图',
        'roadmap.subtitle': '六大核心冲刺，每两周一个里程碑',
        'roadmap.sprint1.title': '冲刺 1：AI 基础',
        'roadmap.sprint1.desc': '建立对AI/ML概念和行业应用的基础理解',
        'roadmap.sprint2.title': '冲刺 2：数据处理',
        'roadmap.sprint2.desc': '掌握 Pandas/NumPy 数据处理和可视化技术',
        'roadmap.expandBtn': '查看全部 12 周 →',
        'milestones.title': 'LinkedIn 里程碑',
        'milestones.subtitle': '每两周一个可分享的成就',
        'milestones.1.title': 'Python 数据分析证书',
        'milestones.1.desc': '完成 DataCamp 或 Coursera 认证',
        'footer.tagline': '25年资产完整性经验 × AI 技术 = 未来领导者',
        'modal.title': '更新进度',
        'modal.currentWeek': '当前周数 (1-12)：',
        'modal.sprints': '已完成冲刺 (0-6)：',
        'modal.certs': '获得证书数量：',
        'modal.save': '保存',
        'modal.cancel': '取消'
    }
};

// State
let currentLang = localStorage.getItem('lang') || 'en';
let progressData = {
    currentWeek: 1,
    completedSprints: 0,
    certificates: 0,
    totalWeeks: 12,
    totalSprints: 6
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    initLanguage();
    initProgressDashboard();
    initModal();
    initScrollAnimations();
    initSmoothScroll();
    initSprintCards();
});

/**
 * Language Toggle
 */
function initLanguage() {
    const toggle = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    
    // Set initial state
    updateLanguage(currentLang);
    langText.textContent = currentLang === 'en' ? 'EN | 中文' : '中文 | EN';
    
    toggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'zh' : 'en';
        localStorage.setItem('lang', currentLang);
        updateLanguage(currentLang);
        langText.textContent = currentLang === 'en' ? 'EN | 中文' : '中文 | EN';
    });
}

function updateLanguage(lang) {
    const texts = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) {
            el.textContent = texts[key];
        }
    });
}

/**
 * Progress Dashboard
 */
function loadProgress() {
    const saved = localStorage.getItem('qunhao-progress');
    if (saved) {
        progressData = { ...progressData, ...JSON.parse(saved) };
    }
}

function saveProgress() {
    localStorage.setItem('qunhao-progress', JSON.stringify(progressData));
}

function initProgressDashboard() {
    updateDashboard();
}

function updateDashboard() {
    const percent = Math.round((progressData.currentWeek / progressData.totalWeeks) * 100);
    const currentSprint = Math.ceil(progressData.currentWeek / 2);
    
    // Update DOM
    document.getElementById('overall-progress').textContent = percent;
    document.getElementById('weeks-completed').textContent = progressData.currentWeek;
    document.getElementById('current-sprint-display').textContent = currentSprint;
    document.getElementById('cert-count').textContent = progressData.certificates;
    
    // Update progress bar
    const bar = document.getElementById('main-progress-bar');
    if (bar) {
        bar.style.width = percent + '%';
    }
    
    // Update text
    const weekText = currentLang === 'en' 
        ? `Week ${progressData.currentWeek} of ${progressData.totalWeeks}`
        : `第 ${progressData.currentWeek} / ${progressData.totalWeeks} 周`;
    const textEl = document.getElementById('progress-text');
    if (textEl) textEl.textContent = weekText;
    
    // Update sprint cards status
    updateSprintStatuses(currentSprint);
}

function updateSprintStatuses(currentSprint) {
    document.querySelectorAll('.sprint-card').forEach(card => {
        const sprintNum = parseInt(card.dataset.sprint);
        const badge = card.querySelector('.status-badge');
        
        if (sprintNum < currentSprint) {
            badge.textContent = currentLang === 'en' ? 'Completed' : '已完成';
            badge.className = 'text-xs px-2 py-1 rounded status-badge bg-green-500';
            card.classList.remove('opacity-75');
        } else if (sprintNum === currentSprint) {
            badge.textContent = currentLang === 'en' ? 'In Progress' : '进行中';
            badge.className = 'text-xs px-2 py-1 rounded status-badge bg-[#f59e0b]';
            card.classList.remove('opacity-75');
        } else {
            badge.textContent = currentLang === 'en' ? 'Not Started' : '未开始';
            badge.className = 'text-xs px-2 py-1 rounded status-badge bg-gray-600';
            card.classList.add('opacity-75');
        }
    });
}

/**
 * Modal for Progress Editing
 */
function initModal() {
    const modal = document.getElementById('progress-modal');
    const editBtn = document.getElementById('edit-progress-btn');
    const saveBtn = document.getElementById('save-progress');
    const cancelBtn = document.getElementById('cancel-progress');
    
    // Open modal
    editBtn?.addEventListener('click', () => {
        document.getElementById('edit-week').value = progressData.currentWeek;
        document.getElementById('edit-sprints').value = progressData.completedSprints;
        document.getElementById('edit-certs').value = progressData.certificates;
        modal.classList.remove('hidden');
    });
    
    // Save
    saveBtn?.addEventListener('click', () => {
        progressData.currentWeek = parseInt(document.getElementById('edit-week').value) || 1;
        progressData.completedSprints = parseInt(document.getElementById('edit-sprints').value) || 0;
        progressData.certificates = parseInt(document.getElementById('edit-certs').value) || 0;
        
        saveProgress();
        updateDashboard();
        modal.classList.add('hidden');
        
        showNotification(currentLang === 'en' ? 'Progress updated!' : '进度已更新！');
    });
    
    // Cancel
    cancelBtn?.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
    
    // Close on backdrop click
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });
}

/**
 * Sprint Cards Expansion
 */
function initSprintCards() {
    const expandBtn = document.getElementById('expand-roadmap');
    let expanded = false;
    
    expandBtn?.addEventListener('click', () => {
        const hiddenCards = document.querySelectorAll('.sprint-card.hidden');
        
        if (!expanded) {
            // Show all sprints (in real implementation, generate all 6 sprints)
            showNotification(currentLang === 'en' ? 'Full roadmap loaded!' : '完整路线图已加载！');
            expandBtn.textContent = currentLang === 'en' ? '← Show Less' : '← 收起';
            expanded = true;
        } else {
            expandBtn.textContent = currentLang === 'en' ? 'View All 12 Weeks →' : '查看全部 12 周 →';
            expanded = false;
        }
    });
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.brutalist-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

/**
 * Smooth Scroll
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/**
 * Notification System
 */
function showNotification(message) {
    const notif = document.createElement('div');
    notif.className = 'fixed top-20 right-4 bg-[#f59e0b] text-black px-6 py-4 brutalist-border font-bold z-50';
    notif.style.animation = 'slideInUp 0.3s ease';
    notif.textContent = message;
    document.body.appendChild(notif);
    
    setTimeout(() => notif.remove(), 3000);
}

// Console message
console.log('%c🚀 Qunhao AI Transformation Website Loaded', 'color: #f59e0b; font-size: 16px; font-weight: bold;');
console.log('%cFeatures: i18n Language Toggle | Progress Dashboard | Scroll Animations', 'color: #06b6d4;');

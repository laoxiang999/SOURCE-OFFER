// 语言切换功能
function switchLang(lang) {
    // 切换语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(lang)) {
            btn.classList.add('active');
        }
    });

    // 更新页面文本（根据选择的语言）
    const data = langData[lang];
    if (data) {
        // 导航栏
        document.querySelectorAll('.nav-links a')[0].textContent = data.nav.home;
        document.querySelectorAll('.nav-links a')[1].textContent = data.nav.products;
        document.querySelectorAll('.nav-links a')[2].textContent = data.nav.about;
        document.querySelectorAll('.nav-links a')[3].textContent = data.nav.contact;
        
        // Banner
        document.querySelector('.banner-text h2').textContent = data.banner.title;
        document.querySelector('.banner-text p').textContent = data.banner.desc;
        document.querySelector('.banner-text .btn').textContent = data.banner.btn;
        
        // 核心优势
        document.querySelector('.advantages h3').textContent = data.advantages.title;
        document.querySelectorAll('.card h4')[0].textContent = data.advantages.card1.title;
        document.querySelectorAll('.card p')[0].textContent = data.advantages.card1.desc;
        document.querySelectorAll('.card h4')[1].textContent = data.advantages.card2.title;
        document.querySelectorAll('.card p')[1].textContent = data.advantages.card2.desc;
        document.querySelectorAll('.card h4')[2].textContent = data.advantages.card3.title;
        document.querySelectorAll('.card p')[2].textContent = data.advantages.card3.desc;
        
        // 底部
        document.querySelectorAll('footer p')[0].textContent = data.footer.copyright;
        document.querySelectorAll('footer p')[1].textContent = data.footer.contact;

        // 更新页面语言属性
        document.documentElement.lang = lang;
    }
}

// 页面加载完成后执行
window.onload = function() {
    // 默认加载中文
    switchLang('zh');

    // 平滑滚动（点击导航链接跳转）
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
};

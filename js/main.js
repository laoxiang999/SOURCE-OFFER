// 语言切换功能（覆盖所有页面文本）
function switchLang(lang) {
    // 切换语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(lang)) {
            btn.classList.add('active');
        }
    });

    // 获取对应语言的数据
    const data = langData[lang];
    if (!data) return;

    // 1. 导航栏
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks[0].textContent = data.nav.home;
    navLinks[1].textContent = data.nav.services;
    navLinks[2].textContent = data.nav.products;
    navLinks[3].textContent = data.nav.about;
    navLinks[4].textContent = data.nav.contact;

    // 2. Banner区域
    document.querySelector('.banner-text h2').textContent = data.banner.title;
    document.querySelector('.banner-text p').textContent = data.banner.desc;
    document.querySelector('.banner-text .btn').textContent = data.banner.btn;

    // 3. 业务服务区域
    document.querySelector('.services h3').textContent = data.services.title;
    const serviceCards = document.querySelectorAll('.service-cards .card');
    serviceCards[0].querySelector('h4').textContent = data.services.card1.title;
    serviceCards[0].querySelector('p').textContent = data.services.card1.desc;
    serviceCards[1].querySelector('h4').textContent = data.services.card2.title;
    serviceCards[1].querySelector('p').textContent = data.services.card2.desc;
    serviceCards[2].querySelector('h4').textContent = data.services.card3.title;
    serviceCards[2].querySelector('p').textContent = data.services.card3.desc;
    serviceCards[3].querySelector('h4').textContent = data.services.card4.title;
    serviceCards[3].querySelector('p').textContent = data.services.card4.desc;

    // 4. 库存尾货区域
    document.querySelector('.products h3').textContent = data.products.title;
    document.querySelector('.products-desc').textContent = data.products.desc;
    const productItems = document.querySelectorAll('.product-item');
    productItems[0].querySelector('h5').textContent = data.products.item1.title;
    productItems[0].querySelector('p').textContent = data.products.item1.desc;
    productItems[1].querySelector('h5').textContent = data.products.item2.title;
    productItems[1].querySelector('p').textContent = data.products.item2.desc;
    productItems[2].querySelector('h5').textContent = data.products.item3.title;
    productItems[2].querySelector('p').textContent = data.products.item3.desc;
    productItems[3].querySelector('h5').textContent = data.products.item4.title;
    productItems[3].querySelector('p').textContent = data.products.item4.desc;

    // 5. 关于我们区域
    document.querySelector('.about-text h3').textContent = data.about.title;
    const aboutTexts = document.querySelectorAll('.about-text p');
    aboutTexts[0].textContent = data.about.desc1;
    aboutTexts[1].textContent = data.about.desc2;
    aboutTexts[2].textContent = data.about.desc3;
    const advantages = document.querySelectorAll('.advantage-item span');
    advantages[0].textContent = data.about.advantage1;
    advantages[1].textContent = data.about.advantage2;
    advantages[2].textContent = data.about.advantage3;
    advantages[3].textContent = data.about.advantage4;

    // 6. 联系我们区域
    document.querySelector('.contact h3').textContent = data.contact.title;
    document.querySelector('.contact-info h4').textContent = data.contact.infoTitle;
    document.querySelector('.contact-form h4').textContent = data.contact.formTitle;
    document.querySelector('label[for="name"]').textContent = data.contact.formName;
    document.querySelector('label[for="email"]').textContent = data.contact.formEmail;
    document.querySelector('label[for="phone"]').textContent = data.contact.formPhone;
    document.querySelector('label[for="message"]').textContent = data.contact.formMessage;
    document.querySelector('.submit-btn').textContent = data.contact.formBtn;
    document.querySelector('.contact-qrcode p').textContent = data.contact.qrcodeText;

    // 7. 页脚区域
    document.querySelector('.footer-logo .logo-text h3').textContent = data.footer.logoText;
    document.querySelector('.footer-logo .logo-text p').textContent = data.footer.tagline;
    document.querySelector('.footer-links h4').textContent = data.footer.quickLinks;
    document.querySelector('.footer-contact h4').textContent = data.footer.contactTitle;
    document.querySelector('.copyright p').textContent = data.footer.copyright;

    // 8. 更新页面语言属性
    document.documentElement.lang = lang;

    // 9. 更新表单占位符
    document.getElementById('name').placeholder = data.contact.formName + " " + (lang === 'zh' ? '请输入您的姓名' : lang === 'en' ? 'Please enter your name' : lang === 'ru' ? 'Пожалуйста, введите ваше имя' : 'Будь ласка, введіть ваше ім\'я');
    document.getElementById('email').placeholder = data.contact.formEmail + " " + (lang === 'zh' ? '请输入您的邮箱' : lang === 'en' ? 'Please enter your email' : lang === 'ru' ? 'Пожалуйста, введите вашу электронную почту' : 'Будь ласка, введіть вашу електронну пошту');
    document.getElementById('phone').placeholder = data.contact.formPhone + " " + (lang === 'zh' ? '请输入您的电话' : lang === 'en' ? 'Please enter your phone' : lang === 'ru' ? 'Пожалуйста, введите ваш телефон' : 'Будь ласка, введіть ваш телефон');
    document.getElementById('message').placeholder = data.contact.formMessage + " " + (lang === 'zh' ? '请输入您的咨询内容' : lang === 'en' ? 'Please enter your message' : lang === 'ru' ? 'Пожалуйста, введите ваше сообщение' : 'Будь ласка, введіть ваше повідомлення');
}

// 平滑滚动（修复锚点跳转）
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // 获取目标锚点ID
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // 计算滚动位置（减去导航栏高度，避免被导航栏遮挡）
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                // 平滑滚动
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // 更新导航栏激活状态
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

// 页面加载完成后执行
window.onload = function() {
    // 1. 默认加载中文
    switchLang('zh');
    
    // 2. 初始化平滑滚动
    smoothScroll();
    
    // 3. 表单提交处理（仅前端演示，实际需要后端配合）
    const contactForm = document.querySelector('.contact-form form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取当前语言
        const currentLang = document.documentElement.lang;
        const successMsg = currentLang === 'zh' ? '咨询提交成功！我们会尽快与您联系' :
                          currentLang === 'en' ? 'Inquiry submitted successfully! We will contact you soon' :
                          currentLang === 'ru' ? 'Запрос успешно отправлен! Мы свяжемся с вами в ближайшее время' :
                          'Запит успішно надіслано! Ми зв\'яжемося з вами найближчим часом';
        
        // 显示成功提示
        alert(successMsg);
        
        // 重置表单
        contactForm.reset();
    });
};

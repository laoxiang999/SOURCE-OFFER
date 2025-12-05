// 全局变量
let currentLang = 'zh';

// 语言包
const translations = {
    'zh': {
        'nav-home': '首页',
        'nav-services': '业务服务',
        'nav-products': '库存尾货',
        'nav-about': '关于我们',
        'nav-contact': '联系我们',
        'hero-title': '专业国际贸易代理服务',
        'hero-subtitle': '连接中国制造商与全球采购商，提供一站式贸易解决方案',
        'hero-btn-services': '了解我们的服务',
        'hero-btn-contact': '立即咨询',
        'services-title': '我们的业务服务',
        'services-subtitle': '提供全方位的国际贸易代理服务，助力您的业务全球化',
        'service-1-title': '库存尾货信息收集',
        'service-1-desc': '收集各类商品库存尾货信息，为采购商提供质优价廉的货源选择',
        'service-2-title': '义乌代理采购',
        'service-2-desc': '专业义乌市场采购代理，为您筛选优质供应商，确保商品质量与交期',
        'service-3-title': '进出口代理',
        'service-3-desc': '提供专业的进出口代理服务，包括单证制作、报关报检、信用证操作等',
        'service-4-title': '货运代理',
        'service-4-desc': '提供国际海运、空运、陆运代理服务，为您选择最优物流方案',
        'service-learn-more': '了解更多',
        'products-title': '库存尾货信息',
        'products-subtitle': '我们收集了大量优质库存尾货信息，为您提供极具竞争力的价格',
        'filter-all': '所有类别',
        'filter-clothing': '服装纺织',
        'filter-electronics': '电子产品',
        'filter-home': '家居用品',
        'filter-toys': '玩具礼品',
        'filter-btn': '筛选',
        'product-1-title': '女士时尚服装尾货',
        'product-1-desc': '品牌女士服装尾货，包括连衣裙、外套、裤子等，质量优良，价格优惠',
        'product-2-title': '电子产品库存尾货',
        'product-2-desc': '各类电子产品库存，包括手机配件、充电器、耳机等，全新原包装',
        'product-3-title': '家居用品尾货',
        'product-3-desc': '厨房用品、清洁用品、家纺等家居产品尾货，质量好，价格低',
        'product-4-title': '玩具礼品尾货',
        'product-4-desc': '各类玩具、礼品、装饰品尾货，适合节日促销和礼品市场',
        'product-stock': '库存:',
        'product-inquiry': '询价',
        'load-more': '加载更多',
        'about-title': '关于我们',
        'about-subtitle': '专业的国际贸易代理服务提供商，致力于连接中国制造商与全球采购商',
        'about-company': '公司简介',
        'about-intro': '我们是一家专业的国际贸易代理服务公司，专注于为乌克兰、俄罗斯及独联体国家的客户提供高质量的采购代理、库存尾货信息收集、进出口代理和货运代理服务。',
        'about-experience': '凭借多年的行业经验和专业知识，我们已与众多中国制造商和供应商建立了稳定的合作关系，能够为客户提供具有竞争力的价格和优质的产品。',
        'about-quality': '优质产品',
        'about-quality-desc': '严格质量控制',
        'about-price': '优惠价格',
        'about-price-desc': '极具竞争力的价格',
        'about-delivery': '快捷交付',
        'about-delivery-desc': '高效物流服务',
        'about-service': '专业服务',
        'about-service-desc': '多语言客户支持',
        'about-contact': '联系我们',
        'about-regions': '我们的服务区域',
        'region-ukraine': '乌克兰',
        'region-ukraine-desc': '基辅、敖德萨、哈尔科夫等主要城市',
        'region-russia': '俄罗斯',
        'region-russia-desc': '莫斯科、圣彼得堡、叶卡捷琳堡等主要城市',
        'region-cis': '独联体国家',
        'region-cis-desc': '哈萨克斯坦、白俄罗斯、乌兹别克斯坦等国家',
        'contact-title': '联系我们',
        'contact-subtitle': '无论您有任何问题或需求，我们都将竭诚为您服务',
        'contact-form-title': '发送咨询',
        'form-name': '姓名',
        'form-company': '公司名称',
        'form-email': '电子邮箱',
        'form-phone': '电话/微信/WhatsApp/Telegram/VK号码',
        'form-country': '国家/地区',
        'form-select-country': '请选择国家/地区',
        'form-ukraine': '乌克兰',
        'form-russia': '俄罗斯',
        'form-kazakhstan': '哈萨克斯坦',
        'form-belarus': '白俄罗斯',
        'form-uzbekistan': '乌兹别克斯坦',
        'form-other': '其他',
        'form-service': '咨询服务',
        'form-select-service': '请选择服务类型',
        'form-stock': '库存尾货信息',
        'form-procurement': '义乌代理采购',
        'form-import-export': '进出口代理',
        'form-shipping': '货运代理',
        'form-message': '留言内容',
        'form-submit': '提交咨询',
        'contact-info-title': '联系方式',
        'contact-address': '地址',
        'contact-address-desc': '浙江省义乌市国际商贸城一区',
        'contact-phone': '电话/微信',
        'contact-email': '邮箱',
        'contact-time': '工作时间',
        'contact-time-desc': '周一至周日 8:00 - 20:00',
        'contact-service-title': '多语言客服',
        'footer-services': '服务项目',
        'footer-service-1': '库存尾货信息收集',
        'footer-service-2': '义乌代理采购',
        'footer-service-3': '进出口代理',
        'footer-service-4': '货运代理',
        'footer-links': '快速链接',
        'footer-link-1': '首页',
        'footer-link-2': '关于我们',
        'footer-link-3': '库存尾货',
        'footer-link-4': '联系我们',
        'footer-contact': '联系我们'
    },
    'en': {
        // 英文翻译可以根据需要添加
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-products': 'Stock Goods',
        'nav-about': 'About Us',
        'nav-contact': 'Contact Us',
        'hero-title': 'Professional International Trade Agency Services',
        'hero-subtitle': 'Connecting Chinese manufacturers with global buyers, providing one-stop trade solutions',
        'hero-btn-services': 'Learn About Our Services',
        'hero-btn-contact': 'Contact Us Now',
        'services-title': 'Our Business Services',
        'services-subtitle': 'Providing comprehensive international trade agency services to help your business go global',
        'service-1-title': 'Stock Goods Information Collection',
        'service-1-desc': 'Collecting information on various types of stock goods, providing buyers with high-quality and affordable sourcing options',
        'service-2-title': 'Yiwu Procurement Agency',
        'service-2-desc': 'Professional Yiwu market procurement agency, screening high-quality suppliers for you, ensuring product quality and delivery',
        'service-3-title': 'Import and Export Agency',
        'service-3-desc': 'Providing professional import and export agency services, including document preparation, customs declaration, letter of credit operations, etc.',
        'service-4-title': 'Freight Forwarding',
        'service-4-desc': 'Providing international sea, air, and land freight forwarding services, selecting the best logistics solutions for you',
        'service-learn-more': 'Learn More',
        'products-title': 'Stock Goods Information',
        'products-subtitle': 'We have collected a large amount of high-quality stock goods information, providing you with highly competitive prices',
        'filter-all': 'All Categories',
        'filter-clothing': 'Clothing & Textiles',
        'filter-electronics': 'Electronics',
        'filter-home': 'Home Goods',
        'filter-toys': 'Toys & Gifts',
        'filter-btn': 'Filter',
        'product-1-title': 'Women\'s Fashion Stock Goods',
        'product-1-desc': 'Brand women\'s clothing stock goods, including dresses, coats, pants, etc., with excellent quality and favorable prices',
        'product-2-title': 'Electronics Stock Goods',
        'product-2-desc': 'Various electronics stock goods, including mobile phone accessories, chargers, earphones, etc., brand new in original packaging',
        'product-3-title': 'Home Goods Stock Goods',
        'product-3-desc': 'Kitchen supplies, cleaning supplies, home textiles, etc., with good quality and low prices',
        'product-4-title': 'Toys & Gifts Stock Goods',
        'product-4-desc': 'Various toys, gifts, decorations stock goods, suitable for holiday promotions and gift markets',
        'product-stock': 'Stock:',
        'product-inquiry': 'Inquire',
        'load-more': 'Load More',
        'about-title': 'About Us',
        'about-subtitle': 'Professional international trade agency service provider, dedicated to connecting Chinese manufacturers with global buyers',
        'about-company': 'Company Introduction',
        'about-intro': 'We are a professional international trade agency service company, focusing on providing high-quality procurement agency, stock goods information collection, import and export agency, and freight forwarding services to clients in Ukraine, Russia, and CIS countries.',
        'about-experience': 'With years of industry experience and professional knowledge, we have established stable cooperative relationships with many Chinese manufacturers and suppliers, able to provide clients with competitive prices and high-quality products.',
        'about-quality': 'High Quality Products',
        'about-quality-desc': 'Strict Quality Control',
        'about-price': 'Favorable Prices',
        'about-price-desc': 'Highly Competitive Prices',
        'about-delivery': 'Fast Delivery',
        'about-delivery-desc': 'Efficient Logistics Services',
        'about-service': 'Professional Service',
        'about-service-desc': 'Multilingual Customer Support',
        'about-contact': 'Contact Us',
        'about-regions': 'Our Service Areas',
        'region-ukraine': 'Ukraine',
        'region-ukraine-desc': 'Kiev, Odessa, Kharkiv and other major cities',
        'region-russia': 'Russia',
        'region-russia-desc': 'Moscow, St. Petersburg, Yekaterinburg and other major cities',
        'region-cis': 'CIS Countries',
        'region-cis-desc': 'Kazakhstan, Belarus, Uzbekistan and other countries',
        'contact-title': 'Contact Us',
        'contact-subtitle': 'No matter what questions or needs you have, we will be happy to serve you',
        'contact-form-title': 'Send Inquiry',
        'form-name': 'Name',
        'form-company': 'Company Name',
        'form-email': 'Email',
        'form-phone': 'Phone/WeChat/WhatsApp/Telegram/VK Number',
        'form-country': 'Country/Region',
        'form-select-country': 'Please select country/region',
        'form-ukraine': 'Ukraine',
        'form-russia': 'Russia',
        'form-kazakhstan': 'Kazakhstan',
        'form-belarus': 'Belarus',
        'form-uzbekistan': 'Uzbekistan',
        'form-other': 'Other',
        'form-service': 'Inquiry Service',
        'form-select-service': 'Please select service type',
        'form-stock': 'Stock Goods Information',
        'form-procurement': 'Yiwu Procurement Agency',
        'form-import-export': 'Import and Export Agency',
        'form-shipping': 'Freight Forwarding',
        'form-message': 'Message Content',
        'form-submit': 'Submit Inquiry',
        'contact-info-title': 'Contact Information',
        'contact-address': 'Address',
        'contact-address-desc': 'Yiwu International Trade City Zone 1, Yiwu City, Zhejiang Province',
        'contact-phone': 'Phone/WeChat',
        'contact-email': 'Email',
        'contact-time': 'Working Hours',
        'contact-time-desc': 'Monday to Sunday 8:00 - 20:00',
        'contact-service-title': 'Multilingual Customer Service',
        'footer-services': 'Services',
        'footer-service-1': 'Stock Goods Information Collection',
        'footer-service-2': 'Yiwu Procurement Agency',
        'footer-service-3': 'Import and Export Agency',
        'footer-service-4': 'Freight Forwarding',
        'footer-links': 'Quick Links',
        'footer-link-1': 'Home',
        'footer-link-2': 'About Us',
        'footer-link-3': 'Stock Goods',
        'footer-link-4': 'Contact Us',
        'footer-contact': 'Contact Us'
    },
    'ru': {
        // 俄语翻译可以根据需要添加
        'nav-home': 'Главная',
        'nav-services': 'Услуги',
        'nav-products': 'Остатки на складе',
        'nav-about': 'О нас',
        'nav-contact': 'Связаться с нами',
        'hero-title': 'Профессиональные услуги международного торгового агента',
        'hero-subtitle': 'Мы соединяем китайских производителей с мировыми покупателями, предоставляя комплексные торговые решения',
        'hero-btn-services': 'Узнайте о наших услугах',
        'hero-btn-contact': 'Свяжитесь с нами сейчас',
        'services-title': 'Наши бизнес-услуги',
        'services-subtitle': 'Мы предоставляем полный спектр услуг международного торгового агента, помогая вашему бизнесу глобализироваться',
        'service-1-title': 'Сбор информации об остатках на складе',
        'service-1-desc': 'Собираем информацию об остатках различных товаров на складе, предоставляя покупателям качественные и недорогие варианты поставок',
        'service-2-title': 'Покупочный агент в Ивую',
        'service-2-desc': 'Профессиональный покупочный агент на рынке Ивую, отбираем надежных поставщиков для вас, обеспечивая качество товаров и сроки поставки',
        'service-3-title': 'Агентство по импорту-экспорту',
        'service-3-desc': 'Предоставляем профессиональные услуги агентства по импорту-экспорту, включая подготовку документов, таможенную очистку, операции с аккредитивом и т.д.',
        'service-4-title': 'Транспортное агентство',
        'service-4-desc': 'Предоставляем услуги международного морского, воздушного и наземного перевозок, выбирая для вас лучшие логистические решения',
        'service-learn-more': 'Узнать больше',
        'products-title': 'Информация об остатках на складе',
        'products-subtitle': 'Мы собрали большой объем информации о высококачественных остатках на складе, предоставляя вам очень конкурентоспособные цены',
        'filter-all': 'Все категории',
        'filter-clothing': 'Одежда и текстиль',
        'filter-electronics': 'Электроника',
        'filter-home': 'Товары для дома',
        'filter-toys': 'Игрушки и подарки',
        'filter-btn': 'Фильтр',
        'product-1-title': 'Остатки женской модной одежды',
        'product-1-desc': 'Остатки брендовой женской одежды, включая платья, пальто, брюки и т.д., с отличным качеством и выгодными ценами',
        'product-2-title': 'Остатки электроники на складе',
        'product-2-desc': 'Различные остатки электроники на складе, включая аксессуары для мобильных телефонов, зарядные устройства, наушники и т.д., новые в оригинальной упаковке',
        'product-3-title': 'Остатки товаров для дома',
        'product-3-desc': 'Товары для кухни, моющие средства, текстиль для дома и т.д., с хорошим качеством и низкими ценами',
        'product-4-title': 'Остатки игрушек и подарков',
        'product-4-desc': 'Различные остатки игрушек, подарков, украшений, подходящие для праздничных акций и подарочных рынков',
        'product-stock': 'Запас:',
        'product-inquiry': 'Запросить',
        'load-more': 'Загрузить больше',
        'about-title': 'О нас',
        'about-subtitle': 'Профессиональный поставщик услуг международного торгового агента, посвященный соединению китайских производителей с мировыми покупателями',
        'about-company': 'Представление компании',
        'about-intro': 'Мы - профессиональная компания по услугам международного торгового агента, специализирующаяся на предоставлении высококачественных услуг по покупкам, сбору информации об остатках на складе, агентству по импорту-экспорту и транспортным услугам клиентам в Украине, России и странах СНГ.',
        'about-experience': 'Благодаря многолетнему опыту в отрасли и профессиональным знаниям, мы установили стабильные партнерские отношения с многими китайскими производителями и поставщиками, способные предложить клиентам конкурентоспособные цены и высококачественные продукты.',
        'about-quality': 'Высококачественные продукты',
        'about-quality-desc': 'Строгий контроль качества',
        'about-price': 'Выгодные цены',
        'about-price-desc': 'Очень конкурентоспособные цены',
        'about-delivery': 'Быстрая доставка',
        'about-delivery-desc': 'Эффективные логистические услуги',
        'about-service': 'Профессиональное обслуживание',
        'about-service-desc': 'Многоязычная поддержка клиентов',
        'about-contact': 'Связаться с нами',
        'about-regions': 'Наши зоны обслуживания',
        'region-ukraine': 'Украина',
        'region-ukraine-desc': 'Киев, Одесса, Харьков и другие крупные города',
        'region-russia': 'Россия',
        'region-russia-desc': 'Москва, Санкт-Петербург, Екатеринбург и другие крупные города',
        'region-cis': 'Страны СНГ',
        'region-cis-desc': 'Казахстан, Беларусь, Узбекистан и другие страны',
        'contact-title': 'Связаться с нами',
        'contact-subtitle': 'Независимо от ваших вопросов или потребностей, мы с удовольствием поможем вам',
        'contact-form-title': 'Отправить запрос',
        'form-name': 'Имя',
        'form-company': 'Название компании',
        'form-email': 'Электронная почта',
        'form-phone': 'Телефон/WeChat/WhatsApp/Telegram/VK номер',
        'form-country': 'Страна/Регион',
        'form-select-country': 'Пожалуйста, выберите страну/регион',
        'form-ukraine': 'Украина',
        'form-russia': 'Россия',
        'form-kazakhstan': 'Казахстан',
        'form-belarus': 'Беларусь',
        'form-uzbekistan': 'Узбекистан',
        'form-other': 'Другое',
        'form-service': 'Услуга запроса',
        'form-select-service': 'Пожалуйста, выберите тип услуги',
        'form-stock': 'Информация об остатках на складе',
        'form-procurement': 'Покупочный агент в Ивую',
        'form-import-export': 'Агентство по импорту-экспорту',
        'form-shipping': 'Транспортное агентство',
        'form-message': 'Содержание сообщения',
        'form-submit': 'Отправить запрос',
        'contact-info-title': 'Контактная информация',
        'contact-address': 'Адрес',
        'contact-address-desc': 'Зона 1 Международного торгового города Ивую, город Ивую, провинция Чжэцзян',
        'contact-phone': 'Телефон/WeChat',
        'contact-email': 'Электронная почта',
        'contact-time': 'Рабочие часы',
        'contact-time-desc': 'Понедельник - Воскресенье 8:00 - 20:00',
        'contact-service-title': 'Многоязычная поддержка клиентов',
        'footer-services': 'Услуги',
        'footer-service-1': 'Сбор информации об остатках на складе',
        'footer-service-2': 'Покупочный агент в Ивую',
        'footer-service-3': 'Агентство по импорту-экспорту',
        'footer-service-4': 'Транспортное агентство',
        'footer-links': 'Быстрые ссылки',
        'footer-link-1': 'Главная',
        'footer-link-2': 'О нас',
        'footer-link-3': 'Остатки на складе',
        'footer-link-4': 'Связаться с нами',
        'footer-contact': 'Связаться с нами'
    },
    'uk': {
        // 乌克兰语翻译可以根据需要添加
        'nav-home': 'Головна',
        'nav-services': 'Послуги',
        'nav-products': 'Залишки на складі',
        'nav-about': 'Про нас',
        'nav-contact': 'Зв\'язатися з нами',
        'hero-title': 'Професійні послуги міжнародного торговельного агента',
        'hero-subtitle': 'Ми з’єднуємо китайських виробників з світовими покупцями, надаючи комплексні торговельні рішення',
        'hero-btn-services': 'Дізнайтеся про наші послуги',
        'hero-btn-contact': 'Зв\'язатися з нами зараз',
        'services-title': 'Наші бізнес-послуги',
        'services-subtitle': 'Ми надаємо повний спектр послуг міжнародного торговельного агента, допомагаючи вашому бізнесу глобалізуватися',
        'service-1-title': 'Збір інформації про залишки на складі',
        'service-1-desc': 'Збираємо інформацію про залишки різних товарів на складі, надаючи покупцям якісні та недорогі варіанти постачання',
        'service-2-title': 'Покупчий агент в Ів\'ю',
        'service-2-desc': 'Професійний покупчий агент на ринку Ів\'ю, відбираємо надійних постачальників для вас, забезпечуючи якість товарів та терміни постачання',
        'service-3-title': 'Агенція з імпорту-експорту',
        'service-3-desc': 'Наддаємо професійні послуги агентства з імпорту-експорту, включаючи підготовку документів, митну очистку, операції з акредитивом тощо',
        'service-4-title': 'Транспортна агентція',
        'service-4-desc': 'Наддаємо послуги міжнародних морських, повітряних та наземних перевозок, вибираючи для вас найкращі логістичні рішення',
        'service-learn-more': 'Дізнатися більше',
        'products-title': 'Інформація про залишки на складі',
        'products-subtitle': 'Ми зібрали великий обсяг інформації про високоякісні залишки на складі, надаючи вам дуже конкурентоспроможні ціни',
        'filter-all': 'Всі категорії',
        'filter-clothing': 'Одяг та текстиль',
        'filter-electronics': 'Електроніка',
        'filter-home': 'Товари для дому',
        'filter-toys': 'Іграшки та подарунки',
        'filter-btn': 'Фільтр',
        'product-1-title': 'Залишки жіночої моди',
        'product-1-desc': 'Залишки брендового жіночого одягу, включаючи сукні, пальто, штани тощо, з відмінною якістю та вигідними цінами',
        'product-2-title': 'Залишки електроніки на складі',
        'product-2-desc': 'Різні залишки електроніки на складі, включаючи аксесуари для мобільних телефонів, зарядні пристрої, навушники тощо, нові в оригінальній упаковці',
        'product-3-title': 'Залишки товарів для дому',
        'product-3-desc': 'Товари для кухні, миючі засоби, текстиль для дому тощо, з хорошою якістю та низькими цінами',
        'product-4-title': 'Залишки іграшок та подарунків',
        'product-4-desc': 'Різні залишки іграшок, подарунків, прикрас, підходящих для святкових акцій та подарункових ринків',
        'product-stock': 'Запас:',
        'product-inquiry': 'Запитати',
        'load-more': 'Завантажити більше',
        'about-title': 'Про нас',
        'about-subtitle': 'Професійний постачальник послуг міжнародного торговельного агента, присвячений з’єднанню китайських виробників з світовими покупцями',
        'about-company': 'Представлення компанії',
        'about-intro': 'Ми - професійна компанія з послуг міжнародного торговельного агента, яка спеціалізується на наданні високоякісних послуг з покупок, збору інформації про залишки на складі, агентстві з імпорту-експорту та транспортних послуг клієнтам в Україні, Росії та країнах СНД.',
        'about-experience': 'Завдяки багаторічному досвіду в галузі та професійним знанням, ми встановили стабільні партнерські відносини з багатьма китайськими виробниками та постачальниками, здатними запропонувати клієнтам конкурентоспроможні ціни та високоякісні продукти.',
        'about-quality': 'Високоякісні продукти',
        'about-quality-desc': 'Старий контроль якості',
        'about-price': 'Вигідні ціни',
        'about-price-desc': 'Дуже конкурентоспроможні ціни',
        'about-delivery': 'Швидка доставка',
        'about-delivery-desc': 'Ефективні логістичні послуги',
        'about-service': 'Професійне обслуговування',
        'about-service-desc': 'Багатомовна підтримка клієнтів',
        'about-contact': 'Зв\'язатися з нами',
        'about-regions': 'Наші зони обслуговування',
        'region-ukraine': 'Україна',
        'region-ukraine-desc': 'Київ, Одеса, Харків та інші великі міста',
        'region-russia': 'Росія',
        'region-russia-desc': 'Москва, Санкт-Петербург, Екатеринбург та інші великі міста',
        'region-cis': 'Країни СНД',
        'region-cis-desc': 'Казахстан, Беларусь, Узбекистан та інші країни',
        'contact-title': 'Зв\'язатися з нами',
        'contact-subtitle': 'Незалежно від ваших питань або потреб, ми з радістю допоможемо вам',
        'contact-form-title': 'Надіслати запит',
        'form-name': 'Ім\'я',
        'form-company': 'Назва компанії',
        'form-email': 'Електронна пошта',
        'form-phone': 'Телефон/WeChat/WhatsApp/Telegram/VK номер',
        'form-country': 'Країна/Регіон',
        'form-select-country': 'Будь ласка, оберіть країну/регіон',
        'form-ukraine': 'Україна',
        'form-russia': 'Росія',
        'form-kazakhstan': 'Казахстан',
        'form-belarus': 'Беларусь',
        'form-uzbekistan': 'Узбекистан',
        'form-other': 'Інше',
        'form-service': 'Послуга запиту',
        'form-select-service': 'Будь ласка, оберіть тип послуги',
        'form-stock': 'Інформація про залишки на складі',
        'form-procurement': 'Покупчий агент в Ів\'ю',
        'form-import-export': 'Агенція з імпорту-експорту',
        'form-shipping': 'Транспортна агентція',
        'form-message': 'Вміст повідомлення',
        'form-submit': 'Надіслати запит',
        'contact-info-title': 'Контактна інформація',
        'contact-address': 'Адреса',
        'contact-address-desc': 'Зона 1 Міжнародного торговельного міста Ів\'ю, місто Ів\'ю, провінція Чжжэцзян',
        'contact-phone': 'Телефон/WeChat',
        'contact-email': 'Електронна пошта',
        'contact-time': 'Робочі години',
        'contact-time-desc': 'Понеділок - Неділя 8:00 - 20:00',
        'contact-service-title': 'Багатомовна підтримка клієнтів',
        'footer-services': 'Послуги',
        'footer-service-1': 'Збір інформації про залишки на складі',
        'footer-service-2': 'Покупчий агент в Ів\'ю',
        'footer-service-3': 'Агенція з імпорту-експорту',
        'footer-service-4': 'Транспортна агентція',
        'footer-links': 'Швидкі посилання',
        'footer-link-1': 'Головна',
        'footer-link-2': 'Про нас',
        'footer-link-3': 'Залишки на складі',
        'footer-link-4': 'Зв\'язатися з нами',
        'footer-contact': 'Зв\'язатися з нами'
    }
};

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // 导航链接高亮
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        navLinks.forEach(link => {
            const sectionId = link.getAttribute('href');
            const section = document.querySelector(sectionId);
            
            if (section) {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(l => l.classList.remove('active-nav'));
                    link.classList.add('active-nav');
                }
            }
        });
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // 关闭移动端菜单
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // 产品搜索和筛选
    const searchInput = document.getElementById('product-search');
    const filterBtn = document.getElementById('filter-btn');
    const categoryFilter = document.getElementById('category-filter');
    const productList = document.getElementById('product-list');
    const products = document.querySelectorAll('.product-card');
    
    if (searchInput && filterBtn && categoryFilter && productList) {
        function filterProducts() {
            const searchTerm = searchInput.value.toLowerCase();
            const category = categoryFilter.value;
            
            products.forEach(product => {
                const productTitle = product.querySelector('h3').textContent.toLowerCase();
                const productDesc = product.querySelector('p').textContent.toLowerCase();
                const productCategory = product.getAttribute('data-category');
                
                const matchesSearch = productTitle.includes(searchTerm) || productDesc.includes(searchTerm);
                const matchesCategory = category === 'all' || productCategory === category;
                
                if (matchesSearch && matchesCategory) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }
        
        searchInput.addEventListener('input', filterProducts);
        filterBtn.addEventListener('click', filterProducts);
        categoryFilter.addEventListener('change', filterProducts);
    }
    
    // 语言切换
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    function changeLanguage(lang) {
        currentLang = lang;
        
        // 更新所有带有 data-lang-key 属性的元素
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // 更新下拉选项
        document.querySelectorAll('option[data-lang-key]').forEach(option => {
            const key = option.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                option.textContent = translations[lang][key];
            }
        });
        
        // 更新按钮激活状态
        langBtns.forEach(btn => {
            btn.classList.remove('font-bold', 'text-blue-800');
            btn.classList.add('font-medium', 'text-gray-600');
        });
        
        document.querySelector(`[data-lang="${lang}"]`).classList.add('font-bold', 'text-blue-800');
        document.querySelector(`[data-lang="${lang}"]`).classList.remove('font-medium', 'text-gray-600');
    }
    
    // 删除了联系表单提交代码，因为已移除表单元素
    
    // 产品询价
    const inquiryBtns = document.querySelectorAll('.inquiry-btn');
    
    inquiryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            
            // 在实际应用中，这里应该打开询价表单或跳转到询价页面
            console.log('询价产品:', product);
            
            // 模拟询价操作
            alert('感谢您的询价！我们将尽快为您提供详细的产品信息和报价。');
        });
    });
    
    // 加载更多产品
    const loadMoreBtn = document.getElementById('load-more');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // 在实际应用中，这里应该从服务器加载更多产品
            console.log('加载更多产品');
            
            // 模拟加载更多操作
            alert('已加载所有产品！');
            this.style.display = 'none';
        });
    }
    
    // 淡入动画
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFadeElements() {
        const windowHeight = window.innerHeight;
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // 初始检查
    checkFadeElements();
    
    // 滚动时检查
    window.addEventListener('scroll', checkFadeElements);
});
// 多语言文本数据（包含所有页面区块）
const langData = {
    zh: {
        nav: {
            home: "首页",
            services: "业务服务",
            products: "库存尾货",
            about: "关于我们",
            contact: "联系我们"
        },
        banner: {
            title: "专业国际贸易解决方案",
            desc: "连接中国与全球市场，提供一站式代理服务",
            btn: "立即咨询"
        },
        services: {
            title: "核心业务服务",
            card1: {
                title: "库存尾货采购",
                desc: "专业收集库存尾货信息，提供高性价比的清仓产品采购服务，覆盖各类日用百货、电子产品等"
            },
            card2: {
                title: "义乌代理采购",
                desc: "依托义乌小商品市场优势，提供一站式代理采购、验货、打包服务，降低采购成本"
            },
            card3: {
                title: "进出口代理",
                desc: "专业办理报关、报检、退税等进出口手续，解决国际贸易中的合规问题"
            },
            card4: {
                title: "货运代理",
                desc: "提供海运、空运、陆运等多式联运服务，覆盖俄罗斯、乌克兰及独联体国家专线物流"
            }
        },
        products: {
            title: "库存尾货展示",
            desc: "我们收集各类优质库存尾货资源，以下为部分产品类别，欢迎咨询具体产品信息",
            item1: {
                title: "日用百货",
                desc: "各类家居用品、厨房用具、清洁用品等"
            },
            item2: {
                title: "电子产品",
                desc: "手机配件、小型家电、数码产品等"
            },
            item3: {
                title: "服装鞋帽",
                desc: "男女装、童装、鞋靴、箱包等库存清仓"
            },
            item4: {
                title: "玩具礼品",
                desc: "各类玩具、节日礼品、工艺品等"
            }
        },
        about: {
            title: "关于我们",
            desc1: "申沃进出口（source-offer）是一家专业的国际贸易代理公司，专注于为俄罗斯、乌克兰及独联体国家客户提供一站式贸易解决方案。",
            desc2: "我们依托中国丰富的供应链资源和义乌小商品市场优势，致力于为客户提供高性价比的产品采购、进出口代理、物流配送等全方位服务。",
            desc3: "公司拥有专业的多语言服务团队，熟悉国际贸易规则和目标市场需求，能够为客户解决贸易过程中的各类问题，降低贸易风险和成本。",
            advantage1: "10年以上行业经验",
            advantage2: "多语言专业服务团队",
            advantage3: "覆盖独联体国家专线物流",
            advantage4: "全程透明化服务流程"
        },
        contact: {
            title: "联系我们",
            infoTitle: "联系方式",
            formTitle: "在线咨询",
            formName: "姓名",
            formEmail: "邮箱",
            formPhone: "电话",
            formMessage: "咨询内容",
            formBtn: "提交咨询",
            qrcodeText: "微信扫码联系"
        },
        footer: {
            logoText: "申沃进出口 source-offer",
            tagline: "国际贸易代理专家",
            quickLinks: "快速链接",
            contactTitle: "联系我们",
            copyright: "© 2025 申沃进出口 source-offer（国际贸易代理） 版权所有"
        }
    },
    en: {
        nav: {
            home: "Home",
            services: "Services",
            products: "Stock Goods",
            about: "About Us",
            contact: "Contact Us"
        },
        banner: {
            title: "Professional International Trade Solutions",
            desc: "Connecting China with global markets, providing one-stop agency services",
            btn: "Consult Now"
        },
        services: {
            title: "Core Business Services",
            card1: {
                title: "Stock Goods Procurement",
                desc: "Professional collection of stock goods information, providing cost-effective clearance product procurement services, covering various daily necessities, electronic products, etc."
            },
            card2: {
                title: "Yiwu Sourcing Agent",
                desc: "Leveraging the advantages of Yiwu Small Commodity Market, providing one-stop sourcing, inspection, and packaging services to reduce procurement costs"
            },
            card3: {
                title: "Import & Export Agency",
                desc: "Professional handling of customs declaration, inspection, tax refund and other import and export procedures, solving compliance issues in international trade"
            },
            card4: {
                title: "Freight Forwarding",
                desc: "Providing multi-modal transportation services such as sea, air, and land transport, covering dedicated logistics to Russia, Ukraine and CIS countries"
            }
        },
        products: {
            title: "Stock Goods Display",
            desc: "We collect various high-quality stock goods resources. Below are some product categories, welcome to inquire about specific product information",
            item1: {
                title: "Daily Necessities",
                desc: "Various household items, kitchen utensils, cleaning products, etc."
            },
            item2: {
                title: "Electronic Products",
                desc: "Mobile phone accessories, small home appliances, digital products, etc."
            },
            item3: {
                title: "Clothing & Footwear",
                desc: "Men's clothing, children's clothing, shoes and boots, luggage and bags, etc."
            },
            item4: {
                title: "Toys & Gifts",
                desc: "Various toys, holiday gifts, crafts, etc."
            }
        },
        about: {
            title: "About Us",
            desc1: "Shenwo Import and Export (source-offer) is a professional international trade agency company, focusing on providing one-stop trade solutions for customers in Russia, Ukraine and CIS countries.",
            desc2: "Leveraging China's abundant supply chain resources and the advantages of Yiwu Small Commodity Market, we are committed to providing customers with cost-effective product procurement, import and export agency, logistics and distribution and other comprehensive services.",
            desc3: "The company has a professional multilingual service team, familiar with international trade rules and target market needs, able to solve various problems in the trade process and reduce trade risks and costs.",
            advantage1: "More than 10 years of industry experience",
            advantage2: "Multilingual professional service team",
            advantage3: "Covering dedicated logistics to CIS countries",
            advantage4: "Full transparent service process"
        },
        contact: {
            title: "Contact Us",
            infoTitle: "Contact Information",
            formTitle: "Online Consultation",
            formName: "Name",
            formEmail: "Email",
            formPhone: "Phone",
            formMessage: "Message",
            formBtn: "Submit Inquiry",
            qrcodeText: "WeChat QR Code"
        },
        footer: {
            logoText: "Shenwo Import and Export source-offer",
            tagline: "International Trade Agency Expert",
            quickLinks: "Quick Links",
            contactTitle: "Contact Us",
            copyright: "© 2025 Shenwo Import and Export source-offer (International Trade Agency) All Rights Reserved"
        }
    },
    ru: {
        nav: {
            home: "Главная",
            services: "Услуги",
            products: "Остатки товаров",
            about: "О нас",
            contact: "Связаться с нами"
        },
        banner: {
            title: "Профессиональные решения в международной торговле",
            desc: "Соединяем Китай с глобальными рынками, предоставляя комплексные агентские услуги",
            btn: "Консультироваться сейчас"
        },
        services: {
            title: "Основные бизнес-услуги",
            card1: {
                title: "Закупка остатков товаров",
                desc: "Профессиональная сборка информации об остатках товаров, предоставление услуг по закупке товаров по сниженным ценам, включая различные бытовые товары, электронику и т.д."
            },
            card2: {
                title: "Агентство по закупкам в Иу",
                desc: "Используя преимущества рынка мелочей Иу, предоставляем комплексные услуги по агентской закупке, проверке качества, упаковке, снижая издержки на закупку"
            },
            card3: {
                title: "Агентство по импорту и экспорту",
                desc: "Профессиональное оформление таможенных деклараций, санитарно-эпидемиологических заключений, налоговых возвратов и других документов для импорта и экспорта, решение вопросов соблюдения требований в международной торговле"
            },
            card4: {
                title: "Логистическое агентство",
                desc: "Предоставление услуг по многорежимному транспортировке (морской, воздушный, наземный), включая специализированную логистику в Россию, Украину и страны СНГ"
            }
        },
        products: {
            title: "Показ остатков товаров",
            desc: "Мы собираем различные высококачественные ресурсы остатков товаров. Ниже представлены некоторые категории продуктов, пожалуйста, задавайте вопросы о конкретной продукции",
            item1: {
                title: "Бытовые товары",
                desc: "Различные бытовые предметы, кухонная утварь, моющие средства и т.д."
            },
            item2: {
                title: "Электронные товары",
                desc: "Аксессуары для мобильных телефонов, небольшие бытовые приборы, цифровая продукция и т.д."
            },
            item3: {
                title: "Одежда и обувь",
                desc: "Мужская, детская одежда, обувь, сумки и другие товары по сниженным ценам"
            },
            item4: {
                title: "Игрушки и подарки",
                desc: "Различные игрушки, праздничные подарки, ремесленные изделия и т.д."
            }
        },
        about: {
            title: "О нас",
            desc1: "Шэньво Импорт и Экспорт (source-offer) — профессиональная международная торговая агентская компания, специализирующаяся на предоставлении комплексных торговых решений для клиентов из России, Украины и стран СНГ.",
            desc2: "Используя обширные ресурсы цепочки поставок Китая и преимущества рынка мелочей Иу, мы стремимся предоставить клиентам высококачественные услуги по закупке товаров, агентству по импорту и экспорту, логистике и доставке.",
            desc3: "Компания имеет профессиональную многоязычную службу поддержки, хорошо знающую правила международной торговли и потребности целевого рынка, способную решать различные проблемы в процессе торговли и снижать торговые риски и издержки.",
            advantage1: "Более 10 лет опыта в отрасли",
            advantage2: "Многоязычная профессиональная команда",
            advantage3: "Специализированная логистика в страны СНГ",
            advantage4: "Полностью прозрачный процесс обслуживания"
        },
        contact: {
            title: "Связаться с нами",
            infoTitle: "Контактная информация",
            formTitle: "Онлайн-консультация",
            formName: "Имя",
            formEmail: "Эл. почта",
            formPhone: "Телефон",
            formMessage: "Сообщение",
            formBtn: "Отправить запрос",
            qrcodeText: "QR-код WeChat"
        },
        footer: {
            logoText: "Шэньво Импорт и Экспорт source-offer",
            tagline: "Эксперт по международной торговле",
            quickLinks: "Быстрые ссылки",
            contactTitle: "Связаться с нами",
            copyright: "© 2025 Шэньво Импорт и Экспорт source-offer (Международное торговое агентство) Все права защищены"
        }
    },
    uk: {
        nav: {
            home: "Головна",
            services: "Послуги",
            products: "Залишки товарів",
            about: "Про нас",
            contact: "Зв'язатися з нами"
        },
        banner: {
            title: "Професійні рішення в міжнародній торгівлі",
            desc: "З'єднуємо Китай з глобальними ринками, надаючи комплексні агентські послуги",
            btn: "Консультуватися зараз"
        },
        services: {
            title: "Основні бізнес-послуги",
            card1: {
                title: "Закупівля залишків товарів",
                desc: "Професійний збір інформації про залишки товарів, надання послуг з купівлі товарів за зниженими цінами, включаючи різні побутові товари, електроніку тощо"
            },
            card2: {
                title: "Агентство з закупівель у Іу",
                desc: "Використовуючи переваги ринку мелочей Іу, надаємо комплексні послуги з агентської закупівлі, перевірки якості, упаковки, знижуючи витрати на закупівлю"
            },
            card3: {
                title: "Агентство з імпорту та експорту",
                desc: "Професійне оформлення митних декларацій, санітарно-епідеміологічних висновків, податкових повернень та інших документів для імпорту та експорту, розв'язання питань дотримання вимог у міжнародній торгівлі"
            },
            card4: {
                title: "Логістичне агентство",
                desc: "Надання послуг з багаторівневого транспортування (морський, повітряний, сухопутний), включаючи спеціалізовану логістику в Росію, Україну та країни СНГ"
            }
        },
        products: {
            title: "Показ залишків товарів",
            desc: "Ми збираємо різні високоякісні ресурси залишків товарів. Нижче представлені деякі категорії продуктів, будь ласка, задавайте питання про конкретну продукцію",
            item1: {
                title: "Побутові товари",
                desc: "Різні побутові предмети, кухонна посуда, моючі засоби тощо"
            },
            item2: {
                title: "Електронні товари",
                desc: "Аксесуари для мобільних телефонів, невеликі побутові прилади, цифрова продукція тощо"
            },
            item3: {
                title: "Одяг та взуття",
                desc: "Чоловіча, дитяча одяг, взуття, сумки та інші товари за зниженими цінами"
            },
            item4: {
                title: "Іграшки та подарунки",
                desc: "Різні іграшки, святкові подарунки, ремесельні вироби тощо"
            }
        },
        about: {
            title: "Про нас",
            desc1: "Шеньво Імпорт та Експорт (source-offer) — професійна міжнародна торговельна агентська компанія, яка спеціалізується на наданні комплексних торговельних рішень для клієнтів з Росії, України та країн СНГ.",
            desc2: "Використовуючи багаті ресурси ланцюга поставок Китаю та переваги ринку мелочей Іу, ми прагнемо надати клієнтам високоякісні послуги з закупівлі товарів, агентства з імпорту та експорту, логістики та доставки.",
            desc3: "Компанія має професійну багатомовну службу підтримки, яка добре знає правила міжнародної торгівлі та потреби цільового ринку, здатна розв'язувати різні проблеми в процесі торгівлі та зменшувати торговельні ризики та витрати.",
            advantage1: "Більше 10 років досвіду в галузі",
            advantage2: "Багатомовна професійна команда",
            advantage3: "Спеціалізована логістика в країни СНГ",
            advantage4: "Повністю прозорий процес обслуговування"
        },
        contact: {
            title: "Зв'язатися з нами",
            infoTitle: "Контактна інформація",
            formTitle: "Онлайн-консультація",
            formName: "Ім'я",
            formEmail: "Ел. пошта",
            formPhone: "Телефон",
            formMessage: "Повідомлення",
            formBtn: "Відправити запит",
            qrcodeText: "QR-код WeChat"
        },
        footer: {
            logoText: "Шеньво Імпорт та Експорт source-offer",
            tagline: "Експерт з міжнародної торгівлі",
            quickLinks: "Швидкі посилання",
            contactTitle: "Зв'язатися з нами",
            copyright: "© 2025 Шеньво Імпорт та Експорт source-offer (Міжнародне торговельне агентство) Всі права захищені"
        }
    }
};

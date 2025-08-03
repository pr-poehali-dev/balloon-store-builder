import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const templates = [
    {
      id: 1,
      name: "Праздничные Шары",
      description: "Современный интернет-магазин для праздничных воздушных шаров",
      category: "Праздники",
      features: ["Каталог товаров", "Корзина", "Оформление заказа", "SEO"],
      preview: "/img/bbae3fd2-bb9b-44d6-b5e0-3c8a55ddad5f.jpg"
    },
    {
      id: 2,
      name: "Детский Мир Шаров",
      description: "Яркий магазин детских воздушных шаров и аксессуаров",
      category: "Детские товары",
      features: ["Галерея", "Фильтры", "Отзывы", "CRM"],
      preview: "/img/bbae3fd2-bb9b-44d6-b5e0-3c8a55ddad5f.jpg"
    },
    {
      id: 3,
      name: "Свадебные Украшения",
      description: "Элегантный каталог шаров для свадебных торжеств",
      category: "Свадьбы",
      features: ["Персонализация", "Калькулятор", "Бронирование", "Портфолио"],
      preview: "/img/bbae3fd2-bb9b-44d6-b5e0-3c8a55ddad5f.jpg"
    },
    {
      id: 4,
      name: "Корпоративные Мероприятия",
      description: "Профессиональные решения для бизнес-событий",
      category: "Корпоратив",
      features: ["B2B каталог", "Опт", "Договоры", "Аналитика"],
      preview: "/img/bbae3fd2-bb9b-44d6-b5e0-3c8a55ddad5f.jpg"
    },
    {
      id: 5,
      name: "Тематические Коллекции",
      description: "Специализированные наборы для разных тематик",
      category: "Коллекции",
      features: ["Наборы", "Конструктор", "3D превью", "AR примерка"],
      preview: "/img/bbae3fd2-bb9b-44d6-b5e0-3c8a55ddad5f.jpg"
    },
    {
      id: 6,
      name: "Экспресс Доставка",
      description: "Быстрая доставка шаров в день заказа",
      category: "Доставка",
      features: ["Геолокация", "Треккинг", "SMS уведомления", "Экспресс"],
      preview: "/img/bbae3fd2-bb9b-44d6-b5e0-3c8a55ddad5f.jpg"
    },
    {
      id: 7,
      name: "Авторские Композиции",
      description: "Уникальные авторские работы от дизайнеров",
      category: "Авторское",
      features: ["Портфолио", "Индивидуальный заказ", "Консультации", "VIP"],
      preview: "/img/bbae3fd2-bb9b-44d6-b5e0-3c8a55ddad5f.jpg"
    },
    {
      id: 8,
      name: "Оптовые Продажи",
      description: "Платформа для оптовых покупателей и партнеров",
      category: "Опт",
      features: ["Прайс-листы", "Скидки", "Личный кабинет", "API"],
      preview: "/img/bbae3fd2-bb9b-44d6-b5e0-3c8a55ddad5f.jpg"
    },
    {
      id: 9,
      name: "Сезонные Предложения",
      description: "Актуальные предложения под каждый сезон года",
      category: "Сезонное",
      features: ["Календарь", "Акции", "Предзаказы", "Уведомления"],
      preview: "/img/bbae3fd2-bb9b-44d6-b5e0-3c8a55ddad5f.jpg"
    },
    {
      id: 10,
      name: "Международная Доставка",
      description: "Глобальная платформа с доставкой по всему миру",
      category: "Международная",
      features: ["Мультивалюта", "Переводы", "Таможня", "Логистика"],
      preview: "/img/bbae3fd2-bb9b-44d6-b5e0-3c8a55ddad5f.jpg"
    }
  ];

  const features = [
    {
      icon: "Palette",
      title: "Конструктор без кода",
      description: "Создавайте сайты интуитивно, без знания программирования"
    },
    {
      icon: "Smartphone",
      title: "Адаптивный дизайн",
      description: "Ваш сайт идеально отображается на всех устройствах"
    },
    {
      icon: "Search",
      title: "SEO оптимизация",
      description: "Автоматическая настройка для поисковых систем"
    },
    {
      icon: "MessageSquare",
      title: "CRM система",
      description: "Встроенная система для обработки заказов и клиентов"
    },
    {
      icon: "ShoppingCart",
      title: "E-commerce готов",
      description: "Полный функционал интернет-магазина из коробки"
    },
    {
      icon: "Zap",
      title: "Быстрый запуск",
      description: "От идеи до готового сайта за несколько минут"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">🎈</span>
              </div>
              <h1 className="text-2xl font-heading font-bold text-foreground">BalloonBuilder</h1>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#templates" className="text-foreground hover:text-primary transition-colors">Шаблоны</a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Возможности</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <Button variant="outline" className="mr-2">Войти</Button>
            <Button>Создать сайт</Button>
          </nav>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                <a href="#templates" className="text-lg font-medium">Шаблоны</a>
                <a href="#features" className="text-lg font-medium">Возможности</a>
                <a href="#pricing" className="text-lg font-medium">Цены</a>
                <div className="flex flex-col space-y-3 pt-4">
                  <Button variant="outline">Войти</Button>
                  <Button>Создать сайт</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-in">
            Создайте интернет-магазин 
            <span className="text-primary"> воздушных шаров</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Профессиональные шаблоны, простой конструктор и полная готовность к продажам. 
            Запустите свой бизнес за 15 минут без знания программирования.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button size="lg" className="px-8 py-3 text-lg">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать создание
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
              10 готовых шаблонов для вашего бизнеса
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый шаблон полностью настраиваемый и готов к использованию
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <Card 
                key={template.id} 
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  selectedTemplate === template.id ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={template.preview} 
                    alt={template.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{template.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full" variant={selectedTemplate === template.id ? "default" : "outline"}>
                    {selectedTemplate === template.id ? "Выбран" : "Выбрать шаблон"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedTemplate && (
            <div className="text-center mt-12 animate-fade-in">
              <Button size="lg" className="px-12 py-4 text-lg">
                <Icon name="Edit" size={20} className="mr-2" />
                Редактировать в конструкторе
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
              Всё для успешного интернет-магазина
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональные инструменты в простом и понятном интерфейсе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="text-center p-8 hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <Icon name={feature.icon as any} size={32} className="text-primary" />
                  </div>
                </div>
                <h4 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Builder Preview Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-heading font-bold text-foreground mb-6">
                Интуитивный конструктор как в AdvantShop
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Перетаскивайте блоки, редактируйте контент, настраивайте дизайн — 
                всё визуально, без единой строчки кода.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Drag & Drop редактор блоков</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Предварительный просмотр в реальном времени</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Адаптивность под все устройства</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Готовые блоки для интернет-магазина</span>
                </div>
              </div>

              <Button size="lg" className="px-8 py-3">
                <Icon name="MousePointer" size={20} className="mr-2" />
                Попробовать конструктор
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-4 animate-float">
                <img 
                  src="/img/85239cf1-3e8f-4a06-9621-beb3f98bbfb4.jpg" 
                  alt="Конструктор сайтов" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-balloon-pink rounded-full animate-float opacity-70"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-balloon-green rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-heading font-bold mb-6">
            Готовы запустить свой интернет-магазин?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам предпринимателей, которые уже продают с нашей платформой
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="px-12 py-4 text-lg">
              Создать сайт бесплатно
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">🎈</span>
                </div>
                <h4 className="text-xl font-heading font-bold">BalloonBuilder</h4>
              </div>
              <p className="text-muted-foreground">
                Лучшая платформа для создания интернет-магазинов воздушных шаров
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Продукт</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Шаблоны</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Конструктор</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Цены</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Обучение</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сообщество</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Следите за нами</h5>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 BalloonBuilder. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
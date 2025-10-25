import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://functions.poehali.dev/cef54f5a-a22c-45de-bebc-d2bc73067f0b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Свяжусь с вами в ближайшее время.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Ошибка",
          description: data.error || "Не удалось отправить заявку. Попробуйте позже.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Проверьте подключение к интернету.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: "Video",
      title: "Генерация AI-видео",
      description: "Работа с VEO 3, создание видеоконтента с помощью искусственного интеллекта для вашего бизнеса"
    },
    {
      icon: "Camera",
      title: "AI-фото и нейрофотосессии",
      description: "Профессиональная генерация изображений и фотосессии с использованием нейросетей"
    },
    {
      icon: "Globe",
      title: "Разработка сайтов",
      description: "Создание сайтов и лендингов в кратчайшие сроки с современным дизайном"
    },
    {
      icon: "MessageSquare",
      title: "Telegram-ассистенты",
      description: "Разработка умных ботов для автоматизации коммуникации с клиентами"
    },
    {
      icon: "Sparkles",
      title: "Prompt Engineering",
      description: "Экспертиза в создании эффективных промптов для различных AI-платформ"
    },
    {
      icon: "Palette",
      title: "Дизайн и брендинг",
      description: "Разработка логотипов, визиток и фирменного стиля вашего бренда"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Бесплатная консультация",
      description: "Обсуждаем ваши задачи и цели"
    },
    {
      number: "02",
      title: "Анализ потребностей",
      description: "Изучаю бизнес-процессы и определяю решения"
    },
    {
      number: "03",
      title: "Разработка решения",
      description: "Создаю индивидуальное AI-решение"
    },
    {
      number: "04",
      title: "Внедрение",
      description: "Запуск и настройка всех систем"
    },
    {
      number: "05",
      title: "Поддержка",
      description: "Сопровождение и оптимизация проекта"
    }
  ];

  const portfolio = [
    {
      title: "AI-видеогенерация",
      description: "Серия промо-роликов с использованием VEO 3",
      image: "https://cdn.poehali.dev/projects/bc4a1bf8-fcd7-491b-bba8-1c6bc3e6ecf0/files/7ecb325b-3cf7-4279-b053-b7a0e39edf3a.jpg"
    },
    {
      title: "Нейрофотосессия",
      description: "Корпоративная фотосессия для стартапа",
      image: "https://cdn.poehali.dev/projects/bc4a1bf8-fcd7-491b-bba8-1c6bc3e6ecf0/files/3b81c42c-02fe-4edb-b6bc-cd5ce4c271c0.jpg"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-glow" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <div className="mb-8 flex justify-center">
              <img 
                src="https://cdn.poehali.dev/files/4fa9dcb0-ecf6-4bde-b563-a33203f0b413.jpeg" 
                alt="ai Kate Logo" 
                className="w-48 h-48 md:w-64 md:h-64 object-contain"
              />
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Автоматизирую бизнес-процессы с помощью искусственного интеллекта
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Генерация AI-контента, разработка сайтов и Telegram-ботов, экспертиза в prompt engineering. 
              Превращаю идеи в работающие решения.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
                onClick={scrollToContact}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-primary" />
                <span>Гибкая стоимость</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-primary" />
                <span>Бесплатная консультация</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-primary" />
                <span>Быстрая реализация</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр AI-решений для вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/80 backdrop-blur border-border hover:border-primary/50 transition-all hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon name={service.icon} size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Портфолио
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры реализованных проектов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden border-border hover:border-primary/50 transition-all group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Процесс работы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              5 простых шагов к вашему AI-решению
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Связаться со мной
            </h2>
            <p className="text-xl text-muted-foreground">
              Готов обсудить ваш проект. Первая консультация бесплатно!
            </p>
          </div>

          <Card className="p-8 bg-card/80 backdrop-blur animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <Input 
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="bg-background/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="bg-background/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Описание задачи</label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={5}
                  className="bg-background/50"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить запрос
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-center text-sm text-muted-foreground mb-4">Или свяжитесь удобным способом:</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={20} className="mr-2" />
                    Telegram
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:your@email.com">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-card/50 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-6">
            <h3 className="font-heading text-2xl font-bold mb-2">AI-специалист</h3>
            <p className="text-muted-foreground">Автоматизация бизнеса с помощью искусственного интеллекта</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-sm hover:text-primary transition-colors">Портфолио</a>
            <a href="#process" className="text-sm hover:text-primary transition-colors">Процесс</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 AI-специалист. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
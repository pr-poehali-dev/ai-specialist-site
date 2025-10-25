import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  trackWhatsAppClick: () => void;
}

export function HeroSection({ trackWhatsAppClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" itemScope itemType="https://schema.org/ProfessionalService">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-glow" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      
      <meta itemProp="name" content="ai Kate - AI-специалист по автоматизации бизнеса" />
      <meta itemProp="description" content="Автоматизация бизнес-процессов с помощью ИИ, генерация AI-контента, разработка сайтов и Telegram-ботов" />
      <meta itemProp="url" content="https://aikate.ru" />
      <meta itemProp="telephone" content="+79146912960" />
      <meta itemProp="email" content="katuhka@list.ru" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight mt-20 px-2">
            Автоматизирую бизнес-процессы с помощью искусственного интеллекта
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Генерация AI-контента, разработка сайтов и Telegram-ботов, экспертиза в prompt engineering. 
            Превращаю идеи в работающие решения.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-12 px-4">
            <Button 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all w-full sm:w-auto"
              asChild
            >
              <a 
                href="https://wa.me/79146912960" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={18} className="text-primary" />
              <span>Гибкая стоимость</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={18} className="text-primary" />
              <span>Работа по договору</span>
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
  );
}

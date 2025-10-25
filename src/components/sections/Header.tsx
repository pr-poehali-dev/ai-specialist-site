import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/4fa9dcb0-ecf6-4bde-b563-a33203f0b413.jpeg" 
              alt="ai Kate" 
              className="w-10 h-10 object-cover rounded-full shadow-lg shadow-primary/30 border border-primary/20"
            />
            <span className="font-heading text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ai Kate
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#cases" className="text-sm hover:text-primary transition-colors">Кейсы</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </nav>
          
          <div className="flex items-center gap-2">
            <Button size="sm" className="hidden md:flex bg-gradient-to-r from-primary to-secondary">
              <a href="#contact">Заказать</a>
            </Button>
            
            <Button 
              size="sm" 
              variant="ghost" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#services" 
              className="text-base hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#cases" 
              className="text-base hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Кейсы
            </a>
            <a 
              href="#contact" 
              className="text-base hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Контакты
            </a>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-primary to-secondary w-full"
              asChild
            >
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Заказать</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
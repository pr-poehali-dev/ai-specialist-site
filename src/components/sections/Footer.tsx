import Icon from '@/components/ui/icon';

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-card/50 border-t border-border">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="mb-6">
          <h3 className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            ai Kate
          </h3>
          <p className="text-muted-foreground">
            AI-специалист по автоматизации бизнеса
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-6">
          <a 
            href="https://t.me/Plyachenko_Ekaterina" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Icon name="Send" size={24} />
          </a>
          <a 
            href="https://wa.me/79146912960" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Icon name="MessageCircle" size={24} />
          </a>
          <a 
            href="mailto:katuhka@list.ru"
            className="hover:text-primary transition-colors"
          >
            <Icon name="Mail" size={24} />
          </a>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ai Kate. Все права защищены.</p>
          <p className="mt-2">Владивосток, Россия</p>
        </div>
      </div>
    </footer>
  );
}

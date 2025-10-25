import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Обо мне
            </h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Меня зовут Екатерина Пляченко, и я специализируюсь на внедрении AI-технологий в бизнес-процессы. 
              Работаю во Владивостоке и по всей России.
            </p>
            
            <p>
              Моя миссия — помогать компаниям использовать возможности искусственного интеллекта для 
              автоматизации рутинных задач, создания контента и улучшения коммуникации с клиентами.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Icon name="Award" size={40} className="text-primary mx-auto mb-3" />
                <p className="font-semibold">Экспертиза</p>
                <p className="text-sm">AI-технологии</p>
              </div>
              <div className="text-center">
                <Icon name="Users" size={40} className="text-primary mx-auto mb-3" />
                <p className="font-semibold">Подход</p>
                <p className="text-sm">Индивидуальный</p>
              </div>
              <div className="text-center">
                <Icon name="Zap" size={40} className="text-primary mx-auto mb-3" />
                <p className="font-semibold">Результат</p>
                <p className="text-sm">Быстрый</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

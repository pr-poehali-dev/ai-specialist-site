import { Card } from '@/components/ui/card';

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

export function ProcessSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Как я работаю
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Простой и прозрачный процесс от идеи до результата
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {process.map((step, index) => (
            <Card key={index} className="p-6 relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="text-6xl font-bold text-primary/10 absolute top-4 right-4 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 relative z-10">{step.title}</h3>
              <p className="text-muted-foreground relative z-10">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

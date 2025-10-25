import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Как я работаю
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Простой и прозрачный процесс от идеи до результата
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 relative overflow-hidden group hover:shadow-lg transition-all h-full">
              <div className="text-6xl font-bold text-primary/10 absolute top-4 right-4 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 relative z-10">{step.title}</h3>
              <p className="text-muted-foreground relative z-10">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

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

export function PortfolioSection() {
  return (
    <section id="cases" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Портфолио
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Примеры реализованных проектов
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all h-full">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
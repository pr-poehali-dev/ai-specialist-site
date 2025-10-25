import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { motion } from 'framer-motion';

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

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный спектр AI-решений для вашего бизнеса
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`p-6 hover:shadow-lg transition-all hover:scale-105 h-full relative overflow-hidden ${
                index === 0 ? 'bg-cover bg-center' : 'bg-card'
              }`}
              style={index === 0 ? {
                backgroundImage: 'url(https://cdn.poehali.dev/projects/bc4a1bf8-fcd7-491b-bba8-1c6bc3e6ecf0/files/972cffd8-84dd-4fb0-93eb-2b16e66d3a3f.jpg)',
              } : {}}
              >
                {index === 0 && (
                  <motion.div 
                    className="absolute inset-0 bg-black/60"
                    animate={{
                      scale: [1, 1.1, 1],
                      x: [0, -20, 0],
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      backgroundImage: 'url(https://cdn.poehali.dev/projects/bc4a1bf8-fcd7-491b-bba8-1c6bc3e6ecf0/files/972cffd8-84dd-4fb0-93eb-2b16e66d3a3f.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                )}
                <div className={index === 0 ? 'relative z-10' : ''}>
                  <Icon name={service.icon as any} size={40} className={`mb-4 ${index === 0 ? 'text-white' : 'text-primary'}`} />
                  <h3 className={`font-heading text-xl font-bold mb-3 ${index === 0 ? 'text-white' : ''}`}>{service.title}</h3>
                  <p className={index === 0 ? 'text-gray-200' : 'text-muted-foreground'}>{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
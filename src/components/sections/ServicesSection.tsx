import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { motion } from 'framer-motion';

const services = [
  {
    icon: "Video",
    title: "Генерация AI-видео",
    description: "Работа с Veo 3 и другими агрегатами, создание видеоконтента с помощью ИИ",
    backgroundImage: "https://cdn.poehali.dev/projects/bc4a1bf8-fcd7-491b-bba8-1c6bc3e6ecf0/files/dae292a6-9ae6-4ecd-8666-30587b938eed.jpg"
  },
  {
    icon: "Camera",
    title: "AI-фото и нейрофотосессии",
    description: "Профессиональная генерация изображений и фотосессии с использованием нейросетей",
    backgroundImage: "https://cdn.poehali.dev/projects/bc4a1bf8-fcd7-491b-bba8-1c6bc3e6ecf0/files/70171d15-ba00-4249-9e36-cf8d0878ceac.jpg"
  },
  {
    icon: "Globe",
    title: "Разработка сайтов",
    description: "Создание сайтов и лендингов в кратчайшие сроки с современным дизайном",
    backgroundImage: "https://cdn.poehali.dev/projects/bc4a1bf8-fcd7-491b-bba8-1c6bc3e6ecf0/files/9b7eb82b-a304-4e7d-a665-e25bbb1082ca.jpg"
  },
  {
    icon: "MessageSquare",
    title: "Telegram-ассистенты",
    description: "Разработка умных ботов для автоматизации коммуникации с клиентами",
    backgroundImage: "https://cdn.poehali.dev/projects/bc4a1bf8-fcd7-491b-bba8-1c6bc3e6ecf0/files/1e4f291e-c034-4153-986b-cd1435eb6331.jpg"
  },
  {
    icon: "Sparkles",
    title: "Prompt Engineering",
    description: "Экспертиза в создании эффективных промптов для различных AI-платформ",
    backgroundImage: "https://cdn.poehali.dev/projects/bc4a1bf8-fcd7-491b-bba8-1c6bc3e6ecf0/files/af5c1a6e-ac5a-4136-8eb6-ef8d60659154.jpg"
  },
  {
    icon: "Palette",
    title: "Дизайн и брендинг",
    description: "Разработка логотипов, визиток и фирменного стиля вашего бренда",
    backgroundImage: "https://cdn.poehali.dev/projects/bc4a1bf8-fcd7-491b-bba8-1c6bc3e6ecf0/files/65cefc27-8525-4b0b-b620-366186b214d4.jpg"
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
              >
                {service.backgroundImage && (
                  <>
                    <motion.div 
                      className="absolute inset-0"
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
                        backgroundImage: `url(${service.backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                  </>
                )}
                <div className={service.backgroundImage ? 'relative z-10' : ''}>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                    className="mb-4"
                  >
                    <Icon 
                      name={service.icon as any} 
                      size={40} 
                      className={service.backgroundImage ? 'text-white drop-shadow-lg' : 'text-primary'} 
                    />
                  </motion.div>
                  <h3 
                    className={`font-heading text-xl font-bold mb-3 ${service.backgroundImage ? 'text-white' : ''}`}
                    style={service.backgroundImage ? { textShadow: '2px 2px 8px rgba(0,0,0,0.8)' } : {}}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className={service.backgroundImage ? 'text-white font-semibold' : 'text-muted-foreground'}
                    style={service.backgroundImage ? { textShadow: '1px 1px 6px rgba(0,0,0,0.7)' } : {}}
                  >
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
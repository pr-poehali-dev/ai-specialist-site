import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { motion } from 'framer-motion';

const articles = [
  {
    title: "5 способов автоматизировать бизнес с помощью AI в 2025 году",
    excerpt: "Узнайте, как искусственный интеллект может сократить рутинные задачи и увеличить продажи на 40%",
    date: "25 октября 2024",
    readTime: "5 мин",
    category: "Автоматизация",
    image: "https://cdn.poehali.dev/files/placeholder-ai-automation.jpg",
    slug: "5-sposobov-avtomatizirovat-biznes"
  },
  {
    title: "Telegram-боты для бизнеса: от идеи до запуска за неделю",
    excerpt: "Пошаговое руководство по созданию чат-бота, который будет работать на вас 24/7",
    date: "20 октября 2024",
    readTime: "7 мин",
    category: "Разработка",
    image: "https://cdn.poehali.dev/files/placeholder-telegram-bot.jpg",
    slug: "telegram-boty-dlya-biznesa"
  },
  {
    title: "Нейросети для контента: как создавать видео и фото без фотографа",
    excerpt: "Реальные кейсы использования AI для создания профессионального визуального контента",
    date: "15 октября 2024",
    readTime: "6 мин",
    category: "AI-контент",
    image: "https://cdn.poehali.dev/files/placeholder-ai-content.jpg",
    slug: "neyroseti-dlya-kontenta"
  }
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Блог
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полезные статьи про AI, автоматизацию и digital-технологии
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all h-full flex flex-col">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="FileText" size={64} className="text-primary/40" />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-primary/10 transition-colors"
                    asChild
                  >
                    <a href={`/blog/${article.slug}`}>
                      Читать статью
                      <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button size="lg" variant="outline" className="gap-2">
            <Icon name="BookOpen" size={20} />
            Все статьи блога
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
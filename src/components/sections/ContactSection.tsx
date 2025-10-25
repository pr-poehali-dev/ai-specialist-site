import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { motion } from 'framer-motion';

interface ContactSectionProps {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  trackWhatsAppClick: () => void;
  trackTelegramClick: () => void;
  trackEmailClick: () => void;
}

export function ContactSection({
  formData,
  setFormData,
  handleSubmit,
  isSubmitting,
  trackWhatsAppClick,
  trackTelegramClick,
  trackEmailClick
}: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-2xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Свяжитесь со мной
          </h2>
          <p className="text-xl text-muted-foreground">
            Обсудим ваш проект и найдем лучшее решение
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Имя</label>
              <Input 
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="bg-background/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input 
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="bg-background/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Описание задачи</label>
              <Textarea 
                placeholder="Расскажите о вашем проекте..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows={5}
                className="bg-background/50"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить запрос
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-sm text-muted-foreground mb-4">Или свяжитесь удобным способом:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://t.me/Plyachenko_Ekaterina" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={trackTelegramClick}
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://wa.me/79146912960" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppClick}
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="mailto:katuhka@list.ru"
                  onClick={trackEmailClick}
                >
                  <Icon name="Mail" size={20} className="mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
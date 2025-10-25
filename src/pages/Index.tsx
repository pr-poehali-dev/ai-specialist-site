import { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';

import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

export default function Index() {
  useEffect(() => {
    document.title = 'ai Kate - AI-специалист по автоматизации бизнеса | Владивосток и вся Россия';
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://functions.poehali.dev/cef54f5a-a22c-45de-bebc-d2bc73067f0b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        if (typeof window !== 'undefined' && (window as any).ym) {
          (window as any).ym(101026698, 'reachGoal', 'form_submit');
        }
        
        toast({
          title: "Заявка отправлена!",
          description: "Свяжусь с вами в ближайшее время.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Ошибка",
          description: data.error || "Не удалось отправить заявку. Попробуйте позже.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Проверьте подключение к интернету.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const trackWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(101026698, 'reachGoal', 'whatsapp_click');
    }
  };

  const trackTelegramClick = () => {
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(101026698, 'reachGoal', 'telegram_click');
    }
  };

  const trackEmailClick = () => {
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(101026698, 'reachGoal', 'email_click');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <HeroSection trackWhatsAppClick={trackWhatsAppClick} />
      
      <ServicesSection />
      
      <ProcessSection />
      
      <PortfolioSection />
      
      <ContactSection 
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        trackWhatsAppClick={trackWhatsAppClick}
        trackTelegramClick={trackTelegramClick}
        trackEmailClick={trackEmailClick}
      />
      
      <Footer />
      
      <ScrollToTop />
    </div>
  );
}
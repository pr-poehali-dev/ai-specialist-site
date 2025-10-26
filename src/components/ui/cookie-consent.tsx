import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Icon name="Cookie" size={24} className="text-primary flex-shrink-0 mt-1" />
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-1">Мы используем cookies</p>
              <p>
                Этот сайт использует cookies для улучшения вашего опыта и аналитики посещений (Яндекс.Метрика).
                Продолжая использовать сайт, вы соглашаетесь с{' '}
                <a href="/privacy" className="text-primary hover:underline font-medium">
                  политикой конфиденциальности
                </a>
                .
              </p>
            </div>
          </div>
          
          <div className="flex gap-2 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="min-w-[100px]"
            >
              Отклонить
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="min-w-[100px] bg-gradient-to-r from-primary to-secondary"
            >
              Принять
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

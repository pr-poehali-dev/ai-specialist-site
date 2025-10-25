import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { motion } from 'framer-motion';

export default function BlogPost() {
  useEffect(() => {
    document.title = '5 способов автоматизировать бизнес с помощью AI в 2025 году | ai Kate';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" asChild className="gap-2">
              <a href="/">
                <Icon name="ArrowLeft" size={20} />
                На главную
              </a>
            </Button>
            
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/4fa9dcb0-ecf6-4bde-b563-a33203f0b413.jpeg" 
                alt="ai Kate" 
                className="w-10 h-10 object-cover rounded-full"
              />
              <span className="font-heading text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ai Kate
              </span>
            </div>
          </div>
        </div>
      </header>

      <article className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                  Автоматизация
                </span>
                <div className="flex items-center gap-1">
                  <Icon name="Calendar" size={14} />
                  <span>25 октября 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={14} />
                  <span>5 мин чтения</span>
                </div>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                5 способов автоматизировать бизнес с помощью AI в 2025 году
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Искусственный интеллект перестал быть технологией будущего — он уже здесь и активно помогает бизнесу экономить время, деньги и увеличивать продажи. В этой статье разберу 5 конкретных способов внедрить AI в ваш бизнес уже сегодня.
              </p>
            </div>

            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mb-12 flex items-center justify-center">
              <Icon name="Sparkles" size={120} className="text-primary/40" />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-heading text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <span className="text-5xl text-primary/20">01</span>
                Автоматизация обработки заявок через Telegram-бота
              </h2>
              
              <p className="text-lg leading-relaxed mb-4">
                <strong>Проблема:</strong> Клиенты пишут в любое время суток, а вы не можете отвечать 24/7. Теряются заявки, клиенты уходят к конкурентам.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                <strong>Решение:</strong> Telegram-бот с AI принимает заявки, задаёт уточняющие вопросы, собирает контакты и сразу отправляет вам готовую информацию. Клиент получает мгновенный ответ, вы — готовую заявку.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <p className="font-semibold text-lg mb-2">💡 Реальный кейс:</p>
                <p className="text-muted-foreground">
                  Салон красоты внедрил бота для записи. За первый месяц количество записей выросло на 40%, потому что клиенты могли записаться в любое время, даже ночью.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-8">
                <strong>Что даёт:</strong> Работа с клиентами 24/7, сокращение времени на обработку заявок с 10 минут до 30 секунд, увеличение конверсии на 25-40%.
              </p>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <span className="text-5xl text-primary/20">02</span>
                Генерация контента для соцсетей
              </h2>

              <p className="text-lg leading-relaxed mb-4">
                <strong>Проблема:</strong> Нужно регулярно публиковать посты, но нет времени на создание текстов и изображений. Контент-менеджер стоит от 30 000 ₽/месяц.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                <strong>Решение:</strong> AI генерирует тексты постов, изображения и даже короткие видео. Вы задаёте тему и стиль — нейросеть создаёт готовый контент за минуты.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-card border border-border p-6 rounded-lg">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Icon name="Image" size={20} className="text-primary" />
                    AI-изображения
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Генерация уникальных картинок для постов без фотографа и фотостоков. Экономия от 5 000 ₽ за съёмку.
                  </p>
                </div>
                <div className="bg-card border border-border p-6 rounded-lg">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Icon name="FileText" size={20} className="text-primary" />
                    AI-тексты
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Создание продающих текстов с учётом вашей целевой аудитории и тона общения бренда.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-8">
                <strong>Что даёт:</strong> Экономия 20-40 часов в месяц, снижение расходов на контент в 3-5 раз, регулярные публикации без простоев.
              </p>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <span className="text-5xl text-primary/20">03</span>
                AI-помощник для работы с клиентами
              </h2>

              <p className="text-lg leading-relaxed mb-4">
                <strong>Проблема:</strong> Клиенты задают одни и те же вопросы: цены, условия, наличие. Менеджер тратит 70% времени на повторяющиеся ответы.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                <strong>Решение:</strong> AI-чат на сайте или в мессенджерах отвечает на типовые вопросы мгновенно. Сложные запросы передаёт менеджеру с полной историей диалога.
              </p>

              <div className="bg-secondary/5 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
                <p className="font-semibold text-lg mb-2">📊 Статистика:</p>
                <p className="text-muted-foreground">
                  80% вопросов от клиентов — типовые. AI справляется с ними в 100% случаев, освобождая менеджеров для сложных задач и продаж.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-8">
                <strong>Что даёт:</strong> Мгновенные ответы клиентам, освобождение менеджеров для продаж, работа круглосуточно без найма дополнительных сотрудников.
              </p>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <span className="text-5xl text-primary/20">04</span>
                Автоматический анализ отзывов и обратной связи
              </h2>

              <p className="text-lg leading-relaxed mb-4">
                <strong>Проблема:</strong> Отзывы приходят с разных платформ: Google, Яндекс, соцсети. Вручную обрабатывать их долго, можно пропустить важное.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                <strong>Решение:</strong> AI собирает отзывы со всех источников, анализирует тональность (позитив/негатив), выявляет проблемные места и автоматически уведомляет вас о критических ситуациях.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">Мониторинг репутации в реальном времени</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">Выявление проблем до того, как они станут массовыми</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">Автоматические шаблоны ответов на типовые отзывы</span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed mb-8">
                <strong>Что даёт:</strong> Контроль репутации 24/7, быстрая реакция на негатив, понимание что улучшить в продукте/сервисе.
              </p>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <span className="text-5xl text-primary/20">05</span>
                Умные рассылки на основе поведения клиентов
              </h2>

              <p className="text-lg leading-relaxed mb-4">
                <strong>Проблема:</strong> Обычные рассылки имеют низкую открываемость (5-10%). Клиенты игнорируют нерелевантные предложения.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                <strong>Решение:</strong> AI анализирует поведение каждого клиента: что смотрел, что покупал, когда активен. На основе этого отправляет персонализированные предложения в нужное время.
              </p>

              <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="font-semibold text-lg mb-2">🎯 Пример:</p>
                <p className="text-muted-foreground mb-3">
                  Клиент посмотрел товар, но не купил. Через 2 часа AI отправляет персональную скидку 10% на этот товар. Конверсия таких писем — 35% против 5% у обычных рассылок.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-12">
                <strong>Что даёт:</strong> Рост открываемости писем до 40-50%, увеличение продаж от рассылок в 3-7 раз, лояльные клиенты вместо раздражённых спамом.
              </p>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20">
                <h2 className="font-heading text-3xl font-bold mb-4">Подведём итоги</h2>
                <p className="text-lg mb-6 leading-relaxed">
                  Автоматизация с помощью AI — это не сложно и не дорого. Даже одно внедрённое решение может окупиться за первый месяц работы. Главное — начать с простого и масштабировать успешный опыт.
                </p>
                
                <div className="bg-background/50 p-6 rounded-xl mb-6">
                  <h3 className="font-bold text-xl mb-4">Что вы получите:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="TrendingUp" size={20} className="text-primary" />
                      <span>Рост продаж на 25-40%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span>Экономия 40+ часов в месяц</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="DollarSign" size={20} className="text-primary" />
                      <span>Снижение расходов на персонал</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Users" size={20} className="text-primary" />
                      <span>Довольные клиенты 24/7</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary gap-2" asChild>
                    <a href="/#contact">
                      <Icon name="MessageCircle" size={20} />
                      Получить консультацию
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <a href="https://wa.me/79146912960" target="_blank" rel="noopener noreferrer">
                      <Icon name="Phone" size={20} />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            Хотите внедрить AI в свой бизнес? Напишите мне!
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://wa.me/79146912960" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://t.me/Kate_GPT_bot" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:katuhka@list.ru">
                Email
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

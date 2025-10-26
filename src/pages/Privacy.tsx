import { useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Privacy = () => {
  useEffect(() => {
    document.title = 'Политика конфиденциальности | ai Kate';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => window.history.back()}
          >
            <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
            Назад
          </Button>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Политика конфиденциальности
            </h1>

            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Общие положения
                </h2>
                <p className="leading-relaxed">
                  Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта aikate.tech (далее — «Сайт»). Используя наш Сайт и отправляя свои персональные данные, вы соглашаетесь с условиями данной Политики.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Какие данные мы собираем
                </h2>
                <p className="leading-relaxed mb-3">
                  При использовании форм на нашем Сайте мы можем собирать следующую информацию:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Имя и фамилия</li>
                  <li>Адрес электронной почты</li>
                  <li>Номер телефона</li>
                  <li>Название компании</li>
                  <li>Сообщение или комментарий</li>
                  <li>IP-адрес</li>
                  <li>Информация о браузере и устройстве</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Цели обработки данных
                </h2>
                <p className="leading-relaxed mb-3">
                  Мы используем собранные персональные данные для следующих целей:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Обработка и ответ на ваши запросы</li>
                  <li>Предоставление информации о наших услугах</li>
                  <li>Улучшение качества обслуживания</li>
                  <li>Статистический анализ посещаемости Сайта</li>
                  <li>Информирование о новых услугах и предложениях (при вашем согласии)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Защита данных
                </h2>
                <p className="leading-relaxed">
                  Мы применяем технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Все данные передаются по защищенному протоколу HTTPS и хранятся на защищенных серверах.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Передача данных третьим лицам
                </h2>
                <p className="leading-relaxed">
                  Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, когда это необходимо для выполнения наших обязательств перед вами (например, для отправки email-уведомлений) или требуется законодательством Российской Федерации.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Cookies и аналитика
                </h2>
                <p className="leading-relaxed">
                  Наш Сайт использует Яндекс.Метрику для анализа поведения посетителей. Эти сервисы используют cookies для сбора анонимной статистической информации. Вы можете отключить cookies в настройках вашего браузера.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Ваши права
                </h2>
                <p className="leading-relaxed mb-3">
                  В соответствии с законодательством РФ вы имеете право:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Получать информацию о ваших персональных данных</li>
                  <li>Требовать исправления неточных данных</li>
                  <li>Требовать удаления ваших данных</li>
                  <li>Отозвать согласие на обработку данных</li>
                  <li>Подать жалобу в Роскомнадзор</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. Срок хранения данных
                </h2>
                <p className="leading-relaxed">
                  Мы храним ваши персональные данные в течение срока, необходимого для достижения целей обработки, либо в течение срока, установленного законодательством РФ.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  9. Изменения в Политике
                </h2>
                <p className="leading-relaxed">
                  Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. Актуальная версия всегда доступна на данной странице. Дата последнего обновления указана ниже.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  10. Контакты
                </h2>
                <p className="leading-relaxed">
                  Если у вас есть вопросы относительно обработки ваших персональных данных или вы хотите воспользоваться своими правами, пожалуйста, свяжитесь с нами через форму обратной связи на Сайте.
                </p>
              </section>

              <div className="mt-12 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  <strong>Дата последнего обновления:</strong> 27 октября 2025 года
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

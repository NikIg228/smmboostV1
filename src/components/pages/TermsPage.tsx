import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Пользовательское соглашение
          </span>
        </h1>
        <p className="text-gray-400 text-lg">
          Условия использования услуг SMM Boost
        </p>
      </div>

      {/* Content */}
      <div className="space-y-8 text-gray-300">
        <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            1. Общие положения
          </h2>
          <div className="space-y-3">
            <p>
              Настоящее Пользовательское соглашение регулирует отношения между SMM Boost 
              и пользователями сервиса по предоставлению услуг продвижения в социальных сетях.
            </p>
            <p>
              Используя наш сервис, вы соглашаетесь с условиями данного соглашения.
            </p>
          </div>
        </section>

        <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            2. Описание услуг
          </h2>
          <div className="space-y-3">
            <p>SMM Boost предоставляет следующие услуги:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Накрутка подписчиков в социальных сетях</li>
              <li>Накрутка лайков на посты и видео</li>
              <li>Увеличение просмотров контента</li>
              <li>Другие услуги по продвижению в соцсетях</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            3. Обязательства сторон
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Обязательства SMM Boost:</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Предоставить услуги в соответствии с описанием</li>
                <li>Обеспечить конфиденциальность данных клиента</li>
                <li>Предоставить техническую поддержку</li>
                <li>Соблюдать сроки выполнения заказов</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Обязательства клиента:</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Предоставить корректные данные для выполнения заказа</li>
                <li>Произвести оплату в соответствии с тарифами</li>
                <li>Не использовать услуги для незаконных целей</li>
                <li>Соблюдать правила социальных сетей</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            4. Оплата и возврат средств
          </h2>
          <div className="space-y-3">
            <p>
              Оплата производится до начала выполнения заказа. Принимаются банковские карты, 
              электронные кошельки и криптовалюты.
            </p>
            <p>
              Возврат средств возможен только в случае невыполнения заказа по вине SMM Boost. 
              Подробности в разделе "Возврат средств".
            </p>
          </div>
        </section>

        <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            5. Ограничения и запреты
          </h2>
          <div className="space-y-3">
            <p>Запрещается использовать наши услуги для:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Продвижения незаконного контента</li>
              <li>Нарушения авторских прав</li>
              <li>Спама и мошенничества</li>
              <li>Дискриминации и разжигания вражды</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            6. Контактная информация
          </h2>
          <div className="space-y-2">
            <p><strong>Email:</strong> support.smm.boost.kz@gmail.com</p>
            <p><strong>Telegram:</strong> @smm.boost.kz</p>
            <p><strong>Телефон:</strong> +7 707 345 12 12</p>
          </div>
        </section>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        Последнее обновление: 15 января 2024 года
      </div>
    </div>
  );
};
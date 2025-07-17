import React, { useState } from 'react';
import { ArrowLeft, Check, Shield, Clock, Zap, Calculator } from 'lucide-react';
import { Service } from '../types';
import { PaymentModal } from './PaymentModal';
import { useAuth } from '../hooks/useAuth';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  const [url, setUrl] = useState('');
  const [quantity, setQuantity] = useState(1000);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { isAuthenticated } = useAuth();

  const predefinedQuantities = [100, 500, 1000, 5000, 10000];
  
  const calculatePrice = (qty: number) => {
    if (service.category === 'likes') {
      return (qty / 100) * service.price;
    }
    return (qty / 1000) * service.price;
  };
  
  const totalPrice = calculatePrice(quantity);

  const handleQuantityChange = (newQuantity: number) => {
    setIsCalculating(true);
    setTimeout(() => {
      setQuantity(Math.max(service.minQuantity, Math.min(service.maxQuantity, newQuantity)));
      setIsCalculating(false);
    }, 300);
  };

  const handleOrder = () => {
    if (!url) {
      alert('Пожалуйста, введите ссылку на профиль');
      return;
    }
    
    if (!isAuthenticated) {
      alert('Пожалуйста, войдите в аккаунт для оформления заказа');
      return;
    }
    
    setShowPaymentModal(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Назад к услугам</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Service Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-4">
              {service.name}
            </h1>
            <p className="text-gray-400 text-lg">
              {service.description}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Особенности услуги</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <Clock className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="text-sm text-gray-400">Время запуска</div>
                  <div className="text-white font-medium">{service.startTime}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <Zap className="w-5 h-5 text-yellow-500" />
                <div>
                  <div className="text-sm text-gray-400">Скорость</div>
                  <div className="text-white font-medium">{service.speed}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <Shield className="w-5 h-5 text-green-500" />
                <div>
                  <div className="text-sm text-gray-400">Гарантия</div>
                  <div className="text-white font-medium">{service.guarantee}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <Calculator className="w-5 h-5 text-purple-500" />
                <div>
                  <div className="text-sm text-gray-400">
                    Стоимость за {service.category === 'likes' ? '100' : '1000'}
                  </div>
                  <div className="text-white font-medium">
                    {service.price.toLocaleString()}₸
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Как это работает</h3>
            
            <div className="space-y-3">
              {[
                'Вставьте ссылку на ваш профиль или пост',
                'Выберите желаемое количество',
                'Произведите оплату любым удобным способом',
                'Получите результат в указанные сроки'
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Form */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-6">Оформить заказ</h3>
          
          <div className="space-y-6">
            {/* URL Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Ссылка на профиль или пост
              </label>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://instagram.com/yourusername"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>

            {/* Quantity Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Количество ({service.minQuantity} - {service.maxQuantity})
              </label>
              
              {/* Predefined Quantities */}
              <div className="grid grid-cols-5 gap-2 mb-3">
                {predefinedQuantities.map(qty => (
                  <button
                    key={qty}
                    onClick={() => handleQuantityChange(qty)}
                    className={`py-2 px-3 rounded-lg font-medium transition-all ${
                      quantity === qty
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {qty}
                  </button>
                ))}
              </div>
              
              {/* Custom Quantity */}
              <input
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 0)}
                min={service.minQuantity}
                max={service.maxQuantity}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>

            {/* Price Calculator */}
            <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Количество:</span>
                <span className="text-white font-medium">
                  {isCalculating ? '...' : quantity.toLocaleString()}
                </span>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Цена за 1000:</span>
                <span className="text-white font-medium">
                  {service.price.toLocaleString()}₸
                </span>
              </div>
              
              <div className="border-t border-gray-600 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">Итого:</span>
                  <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    {isCalculating ? '...' : `${Math.round(totalPrice).toLocaleString()}₸`}
                  </span>
                </div>
              </div>
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrder}
              disabled={!url || isCalculating}
              className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-pink-500/25"
            >
              {isCalculating ? 'Расчёт...' : 'Перейти к оплате'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        service={service}
        quantity={quantity}
        url={url}
        totalPrice={totalPrice}
      />
    </div>
  );
};
import React from 'react';
import { Eye, Heart, Users, Shield, Clock, Award } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  const stats = [
    {
      icon: Eye,
      value: '100M+',
      label: 'просмотров',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      value: '9M+',
      label: 'лайков',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Users,
      value: '1.7M+',
      label: 'подписчиков',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const trustIndicators = [
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'SSL шифрование и защита данных'
    },
    {
      icon: Clock,
      title: 'Быстрый старт',
      description: 'Запуск заказов за 0-30 минут'
    },
    {
      icon: Award,
      title: 'Гарантия качества',
      description: 'Возврат средств при невыполнении'
    }
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Наши достижения
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Цифры, которые говорят о нашем опыте
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  
                  <div className="text-gray-400 text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustIndicators.map((indicator, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <indicator.icon className="w-6 h-6 text-white" />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {indicator.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {indicator.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 px-8 py-4 bg-gray-800/50 rounded-full border border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Онлайн 24/7</span>
            </div>
            
            <div className="w-px h-6 bg-gray-600"></div>
            
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-300">Безопасные платежи</span>
            </div>
            
            <div className="w-px h-6 bg-gray-600"></div>
            
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-gray-300">10,000+ довольных клиентов</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
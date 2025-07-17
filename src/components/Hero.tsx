import React, { useState } from 'react';
import { ArrowRight, Zap, Shield, Clock, Headphones } from 'lucide-react';
import { SocialProofSection } from './SocialProofSection';

interface HeroProps {
  onPageChange: (page: string) => void;
  onConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPageChange, onConsultation }) => {

  const benefits = [
    {
      icon: Zap,
      title: 'Мгновенный запуск',
      description: 'Начинаем работу через несколько минут'
    },
    {
      icon: Shield,
      title: 'Анонимно и безопасно',
      description: 'Никаких рисков для вашего аккаунта'
    },
    {
      icon: Clock,
      title: 'Без пароля',
      description: 'Нужна только ссылка на профиль'
    },
    {
      icon: Headphones,
      title: 'Техподдержка 24/7',
      description: 'Всегда готовы помочь и ответить'
    }
  ];

  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-gray-900"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Продвижение в
              </span>
              <br />
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Instagram, TikTok
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                и других соцсетях
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Быстрая и безопасная накрутка лайков, подписчиков и просмотров
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                onClick={() => onPageChange('services')}
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-pink-500/25"
              >
                <span className="flex items-center space-x-2">
                  <span>Выбрать услугу</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button 
                onClick={onConsultation}
                className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-xl hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-200"
              >
                Получить консультацию
              </button>
            </div>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Social Proof Section */}
      <SocialProofSection />
    </>
  );
};
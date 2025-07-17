import React from 'react';
import { Heart, UserPlus, Eye, PlayCircle, ThumbsUp, MessageCircle, Instagram, Video, Play, Users, Twitter } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onServiceClick: (service: Service) => void;
}

const iconMap = {
  Heart,
  UserPlus,
  Eye,
  PlayCircle,
  ThumbsUp,
  MessageCircle,
  Instagram,
  Video,
  Play,
  Users,
  Twitter
};

const platformColors = {
  instagram: 'from-pink-500 to-purple-600',
  tiktok: 'from-gray-800 to-black',
  youtube: 'from-red-500 to-red-700',
  telegram: 'from-blue-400 to-blue-600',
  vk: 'from-blue-600 to-blue-800',
  twitter: 'from-blue-400 to-blue-600'
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onServiceClick }) => {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap];
  const platformGradient = platformColors[service.platform as keyof typeof platformColors];
  
  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden hover:transform hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-r ${platformGradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          
          <div className="text-right">
            <div className="text-sm text-gray-400">от</div>
            <div className="text-lg font-bold text-white">
              {service.price.toLocaleString()}₸
            </div>
            <div className="text-xs text-gray-500">
              {service.category === 'likes' ? 'за 100' : 'за 1000'}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
          {service.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {service.description}
        </p>
        
        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Запуск: {service.startTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Скорость: {service.speed}</span>
          </div>
        </div>
        
        {/* Action Button */}
        <button
          onClick={() => onServiceClick(service)}
          className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-pink-500/25"
        >
          Купить
        </button>
      </div>
    </div>
  );
};
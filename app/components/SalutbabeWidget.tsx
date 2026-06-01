'use client';

import Image from 'next/image';
import {useLanguage} from '../context/LanguageContext';

export default function SalutbabeWidget() {
  const { t, language } = useLanguage();

  const getGooglePlayBadge = () => {
    switch (language) {
      case 'tr': return '/assets/images/GetItOnGooglePlay_Badge_Web_color_Turkish.svg';
      case 'de': return '/assets/images/GetItOnGooglePlay_Badge_Web_color_German.svg';
      case 'en':
      default: return '/assets/images/GetItOnGooglePlay_Badge_Web_color_English.svg';
    }
  };

  const getAppleStoreBadge = () => {
    switch (language) {
      case 'tr': return '/assets/images/Download_on_the_App_Store_Badge_TR_RGB_blk_100217.svg';
      case 'de': return '/assets/images/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg';
      case 'en':
      default: return '/assets/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
    }
  };

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[60] group flex items-center">
      {/* Collapsed Tab */}
      <div className="w-10 md:w-12 h-32 md:h-40 bg-gradient-to-b from-[#E4007C] to-[#FBDD09] rounded-r-2xl shadow-2xl flex items-center justify-center cursor-pointer overflow-hidden border border-white/20 relative z-20 transition-all duration-300">
        <span className="text-white font-bold tracking-widest -rotate-90 whitespace-nowrap text-xs md:text-sm drop-shadow-md group-hover:opacity-0 transition-opacity duration-300">
          salutbabe
        </span>
      </div>

      {/* Expanded Panel */}
      <div className="absolute left-10 md:left-12 top-1/2 -translate-y-1/2 w-[280px] md:w-[340px] bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/10 rounded-r-3xl shadow-[0_0_50px_rgba(228,0,124,0.3)] overflow-hidden opacity-0 -translate-x-full pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col z-10">
        
        {/* Header Image Area */}
        <div className="relative w-full h-40 md:h-48 bg-[#050505]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
          
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
            <h3 className="text-2xl font-black text-white font-display tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">salutbabe</h3>
          </div>

          <div className="absolute inset-0 flex justify-center gap-4 px-6 pt-12 opacity-85 z-0">
            <div className="relative w-1/2 h-full rounded-t-2xl overflow-hidden border border-white/10 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/assets/images/230x498bb.webp" 
                alt="Salutbabe App Screen 1" 
                fill 
                className="object-cover object-top"
              />
            </div>
            <div className="relative w-1/2 h-full rounded-t-2xl overflow-hidden border border-white/10 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/assets/images/230x498bb-2.webp" 
                alt="Salutbabe App Screen 2" 
                fill 
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative z-20 flex flex-col" style={{ padding: '32px' }}>
          
          <p className="text-[#FBDD09] text-sm md:text-xs font-bold tracking-widest uppercase mb-6">{`Anneden Anneye Güvenle`}</p>
          
          <p className="text-white/70 text-sm leading-relaxed mb-10">
            İkinci el bebek kıyafetleri satış platformu. Bebeklerinizin küçülen kıyafetlerini güvenle satın, yeni ihtiyaçlarını uygun fiyatlarla karşılayın.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-row justify-center items-center gap-4 mt-6 h-10 w-full">
            <a href="https://apps.apple.com/tr/app/salutbabe/id6759988511?l=tr" target="_blank" rel="noopener noreferrer" className="h-full transition-all duration-300 hover:-translate-y-1">
              <img src={getAppleStoreBadge()} alt="Download on the App Store" className="h-full w-auto object-contain" />
            </a>
            
            <a href="https://play.google.com/store/apps/details?id=com.salutbabe&hl=tr&pli=1" target="_blank" rel="noopener noreferrer" className="h-full transition-all duration-300 hover:-translate-y-1">
              <img src={getGooglePlayBadge()} alt="Get it on Google Play" className="h-full w-auto object-contain" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

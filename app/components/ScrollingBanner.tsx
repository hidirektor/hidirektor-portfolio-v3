'use client';

import {useLanguage} from '../context/LanguageContext';

export default function ScrollingBanner() {
  const { t } = useLanguage();
  
  const items = [
    t('banner.item1'),
    t('banner.item2'),
    t('banner.item3'),
    t('banner.item4'),
    t('banner.item5')
  ];

  return (
    <div className="w-full bg-[#E4007C] overflow-hidden py-4 border-y border-[#FBDD09]/20 relative z-20">
      <div className="flex whitespace-nowrap">
        {/* Animate-scroll class applies a 20s infinite scroll to the left */}
        <div className="animate-scroll flex gap-8 px-4 items-center">
          {items.concat(items).concat(items).map((text, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-white font-black tracking-widest text-sm md:text-base">
                {text}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FBDD09]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

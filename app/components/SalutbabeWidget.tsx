'use client';

import Image from 'next/image';

export default function SalutbabeWidget() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[60] group flex items-center">
      {/* Collapsed Tab */}
      <div className="w-10 md:w-12 h-32 md:h-40 bg-gradient-to-b from-[#E4007C] to-[#FBDD09] rounded-r-2xl shadow-2xl flex items-center justify-center cursor-pointer overflow-hidden border border-white/20 relative z-20 group-hover:w-2 transition-all duration-300">
        <span className="text-white font-bold tracking-widest -rotate-90 whitespace-nowrap text-xs md:text-sm drop-shadow-md group-hover:opacity-0 transition-opacity duration-300">
          SALUTBABE
        </span>
      </div>

      {/* Expanded Panel */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] md:w-[340px] bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/10 rounded-r-3xl shadow-[0_0_50px_rgba(228,0,124,0.3)] overflow-hidden opacity-0 -translate-x-full pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col z-10">
        
        {/* Header Image Area */}
        <div className="relative w-full h-40 md:h-48 bg-[#050505]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
          <Image 
            src="/assets/images/salutbabe_mockup.png" 
            alt="Salutbabe App" 
            fill 
            className="object-cover object-top opacity-80"
          />
        </div>

        {/* Content Area */}
        <div className="relative z-20 p-6 md:p-8 flex flex-col -mt-4">
          
          <h3 className="text-2xl font-black text-white font-display mb-1 tracking-tight">Salutbabe</h3>
          <p className="text-[#FBDD09] text-xs font-bold tracking-widest uppercase mb-4">{`Anneden Anneye Güvenle`}</p>
          
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            İkinci el bebek kıyafetleri satış platformu. Bebeklerinizin küçülen kıyafetlerini güvenle satın, yeni ihtiyaçlarını uygun fiyatlarla karşılayın.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-row gap-3 mt-auto">
            <a href="#" className="flex-1 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl py-4 transition-all duration-300 hover:-translate-y-1">
              {/* Apple Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M12 20.6c-1.6 1.5-3.3 1.5-4.8.1-1.3-1.2-2.1-2.9-2.2-4.9-.1-2.8 1.5-4.9 4.1-5.1 1.2-.1 2.3.5 3.1.5.8 0 2.1-.7 3.5-.6 1.4.1 2.6.7 3.3 1.8-3 1.8-2.5 5.9.8 7.3-1 2.6-2.5 4.9-4.7 4.9-1.2 0-2.3-.6-3.1-.6-.9 0-2.1.6-3.1.6zM15 4.6c.8-1 1.3-2.4 1.1-3.8-1.2.1-2.7.8-3.6 1.8-.8.8-1.3 2.1-1.2 3.6 1.3-.1 2.7-.7 3.7-1.6z"/>
              </svg>
            </a>
            
            <a href="#" className="flex-1 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl py-4 transition-all duration-300 hover:-translate-y-1">
              {/* Google Play Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-[#FBDD09]">
                <path d="M3 2v20l17-10L3 2z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

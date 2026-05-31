'use client';

export default function EntertainmentSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#E4007C]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="wrap relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">
            Beyond Code
          </h2>
          <p className="text-gray-400 max-w-xl text-lg mb-8">
            When I'm not architecting software or soldering IoT circuits, you'll probably find me cycling long distances or vibing to my favorite playlists. Here is what keeps me fueled.
          </p>
          
          <div className="flex gap-4 mb-8">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white tracking-widest uppercase">
              🚴‍♂️ Long-Distance Cycling
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white tracking-widest uppercase">
              🎧 Synthwave & Rock
            </span>
          </div>
        </div>

        {/* Spotify iframe placeholder */}
        <div className="w-full h-[352px] bg-black/50 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-0">
             <p className="text-gray-500 font-medium mb-2">Spotify Playlist Placeholder</p>
             <p className="text-xs text-gray-600">You can replace this with your actual Spotify embed code</p>
          </div>
          {/* Example Embed (You can update the link later) */}
          <iframe 
            className="relative z-10 w-full h-full"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator&theme=0" 
            width="100%" 
            height="352" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

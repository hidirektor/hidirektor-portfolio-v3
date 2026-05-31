'use client';

export default function TrustedLogos() {
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-[#050505] border-y border-gray-100 dark:border-white/5">
      <div className="wrap flex flex-col items-center gap-8">
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase text-center">
          Trusted By
        </p>
        <div className="w-full h-24 flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-white/10 rounded-xl">
          <p className="text-gray-400 dark:text-gray-500 text-sm font-medium">
            (Trusted Logos placeholder - Waiting for logos)
          </p>
        </div>
      </div>
    </section>
  );
}

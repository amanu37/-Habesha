import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.imgur.com/dMlHBrf.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 inline-block rounded-full border-2 border-amber-400 bg-black/30 px-8 py-3 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-amber-400 md:text-4xl">ሰሊና ሓበሻ</h2>
        </div>

        <h1 className="mb-4 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
          በእጅ የተሸመነ ጥበብ ከኢትዮጵያ ልብ
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
          Handwoven Elegance from the Heart of Ethiopia
        </p>

        <p className="mb-12 max-w-3xl text-base text-gray-300 md:text-lg">
          Discover authentic Ethiopian traditional clothing that celebrates our rich heritage,
          masterful craftsmanship, and timeless beauty
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all hover:bg-amber-600 hover:shadow-amber-500/50"
          >
            Explore Collection
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full border-2 border-white/80 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-50 to-transparent"></div>
    </section>
  );
}

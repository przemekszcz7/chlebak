import React from "react";
import { motion } from "motion/react";
import { 
  Facebook, 
  MapPin, 
  Clock, 
  Store, 
  Wheat, 
  ChefHat as RollingPin, 
  Heart, 
  Sparkle,
  UtensilsCrossed as Croissant,
  ConciergeBell as OvenMitt,
  ShoppingBasket as Basket
} from "lucide-react";

const BakeryDecoration = ({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) => (
  <div className={`absolute pointer-events-none opacity-20 ${className}`} style={style}>
    {children}
  </div>
);

const SectionDivider = () => (
  <div className="h-10 w-full bg-stripes relative z-10" />
);

const Star = ({ className, fill, size }: { className?: string, fill?: string, size?: number }) => {
  return (
    <motion.div
      animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
      transition={{ repeat: Infinity, duration: 3 }}
      className={className}
    >
      <Sparkle fill={fill} size={size} />
    </motion.div>
  );
};

export default function App() {
  const openingHours = [
    { day: "Poniedziałek", hours: "13:00 - 19:00" },
    { day: "Wtorek", hours: "13:00 - 19:00" },
    { day: "Środa", hours: "13:00 - 19:00" },
    { day: "Czwartek", hours: "13:00 - 19:00" },
    { day: "Piątek", hours: "13:00 - 19:00" },
    { day: "Sobota", hours: "ZAMKNIĘTE", closed: true },
    { day: "Niedziela", hours: "ZAMKNIĘTE", closed: true },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-bakery-pink-light selection:text-bakery-text overflow-x-hidden">
      {/* Navigation Awning */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-2">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="w-full h-2 bg-stripes rounded-t-lg shadow-sm" />
          <div className="bg-white px-12 py-3 shadow-md rounded-b-2xl border-x border-b border-bakery-border flex items-center justify-between w-full awning-clip mt-[-1px]">
            <div className="flex items-center gap-2">
              <Store className="text-bakery-pink w-6 h-6" />
              <span className="font-display font-black text-xl tracking-tight text-bakery-pink">CHLEBAK</span>
            </div>
            <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-[0.18em]">
              <a href="#o-nas" className="hover:text-bakery-pink transition-colors">O Nas</a>
              <a href="#produkty" className="hover:text-bakery-pink transition-colors">Nasze Wypieki</a>
              <a href="#kontakt" className="hover:text-bakery-pink transition-colors">Kontakt</a>
            </div>
            <a 
              href="https://www.facebook.com/profile.php?id=61583483257314" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-bakery-pink text-white p-2 rounded-full hover:bg-bakery-pink-deep transition-all shadow-sm hover:scale-110 active:scale-95"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative mt-20 pt-20 pb-32 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-stripes hero-stripe-tilt -z-10" />
        <div className="absolute inset-0 flour-dust -z-10" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative">
          <BakeryDecoration className="top-0 left-0 animate-pulse text-bakery-pink">
            <Wheat size={120} />
          </BakeryDecoration>
          <BakeryDecoration className="bottom-0 right-0 animate-bounce text-bakery-pink" style={{ animationDuration: '4s' }}>
            <Heart size={80} />
          </BakeryDecoration>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] border-4 border-bakery-pink relative shadow-xl max-w-4xl"
          >
            <div className="font-mono text-bakery-pink uppercase tracking-[0.2em] mb-4 text-sm font-bold">
              Ruda Śląska • Chleb na zakwasie
            </div>
            <h1 className="font-display text-[clamp(2.5rem,8vw,5.5rem)] leading-none font-black mb-6 text-bakery-text italic">
              Pieczywo <br/> 
              <span className="text-bakery-pink">Rzemieślnicze</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-bakery-text-muted max-w-2xl mx-auto leading-relaxed">
              Prawdziwy smak tradycji wypiekany z pasją w sercu Rudy Śląskiej.
              Odkryj zapach świeżego chleba, który przypomni Ci dom.
            </p>

            {/* Badge */}
            <div className="absolute -top-12 -right-8 md:-right-12">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 12 }}
                className="bg-bakery-cream border-2 border-bakery-pink w-28 h-28 rounded-full flex items-center justify-center text-center p-2 shadow-lg badge-rotate border-dashed"
              >
                <p className="font-hand text-bakery-pink-deep text-lg leading-tight font-bold">
                  Wypiekane Codziennie
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      <SectionDivider />

      {/* Philosophy / About Section */}
      <section id="o-nas" className="py-24 px-4 md:px-8 bg-bakery-bg-section relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-stripes opacity-10 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="font-mono text-bakery-pink uppercase tracking-widest text-xs mb-4">Nasza Pasja</div>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-8 leading-tight">
              Dlaczego <span className="text-bakery-pink">Chlebak</span>?
            </h2>
            <div className="space-y-6 text-bakery-text-muted text-lg leading-relaxed">
              <p>
                Wierzymy, że dobry chleb potrzebuje tylko trzech składników: mąki, wody i soli. 
                I mnóstwo czasu, którego nie skracamy żadnymi polepszaczami.
              </p>
              <p>
                Każdy bochenek w naszej pracowni na Astrów 12 to owoc wielogodzinnej fermentacji, 
                tradycyjnego ręcznego wyrabiania i miłości do rzemiosła.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-bakery-pink-pale rounded-full flex items-center justify-center text-bakery-pink">
                  <Wheat size={20} />
                </div>
                <span className="font-bold text-sm uppercase font-mono tracking-wider">Naturalne</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-bakery-pink-pale rounded-full flex items-center justify-center text-bakery-pink">
                  <Heart size={20} />
                </div>
                <span className="font-bold text-sm uppercase font-mono tracking-wider">Lokalne</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2"
          >
            <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden aspect-square">
              <img 
                src="https://i.postimg.cc/KjnFtDr0/614198609-122117596377116108-8215722945156955857-n.jpg"
                alt="Chleb rzemieślniczy"
                className="w-full h-full object-cover rounded-[1.8rem]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-bakery-pink rounded-full -z-10 opacity-20" />
            <BakeryDecoration className="top-10 right-10 text-bakery-pink">
              <Sparkle size={40} />
            </BakeryDecoration>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Products Section */}
      <section id="produkty" className="py-24 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-stripes opacity-10 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="font-mono text-bakery-pink uppercase tracking-widest text-xs mb-4 underline decoration-bakery-pink underline-offset-8">Wybór Piekarza</div>
          <h2 className="font-display text-4xl md:text-5xl font-black">Nasze Specjały</h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl overflow-hidden border-l-4 border-bakery-pink shadow-lg group"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="https://i.postimg.cc/dQdqMJMb/618694220-122119500411116108-6550312570452252783-n.jpg"
                alt="Piekarnia wnętrze"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl font-bold">Chlebek z suszonymi pomidorami</h3>
                <span className="font-mono text-bakery-pink font-bold">BESTSELLER</span>
              </div>
              <p className="text-bakery-text-muted mb-6">
                Nasz kunsztowny wypiek, chrupiący z zewnątrz i delikatny w środku. Powstaje na bazie dojrzałego zakwasu rzemieślniczego.
              </p>

            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl overflow-hidden border-l-4 border-bakery-pink shadow-lg group"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="https://i.postimg.cc/8kW18TQQ/619732662-122119500399116108-8958961236020234249-n.jpg"
                alt="Zbliżenie na pieczywo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl font-bold">Paluch w słonej odsłonie z czosnkiem i szczypiorkiem</h3>
                <span className="font-mono text-bakery-pink font-bold">LIMITED</span>
              </div>
              <p className="text-bakery-text-muted mb-6">
                Codziennie inne niespodzianki — bagietki, chleby z ziarnami czy sezonowe wypieki. Zawsze świeże, zawsze z najlepszej mąki.
              </p>

            </div>
          </motion.div>
        </div>

        {/* Chalkboard Quote */}
        <div className="max-w-3xl mx-auto mt-20">
          <div className="bg-bakery-text text-white p-10 rounded-2xl relative border-4 border-white shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <RollingPin size={60} />
            </div>
            <h4 className="font-hand text-3xl md:text-4xl text-center leading-relaxed">
              "Chleb jest jak miłość — potrzebuje ciepła, cierpliwości i odrobiny serca, by mógł w pełni rozkwitnąć."
            </h4>
            <div className="mt-6 flex justify-center gap-4">
              {[1, 2, 3].map(i => (
                <div key={i}>
                  <Star className="text-bakery-gold" fill="currentColor" size={16} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Info / Contact Section */}
      <section id="kontakt" className="py-24 px-4 md:px-8 bg-bakery-bg-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* Working Hours & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border-l-4 border-bakery-pink relative overflow-hidden h-full">
              <BakeryDecoration className="top-5 right-5 text-bakery-pink">
                <Clock size={40} />
              </BakeryDecoration>
              <h3 className="font-display text-4xl font-black mb-8">Godziny <span className="text-bakery-pink">Otwarcia</span></h3>
              <div className="space-y-4">
                {openingHours.map((item) => (
                  <div key={item.day} className={`flex justify-between items-center py-2 border-b border-bakery-pink-pale last:border-0 ${item.closed ? 'text-bakery-text-muted/50' : 'text-bakery-text'}`}>
                    <span className="font-bold uppercase font-mono text-sm tracking-widest">{item.day}</span>
                    <span className={`font-display text-lg ${!item.closed ? 'text-bakery-pink font-bold' : ''}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-bakery-bg rounded-xl border border-bakery-border flex items-center gap-4">
                <div className="bg-bakery-pink text-white p-3 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold font-display text-xl">Astrów 12</p>
                  <p className="text-bakery-text-muted">41-700 Ruda Śląska</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 h-full flex flex-col">
            <div className="flex-1 bg-white p-4 rounded-[2rem] shadow-xl border-4 border-white overflow-hidden min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.55062641977!2d18.84961131259169!3d50.300315698043235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471132a4f6238845%3A0xb554f3280f5b6cda!2zQXN0csOzdyAxMiwgNDEtNzAwIFJ1ZGEgxZpsxIVza2E!5e0!3m2!1spl!2spl!4v1779007672080!5m2!1spl!2spl" 
                className="w-full h-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <a 
              href="https://www.facebook.com/profile.php?id=61583483257314" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-bakery-pink hover:bg-bakery-pink-deep text-white p-8 rounded-[2rem] shadow-xl flex items-center justify-center gap-4 transition-all hover:scale-[1.02] active:scale-95 group"
            >
              <Facebook size={32} className="group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <p className="font-mono text-xs uppercase tracking-widest opacity-80">Dołącz do nas na</p>
                <p className="font-display text-3xl font-black">Facebooku</p>
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 px-4 md:px-8 bg-bakery-text text-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-stripes" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Store className="text-bakery-pink w-6 h-6" />
            <span className="font-display font-black text-2xl tracking-tighter">CHLEBAK</span>
          </div>
          
          <div className="text-center md:text-right space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-60">© 2026 Pieczywo Rzemieślnicze Chlebak</p>
            <p className="font-sans text-sm">Wszystkie prawa zastrzeżone • Ruda Śląska</p>
          </div>
        </div>

        {/* Scattered Icons Decoration */}
        <BakeryDecoration className="bottom-4 left-4 text-pink-500/20">
          <Croissant size={24} />
        </BakeryDecoration>
        <BakeryDecoration className="top-10 right-10 text-pink-500/20">
          <OvenMitt size={32} />
        </BakeryDecoration>
        <BakeryDecoration className="bottom-10 right-40 text-pink-500/10">
          <Basket size={48} />
        </BakeryDecoration>
      </footer>
    </div>
  );
}

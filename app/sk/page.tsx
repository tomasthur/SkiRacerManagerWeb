"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import Snowfall from "../components/Snowfall";
import ParallaxMountains from "../components/ParallaxMountains";
import HudStrip from "../components/HudStrip";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
};

export default function HomePageSK() {
  useEffect(() => {
    const video = document.getElementById('worldVideo') as HTMLVideoElement;
    if (video) {
      console.log('Video element found:', video);
      
      const videos = ['/images/video_0.mkv', '/images/video_1.mkv'];
      let currentIndex = 0;
      
      const switchVideo = () => {
        currentIndex = (currentIndex + 1) % videos.length;
        console.log('Switching to video:', videos[currentIndex]);
        video.src = videos[currentIndex];
        video.load();
        video.play();
      };
      
      video.addEventListener('ended', switchVideo);
      video.addEventListener('error', (e) => {
        console.error('Video error:', e);
      });
      video.addEventListener('loadstart', () => {
        console.log('Video load started');
      });
      
      return () => {
        video.removeEventListener('ended', switchVideo);
        video.removeEventListener('error', (e) => {
          console.error('Video error:', e);
        });
        video.removeEventListener('loadstart', () => {
          console.log('Video load started');
        });
      };
    } else {
      console.log('Video element not found');
    }
  }, []);

  return (
    <main className="relative">
      <Snowfall />
      <section id="home" className="relative overflow-hidden hero-gradient">
        <ParallaxMountains />
        <div className="absolute inset-0 grid-overlay opacity-60" />
        <div className="container-max pt-24 pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block rounded-full px-4 py-1 text-sm bg-white/10 border border-white/10 mb-6">Nová mobilná hra</div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          <span className="text-white">SKI </span>
          <span className="text-orange">RACER</span>
          <span className="text-mediumBlue"> MANAGER</span>
        </h1>
              <p className="mt-5 text-lightBlue/90 text-lg leading-relaxed">
                Prvý lyžiarsky manažér na svete, ktorý ťa vezme do sveta profesionálneho lyžovania. Nastav svojmu zverencovi tréninkový, ale aj oddychový režim, nakupuj mu kvalitnejšiu výstroj, komunikuj s médiami, podpor ho v čase krízy, buduj fanúšikovskú základňu a rozhoduj o taktike jazdy pred aj počas pretekov. Vytvor novú lyžiarsku legendu!
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 relative z-10">
                <a href="https://play.google.com/store/apps/details?id=com.tomasthur.SkiRacerManager&hl=en" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-110 hover:brightness-110 transition-all duration-300 cursor-pointer relative z-20">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Stiahni z Google Play" className="h-12 w-auto" />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center lg:justify-end">
              <img src="/images/main_menu-left.png" alt="Ski Racer Manager - Main Menu" className="w-full max-w-md h-auto block" />
            </motion.div>
          </div>
        </div>
      </section>

      <HudStrip />

      <section id="features" className="relative py-24 scroll-mt-24">
        <div className="container-max">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">FEATURES</h2>
            <p className="text-lightBlue/85 max-w-2xl mx-auto">Komplexný manažment lyžiarskeho šampióna s realistickými mechanikami a dynamickými pretekmi.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Trénuj svojho lyžiara",
                desc: "Každý tréning robí z tvojho lyžiara väčšieho šampióna a kvalitnejšieho pretekára. Trenuj ho po každom závode a staň sa manažérom lyžiarskej legendy.",
                image: "/images/skier_performance.jpg"
              },
              {
                title: "Vybuduj si svoj fanklub",
                desc: "Každý dobrý výsledok púta pozornosť fanúšikov. Svoju fanúšikovskú základňu ale môžeš rozširovať aj mimo lyžiarskych svahov. Organizuj stretnutia s fanúšikmi, choď na rozhovor do televízie, či zúčastni sa rôznych podujatí a tak zvyšuj svoju popularitu.",
                image: "/images/fanclub_1.jpg",
                image2: "/images/fanclub.jpg"
              },
              {
                title: "Nakupuj nové vybavenie",
                desc: "Tréning robí šampióna, to je pravda, ale dôležité je vlastniť aj kvalitnú výstroj. Zarábaj peniaze na pretekoch a vylepšuj lyžiarovu výstroj. To ho urobí silnejším, rýchlejším a agresívnejším na zjazdovke.",
                image: "/images/main_menu.jpg"
              },
              {
                title: "Pozdvihni morálku svojho lyžiara",
                desc: "Nie vždy sa nám darí a obzvlášť to platí vo svete športu. Ak nálada tvojho lyžiara klesne po neuspokojivých výsledkoch pod kritickú hodnotu, prichádza tvoja chvíľa, aby si ho povzbudil. Napíš mu povzbudivú správu, zlepši mu tak náladu a vráť mu späť sebavedomie, ktorá je veľmi potrebná pre ďalšie víťazstvá.",
                image: "/images/skier_performance.jpg"
              },
              {
                title: "Zvládni otázky novinárov",
                desc: "Po kvalitnom výkone na pretekoch sa o teba budú zaujímať novinári. Zvládni čo najlepšie odpovedať na ich otázky a zvyš si tak úroveň svojej nálady, ale aj skills. Dobre zvládnuté interview ti takisto zdvihne aj počet tvojich fanúšikov.",
                image: "/images/interview_1.jpg",
                image2: "/images/interview_0.jpg"
              },
              {
                title: "Nastav správny oddychový režim",
                desc: "Samozrejme, pre víťazstvá je dôležité trénovať, no veľmi dôležité je aj správne nastavenie oddychového, alebo regeneračného režimu. Sleduj úroveň energie svojho lyžiara a v správnom čase mu naordinuj oddych, nech je na preteky pripravený v plnej sile.",
                image: "/images/main_menu.jpg"
              },
              {
                title: "Systém sponzorov",
                desc: "Kvalitné výkony na pretekoch prinášajú okrem záujmu fanúšikov aj záujem sponzorov. Vyberaj si medzi ponukami sponzorov, podpisuj zmluvy a zarábaj tak extra peniaze, ktoré sú potrebné na nákup vybavenia a manažment fanklubu.",
                image: "/images/sponsorship_1.jpg",
                image2: "/images/sponsorship.jpg"
              },
              {
                title: "Rozhoduj o taktike priamo počas pretekov",
                desc: "Lyžiarske preteky veľmi závisia nie len od kvality lyžiara, ale aj od počasia a kvality trate. Sleduj počasie, vyber taktiku jazdy pred pretekmi a v strede trate ju prispôsob podľa aktuálnych podmienok. Tak môžeš zvrátiť nepriaznivý vývoj priamo počas jazdy tvojho zverenca.",
                image: "/images/race_1.jpg",
                image2: "/images/race_2.jpg"
              },
              {
                title: "Buď najlepší na svete",
                desc: "Tvoja púť svetom profesionálneho lyžovania začína v Európskom pohári. Vypracuj sa na top jazdca tejto súťaže, umiestni sa v TOP 5 a dostan sa medzi svetovú lyžiarsku elitu do Svetového pohára, kde budeš bojovať o titul majstra sveta.",
                image: "/images/standings.jpg"
              }
            ].map((feature, idx) => (
              <motion.div 
                key={feature.title} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:z-50 relative group"
              >
                <div className="relative">
                  {feature.image2 ? (
                    <div className="flex gap-2 justify-center">
                      <img src={feature.image} alt={feature.title} className="w-1/2 h-auto block transform rotate-3" />
                      <img src={feature.image2} alt={feature.title} className="w-1/2 h-auto block transform -rotate-3" />
                    </div>
                  ) : (
                    <img src={feature.image} alt={feature.title} className="w-1/2 h-auto block mx-auto transform rotate-2" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-orange mb-3 drop-shadow-lg">{feature.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container-max">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">VLASTNÝ LYŽIARSKY SVET</h2>
            <p className="text-lightBlue/85 max-w-3xl mx-auto text-lg leading-relaxed">
              Emócie umocni aj vlastný svet, ktorý ťa vtiahne viac do simulácie. Každý sneh, každý svah, každý moment na trati má svoju vlastnú atmosféru. 
              Vytvor si svoj jedinečný lyžiarsky univerzum, kde sa každý deň píše nová kapitola tvojej legendy. 
              Nechaj sa uniesť do sveta, kde sa sny stávajú realitou a každé víťazstvo je tvoje vlastné.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-md mx-auto"
          >
            <div className="glass rounded-2xl overflow-hidden shadow-glow">
              <div className="relative">
                <video 
                  id="worldVideo"
                  className="w-full h-auto block"
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  poster="/images/main_menu.jpg"
                >
                  <source src="/images/video_0.mkv" type="video/x-matroska" />
                  <source src="/images/video_0.mkv" type="video/mp4" />
                  <img src="/images/main_menu.jpg" alt="Ski Racer Manager World" className="w-full h-auto block" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      


      <section id="cta" className="relative py-24 scroll-mt-24">
        <div className="container-max">
          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold">Stiahni si hru</h3>
            <p className="text-lightBlue/85 mt-2">Dostupná na Google Play</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://play.google.com/store/apps/details?id=com.tomasthur.SkiRacerManager&hl=en" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-105 transition-transform duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Stiahni z Google Play" className="h-14 w-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}




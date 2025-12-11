"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import Snowfall from "./components/Snowfall";
import ParallaxMountains from "./components/ParallaxMountains";
import HudStrip from "./components/HudStrip";

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

export default function HomePage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Ski Racer Manager",
            "description": "The first skiing manager game in the world that will take you into the world of professional skiing. Set training and rest regimes for your athlete, buy him better equipment, communicate with the media, support him in times of crisis, build a fan base and decide on racing tactics before and during competitions.",
            "applicationCategory": "Game",
            "operatingSystem": "Android",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "ratingCount": "100"
            },
            "author": {
              "@type": "Organization",
              "name": "Tomas Thur"
            },
            "downloadUrl": "https://play.google.com/store/apps/details?id=com.tomasthur.SkiRacerManager&hl=en"
          })
        }}
      />
      <Snowfall />
      <section id="home" className="relative overflow-hidden hero-gradient">
        <ParallaxMountains />
        <div className="absolute inset-0 grid-overlay opacity-60" />
        <div className="container-max pt-24 pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block rounded-full px-4 py-1 text-sm bg-white/10 border border-white/10 mb-6">New Mobile Game</div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          <span className="text-white">SKI </span>
          <span className="text-orange">RACER</span>
          <span className="text-mediumBlue"> MANAGER</span>
        </h1>
              <p className="mt-5 text-lightBlue/90 text-lg leading-relaxed">
                The first skiing manager in the world that will take you into the world of professional skiing. Set training and rest regimes for your athlete, buy him better equipment, communicate with the media, support him in times of crisis, build a fan base and decide on racing tactics before and during competitions. Create a new skiing legend!
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 relative z-10">
                <a href="https://play.google.com/store/apps/details?id=com.tomasthur.SkiRacerManager&hl=en" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-110 hover:brightness-110 transition-all duration-300 cursor-pointer relative z-20">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Download from Google Play" className="h-12 w-auto" />
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
            <p className="text-lightBlue/85 max-w-2xl mx-auto">Comprehensive management of a skiing champion with realistic mechanics and dynamic races.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Train Your Skier",
                desc: "Every training makes your skier a bigger champion and better racer. Train him after every race and become a skiing legend manager.",
                image: "/images/skier_performance.jpg"
              },
              {
                title: "Build Your Fan Club",
                desc: "Every good result attracts fan attention. You can expand your fan base beyond the ski slopes. Organize fan meetings, go for TV interviews, or participate in various events to increase your popularity.",
                image: "/images/fanclub_1.jpg",
                image2: "/images/fanclub.jpg"
              },
              {
                title: "Buy New Equipment",
                desc: "Training makes a champion, that's true, but it's also important to own quality equipment. Earn money from races and upgrade your skier's equipment. This will make him stronger, faster and more aggressive on the slopes.",
                image: "/images/main_menu.jpg"
              },
              {
                title: "Boost Your Skier's Morale",
                desc: "We don't always succeed, and this especially applies in the world of sports. If your skier's mood drops below critical value after unsatisfactory results, it's your moment to encourage him. Write him an encouraging message, improve his mood and restore his confidence, which is very necessary for further victories.",
                image: "/images/skier_performance.jpg"
              },
              {
                title: "Handle Journalist Questions",
                desc: "After a quality performance in races, journalists will be interested in you. Handle answering their questions as best as possible and increase your mood level and skills. A well-handled interview will also increase your fan count.",
                image: "/images/interview_1.jpg",
                image2: "/images/interview_0.jpg"
              },
              {
                title: "Set Proper Rest Regime",
                desc: "Of course, training is important for victories, but proper setting of rest or recovery regime is also very important. Monitor your skier's energy level and prescribe rest at the right time, so he's ready for races at full strength.",
                image: "/images/main_menu.jpg"
              },
              {
                title: "Sponsor System",
                desc: "Quality performances in races bring not only fan interest but also sponsor interest. Choose between sponsor offers, sign contracts and earn extra money needed for equipment purchases and fan club management.",
                image: "/images/sponsorship_1.jpg",
                image2: "/images/sponsorship.jpg"
              },
              {
                title: "Decide on Tactics Directly During Races",
                desc: "Ski races depend not only on the skier's quality but also on weather and track conditions. Monitor weather, choose racing tactics before races and adapt them in the middle of the track according to current conditions. This way you can reverse unfavorable development directly during your athlete's run.",
                image: "/images/race_1.jpg",
                image2: "/images/race_2.jpg"
              },
              {
                title: "Be the Best in the World",
                desc: "Your journey through the world of professional skiing starts in the European Cup. Work your way up to become a top rider in this competition, place in TOP 5 and get among the world skiing elite in the World Cup, where you'll fight for the world champion title.",
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">YOUR OWN SKIING WORLD</h2>
            <p className="text-lightBlue/85 max-w-3xl mx-auto text-lg leading-relaxed">
              Enhance emotions with your own world that will draw you deeper into the simulation. Every snow, every slope, every moment on the track has its own atmosphere. 
              Create your unique skiing universe where every day writes a new chapter of your legend. 
              Let yourself be carried away into a world where dreams become reality and every victory is your own.
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
            <h3 className="text-2xl sm:text-3xl font-bold">Download the Game</h3>
            <p className="text-lightBlue/85 mt-2">Available on Google Play</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://play.google.com/store/apps/details?id=com.tomasthur.SkiRacerManager&hl=en" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-105 transition-transform duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Download from Google Play" className="h-14 w-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

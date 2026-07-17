import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Award, Flame, ThumbsUp, Calendar, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  // Auto cycle highlights
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const coreMessages = [
    {
      title: "자치분권국가 실현",
      badge: "핵심 가치",
      desc: "지방이 강해야 나라가 강해집니다. 주민 중심의 진짜 민주주의를 실천하겠습니다.",
      tag: "#자치분권개헌"
    },
    {
      title: "지방재정 6:4 개편",
      badge: "정책 대안",
      desc: "지자체의 재정 자립도를 높여, 예산이 지역 균형성장의 원동력이 되도록 하겠습니다.",
      tag: "#지방재정확대"
    },
    {
      title: "당원 주권 중심 개혁",
      badge: "당원과의 약속",
      desc: "더불어민주당의 주인인 당원이 결정하는 더 투명하고 강인한 민주당을 만들겠습니다.",
      tag: "#당원중심민주당"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800">
      
      {/* Decorative Gradient Overlays */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute top-10 right-10 -z-10 h-[250px] w-[250px] rounded-full bg-blue-600/5 blur-[80px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Typographic Hero Text (Tone and Manner of the campaign poster) */}
          <div className="flex flex-col text-center lg:col-span-7 lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center gap-2 self-center rounded-lg bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-xs font-bold text-blue-400 lg:self-start"
            >
              <Flame size={14} className="text-amber-400 animate-pulse" />
              <span>더불어민주당 최고위원 후보 기호 <b>박승원</b></span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-sm font-bold tracking-widest text-amber-400 sm:text-base uppercase"
            >
              한 표는 자치분권 최고위원 후보
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
            >
              <span className="block text-slate-100">박승원이</span>
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                하겠습니다
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 max-w-xl self-center text-sm leading-relaxed text-slate-300 lg:self-start sm:text-base font-medium"
            >
              "3선 광명시장의 든든한 행정력과 참좋은지방정부위원회 위원장의 비전으로, 
              진정한 풀뿌리 민주주의와 탄탄한 민주당의 내일을 박승원이 만들겠습니다."
            </motion.p>

            {/* Quick Profile Badge Cards */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-xl mx-auto lg:mx-0 w-full">
              {[
                { title: '현) 3선 광명시장', desc: '민선 7, 8기 행정명장', accent: 'border-blue-500/30 text-blue-400' },
                { title: '현) KDLC 상임대표', desc: '전국 자치분권의 중심', accent: 'border-amber-500/30 text-amber-400' },
                { title: '전) 지방정부위원회 위원장', desc: '더불어민주당 정책 브레인', accent: 'border-emerald-500/30 text-emerald-400' }
              ].map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center lg:text-left backdrop-blur-sm shadow-sm"
                >
                  <p className={`text-xs font-bold ${item.accent}`}>{item.title}</p>
                  <p className="mt-1 text-[11px] text-slate-400 font-semibold">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Campaign Core Highlights Tabs */}
            <div className="mt-10 hidden sm:block">
              <div className="flex border-b border-slate-800">
                {coreMessages.map((msg, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`relative pb-3 text-xs font-bold transition-all px-4 cursor-pointer ${
                      activeTab === idx ? 'text-amber-400 font-black' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {msg.title}
                    {activeTab === idx && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400"
                      />
                    )}
                  </button>
                ))}
              </div>
              
              <div className="mt-4 min-h-[70px] px-2 text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="inline-block rounded bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 text-[10px] font-bold text-amber-400">
                      {coreMessages[activeTab].badge}
                    </span>
                    <span className="ml-2 text-xs font-semibold text-slate-400">
                      {coreMessages[activeTab].tag}
                    </span>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      {coreMessages[activeTab].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Elegant Poster Design Graphics Side card - Rendered as a highly polished white/slate corporate insight card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[360px] overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/50"
            >
              {/* Card Header styling matching campaign theme */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-amber-400 to-blue-500" />
              
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded">
                      대한민국 균형 국가로
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
                      <Calendar size={12} className="text-blue-500" />
                      D-DAY 응원중
                    </span>
                  </div>

                  {/* Candidate Profile Art/Visual Illustration Container */}
                  <div className="relative mt-5 rounded-xl bg-slate-900 p-5 text-center shadow-inner overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.15),transparent_60%)]" />
                    
                    {/* Minimalist Graphic Campaign Logo */}
                    <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-950 border-2 border-amber-400 shadow-xl shadow-amber-400/20">
                      <span className="font-display text-3xl font-black text-amber-400">PSW</span>
                      <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[10px] font-black text-white">
                        기호
                      </div>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-black tracking-tight text-white">
                      박승원 <span className="text-xs font-medium text-slate-400">최고위원 후보</span>
                    </h3>
                    <p className="mt-1 text-xs text-amber-400 font-bold tracking-wide">
                      "지방분권 강화 · 당원 주권 정당"
                    </p>
                    
                    {/* Bottom overlay mimicking the real campaign image's bold yellow background text */}
                    <div className="mt-4 rounded bg-amber-400 py-1.5 px-3 shadow-md">
                      <p className="text-xs font-black text-slate-950 tracking-wider">
                        한 표는 자치분권 최고위원!
                      </p>
                    </div>
                  </div>

                  {/* 5 Poster Bullet points shown on the poster image */}
                  <div className="mt-6 space-y-2.5">
                    <p className="text-xs font-extrabold text-slate-700 tracking-wider flex items-center gap-1.5">
                      <Award size={14} className="text-blue-600" />
                      박승원이 약속하는 5대 비전
                    </p>
                    <div className="grid grid-cols-1 gap-1.5 text-[11px] text-slate-600 font-bold">
                      <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 border border-slate-200">
                        <span className="font-black text-blue-600">1</span>
                        <span>자치분권국가 개헌</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 border border-slate-200">
                        <span className="font-black text-amber-500">2</span>
                        <span>지방재정확대 (6:4)</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 border border-slate-200">
                        <span className="font-black text-emerald-600">3</span>
                        <span>당원 중심 단단한 민주당</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span>민주당의 승리를 위해</span>
                  <div className="flex items-center gap-1 text-blue-600 font-bold">
                    <span>함께하기</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

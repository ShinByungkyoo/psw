import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Check, X, ShieldAlert, BookOpen, Layers } from 'lucide-react';
import { CAMPAIGN_PLEDGES } from '../data';
import LucideIcon from './LucideIcon';
import { Pledge } from '../types';

export default function Pledges() {
  const [selectedPledge, setSelectedPledge] = useState<Pledge | null>(null);

  return (
    <section id="campaign-pledges" className="relative bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
      {/* Visual separators */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-200" />
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/5 blur-[150px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Campaign Pledges</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            박승원의 5대 자치분권 공약
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
            "지방이 살아야 나라가 살고, 당원이 중심이 되어야 민주당이 강해집니다." 
            3선 광명시장의 치열한 고민과 증명된 실천력으로 담아낸 5대 핵심 공약입니다.
            각 공약을 클릭하시면 구체적인 실행 방향을 확인하실 수 있습니다.
          </p>
        </div>

        {/* 5 Pledge Cards in a beautifully designed layout */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAMPAIGN_PLEDGES.map((pledge, idx) => {
            return (
              <motion.div
                key={pledge.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelectedPledge(pledge)}
                className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 cursor-pointer shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between">
                    {/* Circle badge with pledge number */}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs font-black border border-blue-100 text-blue-600 shadow-sm">
                      {pledge.id}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                      <BookOpen size={10} />
                      자세히 보기
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-200 text-blue-600">
                      <LucideIcon name={pledge.iconName} className="text-blue-600" size={20} />
                    </div>
                    <h3 className="font-display text-lg font-black tracking-tight text-slate-800">
                      {pledge.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-slate-500 font-medium">
                    {pledge.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue-600 font-bold">
                  <span>자세히 읽기</span>
                  <span className="text-slate-400">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Modal for Selected Pledge */}
        <AnimatePresence>
          {selectedPledge && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPledge(null)}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.3, type: 'spring', damping: 25 }}
                className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-amber-400 to-blue-500" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedPledge(null)}
                  className="absolute top-4 right-4 rounded-full bg-slate-50 p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>

                {/* Modal Header */}
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-display text-xl font-black text-white shadow-md">
                    {selectedPledge.id}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-black text-slate-900">
                      {selectedPledge.title}
                    </h3>
                    <p className="text-xs text-blue-600 font-bold mt-0.5">
                      박승원의 강력한 자치분권 비전
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200 font-semibold">
                  📢 "{selectedPledge.subtitle}"
                </p>

                {/* Detailed Action Bullets */}
                <div className="mt-6">
                  <h4 className="text-xs font-black tracking-wider text-slate-400 uppercase flex items-center gap-2">
                    <Layers size={12} className="text-blue-600" />
                    핵심 실행 과제
                  </h4>
                  <ul className="mt-3.5 space-y-3">
                    {selectedPledge.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-slate-700 font-medium">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-blue-50 text-blue-600 border border-blue-100 mt-0.5">
                          <Check size={12} />
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Footer */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-semibold">지방이 살아야 나라가 삽니다</span>
                  <button
                    onClick={() => setSelectedPledge(null)}
                    className="rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-700 shadow-md transition-colors cursor-pointer"
                  >
                    확인했습니다
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

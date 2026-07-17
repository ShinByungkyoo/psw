import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ClipboardCheck, ArrowUpRight, Signal } from 'lucide-react';
import { PORTAL_LINKS } from '../data';
import LucideIcon from './LucideIcon';

export default function PortalLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portal-links" className="relative bg-white py-16 lg:py-24">
      {/* Absolute details */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-200" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded bg-blue-100 border border-blue-200 px-3.5 py-1.5 text-xs font-bold text-blue-700"
          >
            <Signal size={12} className="animate-pulse" />
            <span>Insight & Data Hub Platform</span>
          </motion.div>
          
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            핵심 분석 · 캠페인 자료집
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
            박승원 최고위원 후보의 여론 동향 분석 서비스와 주요 공약 및 비전이 담긴 공식 문서집을 즉시 연결해 드립니다. 
            아래 카드를 클릭하시면 외부 전용 플랫폼으로 신속히 이동합니다.
          </p>
        </div>

        {/* 2x2 Bento Grid / Card Layout for the 4 Portal Links */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PORTAL_LINKS.map((link, idx) => {
            return (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 transition-all hover:border-blue-500 hover:shadow-xl shadow-sm cursor-pointer flex flex-col justify-between group"
              >
                {/* Decorative background glow based on link color */}
                <div 
                  className="absolute -right-20 -top-20 -z-10 h-40 w-40 rounded-full blur-[80px] opacity-5 transition-opacity duration-300 group-hover:opacity-10"
                  style={{ backgroundColor: link.accentColor }}
                />

                <div>
                  <div className="flex items-start justify-between">
                    {/* Icon and Category Badge */}
                    <div className="flex items-center gap-3.5">
                      <div 
                        className="flex h-12 w-12 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${link.accentColor}12`, border: `1px solid ${link.accentColor}30` }}
                      >
                        <LucideIcon name={link.iconName} size={24} style={{ color: link.accentColor }} />
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">PORTAL HUB</span>
                        <span className="inline-flex max-w-fit items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600 mt-0.5 border border-slate-200">
                          {link.badgeText}
                        </span>
                      </div>
                    </div>

                    {/* External Link Indicator */}
                    <div className="rounded-full bg-slate-100 p-2 text-slate-400 transition-colors group-hover:bg-blue-600 group-hover:text-white border border-slate-200">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </h3>
                  
                  <p className="mt-3.5 text-sm leading-relaxed text-slate-500 font-medium group-hover:text-slate-600 transition-colors">
                    {link.description}
                  </p>
                </div>

                {/* Footer status bar inside the card */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    안정적인 전용 클라우드 연결
                  </span>
                  <span 
                    className="flex items-center gap-1 group-hover:underline transition-all font-bold"
                    style={{ color: link.accentColor }}
                  >
                    데이터 바로가기
                    <ExternalLink size={12} />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Quick Help box */}
        <div className="mt-10 rounded-xl bg-slate-50 border border-slate-200 p-4 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed font-medium">
            💡 본 서비스는 박승원 최고위원 캠페인 본부에서 운영하는 공식 통합 허브입니다. 
            모든 링크는 암호화 및 보안 연결(HTTPS)을 통해 안전하게 중계되고 있습니다. 
            원활한 접속이 되지 않을 경우, 네트워크 상태를 확인하시거나 브라우저 캐시를 새로고침해 주십시오.
          </p>
        </div>

      </div>
    </section>
  );
}

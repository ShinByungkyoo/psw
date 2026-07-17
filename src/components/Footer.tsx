import React from 'react';
import { Shield, ChevronUp, Github, Heart } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  return (
    <footer className="relative border-t-4 border-blue-600 bg-slate-900 text-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Logo & info */}
          <div className="flex flex-col items-center gap-2 md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 text-[11px] font-black text-white shadow shadow-blue-500/20">
                승
              </span>
              <span className="font-display text-sm font-black text-white">
                더불어민주당 최고위원 후보 박승원 캠페인
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-semibold mt-1">
              본 플랫폼은 3선 광명시장이자 자치분권 최고위원 후보 박승원의 주요 행정 여론과 핵심 분석 자료를 전달합니다.
            </p>
          </div>

          {/* Quick links & Scroll-to-top */}
          <div className="flex items-center gap-4">
            <button
              onClick={onScrollToTop}
              className="group flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white transition-all cursor-pointer shadow-md"
              title="맨 위로 이동"
            >
              <ChevronUp size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Technical copyright / Legal warning */}
        <div className="mt-8 border-t border-slate-800 pt-6 text-center">
          <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
            © 2026 더불어민주당 최고위원 후보 박승원 캠페인 플랫폼. All rights reserved. 
            <br />
            본 사이트에서 제공되는 여론동향 및 검색어 동향은 전용 클라우드로 실시간 연결 중계되며, 각 링크의 저작권과 세부 정보는 해당 문서 및 분석 플랫폼에 귀속됩니다.
          </p>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-semibold">
            <span>만든 이</span>
            <Heart size={10} className="text-rose-500 animate-pulse" />
            <span>자치분권 응원 서포터즈 일동</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Shield, User, Building, MapPin, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { CAREER_LIST } from '../data';

export default function Profile() {
  const [showAllCareer, setShowAllCareer] = useState(false);

  const displayedCareer = showAllCareer ? CAREER_LIST : CAREER_LIST.slice(0, 4);

  return (
    <section id="candidate-profile" className="relative bg-white py-16 lg:py-24">
      {/* Visual Separators */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-200" />
      <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-blue-500/5 blur-[100px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Column 1: Candidate Bio card (Matches the poster style) */}
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-1.5 rounded bg-blue-100 border border-blue-200 px-3.5 py-1.5 text-xs font-bold text-blue-700">
              <User size={12} />
              <span>후보자 이력 정보</span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              검증된 행정명장 <br className="hidden sm:block" />
              <span className="text-blue-600">박승원</span>을 소개합니다
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-500 font-medium">
              풀뿌리 민주주의의 산증인이자 현장에서 검증된 자치분권 리더. 
              3선 광명시장으로서 탁월한 리더십을 증명하고, 전국자치분권민주지도자회의 상임대표로서 자치 입법과 재정 확충의 최전선에서 투쟁해 왔습니다.
            </p>

            {/* Profile Quote block */}
            <div className="relative mt-8 rounded-r-xl border-l-4 border-blue-600 border-y border-r border-slate-200 bg-slate-50 p-5 text-left w-full shadow-sm">
              <p className="text-xs font-semibold text-slate-600 leading-relaxed italic">
                "행정과 정치의 본질은 결국 주민들의 삶을 보듬는 것입니다. 
                더 강한 민주당, 권한이 고루 분배된 자치분권 대한민국을 만들기 위해 최고위원 후보 박승원이 앞장서겠습니다."
              </p>
              <p className="mt-3 text-[11px] font-bold text-slate-400 text-right">
                - 더불어민주당 최고위원 후보 박승원
              </p>
            </div>
          </div>

          {/* Column 2: Career List styled beautifully */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 backdrop-blur-sm">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h3 className="font-display text-lg font-black tracking-tight text-slate-900 flex items-center gap-2">
                <Award size={18} className="text-blue-600" />
                대표 주요 약력 및 활동
              </h3>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-blue-700 border border-blue-100">
                검증된 경력
              </span>
            </div>

            {/* Chronological career tree */}
            <div className="mt-6 space-y-4">
              {displayedCareer.map((career, idx) => {
                const isCurrent = career.type === 'current';
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    key={idx}
                    className="flex gap-4 items-start rounded-xl bg-white border border-slate-200 p-3.5 hover:border-blue-300 transition-colors shadow-sm"
                  >
                    {/* Badge */}
                    <div className={`mt-0.5 flex h-6 w-14 shrink-0 items-center justify-center rounded text-[10px] font-bold border ${
                      isCurrent 
                        ? 'bg-blue-100 text-blue-700 border-blue-200' 
                        : 'bg-slate-100 text-slate-500 border-slate-200'
                    }`}>
                      {isCurrent ? '현재' : '전직'}
                    </div>

                    {/* Content text */}
                    <div className="flex flex-col">
                      <p className="text-xs font-bold text-slate-700 leading-relaxed">
                        {career.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Toggle show more button */}
            {CAREER_LIST.length > 4 && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowAllCareer(!showAllCareer)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-all cursor-pointer shadow-sm"
                >
                  <span>{showAllCareer ? '이력 접기' : '모든 이력 보기'}</span>
                  {showAllCareer ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              </div>
            )}

            {/* Core Badges matching campaign posters */}
            <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-xl bg-white p-3.5 border border-slate-200 shadow-sm">
                <Building className="text-blue-600 shrink-0" size={18} />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400">지방 행정 경험</span>
                  <span className="text-xs font-extrabold text-slate-800 mt-0.5">3선 광명시장</span>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white p-3.5 border border-slate-200 shadow-sm">
                <Shield className="text-amber-500 shrink-0" size={18} />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400">당 자치조직 대표</span>
                  <span className="text-xs font-extrabold text-slate-800 mt-0.5">KDLC 상임대표</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

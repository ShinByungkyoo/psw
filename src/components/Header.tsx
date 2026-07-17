import React from 'react';
import { Share2, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  onScrollTo: (elementId: string) => void;
  copied: boolean;
  onCopyLink: () => void;
}

export default function Header({ onScrollTo, copied, onCopyLink }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-blue-600 bg-slate-900 text-white shadow-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo / Candidate Badge */}
        <div className="flex items-center gap-3">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 font-display text-lg font-black text-white shadow-lg shadow-blue-500/20"
          >
            승
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-wider text-blue-400 sm:text-[10px] uppercase">더불어민주당 최고위원 후보</span>
            <span className="font-display text-sm font-black tracking-tight text-white sm:text-base">
              박승원 <span className="text-xs font-normal text-slate-400">통합 포털</span>
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <button 
            onClick={() => onScrollTo('portal-links')} 
            className="text-slate-300 hover:text-white hover:underline decoration-blue-500 decoration-2 underline-offset-4 transition-colors cursor-pointer"
          >
            핵심 분석·자료
          </button>
          <button 
            onClick={() => onScrollTo('campaign-pledges')} 
            className="text-slate-300 hover:text-white hover:underline decoration-blue-500 decoration-2 underline-offset-4 transition-colors cursor-pointer"
          >
            5대 핵심 공약
          </button>
          <button 
            onClick={() => onScrollTo('candidate-profile')} 
            className="text-slate-300 hover:text-white hover:underline decoration-blue-500 decoration-2 underline-offset-4 transition-colors cursor-pointer"
          >
            후보 프로필
          </button>
          <button 
            onClick={() => onScrollTo('cheer-board')} 
            className="text-slate-300 hover:text-white hover:underline decoration-blue-500 decoration-2 underline-offset-4 transition-colors cursor-pointer"
          >
            응원과 격려
          </button>
        </nav>

        {/* Share Button */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCopyLink}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${
              copied 
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                : 'bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <Share2 size={14} />
            <span>{copied ? '주소 복사 완료!' : '페이지 공유'}</span>
          </motion.button>
        </div>
      </div>
    </header>
  );
}

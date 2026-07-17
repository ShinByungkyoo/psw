import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Send, MessageSquare, Trash2, Smile, Sparkles, Flame, ThumbsUp } from 'lucide-react';
import { CheerMessage } from '../types';
import { PRESET_CHEERS } from '../data';

export default function CheerBoard() {
  const [messages, setMessages] = useState<CheerMessage[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('💙');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const emojiList = ['💙', '🔥', '👍', '✨', '🙌', '💪'];

  // Load initial messages from localStorage or set defaults
  useEffect(() => {
    const saved = localStorage.getItem('psw_campaign_cheers');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        // Fallback to default
        setDefaultMessages();
      }
    } else {
      setDefaultMessages();
    }
  }, []);

  const setDefaultMessages = () => {
    const defaults: CheerMessage[] = [
      {
        id: '1',
        name: '서울 주권당원',
        content: '자치분권 최고위원의 적임자 박승원 시장님을 뜨겁게 응원합니다! 지방재정 6대4 가자! 🔥',
        createdAt: '2026-07-16 11:24',
        emoji: '🔥'
      },
      {
        id: '2',
        name: '광명시민 일동',
        content: '광명시를 살기 좋은 대표 도시로 일궈내신 실력으로 더 강한 민주당을 만들어 주십시오! 👍',
        createdAt: '2026-07-16 09:40',
        emoji: '💙'
      },
      {
        id: '3',
        name: '청년당원 모임',
        content: '당원들과 항상 눈높이를 맞추고 공약 실천에 강한 박승원 후보가 꼭 필요합니다! 지지합니다!',
        createdAt: '2026-07-15 17:15',
        emoji: '✨'
      }
    ];
    setMessages(defaults);
    localStorage.setItem('psw_campaign_cheers', JSON.stringify(defaults));
  };

  const saveMessages = (updated: CheerMessage[]) => {
    setMessages(updated);
    localStorage.setItem('psw_campaign_cheers', JSON.stringify(updated));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);

    const newMessage: CheerMessage = {
      id: Date.now().toString(),
      name: name.trim() || '익명의 주권당원',
      content: content.trim(),
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      emoji: selectedEmoji
    };

    setTimeout(() => {
      const updated = [newMessage, ...messages];
      saveMessages(updated);
      setContent('');
      setName('');
      setIsSubmitting(false);
      setSuccessMessage(true);
      setTimeout(() => setSuccessMessage(false), 3000);
    }, 400);
  };

  const handleDelete = (id: string) => {
    const updated = messages.filter((msg) => msg.id !== id);
    saveMessages(updated);
  };

  const handleSelectPreset = (preset: string) => {
    setContent(preset);
  };

  return (
    <section id="cheer-board" className="relative bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
      {/* Visual separators */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-200" />
      <div className="absolute left-1/3 bottom-10 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Supporters Cheer Board</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            박승원 후보 응원 한마디
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
            더불어민주당의 주인인 주권당원 및 시민 여러분들의 따뜻한 격려와 지지가 큰 힘이 됩니다. 
            후보를 향한 진심 어린 응원 한마디를 나누어 주세요.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          
          {/* Column 1: Cheer Input Form (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-black tracking-tight text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-4">
              <Sparkles size={18} className="text-blue-600 animate-pulse" />
              지지의 글 남기기
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-[10px] font-black tracking-wider text-slate-400 uppercase">성함 / 닉네임</label>
                <input
                  type="text"
                  maxLength={15}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="예: 경기 당원, 익명 (미입력시 익명)"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              {/* Emoji Selection */}
              <div className="flex flex-col">
                <label className="text-[10px] font-black tracking-wider text-slate-400 uppercase">오늘의 응원 이모지</label>
                <div className="mt-2 flex items-center gap-2">
                  {emojiList.map((emoji) => (
                    <button
                      type="button"
                      key={emoji}
                      onClick={() => setSelectedEmoji(emoji)}
                      className={`flex h-9 w-9 items-center justify-center rounded-lg text-lg border cursor-pointer transition-all ${
                        selectedEmoji === emoji 
                          ? 'bg-blue-50 border-blue-500 scale-110 shadow-sm' 
                          : 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Content */}
              <div className="flex flex-col">
                <label className="text-[10px] font-black tracking-wider text-slate-400 uppercase">응원 한마디</label>
                <textarea
                  required
                  rows={4}
                  maxLength={150}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="박승원 최고위원 후보를 지지하는 힘이 되는 메세지를 입력해주세요. (최대 150자)"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-bold text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                />
              </div>

              {/* Submit button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting || !content.trim()}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-xs font-bold text-white hover:bg-blue-700 disabled:bg-slate-100 disabled:text-slate-400 cursor-pointer transition-colors shadow-md"
              >
                <Send size={14} />
                <span>{isSubmitting ? '전송 중...' : '지지의 글 보내기'}</span>
              </motion.button>
            </form>

            {/* Notification alert */}
            <AnimatePresence>
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-center text-xs font-bold text-emerald-700"
                >
                  🎉 지지의 메세지가 성공적으로 등록되었습니다. 감사합니다!
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Presets for high conversion support messages */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <label className="text-[10px] font-black tracking-wider text-slate-400 uppercase">⚡ 추천 메세지 빠른 입력</label>
              <div className="mt-2.5 space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
                {PRESET_CHEERS.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectPreset(preset)}
                    className="w-full text-left rounded bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 px-3 py-2 text-[11px] font-medium text-slate-600 hover:text-slate-800 transition-all cursor-pointer truncate"
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2: Cheer List display (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-display text-lg font-black tracking-tight text-slate-900 flex items-center gap-2">
                <MessageSquare size={18} className="text-blue-600" />
                최신 지지글 <span className="text-xs font-normal text-slate-400">({messages.length}개)</span>
              </h3>
              
              <button
                onClick={setDefaultMessages}
                className="text-[10px] font-bold text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                초기화
              </button>
            </div>

            {/* Card lists with scroll support */}
            <div className="space-y-3.5 max-h-[580px] overflow-y-auto pr-2">
              <AnimatePresence initial={false}>
                {messages.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-slate-200 p-8 text-center text-xs text-slate-400 font-medium bg-white">
                    첫 번째 응원의 주인공이 되어주세요!
                  </div>
                ) : (
                  messages.map((msg) => (
                    <motion.div
                      layout
                      key={msg.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex gap-3.5 items-start justify-between group hover:border-blue-200 transition-colors"
                    >
                      <div className="flex gap-3 items-start">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 text-lg shadow-sm">
                          {msg.emoji}
                        </div>
                        
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-extrabold text-slate-800">{msg.name}</span>
                            <span className="text-[10px] text-slate-400 font-medium">{msg.createdAt}</span>
                          </div>
                          <p className="mt-1.5 text-xs leading-relaxed text-slate-600 font-medium">
                            {msg.content}
                          </p>
                        </div>
                      </div>

                      {/* Delete button shown on hover */}
                      <button
                        onClick={() => handleDelete(msg.id)}
                        className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-red-500 hover:bg-slate-50 rounded-lg transition-all cursor-pointer"
                        title="메시지 삭제"
                      >
                        <Trash2 size={13} />
                      </button>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            <div className="rounded-lg bg-slate-100 border border-slate-200 p-3 text-center">
              <p className="text-[10px] text-slate-500 font-semibold">
                🛡️ 부적절하거나 비방 성격의 글은 선거 규정 준수와 깨끗한 소통 공간 유지를 위해 예고 없이 삭제 조치될 수 있습니다.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';

export default function FloatingCTA({ onOpenQuoteModal }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end pointer-events-auto">
      {/* Quick Quote Floating Button */}
      <button
        onClick={onOpenQuoteModal}
        className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold px-4 py-2.5 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:scale-105 transition-all text-xs uppercase tracking-wide border border-amber-300"
      >
        <Send className="w-4 h-4" /> Báo Giá Khẩn Cấp
      </button>

      {/* Zalo CTA Button */}
      <a
        href="https://zalo.me/0961924884"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#0068FF] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative group border border-white/20"
        title="Chat Zalo ngay"
      >
        <span className="font-extrabold text-xs tracking-tighter">Zalo</span>
        <span className="absolute right-14 bg-slate-900 text-white text-xs px-2.5 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700 pointer-events-none">
          Tư vấn qua Zalo
        </span>
      </a>

      {/* Messenger CTA Button */}
      <a
        href="https://m.me/baoveanninhdacnhiem"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 via-pink-600 to-purple-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative group border border-white/20"
        title="Chat Facebook Messenger"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-14 bg-slate-900 text-white text-xs px-2.5 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700 pointer-events-none">
          Messenger
        </span>
      </a>

      {/* Hotline Calling Pulsing CTA */}
      <a
        href="tel:0961924884"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center shadow-[0_0_25px_rgba(255,215,0,0.8)] pulse-button hover:scale-110 transition-transform relative group border-2 border-white"
        title="Gọi hotline trực tiếp 24/7"
      >
        <Phone className="w-7 h-7 fill-slate-950" />
        <span className="absolute right-16 bg-amber-400 text-slate-950 font-bold text-xs px-3 py-1.5 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-amber-300 pointer-events-none">
          Hotline: 0961.924.884 (24/7)
        </span>
      </a>
    </div>
  );
}

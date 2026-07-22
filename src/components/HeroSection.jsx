import React from 'react';
import { Shield, ArrowRight, PhoneCall, Award, CheckCircle2, Lock } from 'lucide-react';

export default function HeroSection({ setActiveTab, onOpenQuoteModal }) {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#070F1C] overflow-hidden border-b border-amber-500/20">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_security.jpg" 
          alt="Đội hình Bảo Vệ An Ninh Đặc Nhiệm" 
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040913] via-[#071324]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <div className="gold-badge animate-pulse">
            <Shield className="w-4 h-4 text-amber-400" />
            <span>LỰC LƯỢNG BẢO VỆ & AN NINH ĐẶC NHIỆM B2B HÀNG ĐẦU</span>
          </div>

          {/* Main Title / Slogan */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none uppercase font-heading">
            LÁ CHẮN THÉP CHO <br />
            <span className="gold-text">DOANH NGHIỆP CỦA BẠN</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
            Giải pháp an ninh toàn diện, kỷ luật thép, bảo mật tuyệt đối. Bảo vệ tối ưu cho Khu Công Nghiệp, Nhà Máy, Ngân Hàng, Sự Kiện Quy Mô & Yếu Nhân VIP.
          </p>

          {/* Key Value Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Phản ứng nhanh 24/7 dưới 15 phút</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>100% Nhân sự có chứng chỉ PCCC & Võ thuật</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Cam kết Bảo mật Thông tin NDA</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Bảo hiểm Trách nhiệm Bảo vệ lên tới 10 tỷ VNĐ</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button 
              onClick={onOpenQuoteModal}
              className="btn-primary py-4 px-8 text-base shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              <PhoneCall className="w-5 h-5" />
              Tư Vấn & Nhận Báo Giá Ngay
            </button>

            <button 
              onClick={() => { setActiveTab('about'); window.scrollTo(0,0); }}
              className="btn-secondary py-4 px-6 text-base flex items-center gap-2"
            >
              <span>Xem Hồ Sơ Năng Lực</span>
              <ArrowRight className="w-5 h-5 text-amber-400" />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 border-t border-slate-800/80 flex items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>ISO 9001:2015 Certificated</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-400" />
              <span>Hệ thống Quản trị Rủi ro Chuẩn Quốc Tế</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

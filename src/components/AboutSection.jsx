import React from 'react';
import { ShieldCheck, Users, Building2, Calendar, Award, ArrowUpRight } from 'lucide-react';

export default function AboutSection({ setActiveTab }) {
  const stats = [
    { icon: Calendar, value: '15+', label: 'Năm Kinh Nghiệm', sub: 'Tiên phong ngành an ninh' },
    { icon: Building2, value: '500+', label: 'Dự Án Quy Mô Lớn', sub: 'KCN, Ngân hàng, Tập đoàn' },
    { icon: Users, value: '2,000+', label: 'Nhân Sự Tinh Nhuệ', sub: 'Huấn luyện đặc nhiệm' },
    { icon: Award, value: '100%', label: 'Sự Hài Lòng B2B', sub: 'Cam kết chất lượng hợp đồng' },
  ];

  return (
    <section className="section-padding bg-[#070E1A] relative border-b border-amber-500/15">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image & Commander Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-[0_10px_40px_rgba(0,0,0,0.8)] group">
              <img 
                src="/commander.jpg" 
                alt="Chỉ huy trưởng Lực lượng Bảo Vệ An Ninh Đặc Nhiệm" 
                className="w-full h-[450px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050C16] via-transparent to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0A1628]/95 backdrop-blur-md rounded-xl border border-amber-500/40">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-base">Vũ Đỗ Minh</h4>
                    <p className="text-xs text-amber-400 font-medium">Giám Đốc Điều Hành & Chỉ Huy Trưởng An Ninh</p>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-amber-400 flex-shrink-0" />
                </div>
                <p className="text-xs text-slate-300 italic mt-2 border-t border-slate-700/60 pt-2">
                  "Kỷ luật là sức mạnh - Bảo vệ an toàn tuyệt đối cho tài sản và thương hiệu đối tác là sứ mệnh tối cao."
                </p>
              </div>
            </div>

            {/* Glowing accent backdrop */}
            <div className="absolute -inset-4 bg-amber-500/10 blur-2xl -z-10 rounded-full"></div>
          </div>

          {/* Right Column: Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="gold-badge">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>NĂNG LỰC NỘI TẠI & UY TÍN THƯƠNG HIỆU</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading leading-tight">
              TẠI SAO CÁC TẬP ĐOÀN B2B <br />
              <span className="gold-text">TIN TƯỞNG CHỌN CHÚNG TÔI?</span>
            </h2>

            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Chúng tôi không chỉ cung cấp dịch vụ bảo vệ thông thường, mà xây dựng một **"Hệ thống An ninh Đặc nhiệm Dự phòng Rủi ro"**. Với quy trình huấn luyện khắt khe theo chuẩn lực lượng vũ trang, 100% nhân sự đáp ứng trình độ nghiệp vụ cao, làm chủ công nghệ giám sát hiện đại.
            </p>

            {/* Stat Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {stats.map((st, i) => (
                <div key={i} className="p-4 bg-[#0B172A] border border-amber-500/20 rounded-xl hover:border-amber-500/50 transition-all text-center">
                  <st.icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-black text-amber-400 font-heading">{st.value}</div>
                  <div className="text-xs font-bold text-white mt-1">{st.label}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{st.sub}</div>
                </div>
              ))}
            </div>

            {/* Link to Full About Page */}
            <div className="pt-4 flex items-center gap-4">
              <button 
                onClick={() => { setActiveTab('about'); window.scrollTo(0,0); }}
                className="btn-primary py-3 px-6 text-sm flex items-center gap-2"
              >
                <span>Xem Chi Tiết Hồ Sơ Năng Lực</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

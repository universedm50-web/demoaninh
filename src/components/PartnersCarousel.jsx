import React from 'react';
import { Building, ShieldCheck } from 'lucide-react';

export default function PartnersCarousel() {
  const partners = [
    { name: 'KCN VSIP BÌNH DƯƠNG', role: 'Đối tác Khu Công Nghiệp' },
    { name: 'SAMSUNG ELECTRONICS KCN', role: 'Bảo vệ Nhà máy Công nghệ' },
    { name: 'NGÂN HÀNG VIETCOMBANK', role: 'Áp tải & Bảo vệ Phòng GD' },
    { name: 'VINKHOMES & VINGROUP', role: 'Bảo vệ Đô thị & Tòa nhà' },
    { name: 'SUN GROUP RESORTS', role: 'Bảo vệ Khu nghỉ dưỡng VIP' },
    { name: 'FOXCONN VIỆT NAM', role: 'Bảo vệ Nhà xưởng KCN' },
    { name: 'LG ELECTRONICS KCN', role: 'Bảo vệ An ninh Nhà máy' },
    { name: 'VINAMILK KHO VẬN', role: 'Bảo vệ Kho bãi Logistics' },
  ];

  return (
    <section className="py-12 bg-[#040811] border-y border-amber-500/20">
      <div className="container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            <ShieldCheck className="w-3.5 h-3.5" /> BẢO CHỨNG XÃ HỘI (SOCIAL PROOF)
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mt-2 font-heading">
            ĐỐI TÁC VÀ TẬP ĐOÀN ĐÃ TIN TƯỞNG HỢP TÁC
          </h3>
        </div>

        {/* Logo Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          {partners.map((p, i) => (
            <div 
              key={i} 
              className="p-4 bg-[#091424] border border-slate-800 rounded-xl hover:border-amber-500/40 transition-all text-center flex flex-col items-center justify-center space-y-1.5 group"
            >
              <Building className="w-6 h-6 text-amber-400/70 group-hover:text-amber-400 group-hover:scale-110 transition-all" />
              <span className="font-extrabold text-xs text-slate-200 group-hover:text-white tracking-wide font-heading">
                {p.name}
              </span>
              <span className="text-[10px] text-slate-400">{p.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

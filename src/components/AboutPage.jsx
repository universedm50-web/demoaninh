import React from 'react';
import { ShieldCheck, Award, Eye, Target, CheckSquare, Clock, Cpu, Users, ChevronRight } from 'lucide-react';

export default function AboutPage({ onOpenQuoteModal }) {
  const timeline = [
    { year: '2010', title: 'Thành Lập Đội An Ninh Tiền Thân', desc: 'Khởi đầu từ lực lượng sĩ quan an ninh xuất ngũ, chuyên đảm bảo trật tự sự kiện cấp cao.' },
    { year: '2015', title: 'Mở Rộng Phân Phối Dịch Vụ KCN', desc: 'Trở thành đối tác chiến lược bảo vệ an ninh cho các KCN trọng điểm tại Hà Nội, Bắc Ninh, Bình Dương.' },
    { year: '2020', title: 'Đạt Chứng Nhận ISO 9001:2015', desc: 'Chuẩn hóa quy trình quản trị rủi ro an ninh theo tiêu chuẩn quản lý chất lượng quốc tế.' },
    { year: '2026', title: 'Đẳng Cấp Lực Lượng An Ninh Đặc Nhiệm', desc: 'Phát triển quân số hơn 2.000 cán bộ chiến sĩ an ninh tinh nhuệ, tích hợp công nghệ AI giám sát.' },
  ];

  return (
    <div className="bg-[#050C16] text-slate-200">
      {/* Subpage Header Banner */}
      <div className="relative py-20 bg-[#071324] border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="gold-badge">
            <ShieldCheck className="w-4 h-4" /> VỀ CÔNG TY BẢO VỆ AN NINH ĐẶC NHIỆM
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-heading">
            HỒ SƠ NĂNG LỰC & <span className="gold-text">HỆ THỐNG QUẢN TRỊ</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base">
            Minh chứng năng lực bằng con số thực tế - Đáp ứng các tiêu chuẩn khắt khe nhất của các tập đoàn đa quốc gia và đối tác đấu thầu lớn.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="section-padding bg-[#070F1D] border-b border-slate-800">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 space-y-4 border-l-4 border-l-amber-400">
            <div className="p-3 bg-amber-500/10 w-fit rounded-lg text-amber-400">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">TẦM NHÌN CHUYỂN ĐỔI</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Trở thành Tập đoàn An ninh - Bảo vệ & Điều tra Hàng đầu Việt Nam, đi đầu trong việc kết hợp giữa **lực lượng võ thuật đặc nhiệm tinh nhuệ** và **công nghệ quản trị an ninh thông minh**, kiến tạo môi trường an toàn tuyệt đối cho doanh nghiệp phát triển bền vững.
            </p>
          </div>

          <div className="glass-panel p-8 space-y-4 border-l-4 border-l-amber-400">
            <div className="p-3 bg-amber-500/10 w-fit rounded-lg text-amber-400">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">SỨ MỆNH TỐI CAO</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              "Bảo vệ vững chắc tài sản, con người và uy tín thương hiệu của khách hàng." Đặt tiêu chuẩn an toàn kỷ luật lên hàng đầu, hành động quyết đoán, cam kết bảo mật thông tin tối thượng trong mọi tình huống.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-[#050C16] border-b border-slate-800">
        <div className="container">
          <div className="section-header">
            <h2 className="text-3xl font-extrabold text-white">LỊCH SỬ PHÁT TRIỂN & CHẶNG ĐƯỜNG UY TÍN</h2>
            <p className="text-slate-400 text-sm">Hơn 15 năm vững bước khẳng định vị thế đơn vị an ninh đặc nhiệm top đầu</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {timeline.map((item, index) => (
              <div key={index} className="glass-panel p-6 relative border-t-2 border-t-amber-400">
                <span className="text-3xl font-black text-amber-400 font-heading block mb-2">{item.year}</span>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management Matrix Diagram (Sơ đồ hệ thống quản trị rủi ro) */}
      <section className="section-padding bg-[#070F1D]">
        <div className="container">
          <div className="section-header">
            <h2 className="text-3xl font-extrabold text-white">SƠ ĐỒ HỆ THỐNG QUẢN TRỊ RỦI RO AN NINH</h2>
            <p className="text-slate-400 text-sm">Quy trình 4 cấp độ kiểm soát chặt chẽ nhằm triệt tiêu rủi ro từ gốc</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#0B182B] border border-amber-500/30 rounded-xl space-y-3">
              <div className="text-amber-400 font-bold text-sm uppercase">Cấp độ 1: Khảo Sát & Lập Phương Án</div>
              <p className="text-xs text-slate-300">Đánh giá lỗ hổng an ninh thực địa, đo lường sơ đồ luồng người & tài sản, thiết lập kịch bản ứng phó khẩn cấp.</p>
            </div>

            <div className="p-6 bg-[#0B182B] border border-amber-500/30 rounded-xl space-y-3">
              <div className="text-amber-400 font-bold text-sm uppercase">Cấp độ 2: Kiểm Soát & Tuần Tra 24/7</div>
              <p className="text-xs text-slate-300">Triển khai quân số tại các chốt yếu huyệt, điểm danh điện tử QR, kết hợp tuần tra ban đêm định kỳ 30 phút/lần.</p>
            </div>

            <div className="p-6 bg-[#0B182B] border border-amber-500/30 rounded-xl space-y-3">
              <div className="text-amber-400 font-bold text-sm uppercase">Cấp độ 3: Giám Sát Đội Cơ Động Tuần Tra</div>
              <p className="text-xs text-slate-300">Ban chỉ huy kiểm tra đột xuất không báo trước, đảm bảo nhân sự chấp hành nghiêm kỷ luật và tác phong công tác.</p>
            </div>

            <div className="p-6 bg-[#0B182B] border border-amber-500/30 rounded-xl space-y-3">
              <div className="text-amber-400 font-bold text-sm uppercase">Cấp độ 4: Phản Ứng Khẩn Cấp Báo B động</div>
              <p className="text-xs text-slate-300">Khi có sự cố (Cháy nổ, Đột nhập, Gây rối), Lực lượng Phản ứng nhanh đặc nhiệm có mặt trợ giúp dưới 15 phút.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button onClick={onOpenQuoteModal} className="btn-primary py-4 px-8 text-sm">
              Yêu Cầu Tải Hồ Sơ Năng Lực PDF Đấu Thầu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

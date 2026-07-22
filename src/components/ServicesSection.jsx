import React from 'react';
import { Factory, CalendarEvents, Warehouse, Landmark, UserCheck, Car, Search, ShieldAlert, ArrowRight } from 'lucide-react';

export default function ServicesSection({ onSelectService, setActiveTab }) {
  const servicesList = [
    {
      id: 'kcn',
      title: 'Bảo Vệ Khu Công Nghiệp (KCN)',
      category: 'Bảo Vệ An Ninh',
      icon: Factory,
      desc: 'Kiểm soát cổng xuất nhập hàng, phòng chống thất thoát tài sản, tuần tra ban đêm & ứng phó sự cố đột nhập.',
      badge: 'Trọng Tâm B2B',
      img: '/hero_security.jpg'
    },
    {
      id: 'su-kien',
      title: 'Bảo Vệ Sự Kiện & Hội Nghị Lớn',
      category: 'Bảo Vệ An Ninh',
      icon: ShieldAlert,
      desc: 'Điều phối đám đông, bảo vệ sân khấu, rà soát an ninh kim loại & hỗ trợ phân luồng giao thông sự kiện.',
      badge: 'VIP / Đại Hội',
      img: '/hero_security.jpg'
    },
    {
      id: 'kho-hang-nha-may',
      title: 'Bảo Vệ Kho Hàng & Nhà Máy',
      category: 'Bảo Vệ An Ninh',
      icon: Warehouse,
      desc: 'Giám sát 24/7 qua Camera & chốt trực, kiểm kê container, niêm phong niêm kiểm tài sản kho bãi.',
      badge: 'Kiểm Soát Nghiêm Nhặt',
      img: '/hero_security.jpg'
    },
    {
      id: 'ngan-hang',
      title: 'Bảo Vệ Ngân Hàng & Tài Chính',
      category: 'Bảo Vệ An Ninh',
      icon: Landmark,
      desc: 'Bảo vệ phòng giao dịch, cây ATM, áp tải tiền chuyên dụng với trang bị vũ khí hỗ trợ tiêu chuẩn cao.',
      badge: 'Bảo Mật Cao',
      img: '/hero_security.jpg'
    },
    {
      id: 'yeu-nhan-vip',
      title: 'Bảo Vệ Yếu Nhân & VIP (Bodyguard)',
      category: 'Vệ Sĩ Cấp Cao',
      icon: UserCheck,
      desc: 'Vệ sĩ riêng cho Doanh nhân, Chính khách, Ngôi sao. Đào tạo võ thuật đặc nhiệm, lái xe an toàn & ứng biến linh hoạt.',
      badge: 'Đặc Nhiệm VIP',
      img: '/vip_protection.jpg'
    },
    {
      id: 'bai-xe',
      title: 'Bảo Vệ Bãi Xe & Tòa Nhà',
      category: 'Bảo Vệ An Ninh',
      icon: Car,
      desc: 'Quản lý hệ thống thẻ xe thông minh, hướng dẫn đỗ xe, giữ gìn trật tự và phòng chống cháy nổ bãi xe tòa nhà.',
      badge: 'Quản Lý Thông Minh',
      img: '/hero_security.jpg'
    },
    {
      id: 'dieu-tra',
      title: 'Dịch Vụ Điều Tra & Thám Tử Tư',
      category: 'Nghiệp Vụ Đặc Biệt',
      icon: Search,
      desc: 'Điều tra xác minh thông tin doanh nghiệp, xác minh gian lận nội bộ, thu thập bằng chứng với cam kết NDA bảo mật tuyệt đối.',
      badge: 'Bảo Mật 100%',
      img: '/vip_protection.jpg'
    },
    {
      id: 'giai-phap-khung-hoang',
      title: 'Tư Vấn & Xử Lý Khủng Hoảng',
      category: 'Tư Vấn An Ninh',
      icon: ShieldAlert,
      desc: 'Tư vấn giải pháp an ninh tổng thể, lập phương án bảo vệ rủi ro và xử lý sự cố an ninh doanh nghiệp khẩn cấp.',
      badge: 'Giải Pháp Toàn Diện',
      img: '/commander.jpg'
    }
  ];

  return (
    <section className="section-padding bg-[#050B14] relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="gold-badge mb-3">
            <span>DANH MỤC DỊCH VỤ CHUYÊN NGHIỆP</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading">
            DỊCH VỤ AN NINH <span className="gold-text">TRỌNG TÂM</span>
          </h2>
          <p className="text-slate-400 mt-2 text-sm md:text-base">
            Đáp ứng đầy đủ yêu cầu khắt khe của các dự án lớn, đấu thầu doanh nghiệp B2B và dịch vụ điều tra chuyên sâu.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((srv) => (
            <div 
              key={srv.id}
              className="glass-panel group p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative border border-amber-500/20 hover:border-amber-500/60"
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <srv.icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                  {srv.badge}
                </span>
              </div>

              {/* Title & Desc */}
              <div className="space-y-2 mb-6">
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1 font-heading">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {srv.desc}
                </p>
              </div>

              {/* Detail Button */}
              <button
                onClick={() => onSelectService(srv)}
                className="w-full pt-3 border-t border-slate-800 text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center justify-between group-hover:border-amber-500/40"
              >
                <span>Xem chi tiết dịch vụ</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => { setActiveTab('services'); window.scrollTo(0,0); }}
            className="btn-secondary py-3.5 px-8 text-sm inline-flex items-center gap-2"
          >
            <span>Khám Phá Tất Cả Phương Án Dịch Vụ</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </section>
  );
}

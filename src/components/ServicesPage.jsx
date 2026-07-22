import React, { useState } from 'react';
import { Shield, Search, CheckCircle, FileText, Download, PhoneCall, ArrowRight, Lock, Eye, AlertTriangle } from 'lucide-react';

export default function ServicesPage({ onSelectService, onOpenQuoteModal }) {
  const [activeBranch, setActiveBranch] = useState('security'); // 'security' | 'investigation'

  const securityServices = [
    { title: 'Bảo Vệ Khu Công Nghiệp (KCN)', desc: 'Kiểm soát hàng rào, công nhân, xe container ra vào KCN, bảo vệ tài sản doanh nghiệp FDI.', price: 'Từ 15.000.000 VNĐ / vị trí / tháng 24/7' },
    { title: 'Bảo Vệ Nhà Máy & Kho Bãi', desc: 'Niêm phong kho hàng, giám sát xuất nhập vật tư, PCCC định kỳ.', price: 'Thỏa thuận theo quy mô diện tích' },
    { title: 'Bảo Vệ Sự Kiện Quy Mô Lớn', desc: 'Đảm bảo trật tự show diễn, đại hội cổ đông, lễ hội với đội hình phản ứng nhanh.', price: 'Theo giờ hoặc gói sự kiện' },
    { title: 'Bảo Vệ Ngân Hàng & Áp Tải Tiền', desc: 'Trang bị công cụ hỗ trợ vũ trang, hộ tống tiền và tài sản giá trị cao.', price: 'Tiêu chuẩn bảo mật nghiêm ngặt' },
    { title: 'Bảo Vệ Yếu Nhân & VIP (Bodyguard)', desc: 'Vệ sĩ riêng theo sát 24/7, lái xe kiêm bảo vệ cho doanh nhân, người nổi tiếng.', price: 'Gói VIP theo ngày / tháng' },
    { title: 'Bảo Vệ Bãi Xe & Tòa Nhà Cao Tầng', desc: 'Quản lý quẹt thẻ từ thông minh, giữ gìn an ninh trật tự khu chung cư, văn phòng.', price: 'Tối ưu chi phí vận hành' },
    { title: 'Bảo Vệ Công Trường Xây Dựng', desc: 'Bảo vệ máy móc, thiết bị vật tư công trình khỏi thất thoát ban đêm.', price: 'Linh hoạt theo ca làm việc' }
  ];

  const investigationSteps = [
    { step: '01', title: 'Tiếp Nhận & Ký Kết NDA', desc: 'Ký cam kết bảo mật tuyệt đối 100% trước khi trao đổi chi tiết vụ việc.' },
    { step: '02', title: 'Thu Thập & Phân Tích Dữ Liệu', desc: 'Triển khai lực lượng thám tử chuyên nghiệp xác minh thực địa và đối soát thông tin.' },
    { step: '03', title: 'Theo Dõi & Giám Sát', desc: 'Ghi hình, chụp ảnh, thu thập chứng chỉ bằng chứng hợp pháp.' },
    { step: '04', title: 'Báo Cáo Tiến Độ', desc: 'Cập nhật trực tiếp cho khách hàng qua kênh liên lạc mã hóa bí mật.' },
    { step: '05', title: 'Bàn Giao & Hủy Dữ Liệu', desc: 'Bàn Giao toàn bộ chứng cứ cho khách hàng và hủy sạch dấu vết lưu trữ.' }
  ];

  return (
    <div className="bg-[#050C16] text-slate-200 min-h-screen">
      {/* Subpage Banner */}
      <div className="py-16 bg-[#071324] border-b border-amber-500/20 text-center">
        <div className="container max-w-4xl mx-auto space-y-4">
          <div className="gold-badge">
            <Shield className="w-4 h-4" /> DANH MỤC DỊCH VỤ TOÀN DIỆN
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white font-heading">
            DỊCH VỤ AN NINH BẢO VỆ & <span className="gold-text">ĐIỀU TRA THÁM TỬ</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base">
            Phân loại rõ ràng 2 ngách nghiệp vụ riêng biệt giúp Quý khách dễ dàng lựa chọn đúng giải pháp tối ưu.
          </p>

          {/* Branch Switcher Tabs */}
          <div className="flex justify-center gap-4 pt-4">
            <button
              onClick={() => setActiveBranch('security')}
              className={`py-3 px-6 rounded-lg font-bold text-sm flex items-center gap-2 transition-all ${
                activeBranch === 'security'
                  ? 'bg-amber-500 text-slate-950 shadow-[0_0_20px_rgba(212,175,55,0.5)]'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Shield className="w-4 h-4" /> 1. Dịch Vụ An Ninh & Bảo Vệ (7 Ngách)
            </button>
            <button
              onClick={() => setActiveBranch('investigation')}
              className={`py-3 px-6 rounded-lg font-bold text-sm flex items-center gap-2 transition-all ${
                activeBranch === 'investigation'
                  ? 'bg-amber-500 text-slate-950 shadow-[0_0_20px_rgba(212,175,55,0.5)]'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Search className="w-4 h-4" /> 2. Dịch Vụ Điều Tra & Thám Tử (NDA)
            </button>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Branch 1: Security Services */}
        {activeBranch === 'security' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center border-b border-amber-500/20 pb-4">
              <div>
                <h3 className="text-2xl font-bold text-white font-heading">DANH SÁCH 7 DỊCH VỤ AN NINH BẢO VỆ CHUYÊN NGHIỆP</h3>
                <p className="text-xs text-slate-400">Đội ngũ quân số bảo vệ tinh nhuệ, huấn luyện võ thuật & PCCC bài bản</p>
              </div>
              <button onClick={onOpenQuoteModal} className="btn-primary py-2.5 px-5 text-xs hidden sm:flex">
                Tải Bảng Giá Mẫu PDF
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityServices.map((item, idx) => (
                <div key={idx} className="glass-panel p-6 border border-amber-500/20 flex flex-col justify-between hover:border-amber-500/60 transition-all">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                      <Shield className="w-4 h-4" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                    <div className="p-2.5 bg-[#0A1628] rounded border border-slate-800 text-[11px] text-amber-300">
                      <strong>Báo giá dự kiến:</strong> {item.price}
                    </div>
                  </div>
                  <button 
                    onClick={onOpenQuoteModal}
                    className="mt-4 pt-3 border-t border-slate-800 text-xs text-amber-400 font-bold hover:underline flex items-center justify-between"
                  >
                    <span>Yêu cầu phương án bảo vệ chi tiết</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Branch 2: Investigation Services */}
        {activeBranch === 'investigation' && (
          <div className="space-y-10">
            {/* NDA Commitment Banner */}
            <div className="p-8 bg-[#091526] border-2 border-amber-500/40 rounded-2xl space-y-4">
              <div className="flex items-center gap-3 text-amber-400">
                <Lock className="w-8 h-8" />
                <h3 className="text-2xl font-bold text-white font-heading">CAM KẾT BẢO MẬT TUYỆT ĐỐI (NDA)</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Chúng tôi hiểu tính chất nhạy cảm của các vụ việc điều tra doanh nghiệp & cá nhân. 100% hợp đồng điều tra được niêm phong mật, trao đổi qua **Hotline mã hóa riêng**, không tiết lộ bất kỳ thông tin nào cho bên thứ ba.
              </p>
            </div>

            {/* 5-Step Process */}
            <div>
              <h3 className="text-xl font-bold text-white font-heading mb-6 text-center">
                QUY TRÌNH ĐIỀU TRA 5 BƯỚC MẬT & CHUYÊN NGHIỆP
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {investigationSteps.map((st, i) => (
                  <div key={i} className="p-5 bg-[#0A1628] border border-amber-500/20 rounded-xl space-y-2 relative">
                    <span className="text-2xl font-black text-amber-400 font-heading">{st.step}</span>
                    <h4 className="text-sm font-bold text-white">{st.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-4">
              <a href="tel:0961924884" className="btn-primary py-3.5 px-8 text-sm inline-flex items-center gap-2">
                <PhoneCall className="w-4 h-4" /> Kết Nối Hotline Mã Hóa 24/7: 0961.924.884
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

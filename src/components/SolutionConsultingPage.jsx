import React from 'react';
import { AlertTriangle, ShieldCheck, FileCheck, CheckCircle2, ArrowRight, PhoneCall } from 'lucide-react';

export default function SolutionConsultingPage({ onOpenQuoteModal }) {
  const caseStudies = [
    {
      title: 'Case Study 1: Xử Lý Khủng Hoảng Đột Nhập & Thất Thát Tài Sản KCN',
      client: 'Tập đoàn sản xuất linh kiện điện tử FDI tại KCN Bắc Ninh',
      problem: 'Doanh nghiệp bị mất trộm linh kiện giá trị cao liên tục trong ca đêm, nghi ngờ có sự thông đồng của nhân viên nội bộ.',
      solution: 'Đội An Ninh Đặc Nhiệm triển khai trinh sát ngầm, cài đặt hệ thống Camera giấu kín tích hợp quét mã barcode container. Chỉ trong 72h đã triệt phá đường dây tuồn hàng ra ngoài.',
      result: 'Thu hồi 100% tài sản trị giá 2.5 tỷ VNĐ, tái thiết lập quy trình kiểm soát an ninh kỷ luật thép cho KCN.'
    },
    {
      title: 'Case Study 2: Bảo Vệ An Ninh & Xử Lý Khủng Hoảng Truyền Thông Sự Kiện VIP',
      client: 'Lễ ra mắt sản phẩm thương hiệu xe hơi hạng sang',
      problem: 'Nguy cơ bị phá quấy bởi đám đông quá khích và các cuộc biểu tình tự phát bên ngoài trung tâm hội nghị.',
      solution: 'Bố trí 3 vòng an ninh khép kín, thiết lập luồng đón trả VIP riêng biệt, lập phương án giải tán đám đông ôn hòa không gây xô xát.',
      result: 'Sự kiện diễn ra thành công hoàn hảo với hơn 500 khách mời quốc tế, không có bất kỳ sự cố truyền thông tiêu cực nào xảy ra.'
    }
  ];

  return (
    <div className="bg-[#050C16] text-slate-200 min-h-screen">
      {/* Banner */}
      <div className="py-16 bg-[#071324] border-b border-amber-500/20 text-center">
        <div className="container max-w-4xl mx-auto space-y-4">
          <div className="gold-badge">
            <AlertTriangle className="w-4 h-4" /> CHUYÊN GIA AN NINH & TƯ VẤN KHỦNG HOẢNG
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white font-heading">
            TƯ VẤN GIẢI PHÁP MÔ HÌNH & <span className="gold-text">XỬ LÝ KHỦNG HOẢNG</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base">
            Nâng tầm định vị từ "Cung cấp nhân sự" lên "Tư vấn & Cung cấp giải pháp an ninh toàn diện" chuyên sâu cho doanh nghiệp.
          </p>
        </div>
      </div>

      <div className="container py-12 space-y-12">
        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="glass-panel p-8 space-y-4 border border-amber-500/30">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                <FileCheck className="w-4 h-4" /> CASE STUDY THỰC TẾ #{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-white font-heading">{cs.title}</h3>
              <p className="text-xs text-amber-300 font-semibold">Khách hàng: {cs.client}</p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3 bg-red-950/30 border border-red-800/40 rounded-lg">
                  <strong className="text-red-400 block mb-1">Tình huống khủng hoảng / Điểm đau:</strong>
                  <p className="text-slate-300">{cs.problem}</p>
                </div>

                <div className="p-3 bg-blue-950/30 border border-blue-800/40 rounded-lg">
                  <strong className="text-blue-400 block mb-1">Giải pháp An ninh Đặc nhiệm:</strong>
                  <p className="text-slate-300">{cs.solution}</p>
                </div>

                <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-lg">
                  <strong className="text-emerald-400 block mb-1">Kết quả đạt được:</strong>
                  <p className="text-slate-200">{cs.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Call out */}
        <div className="p-8 bg-[#091526] border-2 border-amber-500/40 rounded-2xl text-center space-y-4">
          <h3 className="text-2xl font-bold text-white font-heading">
            DOANH NGHIỆP CỦA BẠN ĐANG GẶP NGUY CƠ HOẶC SỰ CỐ AN NINH?
          </h3>
          <p className="text-xs text-slate-300 max-w-2xl mx-auto">
            Liên hệ ngay với Hội đồng Chuyên gia Chỉ huy An ninh của chúng tôi để được tư vấn kịch bản phòng ngự và phương án ứng phó khẩn cấp 24/7.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button onClick={onOpenQuoteModal} className="btn-primary py-3 px-6 text-xs">
              Đặt Lịch Khảo Sát Tận Nơi
            </button>
            <a href="tel:0961924884" className="btn-secondary py-3 px-6 text-xs flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-amber-400" /> Hotline Khẩn Cấp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

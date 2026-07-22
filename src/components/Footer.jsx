import React from 'react';
import { Shield, Phone, Mail, MapPin, Award, CheckCircle, ExternalLink, FileCheck } from 'lucide-react';

export default function Footer({ setActiveTab, onOpenQuoteModal }) {
  return (
    <footer className="bg-[#040810] border-t border-[rgba(212,175,55,0.2)] text-slate-400 pt-14 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Col 1: Company Profile */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Logo" className="w-12 h-12 rounded-md border border-amber-500/50" />
            <div>
              <h3 className="text-white font-extrabold text-base uppercase tracking-tight">
                CÔNG TY BẢO VỆ AN NINH ĐẶC NHIỆM
              </h3>
              <p className="text-xs text-amber-400 font-semibold">CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ 360</p>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-slate-300">
            Đơn vị bảo vệ chuyên nghiệp cung cấp lực lượng an ninh đặc nhiệm tinh nhuệ, an toàn tuyệt đối cho các tập đoàn B2B, khu công nghiệp, ngân hàng, sự kiện lớn và bảo vệ yếu nhân VIP.
          </p>
          <div className="p-3 bg-[#0A1628] rounded-lg border border-amber-500/20 text-xs space-y-1.5">
            <p className="text-slate-200"><strong>Mã số thuế:</strong> 0110847737</p>
            <p className="text-slate-200"><strong>Giấy chứng nhận ĐKKD:</strong> Sở KH&ĐT cấp</p>
            <p className="text-amber-400 font-semibold flex items-center gap-1.5">
              <Award className="w-4 h-4" /> Đạt chuẩn Hệ thống Quản lý ISO 9001:2015
            </p>
          </div>
        </div>

        {/* Col 2: Core Services */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-amber-400 pl-2.5">
            Dịch Vụ Trọng Tâm
          </h4>
          <ul className="space-y-2.5 text-xs">
            {[
              'Bảo vệ Khu Công Nghiệp (KCN)',
              'Bảo vệ Sự kiện & Hội nghị lớn',
              'Bảo vệ Nhà máy & Kho hàng',
              'Bảo vệ Ngân hàng & Tài chính',
              'Bảo vệ Yếu nhân & VIP (Bodyguard)',
              'Dịch vụ Điều tra & Thám tử tư',
              'Tư vấn & Quản trị rủi ro an ninh'
            ].map((srv, idx) => (
              <li key={idx}>
                <button 
                  onClick={() => { setActiveTab('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  {srv}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Quick Links & Certifications */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-amber-400 pl-2.5">
            Liên Kết & Chứng Nhận
          </h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => { setActiveTab('about'); window.scrollTo(0,0); }} className="hover:text-amber-400">Hồ sơ năng lực công ty</button></li>
            <li><button onClick={() => { setActiveTab('solutions'); window.scrollTo(0,0); }} className="hover:text-amber-400">Giải pháp xử lý khủng hoảng</button></li>
            <li><button onClick={() => { setActiveTab('recruitment'); window.scrollTo(0,0); }} className="hover:text-amber-400">Cổng tuyển dụng nhân sự bảo vệ</button></li>
            <li><button onClick={() => { setActiveTab('news'); window.scrollTo(0,0); }} className="hover:text-amber-400">Cảnh báo an ninh & Tin tức</button></li>
            <li><button onClick={onOpenQuoteModal} className="text-amber-400 font-bold hover:underline flex items-center gap-1">Yêu cầu bảng báo giá chi tiết <ExternalLink className="w-3 h-3" /></button></li>
          </ul>

          <div className="pt-2">
            <p className="text-xs text-slate-300 font-semibold mb-2">Chứng chỉ nghiệp vụ lực lượng:</p>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <span className="bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-1 rounded">PCCC & CNCH</span>
              <span className="bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-1 rounded">Võ thuật Đặc nhiệm</span>
              <span className="bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-1 rounded">Sử dụng CCTO</span>
            </div>
          </div>
        </div>

        {/* Col 4: Contact & Office Map */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-amber-400 pl-2.5">
            Trụ Sở & Liên Hệ
          </h4>
          <div className="space-y-2.5 text-xs">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span><strong>Trụ sở Hà Nội:</strong> Tầng 2, số 777, đường Phúc Diễn, P. Xuân Phương, Q. Nam Từ Liêm, Hà Nội</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Hotline 24/7: <a href="tel:0961924884" className="text-amber-400 font-bold hover:underline">0961.924.884</a></span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Email: <a href="mailto:vu.dominh@hostingviet.vn" className="text-slate-300 hover:text-amber-300">vu.dominh@hostingviet.vn</a></span>
            </p>
          </div>

          <div className="pt-2">
            <button 
              onClick={() => { setActiveTab('contact'); window.scrollTo(0,0); }}
              className="w-full btn-secondary py-2 text-xs flex items-center justify-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5" /> Xem Bản Đồ Chỉ Đường & Chi Nhánh
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2026 CÔNG TY BẢO VỆ AN NINH ĐẶC NHIỆM (WEB360). All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" onClick={(e)=>{e.preventDefault(); alert("Chính sách bảo mật thông tin & bảo vệ dữ liệu khách hàng tuyệt đối.");}} className="hover:text-amber-400">Chính sách bảo mật (NDA)</a>
          <span>•</span>
          <a href="#" onClick={(e)=>{e.preventDefault(); alert("Quy trình làm việc chuẩn ISO 9001:2015.");}} className="hover:text-amber-400">Quy trình nghiệp vụ</a>
        </div>
      </div>
    </footer>
  );
}

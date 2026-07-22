import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Building2, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: '',
    topic: 'Tư Vấn & Báo Giá Dịch Vụ',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const branches = [
    {
      city: 'HÀ NỘI (TRỤ SỞ CHÍNH)',
      address: 'Tầng 2, số 777, đường Phúc Diễn, Phường Xuân Phương, Quận Nam Từ Liêm, Hà Nội',
      phone: '0961.924.884',
      email: 'vu.dominh@hostingviet.vn'
    },
    {
      city: 'TP. HỒ CHÍ MINH (CHI NHÁNH MIỀN NAM)',
      address: 'Tòa nhà Landmark KCN Tân Bình, Q. Tân Bình, TP. Hồ Chí Minh',
      phone: '0961.924.884',
      email: 'hcm@anninhdacnhiem.vn'
    },
    {
      city: 'BÌNH DƯƠNG (VĂN PHÒNG ĐẠI DIỆN KCN)',
      address: 'Số 88 Đại Lộ Bình Dương, Phường Hòa Phú, TP. Thủ Dầu Một, Bình Dương',
      phone: '0961.924.884',
      email: 'binhduong@anninhdacnhiem.vn'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactData.name || !contactData.phone) {
      alert("Vui lòng nhập Họ tên và Số điện thoại!");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-[#050C16] text-slate-200 min-h-screen">
      {/* Banner */}
      <div className="py-16 bg-[#071324] border-b border-amber-500/20 text-center">
        <div className="container max-w-4xl mx-auto space-y-4">
          <div className="gold-badge">
            <MapPin className="w-4 h-4" /> KÊNH THÔNG TIN VÀ PHẢN ÁNH CHÍNH THỐNG
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white font-heading">
            LIÊN HỆ & <span className="gold-text">Ý KIẾN PHẢN ÁNH</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base">
            Thuận tiện giao dịch và tạo kênh tiếp nhận phản hồi chính thống để nâng cao chất lượng dịch vụ an ninh.
          </p>
        </div>
      </div>

      <div className="container py-12 space-y-12">
        {/* Branch Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {branches.map((b, i) => (
            <div key={i} className="glass-panel p-6 border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Building2 className="w-5 h-5" />
                <span>{b.city}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed"><strong>Địa chỉ:</strong> {b.address}</p>
              <p className="text-xs text-amber-300 font-semibold"><strong>Hotline:</strong> {b.phone}</p>
              <p className="text-xs text-slate-400"><strong>Email:</strong> {b.email}</p>
            </div>
          ))}
        </div>

        {/* Contact Form & Google Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form */}
          <div className="lg:col-span-6 glass-panel p-8 border-2 border-amber-500/30">
            <h3 className="text-xl font-bold text-white font-heading mb-2">GỬI THÔNG TIN / Ý KIẾN PHẢN ÁNH</h3>
            <p className="text-xs text-slate-400 mb-6">Tiếp nhận yêu cầu báo giá, đăng ký hợp tác hoặc khiếu nại chất lượng bảo vệ.</p>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-amber-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Đã Gửi Ý Kiến Thành Công!</h4>
                <p className="text-xs text-slate-300">
                  Cảm ơn Quý khách **{contactData.name}**. Ban Giám Đốc sẽ xử lý thông tin phản hồi và phản hồi ngay cho Quý khách.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Họ và Tên *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Nguyễn Văn A" 
                    value={contactData.name}
                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                    className="w-full bg-[#070E1A] border border-slate-700 rounded-lg p-2.5 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-300 mb-1">Số điện thoại *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="0961.xxx.xxx" 
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      className="w-full bg-[#070E1A] border border-slate-700 rounded-lg p-2.5 text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="name@email.com" 
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      className="w-full bg-[#070E1A] border border-slate-700 rounded-lg p-2.5 text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">Chủ đề liên hệ</label>
                  <select
                    value={contactData.topic}
                    onChange={(e) => setContactData({ ...contactData, topic: e.target.value })}
                    className="w-full bg-[#070E1A] border border-slate-700 rounded-lg p-2.5 text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option>Tư Vấn & Báo Giá Dịch Vụ</option>
                    <option>Đăng Ký Đấu Thầu Hợp Tác</option>
                    <option>Khiếu Nại / Phản Ánh Chất Lượng Bảo Vệ</option>
                    <option>Góp Ý Xây Dựng Quy Trình</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">Nội dung tin nhắn / Phản ánh</label>
                  <textarea
                    rows="4"
                    placeholder="Viết nội dung tin nhắn của bạn tại đây..."
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    className="w-full bg-[#070E1A] border border-slate-700 rounded-lg p-2.5 text-white focus:border-amber-400 focus:outline-none"
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary py-3 font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Gửi Tin Nhắn Phản Hồi
                </button>
              </form>
            )}
          </div>

          {/* Right Map Mockup */}
          <div className="lg:col-span-6 glass-panel p-6 border-2 border-amber-500/30 space-y-4">
            <h3 className="text-xl font-bold text-white font-heading">BẢN ĐỒ CHỈ ĐƯỜNG ĐẾN TRỤ SỞ HÀ NỘI</h3>
            <div className="w-full h-80 rounded-xl overflow-hidden border border-slate-700 bg-[#070E1A] relative flex items-center justify-center text-center p-6">
              <div className="space-y-3 z-10">
                <MapPin className="w-10 h-10 text-amber-400 mx-auto animate-bounce" />
                <h4 className="text-base font-bold text-white">TRỤ SỞ CHÍNH CÔNG TY BẢO VỆ AN NINH ĐẶC NHIỆM</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Tầng 2, số 777, đường Phúc Diễn, Phường Xuân Phương, Quận Nam Từ Liêm, Hà Nội
                </p>
                <a 
                  href="https://maps.google.com/?q=777+Phúc+Diễn+Xuân+Phương+Nam+Từ+Liêm+Hà+Nội" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary py-2 px-5 text-xs inline-flex items-center gap-2"
                >
                  Mở Google Maps Định Vị
                </a>
              </div>
              {/* Decorative grid lines overlay */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldAlert, Phone, User, Mail, FileText } from 'lucide-react';

export default function QuickQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Bảo Vệ Khu Công Nghiệp (KCN)',
    note: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Vui lòng điền đầy đủ Họ tên và Số điện thoại liên hệ!");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-[#070F1D] relative border-b border-amber-500/20">
      <div className="container">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 relative overflow-hidden border-2 border-amber-500/30">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left side summary */}
            <div className="md:col-span-5 space-y-4">
              <div className="gold-badge">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>TƯ VẤN BÁO GIÁ MIỄN PHÍ</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white font-heading">
                NHẬN BÁO GIÁ <br />
                <span className="gold-text">DỊCH VỤ AN NINH</span>
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Hãy để lại thông tin nhu cầu của Quý doanh nghiệp. Đội ngũ Chỉ huy An ninh sẽ phân tích rủi ro và gửi phương án báo giá chi tiết **trong vòng 30 phút**.
              </p>

              <div className="p-4 bg-[#050B14] rounded-xl border border-amber-500/20 space-y-2 text-xs">
                <p className="text-amber-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Khảo sát mục tiêu miễn phí tận nơi
                </p>
                <p className="text-amber-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Cam kết báo mật thông tin theo NDA
                </p>
                <p className="text-amber-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Bảng báo giá trọn gói không phát sinh
                </p>
              </div>
            </div>

            {/* Right side form */}
            <div className="md:col-span-7 bg-[#0A1628] p-6 rounded-xl border border-amber-500/20 shadow-xl">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-amber-500/20 border-2 border-amber-400 rounded-full flex items-center justify-center mx-auto text-amber-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Gửi Yêu Cầu Báo Giá Thành Công!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Cảm ơn Quý khách **{formData.name}**. Bộ phận Chỉ huy An ninh Đặc nhiệm sẽ liên hệ trực tiếp qua SĐT **{formData.phone}** trong ít phút nữa.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', service: 'Bảo Vệ Khu Công Nghiệp (KCN)', note: '' }); }}
                    className="btn-secondary py-2 px-6 text-xs"
                  >
                    Gửi Yêu Cầu Khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Họ và Tên người liên hệ <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                      <input 
                        type="text"
                        required
                        placeholder="Ví dụ: Nguyễn Văn A"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#050C16] border border-slate-700 rounded-lg pl-9 pr-4 py-2.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Số điện thoại / Zalo <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                        <input 
                          type="tel"
                          required
                          placeholder="0987.xxx.xxx"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#050C16] border border-slate-700 rounded-lg pl-9 pr-4 py-2.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Email Doanh Nghiệp
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                        <input 
                          type="email"
                          placeholder="contact@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#050C16] border border-slate-700 rounded-lg pl-9 pr-4 py-2.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Dịch vụ an ninh quan tâm
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#050C16] border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                    >
                      <option>Bảo Vệ Khu Công Nghiệp (KCN)</option>
                      <option>Bảo Vệ Sự Kiện & Hội Nghị Lớn</option>
                      <option>Bảo Vệ Nhà Máy & Kho Hàng</option>
                      <option>Bảo Vệ Ngân Hàng & Tài Chính</option>
                      <option>Bảo Vệ Yếu Nhân & VIP (Bodyguard)</option>
                      <option>Dịch Vụ Điều Tra & Thám Tử Tư</option>
                      <option>Tư Vấn & Xử Lý Khủng Hoảng An Ninh</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Yêu cầu cụ thể / Quy mô mục tiêu
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Mô tả địa điểm, số lượng quân số dự kiến..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full bg-[#050C16] border border-slate-700 rounded-lg p-3 text-xs text-white focus:border-amber-400 focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Gửi Yêu Cầu Báo Giá Nhanh
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

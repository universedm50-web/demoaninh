import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Download, Phone, FileText, Send } from 'lucide-react';

export function ServiceDetailModal({ service, onClose, onOpenQuote }) {
  if (!service) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content max-w-2xl">
        <button onClick={onClose} className="modal-close">✕</button>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="gold-badge">{service.badge}</span>
            <span className="text-xs text-amber-400 font-bold">• {service.category}</span>
          </div>

          <h3 className="text-2xl font-extrabold text-white font-heading">{service.title}</h3>

          <div className="relative rounded-xl overflow-hidden h-48 border border-amber-500/30">
            <img src={service.img} alt={service.title} className="w-full h-full object-cover filter brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B172A] via-transparent to-transparent"></div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {service.desc}
          </p>

          <div className="p-4 bg-[#050C16] border border-amber-500/20 rounded-xl space-y-2 text-xs">
            <h4 className="font-bold text-amber-400 uppercase">Quy chuẩn nghiệp vụ áp dụng:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>100% Võ thuật & Thể lực chuẩn</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Chứng chỉ PCCC & Cứu hộ CNCH</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Đội phản ứng nhanh hỗ trợ 24/7</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Bảo hiểm trách nhiệm pháp lý</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => { onClose(); onOpenQuote(); }}
              className="btn-primary py-3 px-6 text-xs flex-1 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" /> Yêu Cầu Báo Giá Cho Dịch Vụ Này
            </button>

            <a 
              href="tel:0961924884"
              className="btn-secondary py-3 px-6 text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" /> Hotline 0961.924.884
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function QuickQuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', phone: '', company: '', service: 'Bảo Vệ Khu Công Nghiệp (KCN)', note: '' });
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Vui lòng điền Họ tên và Số điện thoại!");
      return;
    }
    setSent(true);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">✕</button>

        {sent ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-14 h-14 text-amber-400 mx-auto" />
            <h3 className="text-2xl font-bold text-white">Yêu Cầu Báo Giá Đã Đóng Gói!</h3>
            <p className="text-xs text-slate-300">
              Ban Chỉ Huy An Ninh Đặc Nhiệm sẽ gửi Bảng báo giá trọn gói và Quy trình bảo vệ mẫu về SĐT **{formData.phone}** trong 15 phút.
            </p>
            <button onClick={() => { setSent(false); onClose(); }} className="btn-secondary py-2 px-6 text-xs">
              Đóng Cửa Sổ
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="gold-badge mb-1">
              <FileText className="w-3.5 h-3.5" /> BÁO GIÁ DỊCH VỤ THIẾT KẾ & BẢO VỆ
            </div>
            <h3 className="text-xl font-bold text-white font-heading">ĐĂNG KÝ NHẬN BÁO GIÁ CHI TIẾT</h3>
            <p className="text-xs text-slate-400">Vui lòng điền thông tin để hệ thống lập bảng phương án an ninh tự động.</p>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-300 mb-1">Họ và Tên *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#050C16] border border-slate-700 rounded-lg p-2.5 text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Số điện thoại / Zalo *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="09xx.xxx.xxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#050C16] border border-slate-700 rounded-lg p-2.5 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Tên Doanh Nghiệp / KCN</label>
                  <input 
                    type="text" 
                    placeholder="Công ty ABC"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#050C16] border border-slate-700 rounded-lg p-2.5 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Dịch vụ quan tâm</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#050C16] border border-slate-700 rounded-lg p-2.5 text-white focus:border-amber-400 focus:outline-none"
                >
                  <option>Bảo Vệ Khu Công Nghiệp (KCN)</option>
                  <option>Bảo Vệ Sự Kiện & Hội Nghị Lớn</option>
                  <option>Bảo Vệ Nhà Máy & Kho Hàng</option>
                  <option>Bảo Vệ Ngân Hàng & Áp Tải Tiền</option>
                  <option>Bảo Vệ Yếu Nhân & VIP (Bodyguard)</option>
                  <option>Dịch Vụ Điều Tra & Thám Tử Tư</option>
                  <option>Tư Vấn & Xử Lý Khủng Hoảng</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Ghi chú yêu cầu cụ thể</label>
                <textarea
                  rows="3"
                  placeholder="Ghi rõ diện tích mục tiêu, số vị trí bảo vệ cần thiết..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full bg-[#050C16] border border-slate-700 rounded-lg p-2.5 text-white focus:border-amber-400 focus:outline-none"
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary py-3 font-bold uppercase flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Gửi Yêu Cầu Nhận Báo Giá PDF
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Briefcase, UserCheck, Shield, Award, Upload, CheckCircle2, DollarSign } from 'lucide-react';

export default function RecruitmentPage() {
  const [applicant, setApplicant] = useState({
    name: '',
    phone: '',
    position: 'Bảo Vệ Nội Bộ KCN / Nhà Máy',
    experience: 'Dưới 1 năm',
    fileName: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      title: 'Nhân Viên Bảo Vệ Nội Bộ KCN / Nhà Máy',
      salary: '8.500.000 - 12.000.000 VNĐ / tháng',
      location: 'Hà Nội, Bắc Ninh, Bình Dương',
      req: 'Nam từ 20-45 tuổi, cao 1m68 trở lên. Sức khỏe tốt, không tiền án tiền sự. Ưu tiên bộ đội xuất ngũ.',
      benefit: 'Bao ăn ở tại mục tiêu, đóng BHXH full, lương tháng 13, thưởng lễ tết.'
    },
    {
      title: 'Ca Trưởng / Đội Trưởng An Ninh Mục Tiêu',
      salary: '13.000.000 - 18.000.000 VNĐ / tháng',
      location: 'Các KCN Trọng Điểm',
      req: 'Tối thiểu 2 năm kinh nghiệm quản lý đội nhóm an ninh bảo vệ, giao tiếp tốt, sử dụng máy tính cơ bản.',
      benefit: 'Phụ cấp trách nhiệm, xe máy đi lại, thưởng hoàn thành chỉ tiêu an toàn mục tiêu.'
    },
    {
      title: 'Vệ Sĩ Đặc Nhiệm Bảo VỆ Yếu Nhân VIP',
      salary: '18.000.000 - 30.000.000 VNĐ / tháng',
      location: 'Toàn quốc & Di chuyển linh hoạt',
      req: 'Võ sinh/Vận động viên võ thuật hoặc Lực lượng Đặc công/Cảnh sát xuất ngũ. Ngoại hình chuẩn, xử lý tình huống cực nhanh.',
      benefit: 'Chế độ đãi ngộ đặc biệt, bảo hiểm tai nạn cao cấp 24/24, phụ cấp di chuyển VIP.'
    }
  ];

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setApplicant({ ...applicant, fileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!applicant.name || !applicant.phone) {
      alert("Vui lòng nhập đầy đủ Họ tên và Số điện thoại!");
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
            <Briefcase className="w-4 h-4" /> CỔNG TUYỂN DỤNG NHÂN SỰ AN NINH
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white font-heading">
            GIA NHẬP ĐỘI NGŨ <span className="gold-text">AN NINH ĐẶC NHIỆM</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base">
            Môi trường làm việc kỷ luật, chuyên nghiệp, thu nhập cao và chế độ phúc lợi bảo đảm.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Col: Job list */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white font-heading border-l-4 border-amber-400 pl-3">
              VỊ TRÍ TUYỂN DỤNG ĐANG MỞ
            </h3>

            {jobs.map((j, i) => (
              <div key={i} className="glass-panel p-6 border border-amber-500/20 space-y-3">
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <h4 className="text-lg font-bold text-white font-heading">{j.title}</h4>
                  <span className="text-xs font-extrabold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                    {j.salary}
                  </span>
                </div>

                <p className="text-xs text-slate-400">📍 Địa điểm: {j.location}</p>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <p><strong>Yêu cầu:</strong> {j.req}</p>
                  <p className="text-amber-300 font-medium"><strong>Quyền lợi:</strong> {j.benefit}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Col: Quick Application Form */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 border-2 border-amber-500/30 sticky top-24">
              <h3 className="text-lg font-bold text-white font-heading mb-4 text-center">
                FORM NỘP HỒ SƠ ỨNG TUYỂN NHANH
              </h3>

              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-amber-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Nộp Hồ Sơ Thành Công!</h4>
                  <p className="text-xs text-slate-300">
                    Bộ phận Nhân sự Công ty Bảo Vệ An Ninh Đặc Nhiệm sẽ xem xét thông tin và liên hệ phỏng vấn **{applicant.name}** qua SĐT **{applicant.phone}**.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Họ và Tên ứng viên *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Nguyễn Văn B" 
                      value={applicant.name}
                      onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                      className="w-full bg-[#070E1A] border border-slate-700 rounded-lg p-2.5 text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Số điện thoại *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="0912.xxx.xxx" 
                      value={applicant.phone}
                      onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })}
                      className="w-full bg-[#070E1A] border border-slate-700 rounded-lg p-2.5 text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Vị trí ứng tuyển</label>
                    <select
                      value={applicant.position}
                      onChange={(e) => setApplicant({ ...applicant, position: e.target.value })}
                      className="w-full bg-[#070E1A] border border-slate-700 rounded-lg p-2.5 text-white focus:border-amber-400 focus:outline-none"
                    >
                      <option>Bảo Vệ Nội Bộ KCN / Nhà Máy</option>
                      <option>Ca Trưởng / Đội Trưởng An Ninh</option>
                      <option>Vệ Sĩ Đặc Nhiệm Bảo Vệ Yếu Nhân VIP</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Kinh nghiệm nghiệp vụ</label>
                    <select
                      value={applicant.experience}
                      onChange={(e) => setApplicant({ ...applicant, experience: e.target.value })}
                      className="w-full bg-[#070E1A] border border-slate-700 rounded-lg p-2.5 text-white focus:border-amber-400 focus:outline-none"
                    >
                      <option>Bộ đội / Cảnh sát xuất ngũ</option>
                      <option>Trên 2 năm kinh nghiệm bảo vệ</option>
                      <option>Chưa có kinh nghiệm (Được đào tạo)</option>
                    </select>
                  </div>

                  {/* CV File Upload Simulator */}
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Đính kèm CV / Ảnh CMND (Nếu có)</label>
                    <label className="flex items-center justify-center gap-2 p-3 border border-dashed border-amber-500/40 rounded-lg bg-[#070E1A] cursor-pointer hover:border-amber-400 text-slate-400 hover:text-amber-400 transition-colors">
                      <Upload className="w-4 h-4" />
                      <span className="truncate">{applicant.fileName || 'Chọn file CV (.pdf, .doc, .jpg)'}</span>
                      <input type="file" onChange={handleFileChange} className="hidden" />
                    </label>
                  </div>

                  <button type="submit" className="w-full btn-primary py-3 font-bold uppercase tracking-wider mt-2">
                    Gửi Hồ Sơ Ứng Tuyển
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Newspaper, Search, Tag, Calendar, User, Eye, ArrowRight, ShieldAlert } from 'lucide-react';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [searchTerm, setSearchTerm] = useState('');
  const [readingArticle, setReadingArticle] = useState(null);

  const categories = ['Tất cả', 'Tin nội bộ', 'Gương người tốt việc tốt', 'Kiến thức an ninh', 'Cảnh báo tội phạm'];

  const articles = [
    {
      id: 1,
      category: 'Tin nội bộ',
      title: 'Tuyên Dương Đội An Ninh KCN VSIP Hoàn Thành Xuất Sắc Nhiệm Vụ Quý II',
      date: '20/07/2026',
      author: 'Ban Chỉ Huy',
      summary: 'Biểu dương 15 chiến sĩ an ninh đặc nhiệm có thành tích phát hiện và ngăn chặn kịp thời vụ đột nhập ban đêm tại kho bãi.',
      content: 'Trong đợt kiểm tra đêm ngày 18/07, ca trực an ninh KCN VSIP đã phát hiện 2 đối tượng lạ mặt trèo rào cố tình thâm nhập vào khu vực lưu trữ thiết bị viễn thông. Với tinh thần cảnh giác cao độ và võ thuật tinh nhuệ, lực lượng an ninh đã khống chế thành công đối tượng và bàn giao cho công an sở tại.'
    },
    {
      id: 2,
      category: 'Gương người tốt việc tốt',
      title: 'Nhặt Được 150 Triệu Đồng Nhặt Tại Cây ATM Ngân Hàng, Bảo Vệ Trả Lại Người Đánh Rơi',
      date: '15/07/2026',
      author: 'Phòng Truyền Thông',
      summary: 'Hành động đẹp của đồng chí Trần Văn Nam tại mục tiêu Ngân hàng Vietcombank chi nhánh Nam Từ Liêm.',
      content: 'Trong lúc làm nhiệm vụ tuần tra khu vực phòng giao dịch ATM, đồng chí Nam đã phát hiện một ví da chứa 150 triệu đồng tiền mặt cùng nhiều giấy tờ tùy thân quan trọng do khách hàng bỏ quên. Đồng chí đã báo cáo ngay cho Chỉ huy trưởng và liên hệ trả lại đầy đủ cho chủ nhân.'
    },
    {
      id: 3,
      category: 'Cảnh báo tội phạm',
      title: 'Cảnh Báo Thủ Đoạn Giả Danh Nhân Viên Giao Hàng Đột Nhập Tòa Nhà Văn Phòng',
      date: '10/07/2026',
      author: 'Chuyên Gia An Ninh',
      summary: 'Hướng dẫn các chốt an ninh tòa nhà nhận diện và kiểm soát kỹ lưỡng các đối tượng shipper giả mạo.',
      content: 'Gần đây xuất hiện chiêu thức đối tượng mặc đồng phục hãng xe công nghệ, mang thùng hàng rỗng nhằm qua mặt bảo vệ cổng tòa nhà để tiếp cận các tầng văn phòng trộm cắp laptop, ví tiền. Lực lượng an ninh đặc nhiệm khuyến cáo 100% mục tiêu siết chặt quy trình quẹt thẻ từ.'
    },
    {
      id: 4,
      category: 'Kiến thức an ninh',
      title: 'Quy Trình Xử Lý Sự Cố Rò Rỉ Khí Ga & Cháy Nổ Tại Nhà Máy Sản Xuất',
      date: '05/07/2026',
      author: 'Đội PCCC & CNCH',
      summary: 'Các bước kích hoạt hệ thống báo động khẩn cấp và sơ tán công nhân an toàn.',
      content: 'Khi phát hiện mùi khí ga hoặc khói bất thường, nhân viên an ninh tại chốt trực cần lập tức ấn nút báo động trung tâm, ngắt cầu dao điện chính và hướng dẫn luồng di chuyển thoát hiểm theo đúng sơ đồ PCCC của nhà máy.'
    }
  ];

  const filtered = articles.filter(a => {
    const matchCat = selectedCategory === 'Tất cả' || a.category === selectedCategory;
    const matchSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase()) || a.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-[#050C16] text-slate-200 min-h-screen">
      {/* Subpage Banner */}
      <div className="py-16 bg-[#071324] border-b border-amber-500/20 text-center">
        <div className="container max-w-4xl mx-auto space-y-4">
          <div className="gold-badge">
            <Newspaper className="w-4 h-4" /> TRUYỀN THÔNG & KIẾN THỨC AN NINH
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white font-heading">
            TIN TỨC HOẠT ĐỘNG & <span className="gold-text">CẢNH BÁO AN NINH</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base">
            Cập nhật thường xuyên các tin tức nội bộ, gương nghiệp vụ sáng và các cảnh báo phương thức thủ đoạn tội phạm mới.
          </p>
        </div>
      </div>

      <div className="container py-12">
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 px-4 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-extrabold'
                    : 'bg-[#0A1628] text-slate-300 border border-slate-800 hover:border-amber-500/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input 
              type="text"
              placeholder="Tìm kiếm bài viết..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#0A1628] border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div key={item.id} className="glass-panel p-6 border border-amber-500/20 hover:border-amber-500/50 transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-amber-400 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30">
                    {item.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" /> {item.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-heading hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>

              <button
                onClick={() => setReadingArticle(item)}
                className="pt-3 border-t border-slate-800 text-xs font-bold text-amber-400 hover:underline flex items-center justify-between"
              >
                <span>Đọc toàn bộ bài viết</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {readingArticle && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={() => setReadingArticle(null)} className="modal-close">✕</button>
            <div className="space-y-4 text-xs">
              <span className="gold-badge">{readingArticle.category}</span>
              <h3 className="text-xl font-bold text-white font-heading">{readingArticle.title}</h3>
              <p className="text-amber-400 font-medium">Đăng ngày: {readingArticle.date} • Tác giả: {readingArticle.author}</p>
              <div className="p-4 bg-[#050C16] border border-amber-500/20 rounded-lg text-slate-300 space-y-2 leading-relaxed">
                <p><strong>Tóm tắt:</strong> {readingArticle.summary}</p>
                <hr className="border-slate-800 my-2" />
                <p className="text-slate-200">{readingArticle.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

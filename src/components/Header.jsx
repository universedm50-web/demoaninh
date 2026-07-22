import React, { useState } from 'react';
import { Phone, Shield, FileText, Menu, X, Clock, MapPin, ChevronDown } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'about', label: 'Giới thiệu' },
    { 
      id: 'services', 
      label: 'Dịch vụ', 
      hasDropdown: true,
      subItems: [
        { id: 'services-security', label: 'Dịch vụ An ninh & Bảo vệ' },
        { id: 'services-investigation', label: 'Dịch vụ Điều tra & Thám tử' }
      ]
    },
    { id: 'solutions', label: 'Tư vấn giải pháp' },
    { id: 'recruitment', label: 'Tuyển dụng' },
    { id: 'news', label: 'Tin tức' },
    { id: 'contact', label: 'Liên hệ' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 shadow-2xl">
      {/* Top emergency bar */}
      <div className="bg-[#050C16] border-b border-[rgba(212,175,55,0.15)] py-2 text-xs text-slate-300">
        <div className="container flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Clock className="w-3.5 h-3.5" /> Hotline Khẩn Cấp 24/7: <a href="tel:0961924884" className="hover:underline font-bold text-amber-300">0961.924.884</a>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> Tầng 2, số 777 Phúc Diễn, Xuân Phương, Q. Nam Từ Liêm, Hà Nội
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Mã số thuế: <strong className="text-slate-200">0110847737</strong></span>
            <span className="hidden sm:inline text-amber-400 font-medium">★ Đạt Chuẩn ISO 9001:2015</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-[#0A1628]/95 backdrop-blur-md border-b border-[rgba(212,175,55,0.25)]">
        <div className="container flex items-center justify-between py-3">
          {/* Logo & Brand Name */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative w-12 h-12 rounded-lg p-0.5 bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <img 
                src="/logo.jpg" 
                alt="Logo Bảo Vệ An Ninh Đặc Nhiệm" 
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors uppercase font-heading">
                BẢO VỆ AN NINH ĐẶC NHIỆM
              </h1>
              <p className="text-[10px] md:text-xs text-amber-400/90 font-medium tracking-widest uppercase">
                BẢO VỆ CHUYÊN NGHIỆP • UY TÍN TUYỆT ĐỐI
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id || (item.hasDropdown && activeTab.startsWith('services'));
              return (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => {
                      if (item.hasDropdown) {
                        setServicesDropdown(!servicesDropdown);
                        setActiveTab('services');
                      } else {
                        handleNavClick(item.id);
                      }
                    }}
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-md font-semibold text-sm transition-all duration-200 ${
                      isActive 
                        ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30' 
                        : 'text-slate-200 hover:text-amber-300 hover:bg-slate-800/50'
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                  </button>

                  {/* Dropdown Menu for Services */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-[#0D1B2E] border border-[rgba(212,175,55,0.3)] rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                      {item.subItems.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleNavClick(sub.id)}
                          className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 transition-colors flex items-center gap-2"
                        >
                          <Shield className="w-4 h-4 text-amber-400" />
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Call-to-Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button 
              onClick={onOpenQuoteModal}
              className="btn-primary py-2.5 px-4 text-xs md:text-sm font-bold flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Nhận Báo Giá
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-amber-400 hover:bg-slate-800 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#07111E] border-b border-amber-500/30 px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                    activeTab === item.id ? 'bg-amber-500/20 text-amber-400' : 'text-slate-200'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
                {item.hasDropdown && (
                  <div className="pl-6 space-y-1 my-1 border-l border-amber-500/20 ml-4">
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleNavClick(sub.id)}
                        className="w-full text-left py-2 text-xs text-slate-300 hover:text-amber-400"
                      >
                        • {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }}
                className="btn-primary w-full py-3 text-center"
              >
                Nhận Báo Giá Khẩn Cấp
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

import { Home, MessageSquare, GraduationCap, Settings, Shield, Bell, User, ArrowLeftRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: MessageSquare, label: 'Chatbot', path: '/chatbot' },
    { icon: GraduationCap, label: 'Learning', path: '/learning' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 md:hidden">
      <div className="bg-surface/80 backdrop-blur-xl border-t border-primary/10 shadow-[0_-12px_40px_rgba(36,56,156,0.06)] rounded-t-[2.5rem] flex justify-around items-center px-4 pb-8 pt-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center px-5 py-2 rounded-2xl transition-all duration-300",
                isActive 
                  ? "bg-surface-container-highest text-primary scale-110" 
                  : "text-slate-400 hover:text-primary"
              )}
            >
              <item.icon size={24} className={cn(isActive && "fill-current")} />
              <span className="text-[10px] font-bold uppercase tracking-wider mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export const TopBar = ({ 
  title = "SafeSocial", 
  showProfile = true,
  showSwitch = false 
}: { 
  title?: string, 
  showProfile?: boolean,
  showSwitch?: boolean
}) => (
  <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md">
    <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
      <div className="text-primary font-extrabold flex items-center gap-2 font-headline text-2xl tracking-tight">
        <Shield className="text-primary fill-primary/10" size={28} />
        {title}
      </div>
      <div className="flex items-center gap-4">
        {showSwitch && (
          <Link to="/parent" className="bg-secondary-container text-on-secondary-container px-3 py-2 md:px-4 md:py-2 rounded-xl text-xs md:text-sm font-bold shadow-sm flex items-center gap-2 hover:opacity-90 transition-all active:scale-95">
            <ArrowLeftRight size={16} />
            <span className="hidden sm:inline">Parent View</span>
          </Link>
        )}
        {showProfile && (
          <>
            <button className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors">
              <Bell size={20} />
            </button>
            <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden border-2 border-primary/10">
              <img 
                src="https://picsum.photos/seed/teen/100/100" 
                alt="User" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </>
        )}
      </div>
    </div>
  </header>
);

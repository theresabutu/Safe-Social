import { motion } from 'motion/react';
import { Settings as SettingsIcon, Bell, Lock, Eye, Shield, Smartphone, ChevronRight, LogOut, Moon, Sun, ArrowLeftRight } from 'lucide-react';
import { Card } from '../components/UI';
import { TopBar, BottomNav } from '../components/Navigation';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen pb-32 bg-surface">
      <TopBar title="Settings" showSwitch={true} />
      
      <main className="max-w-2xl mx-auto px-6 pt-8 space-y-10">
        <section className="flex flex-col items-center text-center mb-12">
          <div className="relative mb-6">
            <div className="w-24 h-24 rounded-[2rem] bg-primary-container overflow-hidden border-4 border-white shadow-xl">
              <img src="https://picsum.photos/seed/teen/200/200" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary text-on-primary rounded-2xl flex items-center justify-center shadow-lg border-2 border-white">
              <Smartphone size={18} />
            </button>
          </div>
          <h2 className="font-headline font-bold text-2xl text-slate-900">Leo Miller</h2>
          <p className="text-slate-500 font-medium">leo.miller@safesocial.app</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-[10px] font-bold font-headline uppercase tracking-[0.3em] text-outline ml-2">Account Mode</h3>
          <Card className="p-2 rounded-[2.5rem]">
            <Link to="/parent" className="flex items-center justify-between p-4 hover:bg-surface-container-low rounded-2xl transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowLeftRight size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-headline font-bold text-slate-900">Switch to Parent View</span>
                  <span className="text-xs text-slate-400">Access parental controls and insights</span>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
            </Link>
          </Card>
        </section>

        <section className="space-y-4">
          <h3 className="text-[10px] font-bold font-headline uppercase tracking-[0.3em] text-outline ml-2">Safety Controls</h3>
          <Card className="p-2 rounded-[2.5rem] space-y-1">
            <SettingsItem icon={Shield} title="Risk Threshold" value="Low Risk" color="text-primary" />
            <SettingsItem icon={Eye} title="Privacy Mode" value="Enhanced" color="text-secondary" />
            <SettingsItem icon={Lock} title="Keyword Monitoring" value="Active" color="text-tertiary" />
          </Card>
        </section>

        <section className="space-y-4">
          <h3 className="text-[10px] font-bold font-headline uppercase tracking-[0.3em] text-outline ml-2">App Preferences</h3>
          <Card className="p-2 rounded-[2.5rem] space-y-1">
            <SettingsItem icon={Bell} title="Notifications" value="All Alerts" />
            <div className="flex items-center justify-between p-4 hover:bg-surface-container-low rounded-2xl transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                  {darkMode ? <Moon size={20} /> : <Sun size={20} />}
                </div>
                <span className="font-headline font-bold text-slate-900">Dark Mode</span>
              </div>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={cn(
                  "w-12 h-6 rounded-full transition-all relative",
                  darkMode ? "bg-primary" : "bg-slate-200"
                )}
              >
                <div className={cn(
                  "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
                  darkMode ? "left-7" : "left-1"
                )}></div>
              </button>
            </div>
            <SettingsItem icon={Smartphone} title="Connected Devices" value="2 Active" />
          </Card>
        </section>

        <section className="pt-6">
          <button className="w-full py-5 px-6 rounded-2xl bg-error-container text-error font-headline font-bold flex items-center justify-center gap-2 hover:brightness-95 transition-all active:scale-[0.98]">
            <LogOut size={20} />
            Log Out
          </button>
          <p className="text-center mt-8 text-xs font-bold text-outline uppercase tracking-widest">SafeSocial v2.4.0 (Stable)</p>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}

function SettingsItem({ icon: Icon, title, value, color }: any) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-surface-container-low rounded-2xl transition-colors cursor-pointer group">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
          <Icon size={20} />
        </div>
        <span className="font-headline font-bold text-slate-900">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        {value && <span className={cn("text-xs font-bold", color || "text-slate-400")}>{value}</span>}
        <ChevronRight size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

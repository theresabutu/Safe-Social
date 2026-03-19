import { motion } from 'motion/react';
import { Shield, ArrowLeftRight, CheckCircle2, Link as LinkIcon, Frown, Clock, Info, Lightbulb, ChevronRight, Bell } from 'lucide-react';
import { Card } from '../components/UI';
import { BottomNav } from '../components/Navigation';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function ParentDashboard() {
  return (
    <div className="min-h-screen pb-32 bg-surface">
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-primary font-extrabold flex items-center gap-2 font-headline text-2xl tracking-tight">
            <Shield className="text-primary fill-primary/10" size={28} />
            SafeSocial
          </div>
          <div className="flex items-center gap-4">
            <Link to="/teen" className="bg-primary-container text-on-primary-container px-4 py-2 rounded-xl text-sm font-bold shadow-sm flex items-center gap-2 hover:opacity-90 transition-all active:scale-95">
              <ArrowLeftRight size={16} />
              Switch to Teen View
            </Link>
            <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border-2 border-primary/10">
              <img src="https://picsum.photos/seed/parent/100/100" alt="Parent" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-12 space-y-12">
        <ReassuranceBanner />

        <section>
          <h1 className="font-headline font-extrabold text-4xl mb-4 text-primary tracking-tight">Parent Overview</h1>
          <p className="text-slate-500 max-w-2xl leading-relaxed">Good morning, Sarah. Here is a curated summary of your child's digital footprint for the past 7 days.</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Primary Insights */}
          <div className="lg:col-span-8 space-y-8">
            <Card className="p-8 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <span className="text-primary font-bold text-sm uppercase tracking-widest">Alert Summary</span>
                    <h2 className="font-headline font-bold text-3xl mt-1">3 flagged items <span className="text-slate-400 font-normal">this week</span></h2>
                  </div>
                  <div className="bg-surface-container-high p-3 rounded-2xl text-primary">
                    <Bell size={24} />
                  </div>
                </div>

                <div className="space-y-6">
                  <AlertItem 
                    icon={LinkIcon} 
                    title="Potentially harmful link detected" 
                    subtitle="Instagram • Yesterday, 4:22 PM" 
                    color="bg-error-container text-error" 
                  />
                  <AlertItem 
                    icon={Frown} 
                    title="Toxic interaction pattern flagged" 
                    subtitle="Discord • Tuesday, 11:05 AM" 
                    color="bg-tertiary-fixed text-on-tertiary-fixed" 
                  />
                  <AlertItem 
                    icon={Clock} 
                    title="Extended late-night activity" 
                    subtitle="Multiple Apps • Monday" 
                    color="bg-surface-container-highest text-primary" 
                  />
                </div>
              </div>
            </Card>

            <Card variant="low" className="p-8 rounded-[2.5rem]">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-headline font-bold text-xl">App Usage Distribution</h3>
                <select className="bg-surface-container-lowest border-none rounded-xl text-xs font-bold py-2 px-4 shadow-sm text-primary focus:ring-2 focus:ring-primary/20">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              <div className="flex items-end justify-between h-48 gap-4 px-4">
                {[60, 40, 85, 30, 55, 20, 15].map((h, i) => (
                  <div key={i} className="w-full bg-primary/10 rounded-t-xl relative group">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      className="absolute bottom-0 w-full bg-primary rounded-t-xl transition-all"
                    ></motion.div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400 uppercase">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column: Status & Resources */}
          <div className="lg:col-span-4 space-y-8">
            <Card className="bg-gradient-to-br from-primary to-primary-container text-on-primary p-8 rounded-[2.5rem] shadow-xl border-none">
              <h3 className="font-headline font-bold text-xl mb-8 opacity-90">Current Risk Profile</h3>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-40 h-40 mb-6 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle className="text-white/10" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-secondary-container" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="8" strokeDasharray="440" strokeDashoffset="330" strokeLinecap="round"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-extrabold tracking-tighter">LOW</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Overall Rating</span>
                  </div>
                </div>
                <p className="text-sm font-medium leading-relaxed opacity-80">
                  Leo's activity is within normal behavioral boundaries. No immediate action required.
                </p>
              </div>
            </Card>

            <div className="bg-surface-container-highest rounded-[2.5rem] p-8 relative overflow-hidden h-64 flex flex-col justify-end group cursor-pointer">
              <div className="absolute inset-0 z-0">
                <img src="https://picsum.photos/seed/safety/400/400" alt="Safety" className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-surface-container-highest/60 to-transparent"></div>
              </div>
              <div className="relative z-10">
                <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md mb-2 inline-block">Pro Guide</span>
                <h3 className="font-headline font-bold text-xl leading-tight text-slate-900">Understanding the AI Chatbot Revolution</h3>
                <p className="text-sm text-slate-500 mt-2">A 5-minute guide for parents on ChatGPT and safety.</p>
              </div>
            </div>

            <div className="bg-tertiary-fixed/30 rounded-[2.5rem] p-6 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0">
                <Lightbulb size={20} />
              </div>
              <div>
                <h4 className="font-headline font-bold text-on-tertiary-fixed">Parenting Tip</h4>
                <p className="text-sm text-on-tertiary-fixed/80 mt-1">Try the "Device-Free Dinner" rule to encourage offline connection.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

function ReassuranceBanner() {
  return (
    <div className="bg-secondary-container text-on-secondary-container rounded-2xl p-6 flex items-center justify-between editorial-shadow">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-20"></div>
          <CheckCircle2 className="text-secondary relative" size={24} />
        </div>
        <div>
          <h3 className="font-headline font-bold text-lg">Active Monitoring Enabled</h3>
          <p className="text-sm opacity-80">All connected accounts are currently secured and being analyzed.</p>
        </div>
      </div>
      <div className="hidden sm:block text-right">
        <span className="text-xs font-bold uppercase tracking-widest opacity-60">Last Sync</span>
        <p className="text-sm font-semibold">2 minutes ago</p>
      </div>
    </div>
  );
}

function AlertItem({ icon: Icon, title, subtitle, color }: any) {
  return (
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", color)}>
        <Icon size={20} />
      </div>
      <div className="flex-1">
        <h4 className="font-headline font-bold text-slate-900">{title}</h4>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
      <ChevronRight className="text-slate-300 group-hover:text-primary transition-colors" size={20} />
    </div>
  );
}

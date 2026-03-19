import { motion } from 'motion/react';
import { AlertTriangle, CheckCircle2, Zap, Sparkles, BrainCircuit, Headphones, ShieldCheck, Flag } from 'lucide-react';
import { Card, ReassuranceBanner } from '../components/UI';
import { TopBar, BottomNav } from '../components/Navigation';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SafetyIntervention from './SafetyIntervention';

export default function TeenDashboard() {
  const [isInterventionOpen, setIsInterventionOpen] = useState(false);

  return (
    <div className="min-h-screen pb-32">
      <TopBar showSwitch={true} />
      
      <main className="px-6 pt-4 max-w-2xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ReassuranceBanner />
        </motion.div>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-headline font-bold text-lg text-primary">Recent Alerts</h3>
            <span className="text-xs font-bold uppercase tracking-widest text-outline cursor-pointer hover:text-primary transition-colors">View All</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* Warning Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
                      <AlertTriangle size={24} />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-slate-900">Suspicious Message</h4>
                      <p className="text-xs text-outline">Instagram • 2 mins ago</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold rounded-full uppercase tracking-tighter">Caution</span>
                </div>
                <div className="bg-surface-container-low rounded-2xl p-4 italic text-slate-600 text-sm border-l-4 border-tertiary/30">
                  "Hey, send me those pics you took yesterday or I'm telling everyone..."
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setIsInterventionOpen(true)}
                    className="flex-1 py-3 px-4 bg-primary text-on-primary rounded-xl font-headline font-bold text-sm hover:opacity-90 transition-opacity active:scale-95"
                  >
                    Block User
                  </button>
                  <Link to="/report" className="flex-1 py-3 px-4 bg-surface-container-high text-primary rounded-xl font-headline font-bold text-sm hover:bg-surface-container-highest transition-colors active:scale-95 text-center">
                    Report
                  </Link>
                </div>
              </Card>
            </motion.div>

            {/* Safe Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="opacity-80">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-secondary-fixed flex items-center justify-center text-secondary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-slate-900">Friend Request</h4>
                      <p className="text-xs text-outline">Snapchat • 1 hour ago</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-container text-[10px] font-bold rounded-full uppercase tracking-tighter">Safe</span>
                </div>
                <p className="text-slate-600 text-sm mb-4">You have 12 mutual friends with <span className="font-bold">Alex Rivera</span>. This connection looks verified.</p>
                <button className="w-full py-3 bg-surface-container-high text-primary rounded-xl font-headline font-bold text-sm hover:bg-surface-container-highest transition-colors">
                  View Profile
                </button>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="font-headline font-bold text-lg text-primary">Pulse Check</h3>
          <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-primary-container/10">
            <div className="relative">
              <div className="absolute -left-[30px] top-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center ring-4 ring-surface">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-2xl rounded-tl-none">
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={14} className="text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Real-time Check</span>
                </div>
                <p className="text-sm font-medium">Scanned 42 incoming comments on your latest post.</p>
                <p className="text-xs text-outline mt-1">Status: No bullying detected.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[30px] top-0 w-5 h-5 rounded-full bg-secondary flex items-center justify-center ring-4 ring-surface">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-2xl rounded-tl-none">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={14} className="text-secondary" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">Smart Learning</span>
                </div>
                <p className="text-sm font-medium">Completed: "How to handle unwanted DMs" module.</p>
                <div className="mt-3 flex gap-2">
                  <div className="h-1 flex-1 bg-secondary rounded-full"></div>
                  <div className="h-1 flex-1 bg-secondary rounded-full"></div>
                  <div className="h-1 flex-1 bg-surface-container-highest rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <Link to="/learning" className="block">
            <Card className="bg-primary text-on-primary p-5 rounded-[2.5rem] space-y-3 flex flex-col justify-between aspect-square border-none w-full h-full">
              <BrainCircuit size={32} />
              <div>
                <h4 className="font-headline font-bold leading-tight">Safety Quiz</h4>
                <p className="text-xs opacity-80">Test your digital IQ</p>
              </div>
            </Card>
          </Link>
          <Link to="/emergency" className="block">
            <Card className="bg-secondary-container text-on-secondary-container p-5 rounded-[2.5rem] space-y-3 flex flex-col justify-between aspect-square border-none w-full h-full">
              <Headphones size={32} />
              <div>
                <h4 className="font-headline font-bold leading-tight">Help Line</h4>
                <p className="text-xs opacity-80">Talk to a human</p>
              </div>
            </Card>
          </Link>
        </section>
      </main>

      <div className="fixed bottom-32 right-6 z-40 flex flex-col gap-4">
        <Link to="/report" className="w-14 h-14 bg-surface-container-highest text-primary rounded-2xl shadow-xl flex items-center justify-center active:scale-95 transition-transform">
          <Flag size={24} />
        </Link>
        <button 
          onClick={() => setIsInterventionOpen(true)}
          className="w-14 h-14 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-2xl shadow-xl flex items-center justify-center active:scale-95 transition-transform"
        >
          <ShieldCheck size={28} />
        </button>
      </div>

      <SafetyIntervention isOpen={isInterventionOpen} onClose={() => setIsInterventionOpen(false)} />
      <BottomNav />
    </div>
  );
}

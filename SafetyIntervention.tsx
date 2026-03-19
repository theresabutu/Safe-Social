import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, ShieldCheck, X, ArrowRight, Info, MapPin, Home } from 'lucide-react';
import { useState } from 'react';

export default function SafetyIntervention({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [step, setStep] = useState(1);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-primary/40 backdrop-blur-xl"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[3rem] shadow-2xl overflow-hidden editorial-shadow"
          >
            <div className="absolute top-6 right-6 z-10">
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-slate-400 hover:text-primary transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-10">
              {step === 1 ? (
                <div className="space-y-8">
                  <div className="w-20 h-20 rounded-[2rem] bg-tertiary-fixed text-tertiary flex items-center justify-center">
                    <AlertTriangle size={40} />
                  </div>
                  
                  <div>
                    <h2 className="font-headline font-extrabold text-3xl text-slate-900 leading-tight">Wait, Leo. <br/> Is this safe to share?</h2>
                    <p className="text-slate-500 mt-4 leading-relaxed">You're about to share your <span className="text-primary font-bold">home address</span> in a public comment. This information can be used by strangers to find where you live.</p>
                  </div>

                  <div className="bg-surface-container-low rounded-3xl p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shrink-0 shadow-sm">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Detected Info</p>
                      <p className="text-sm font-bold text-slate-900">123 Maple Street, Springfield...</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-4">
                    <button 
                      onClick={onClose}
                      className="btn-primary py-5 text-lg"
                    >
                      Don't Share
                    </button>
                    <button 
                      onClick={() => setStep(2)}
                      className="btn-secondary py-5 text-lg"
                    >
                      Why is this risky?
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="w-20 h-20 rounded-[2rem] bg-secondary-container text-secondary flex items-center justify-center">
                    <ShieldCheck size={40} />
                  </div>

                  <div>
                    <h2 className="font-headline font-extrabold text-3xl text-slate-900 leading-tight">Digital Privacy <br/> 101</h2>
                    <p className="text-slate-500 mt-4 leading-relaxed">Sharing personal data like your address, school, or phone number creates a "Digital Breadcrumb" that anyone can follow.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 hover:bg-surface-container-low rounded-2xl transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Home size={16} />
                      </div>
                      <p className="text-sm font-medium text-slate-700">Strangers could visit your home uninvited.</p>
                    </div>
                    <div className="flex items-center gap-4 p-4 hover:bg-surface-container-low rounded-2xl transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Info size={16} />
                      </div>
                      <p className="text-sm font-medium text-slate-700">Identity thieves can use this to impersonate you.</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      onClick={() => setStep(1)}
                      className="w-full py-5 bg-primary text-on-primary rounded-2xl font-headline font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                    >
                      <ArrowRight size={20} />
                      I understand, take me back
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

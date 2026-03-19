import { motion } from 'motion/react';
import { ShieldAlert, ArrowLeft, Mail, FileText, CloudUpload, Send, MessageCircle } from 'lucide-react';
import { TopBar, BottomNav } from '../components/Navigation';

export default function ReportIncident() {
  return (
    <div className="min-h-screen pb-32 bg-surface">
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md">
        <div className="flex items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <button className="mr-4 text-primary p-2 rounded-full hover:bg-surface-container-high transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h1 className="font-headline font-bold text-2xl tracking-tight text-slate-900">Report an Incident</h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 pt-8 space-y-10">
        <section>
          <div className="bg-secondary-container rounded-3xl p-8 flex items-start gap-5 editorial-shadow">
            <div className="bg-white/20 p-3 rounded-2xl text-on-secondary-container">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h2 className="font-headline font-bold text-xl text-on-secondary-container mb-1">We're here to help</h2>
              <p className="text-on-secondary-container/80 text-sm leading-relaxed">Your safety is our priority. Please provide as much detail as possible so our safety team can take appropriate action. All reports are handled discreetly.</p>
            </div>
          </div>
        </section>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <label className="block font-headline font-bold text-slate-900 ml-1" htmlFor="username">Reported User's Username</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
              <input 
                id="username"
                type="text" 
                placeholder="e.g. @username123"
                className="w-full pl-12 pr-4 py-5 bg-surface-container-high rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 placeholder:text-outline/60"
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="block font-headline font-bold text-slate-900 ml-1" htmlFor="description">Description of the Incident</label>
            <textarea 
              id="description"
              rows={5}
              placeholder="Tell us exactly what happened..."
              className="w-full p-5 bg-surface-container-high rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 placeholder:text-outline/60 resize-none"
            />
            <p className="text-[11px] text-outline ml-1 font-medium italic">Include dates, times, and specific messages if possible.</p>
          </div>

          <div className="space-y-4">
            <label className="block font-headline font-bold text-slate-900 ml-1">Upload Screenshots/Evidence</label>
            <div className="relative group cursor-pointer">
              <div className="w-full py-12 px-6 bg-surface-container-low rounded-3xl flex flex-col items-center justify-center gap-4 border-2 border-dashed border-primary/10 group-hover:bg-surface-container-high transition-all">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CloudUpload size={32} />
                </div>
                <div className="text-center">
                  <p className="font-headline font-bold text-primary text-lg">Tap to select or drag files here</p>
                  <p className="text-xs text-outline font-medium mt-1">PNG, JPG or MP4 (Max 10MB)</p>
                </div>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" multiple />
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button className="btn-primary w-full py-5 text-lg shadow-xl shadow-primary/20">
              <Send size={20} />
              Submit Report
            </button>
            <p className="text-center mt-6 text-xs text-outline leading-relaxed max-w-xs mx-auto">
              By submitting this report, you confirm that the information provided is accurate to the best of your knowledge.
            </p>
          </div>
        </form>

        <div className="mt-16 relative">
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary/10 rounded-full blur-2xl"></div>
          <div className="bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-sm relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-surface-container-high shrink-0">
                <img src="https://picsum.photos/seed/support/100/100" alt="Support" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-headline font-bold text-slate-900 text-xl">Need immediate help?</h3>
                <p className="text-sm text-slate-500 mt-1">Our rapid response team is available 24/7 for urgent safety concerns.</p>
              </div>
              <button className="px-8 py-4 bg-surface-container-high text-primary font-bold rounded-2xl whitespace-nowrap hover:bg-surface-container-highest transition-colors flex items-center gap-2">
                <MessageCircle size={20} />
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

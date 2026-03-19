import { motion } from 'motion/react';
import { BookOpen, Search, Play, Clock, CheckCircle2, History, Lightbulb, ArrowRight, Award, Shield, Zap, ChevronRight } from 'lucide-react';
import { Card } from '../components/UI';
import { TopBar, BottomNav } from '../components/Navigation';

export default function LearningCenter() {
  return (
    <div className="min-h-screen pb-32 bg-surface">
      <TopBar />
      
      <main className="max-w-7xl mx-auto px-6 pt-8 space-y-12">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-slate-900 tracking-tight mb-4">
                Master your <span className="text-primary bg-clip-text">Digital Safety</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-xl">Knowledge is your strongest shield. Level up your skills and become a guardian of your online world.</p>
            </div>
            <div className="md:col-span-5">
              <Card className="p-6 rounded-3xl flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="font-headline font-bold text-slate-900">Overall Progress</span>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold">Lvl 12</span>
                </div>
                <div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-primary-container h-full w-[65%] rounded-full"></div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex -space-x-2">
                    {[Award, Shield, Zap].map((Icon, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary border-2 border-white">
                        <Icon size={14} />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-slate-500">3 Badges earned this week</span>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 relative group overflow-hidden rounded-[2.5rem] bg-primary text-on-primary p-10 flex flex-col justify-between min-h-[320px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <span className="font-bold uppercase tracking-widest text-xs text-on-primary-container opacity-80">Flash Challenge</span>
              <h3 className="font-headline text-3xl font-bold mt-2">Interactive Quiz: Privacy Ninja</h3>
              <p className="mt-4 text-on-primary-container max-w-sm text-lg">Put your skills to the test. Identify the phishing scams in this 2-minute scenario challenge.</p>
            </div>
            <div className="relative z-10 flex gap-6 mt-8">
              <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                Start Quiz
                <Play size={20} fill="currentColor" />
              </button>
              <div className="flex items-center text-sm font-medium text-on-primary-container">
                <Clock size={18} className="mr-2" /> 2 Mins
              </div>
            </div>
          </div>

          <Card variant="low" className="p-10 rounded-[2.5rem] flex flex-col justify-between border-2 border-transparent hover:border-secondary-container transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center mb-6">
                <Lightbulb size={24} />
              </div>
              <h4 className="font-headline font-bold text-xl mb-3">Daily Tip</h4>
              <p className="text-slate-600 leading-relaxed">Turn off geotagging on photos before posting to social media to hide your precise home or school location.</p>
            </div>
            <button className="text-secondary font-bold text-sm flex items-center gap-2 mt-6 hover:translate-x-1 transition-transform">
              Learn more <ArrowRight size={18} />
            </button>
          </Card>
        </section>

        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="font-headline font-extrabold text-2xl">Learning Paths</h3>
              <p className="text-slate-500">Structured lessons for every digital citizen.</p>
            </div>
            <button className="text-primary font-bold text-sm bg-surface-container-high px-6 py-2 rounded-full hover:bg-surface-container-highest transition-colors">View All</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <LearningCard 
              title="How to spot cyberbullying" 
              desc="Recognize the signs and learn effective ways to de-escalate and report harmful behavior."
              xp="15 XP"
              lessons="8 Lessons"
              img="https://picsum.photos/seed/cyber/400/250"
            />
            <LearningCard 
              title="Protect your privacy" 
              desc="Audit your social settings and learn the secrets to keeping your data for your eyes only."
              xp="20 XP"
              completed
              img="https://picsum.photos/seed/privacy/400/250"
            />
            <LearningCard 
              title="Digital footprint basics" 
              desc="Understand how your online activity builds a permanent record and how to manage it."
              xp="10 XP"
              progress={40}
              img="https://picsum.photos/seed/footprint/400/250"
            />
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}

function LearningCard({ title, desc, xp, lessons, progress, completed, img }: any) {
  return (
    <Card className="p-4 rounded-3xl group cursor-pointer hover:translate-y-[-4px]">
      <div className="relative rounded-2xl overflow-hidden mb-5 aspect-video bg-surface-container-highest">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold text-white uppercase tracking-tighter">
          {xp}
        </div>
      </div>
      <h4 className="font-headline font-bold text-lg leading-tight group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-slate-500 text-sm mt-2 line-clamp-2">{desc}</p>
      
      <div className="mt-6 flex items-center justify-between">
        {completed ? (
          <div className="flex items-center text-xs font-bold text-secondary">
            <CheckCircle2 size={16} className="mr-1" /> 100% Complete
          </div>
        ) : progress ? (
          <div className="flex items-center gap-3 flex-1">
            <div className="flex items-center text-xs font-medium text-slate-500">
              <History size={14} className="mr-1" /> In Progress
            </div>
            <div className="h-1.5 flex-1 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="bg-primary h-full" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        ) : (
          <div className="flex items-center text-xs font-medium text-slate-500">
            <BookOpen size={14} className="mr-1" /> {lessons}
          </div>
        )}
        {!completed && !progress && (
          <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
            <ChevronRight size={16} />
          </div>
        )}
      </div>
    </Card>
  );
}

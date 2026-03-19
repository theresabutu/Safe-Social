import { motion } from 'motion/react';
import { Shield, CheckCircle2, ArrowRight, Users, Zap, Heart, Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-primary font-extrabold flex items-center gap-2 font-headline text-2xl tracking-tight">
            <Shield className="text-primary fill-primary/10" size={28} />
            SafeSocial
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Safety Academy', 'Pricing', 'About'].map(item => (
              <a key={item} href="#" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link to="/teen" className="text-sm font-bold text-primary hover:opacity-80 transition-opacity">Login</Link>
            <Link to="/parent" className="btn-primary py-2 px-6 text-sm rounded-xl shadow-md">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} />
              AI-Powered Protection
            </div>
            <h1 className="font-headline font-extrabold text-6xl md:text-7xl text-slate-900 leading-[1.1] tracking-tight mb-8">
              Your Teen's <span className="text-primary">Digital Guardian</span>
            </h1>
            <p className="text-slate-500 text-xl leading-relaxed max-w-xl mb-10">
              SafeSocial provides a high-end digital sanctuary for teen safety and parental peace of mind. Real-time interventions, educational paths, and AI monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/parent" className="btn-primary text-lg px-10 py-5 rounded-2xl shadow-xl shadow-primary/20">
                Start Free Trial
                <ArrowRight size={20} />
              </Link>
              <button className="btn-secondary text-lg px-10 py-5 rounded-2xl">
                <Play size={20} fill="currentColor" />
                Watch Demo
              </button>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-tertiary">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-500 font-medium">Trusted by 50,000+ parents worldwide</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            
            <div className="relative bg-white/40 backdrop-blur-2xl rounded-[3rem] p-4 border border-white/20 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/dashboard/1200/800" 
                alt="SafeSocial Dashboard" 
                className="rounded-[2.5rem] shadow-lg w-full h-auto"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating UI elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-primary/5"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary-container text-secondary flex items-center justify-center">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Safety Status</p>
                  <p className="text-sm font-bold text-slate-900">All Systems Secure</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -left-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-primary/5"
              >
                <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center">
                  <Heart size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Alert</p>
                  <p className="text-sm font-bold text-slate-900">Suspicious DM Blocked</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-slate-900 mb-6">Built for the Modern Family</h2>
            <p className="text-slate-500 text-lg">We combine advanced AI with human-centric design to create a safety experience that teens respect and parents trust.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Shield} 
              title="Real-time Interventions" 
              desc="Our AI detects harmful patterns and intervenes before they escalate, guiding teens toward safer choices."
              color="bg-primary/10 text-primary"
            />
            <FeatureCard 
              icon={Users} 
              title="Parental Insights" 
              desc="Get curated summaries of your child's digital footprint without invading their privacy or trust."
              color="bg-secondary/10 text-secondary"
            />
            <FeatureCard 
              icon={Zap} 
              title="Safety Academy" 
              desc="Gamified learning paths that teach teens how to navigate social media, privacy, and digital ethics."
              color="bg-tertiary-fixed text-on-tertiary-fixed"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="font-headline font-extrabold text-4xl md:text-6xl text-on-primary mb-8 leading-tight">Ready to secure their <br/> digital future?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/parent" className="bg-white text-primary font-headline font-bold text-xl px-12 py-6 rounded-2xl hover:scale-105 transition-all shadow-2xl">
                Start 14-Day Free Trial
              </Link>
              <button className="bg-primary-container text-on-primary font-headline font-bold text-xl px-12 py-6 rounded-2xl hover:bg-primary-container/80 transition-all">
                Talk to Sales
              </button>
            </div>
            <p className="text-on-primary-container mt-10 font-medium opacity-80">No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-primary/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-primary font-extrabold flex items-center gap-2 font-headline text-2xl tracking-tight mb-6">
              <Shield className="text-primary fill-primary/10" size={28} />
              SafeSocial
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Creating a safer digital world for the next generation. Our mission is to empower families through technology and education.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Safety Academy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-slate-400">
          <p>© 2026 SafeSocial Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, color }: any) {
  return (
    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group border border-primary/5">
      <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform", color)}>
        <Icon size={32} />
      </div>
      <h3 className="font-headline font-bold text-2xl text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

import { motion } from 'motion/react';
import { Shield, UserPlus, FileEdit, Phone, CheckCircle2, MoreVertical, ArrowLeft, User } from 'lucide-react';
import { Card } from '../components/UI';
import { BottomNav } from '../components/Navigation';

export default function EmergencyContacts() {
  const contacts = [
    { name: 'Sarah Miller', role: 'Mother', img: 'https://picsum.photos/seed/sarah/100/100', verified: true },
    { name: 'David Chen', role: 'Best Friend', img: 'https://picsum.photos/seed/david/100/100', verified: true },
    { name: 'Robert Wilson', role: 'Brother', verified: false },
  ];

  return (
    <div className="min-h-screen pb-32 bg-surface">
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button className="text-primary p-2 rounded-full hover:bg-surface-container-high transition-colors">
              <ArrowLeft size={24} />
            </button>
            <h1 className="font-headline font-bold text-2xl tracking-tight text-slate-900">Emergency Contacts</h1>
          </div>
          <button className="text-primary p-2 rounded-full hover:bg-surface-container-high transition-colors">
            <MoreVertical size={24} />
          </button>
        </div>
      </header>

      <main className="px-6 mt-4 max-w-2xl mx-auto space-y-10">
        <section className="p-8 rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-container text-white relative overflow-hidden editorial-shadow border-none">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold font-headline mb-2 leading-tight">Your Safety Net</h2>
            <p className="text-on-primary-container text-sm leading-relaxed opacity-90 max-w-[80%]">These contacts will be notified immediately if you trigger an emergency alert.</p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </section>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex flex-col items-center justify-center p-8 bg-surface-container-low rounded-[2rem] hover:bg-surface-container-high transition-all active:scale-95 group">
            <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center mb-3 group-hover:scale-110 transition-transform text-on-secondary-container">
              <UserPlus size={28} />
            </div>
            <span className="text-xs font-bold font-headline uppercase tracking-wider text-slate-900">Import Phone</span>
          </button>
          <button className="flex flex-col items-center justify-center p-8 bg-surface-container-low rounded-[2rem] hover:bg-surface-container-high transition-all active:scale-95 group">
            <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center mb-3 group-hover:scale-110 transition-transform text-primary">
              <FileEdit size={28} />
            </div>
            <span className="text-xs font-bold font-headline uppercase tracking-wider text-slate-900">Manual Add</span>
          </button>
        </div>

        <div className="space-y-6">
          <h3 className="text-[10px] font-bold font-headline uppercase tracking-[0.3em] text-outline ml-2">Designated Guardians</h3>
          
          {contacts.map((contact, i) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-5 rounded-[2rem] flex items-center justify-between group hover:shadow-md border-none">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    {contact.img ? (
                      <img src={contact.img} alt={contact.name} className="w-14 h-14 rounded-2xl object-cover" referrerPolicy="no-referrer" />
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary">
                        <User size={28} />
                      </div>
                    )}
                    {contact.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-secondary-container rounded-full border-2 border-white flex items-center justify-center">
                        <CheckCircle2 size={12} className="text-on-secondary-container" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold font-headline text-slate-900">{contact.name}</h4>
                    <p className="text-sm text-outline font-medium">{contact.role}</p>
                  </div>
                </div>
                <button className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white flex items-center justify-center shadow-lg active:scale-90 transition-transform">
                  <Phone size={20} fill="currentColor" />
                </button>
              </Card>
            </motion.div>
          ))}

          <div className="p-6 bg-secondary-container rounded-[2rem] flex items-start gap-4 editorial-shadow">
            <Shield className="text-on-secondary-container mt-1 shrink-0" size={24} />
            <div>
              <p className="text-sm font-bold text-on-secondary-container font-headline">Verified Safety Network</p>
              <p className="text-xs text-on-secondary-container/80 leading-relaxed mt-1">Your contacts have been verified and will receive real-time location data during an emergency.</p>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

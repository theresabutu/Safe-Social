import { motion } from 'motion/react';
import { Shield, Send, PlusCircle, Bot, User } from 'lucide-react';
import { TopBar, BottomNav } from '../components/Navigation';

export default function Chatbot() {
  const messages = [
    { role: 'bot', text: "Hi there! I'm your SafeSocial assistant. I'm here to help you navigate your digital life safely. How are you feeling about your online interactions today?", time: "10:02 AM" },
    { role: 'user', text: "I'm a bit worried about some comments I received on my latest post. They seem a bit aggressive.", time: "10:03 AM" },
    { role: 'bot', text: "I'm sorry to hear that. It's important to address digital aggression early. Would you like me to help you report these comments, or would you prefer some tips on how to manage your privacy settings to prevent this?", time: "10:03 AM" },
  ];

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <TopBar title="SafeBot" />
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 pt-6 pb-40 overflow-y-auto">
        <div className="mb-8 bg-secondary-container rounded-2xl p-4 flex items-center gap-3 editorial-shadow">
          <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
          <p className="text-on-secondary-container font-medium text-sm">Our AI is actively monitoring this conversation for your safety.</p>
        </div>

        <div className="space-y-6">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "flex flex-col max-w-[85%] md:max-w-[70%]",
                msg.role === 'user' ? "items-end self-end" : "items-start"
              )}
            >
              <div className={cn(
                "flex items-center gap-2 mb-2",
                msg.role === 'user' ? "mr-1" : "ml-1"
              )}>
                {msg.role === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <Bot size={16} />
                  </div>
                )}
                <span className="text-xs font-bold text-slate-500 font-headline">
                  {msg.role === 'bot' ? 'SafeBot' : 'You'}
                </span>
                <span className="text-[10px] text-outline">{msg.time}</span>
              </div>
              <div className={cn(
                "p-4 text-sm leading-relaxed shadow-sm",
                msg.role === 'user' 
                  ? "bg-primary text-on-primary rounded-tl-2xl rounded-bl-2xl rounded-br-2xl" 
                  : "bg-surface-container-low text-slate-900 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
              )}>
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          {['Report bullying', 'Stay safe tips', 'Talk to a counselor'].map((tip) => (
            <button key={tip} className="bg-surface-container-high hover:bg-surface-container-highest text-primary font-bold py-2 px-5 rounded-full text-sm transition-all active:scale-95">
              {tip}
            </button>
          ))}
        </div>
      </main>

      <div className="fixed bottom-28 left-0 w-full px-4 md:px-0 z-40">
        <div className="max-w-4xl mx-auto bg-surface-container-lowest/80 backdrop-blur-xl rounded-3xl p-3 shadow-2xl border border-primary/5 flex items-center gap-3">
          <button className="p-2 text-outline hover:text-primary transition-colors">
            <PlusCircle size={24} />
          </button>
          <input 
            type="text" 
            placeholder="Message SafeBot..." 
            className="flex-1 bg-surface-container-high border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline"
          />
          <button className="bg-primary text-on-primary w-12 h-12 rounded-2xl flex items-center justify-center hover:brightness-110 active:scale-95 transition-all">
            <Send size={20} />
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

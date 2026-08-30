import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Get in <span className="text-red-600">Touch</span></h2>
            <p className="text-gray-400 mb-12">Have questions about admissions, research, or collaborations? Reach out to us.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#151515] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Location</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Nayunipalli village, ChallaReddy Palem Post,<br />
                    Vetapalem Mandal, Chirala, Bapatla District,<br />
                    Andhra Pradesh – 523187, INDIA
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#151515] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Contact</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Phone: 08594-247500, 246100, 246102, 202401, 202402<br />
                    Fax: 08594-247300
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-[#121212] border border-white/5"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center h-full space-y-4">
                <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-display font-bold">Thank You!</h3>
                <p className="text-gray-400">Your message has been sent successfully. We will get back to you soon.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2 border border-white/10 hover:border-white/30 rounded-full text-sm transition-colors text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form action="https://formspree.io/f/xkokbejk" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">First Name</label>
                    <input type="text" name="first_name" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Last Name</label>
                    <input type="text" name="last_name" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                  <input type="email" name="email" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="your.email@example.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</label>
                  <textarea rows={4} name="message" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors resize-none" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                  {isSubmitting ? 'Sending...' : (
                    <>Send Message <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
        
        <div className="mt-16 rounded-[2.5rem] overflow-hidden border border-white/5 h-[400px]">
          <iframe 
            src="https://maps.google.com/maps?q=St.%20Ann's%20College%20of%20Engineering%20%26%20Technology,%20Chirala,%20Andhra%20Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            className="filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

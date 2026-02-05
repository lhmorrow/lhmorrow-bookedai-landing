
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Calendar, 
  BarChart3, 
  CheckCircle2, 
  Plus, 
  ChevronDown, 
  ChevronUp, 
  LayoutDashboard, 
  Clock, 
  Users, 
  DollarSign,
  ArrowRight,
  ShieldCheck,
  Zap,
  Mail,
  X
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

// --- Constants ---
const STRIPE_LINK = "https://buy.stripe.com/9B69AT5WR9cJb6B6lp7ok00";

// --- Types ---
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface FeatureItemProps {
  children: React.ReactNode;
  active?: boolean;
}

interface AccordionProps {
  question: string;
  answer: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

// --- Components ---

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8 overflow-y-auto text-slate-600 text-sm leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a href={href} className="text-sm font-medium text-slate-600 hover:text-black transition-colors">
    {children}
  </a>
);

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="bg-black text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold">B</div>
        <span className="text-xl font-bold tracking-tight">BookedAI</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <NavLink href="#how-it-works">How it works</NavLink>
        <NavLink href="#dashboard">The Dashboard</NavLink>
        <NavLink href="#pricing">Pricing</NavLink>
      </div>

      <div className="flex items-center gap-3">
        <a href="#onboarding" className="hidden sm:flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-sm font-semibold hover:bg-slate-50 transition-colors">
          <Phone className="w-4 h-4" />
          Book a call
        </a>
        <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors">
          Buy Now
        </a>
      </div>
    </div>
  </nav>
);

const Integrations: React.FC = () => (
  <section className="py-12 border-b border-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-center text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-8">
        Seamlessly integrates with your stack
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12">
        <img 
          src="https://www.gstatic.com/images/branding/product/2x/calendar_2020q4_48dp.png" 
          className="h-8 transition-transform hover:scale-110" 
          alt="Google Calendar" 
        />
        <img 
          src="https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png" 
          className="h-8 transition-transform hover:scale-110" 
          alt="Google Sheets" 
        />
        <img 
          src="https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_48dp.png" 
          className="h-6 transition-transform hover:scale-110" 
          alt="Gmail" 
        />
        <div className="flex items-center gap-2 text-slate-600 font-medium transition-transform hover:scale-105">
          <Phone className="w-6 h-6 text-slate-400" />
          <span className="text-slate-500 font-semibold">Your Phone Number</span>
        </div>
      </div>
    </div>
  </section>
);

const DashboardSection: React.FC = () => {
  const barData = [
    { name: 'Mon', value: 12 },
    { name: 'Tue', value: 18 },
    { name: 'Wed', value: 14 },
    { name: 'Thu', value: 22 },
    { name: 'Fri', value: 30 },
    { name: 'Sat', value: 8 },
    { name: 'Sun', value: 5 },
  ];

  const pieData = [
    { name: 'Confirmed', value: 5, color: '#3b82f6' },
    { name: 'Pending', value: 4, color: '#fbbf24' },
    { name: 'Cancelled', value: 4, color: '#ef4444' },
  ];

  return (
    <section id="dashboard" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">A clean interface for a busy trade.</h2>
          <p className="text-slate-500">Everything you need to know about your jobs, organized and automated.</p>
          <p className="text-xs text-slate-400 mt-4 italic">For illustrative purposes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'TOTAL JOBS', value: '13', sub: '+2 today', icon: <LayoutDashboard className="w-5 h-5 text-blue-600" /> },
            { label: 'PENDING', value: '4', sub: 'Waiting on customer', icon: <Clock className="w-5 h-5 text-amber-500" /> },
            { label: 'CONFIRMED', value: '5', sub: 'Ready for site', icon: <CheckCircle2 className="w-5 h-5 text-green-500" /> },
            { label: 'REVENUE SAVED WITH AI', value: '$1,250', sub: '+15% vs last week', icon: <DollarSign className="w-5 h-5 text-blue-600" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-50 rounded-lg">{stat.icon}</div>
                <span className="text-xs font-bold text-slate-400 tracking-wider">{stat.label}</span>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-80">
            <h3 className="text-sm font-bold text-slate-400 mb-6 flex items-center gap-2">
              <BarChart3 className="w-4 h-4" /> Daily Bookings Trend
            </h3>
            <div className="h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                  <YAxis hide />
                  <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }} />
                  <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
             <h3 className="text-sm font-bold text-slate-400 mb-6 self-start">Job Status Distribution</h3>
             <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
             </div>
             <div className="w-full mt-4 flex justify-between text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                {pieData.map((d) => (
                  <div key={d.name} className="flex flex-col items-center">
                    <span style={{ color: d.color }}>{d.name}</span>
                    <span className="text-slate-900 text-sm mt-1">{d.value}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Sync Card */}
        <div className="bg-blue-600 rounded-2xl p-6 text-white mb-8 max-w-sm ml-auto relative overflow-hidden shadow-lg">
           <div className="relative z-10">
             <div className="text-[10px] font-bold tracking-[0.2em] mb-4 opacity-80 uppercase">Google Calendar Sync</div>
             <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Leaky Faucet - Bill Jones</h4>
                  <p className="text-sm opacity-80">2:00 PM - 3:30 PM</p>
                  <p className="text-[10px] mt-1 opacity-70 flex items-center gap-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span> Richardson, TX
                  </p>
                </div>
             </div>
           </div>
           <div className="absolute top-0 right-0 p-4 opacity-10">
             <Calendar className="w-24 h-24 -rotate-12" />
           </div>
        </div>

        {/* Job Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-50 bg-slate-50/50">
              <tr className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                <th className="px-6 py-4">Job ID</th>
                <th className="px-6 py-4">Created At</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Intent</th>
                <th className="px-6 py-4">Service Type</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { id: '308-4821', date: '2024-05-15 10:30', cust: 'Bill Jones', phone: '(214) 555-0123', intent: 'Plumbing Repair', type: 'Leaky Faucet', status: 'Confirmed', color: 'green' },
                { id: '308-4822', date: '2024-05-15 11:15', cust: 'Sarah Smith', phone: '(469) 555-8899', intent: 'HVAC Maintenance', type: 'AC Tune-up', status: 'Pending', color: 'amber' },
                { id: '308-4823', date: '2024-05-15 14:00', cust: 'Mike Tyson', phone: '(972) 555-2233', intent: 'Emergency Repair', type: 'Burst Pipe', status: 'Cancelled', color: 'rose' },
                { id: '308-4824', date: '2024-05-16 09:00', cust: 'Linda Garcia', phone: '(214) 555-4455', intent: 'Electrical Panel', type: 'Breaker Trip', status: 'Confirmed', color: 'green' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-400">{row.id}</td>
                  <td className="px-6 py-4 text-slate-400">{row.date}</td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900">{row.cust}</div>
                    <div className="text-[10px] text-slate-400">{row.phone}</div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-blue-600">{row.intent}</td>
                  <td className="px-6 py-4">{row.type}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                      ${row.color === 'green' ? 'bg-green-100 text-green-700' : ''}
                      ${row.color === 'amber' ? 'bg-amber-100 text-amber-700' : ''}
                      ${row.color === 'rose' ? 'bg-rose-100 text-rose-700' : ''}
                    `}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const AutomationSection: React.FC = () => (
  <section className="py-24 bg-white grid-bg">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase">Automation</span>
        <p className="mt-4 text-slate-500 max-w-xl mx-auto leading-relaxed">
          BookedAI sends beautiful, clear confirmations to your customers and instant booking requests to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Customer View */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            <Users className="w-3 h-3" /> Customer View
          </div>
          <div className="bg-[#1a1a1a] text-white rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
               <div className="bg-green-500 p-2 rounded-lg">
                 <CheckCircle2 className="w-6 h-6" />
               </div>
               <h4 className="text-lg font-bold leading-tight">Confirmed: Leaky faucet on Wed, Feb 4, 2026 at 9:00 AM</h4>
            </div>
            <div className="space-y-6 text-slate-300">
               <p className="font-medium text-white">Hi Bill Jones,</p>
               <p>You're all set — your appointment is confirmed.</p>
               <div className="space-y-2">
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Appointment Details</p>
                 <ul className="space-y-1 text-sm">
                   <li className="flex gap-2"><span>-</span> <span className="text-white">Service:</span> Leaky faucet</li>
                   <li className="flex gap-2"><span>-</span> <span className="text-white">Date/Time:</span> Wed, Feb 4, 2026 at 9:00 AM</li>
                   <li className="flex gap-2"><span>-</span> <span className="text-white">Address:</span> 1234 Harper Landing, Fairview, Texas</li>
                 </ul>
               </div>
               <div className="pt-4 border-t border-white/10">
                 <p className="text-xs mb-4">Need to reschedule or cancel? Use the links below:</p>
                 <div className="flex gap-6 text-sm">
                    <a href="#" className="text-blue-400 hover:underline flex items-center gap-1">Reschedule Appointment <ArrowRight className="w-3 h-3" /></a>
                    <a href="#" className="text-blue-400 hover:underline flex items-center gap-1">Cancel Appointment <ArrowRight className="w-3 h-3" /></a>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Business View */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            <ShieldCheck className="w-3 h-3" /> Business View (You)
          </div>
          <div className="bg-white border-2 border-blue-600 rounded-[2rem] p-0 shadow-2xl overflow-hidden">
            <div className="bg-blue-600 p-8 text-white">
               <h4 className="text-xl font-bold">New booking request: Bill Jones (Leaky faucet)</h4>
            </div>
            <div className="p-8 space-y-6">
               <div className="inline-block px-3 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                 Pending Confirmation
               </div>
               <div className="grid grid-cols-2 gap-y-4 text-xs">
                  <div>
                    <p className="text-slate-400 font-bold mb-1 uppercase tracking-tighter">Job ID</p>
                    <p className="font-mono">JOB-F1EE5C8A</p>
                  </div>
                  <div>
                    <p className="text-slate-400 font-bold mb-1 uppercase tracking-tighter">Customer</p>
                    <p className="font-bold">Bill Jones</p>
                  </div>
                  <div>
                    <p className="text-slate-400 font-bold mb-1 uppercase tracking-tighter">Phone</p>
                    <p className="font-bold">432-123-1234</p>
                  </div>
                  <div>
                    <p className="text-slate-400 font-bold mb-1 uppercase tracking-tighter">Email</p>
                    <p className="font-bold">email@email.com</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-slate-400 font-bold mb-1 uppercase tracking-tighter">Address</p>
                    <p className="font-bold">1234 Harper Landing, Fairview, Texas</p>
                  </div>
               </div>
               <div className="pt-6 border-t border-slate-100">
                  <p className="text-sm font-bold mb-4">WOULD YOU LIKE TO CONFIRM?</p>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                     <div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase">Slot 1 (Preferred)</p>
                       <p className="font-bold text-sm">Wed, Feb 4 at 9:00 AM</p>
                     </div>
                     <button className="bg-black text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-slate-800 transition-all">
                       Confirm Slot 1
                     </button>
                  </div>
                  <div className="mt-2 p-4 border border-dashed border-slate-200 rounded-xl">
                     <p className="text-[10px] font-bold text-slate-400 uppercase">Slot 2: (none)</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TallyFormEmbed: React.FC = () => {
  useEffect(() => {
    // Load Tally embed script
    const scriptId = 'tally-js';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://tally.so/widgets/embed.js";
      script.onload = () => {
        // @ts-ignore
        if (typeof Tally !== 'undefined') Tally.loadEmbeds();
      };
      document.body.appendChild(script);
    } else {
      // @ts-ignore
      if (typeof Tally !== 'undefined') Tally.loadEmbeds();
    }
  }, []);

  return (
    <iframe 
      data-tally-src="https://tally.so/embed/ZjaXJ5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
      loading="lazy" 
      width="100%" 
      height="350" 
      style={{ border: 'none', margin: 0 }}
      title="BookedAI Contact Form"
    ></iframe>
  );
};

const OnboardingSection: React.FC = () => (
  <section id="onboarding" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-16">
        <span className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase">Onboarding</span>
        <p className="mt-4 text-xl font-medium text-slate-600 max-w-xl">
          We built BookedAI for the trades. No coding, no complex manuals, just simple setup and better results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Plus className="text-white" />, color: 'bg-black', title: 'Sign up via form', desc: 'Fill out a quick questionnaire about your business hours, typical jobs, and pricing.' },
          { icon: <Zap className="text-white" />, color: 'bg-blue-600', title: 'Connect tools', desc: 'Link your current phone number and Google Calendar. No hardware needed.' },
          { icon: <LayoutDashboard className="text-white" />, color: 'bg-green-600', title: 'Train your AI', desc: 'Customize AI responses with your pricing and policies. It learns like a pro in minutes.' },
          { icon: <ArrowRight className="text-white" />, color: 'bg-pink-600', title: 'Quick Deployment', desc: 'Start capturing missed leads and booking jobs while you sleep. Simple and powerful.' },
        ].map((step, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4">
             <div className={`${step.color} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg`}>
               {step.icon}
             </div>
             <h4 className="font-bold text-lg mt-2">{step.title}</h4>
             <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="p-12 text-center border-b border-slate-100">
          <h3 className="text-2xl font-bold text-slate-700">Have questions? We’ve got you. Fill out the details below for a free consultation.</h3>
        </div>
        <div className="min-h-[350px] w-full bg-white p-4">
          <TallyFormEmbed />
        </div>
      </div>
    </div>
  </section>
);

const Feature: React.FC<FeatureItemProps> = ({ children, active }) => (
  <li className="flex items-start gap-3 group">
    <div className={`mt-1 flex-shrink-0 ${active ? 'text-blue-500' : 'text-slate-300'} group-hover:text-blue-400 transition-colors`}>
      <CheckCircle2 className="w-5 h-5" />
    </div>
    <span className="text-slate-300 text-sm">{children}</span>
  </li>
);

const PricingSection: React.FC = () => (
  <section id="pricing" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        {/* Left - Hero Pricing */}
        <div className="bg-black p-12 lg:p-16 flex-1 text-white">
          <h2 className="text-4xl font-bold mb-6">Simple, Fixed Monthly Rate</h2>
          <p className="text-slate-400 mb-12 max-w-sm">Everything you need to automate your front office and capture every single lead.</p>
          
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-6xl font-black">$150</span>
            <span className="text-slate-500 font-bold uppercase tracking-widest">/month</span>
          </div>
          <p className="text-sm font-bold text-blue-500 tracking-[0.2em] mb-12">+$199 ONE-TIME SETUP FEE</p>

          <ul className="space-y-4">
            <Feature active>24/7 AI Virtual Receptionist</Feature>
            <Feature active>Natural Language Understanding</Feature>
            <Feature active>Unlimited Bookings & Leads</Feature>
            <Feature active>Google Calendar Integration</Feature>
            <Feature active>Direct Call Transfer Support</Feature>
            <Feature active>Custom AI Training (Your Prices & Policies)</Feature>
          </ul>
        </div>

        {/* Right - Value Propositions */}
        <div className="bg-white p-12 lg:p-16 flex-1 text-slate-900 flex flex-col justify-between">
          <div className="space-y-12 mb-12">
            <div className="flex items-start gap-6">
              <div className="bg-green-100 p-3 rounded-xl text-green-600"><CheckCircle2 className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Easy Setup</h4>
                <p className="text-slate-500 text-sm">We simply forward your missed leads to the AI. You don't have to change a thing.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-pink-100 p-3 rounded-xl text-pink-600"><Calendar className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Flexible</h4>
                <p className="text-slate-500 text-sm">Seasonal slow down? No problem. Pause or cancel your subscription whenever you want.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600"><Mail className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Quick Deployment</h4>
                <p className="text-slate-500 text-sm">As soon as we have received payment, we will have you live and setup within 1-5 business days or your money back</p>
              </div>
            </div>
          </div>
          
          {/* Buy Now Bubble */}
          <div className="mt-auto">
            <a 
              href={STRIPE_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-slate-800 transform hover:scale-105 transition-all shadow-xl"
            >
              Buy Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-slate-700">{question}</span>
        {isOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="px-8 pb-8 text-slate-500 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <Accordion 
          question="How does the AI know my specific pricing and policies?" 
          answer="During onboarding, you provide us with your pricing list, common services, and policies. The AI is trained specifically on your data, so it can answer questions like 'How much for a drain snake?' or 'Do you offer emergency services on Sundays?' just like a seasoned pro." 
        />
        <Accordion 
          question="Do I need to change my business phone number?" 
          answer="No. You keep your existing business number. We set up conditional call forwarding so that when you're busy or don't answer, the call is automatically routed to your BookedAI assistant." 
        />
        <Accordion 
          question="How does it integrate with my calendar?" 
          answer="The AI looks at your real-time availability in Google Calendar. When a customer wants to book, it only offers slots that are actually free. Once booked, the appointment appears instantly in your calendar with all the customer details." 
        />
      </div>
    </div>
  </section>
);

const Footer: React.FC<{ onOpenToS: () => void; onOpenPrivacy: () => void }> = ({ onOpenToS, onOpenPrivacy }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-white text-black w-8 h-8 rounded-lg flex items-center justify-center font-bold">B</div>
              <span className="text-2xl font-bold tracking-tight">BookedAI</span>
            </div>
            <h3 className="text-3xl font-bold leading-tight mb-8 max-w-sm">The AI virtual receptionist for <span className="text-blue-500 italic">modern trades.</span></h3>
            <div className="flex gap-4">
               <img src="https://www.gstatic.com/images/branding/product/2x/calendar_2020q4_48dp.png" className="h-6" alt="Calendar" />
               <img src="https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png" className="h-6" alt="Sheets" />
               <img src="https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_48dp.png" className="h-6" alt="Gmail" />
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase mb-8">Product</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li><button onClick={() => scrollTo('how-it-works')} className="hover:text-white">How it works</button></li>
              <li><button onClick={() => scrollTo('dashboard')} className="hover:text-white">Dashboard</button></li>
              <li><button onClick={() => scrollTo('pricing')} className="hover:text-white">Pricing</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase mb-8">Support</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li><a href="#onboarding" className="hover:text-white">Contact Form</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-bold tracking-[0.2em] text-slate-600 uppercase">
           <div>© 2024 BookedAI. All rights reserved.</div>
           <div className="flex gap-8">
             <button onClick={onOpenToS} className="hover:text-white transition-colors">Terms of Service</button>
             <button onClick={onOpenPrivacy} className="hover:text-white transition-colors">Privacy Policy</button>
           </div>
        </div>
      </div>
    </footer>
  );
};

const Hero: React.FC = () => (
  <header className="pt-40 pb-24 px-4 overflow-hidden relative grid-bg">
    <div className="max-w-7xl mx-auto text-center relative z-10">
      <div className="inline-block mb-12">
        <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
          24/7 AI Receptionist for Small Business
        </span>
      </div>
      
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
        Never miss a customer lead <br /> 
        <span className="relative">
          again.
          <span className="absolute bottom-2 left-0 w-full h-1 bg-blue-600/30"></span>
        </span>
      </h1>
      
      <p className="max-w-xl mx-auto text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-12">
        Boost revenue with a virtual pro that handles your scheduling, answers questions, and confirms jobs—while you're on site or off the clock.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 bg-black text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transform hover:scale-105 transition-all shadow-xl">
          Buy Now
        </a>
        <button onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-50 transform transition-all shadow-sm">
          See the Dashboard
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
        Go live within a few days. with no coding required.
      </div>
    </div>
  </header>
);

const App: React.FC = () => {
  const [modalType, setModalType] = useState<'tos' | 'privacy' | null>(null);

  return (
    <div className="antialiased text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Integrations />
        <DashboardSection />
        <AutomationSection />
        <div id="how-it-works">
          <OnboardingSection />
        </div>
        <PricingSection />
        <FAQSection />
      </main>
      <Footer 
        onOpenToS={() => setModalType('tos')} 
        onOpenPrivacy={() => setModalType('privacy')} 
      />

      <Modal 
        isOpen={modalType === 'tos'} 
        onClose={() => setModalType(null)} 
        title="Terms of Service"
      >
        <p><strong>Last Updated: October 2024</strong></p>
        <p>By using BookedAI, you agree to these terms. Please read them carefully.</p>
        <h3 className="font-bold text-slate-900">1. Services</h3>
        <p>BookedAI provides AI-powered virtual receptionist services including call routing and automated scheduling via third-party integrations (e.g., Google Calendar).</p>
        <h3 className="font-bold text-slate-900">2. Fees and Payments</h3>
        <p>Subscriptions are billed monthly at $150/month plus a one-time $199 setup fee. Payments are handled via Stripe. Fees are non-refundable except as specified in our 1-5 day deployment guarantee.</p>
        <h3 className="font-bold text-slate-900">3. Deployment Guarantee</h3>
        <p>If we fail to set up your basic virtual receptionist services within 5 business days of receiving full payment and required onboarding information, you are entitled to a full refund of the setup fee.</p>
        <h3 className="font-bold text-slate-900">4. User Content</h3>
        <p>You are responsible for the accuracy of pricing and policy data provided to train your AI instance.</p>
        <h3 className="font-bold text-slate-900">5. Limitation of Liability</h3>
        <p>BookedAI is not liable for missed jobs, scheduling conflicts, or errors made by the AI receptionist. We provide the tool as-is to assist your business.</p>
      </Modal>

      <Modal 
        isOpen={modalType === 'privacy'} 
        onClose={() => setModalType(null)} 
        title="Privacy Policy"
      >
        <p><strong>Effective Date: October 2024</strong></p>
        <p>Your privacy is important to us. This policy explains how we handle your data.</p>
        <h3 className="font-bold text-slate-900">1. Information Collection</h3>
        <p>We collect business details (hours, pricing, policies) and customer lead information (names, phone numbers, email addresses) processed by your AI receptionist.</p>
        <h3 className="font-bold text-slate-900">2. Data Usage</h3>
        <p>Lead data is used solely to provide scheduling and notification services to your business. We do not sell your data or your customers' data to third parties.</p>
        <h3 className="font-bold text-slate-900">3. Third-Party Services</h3>
        <p>We integrate with Google for calendar sync and Stripe for payments. Your interactions with these services are governed by their respective privacy policies.</p>
        <h3 className="font-bold text-slate-900">4. Data Security</h3>
        <p>We implement industry-standard security measures to protect your account information and customer logs.</p>
        <h3 className="font-bold text-slate-900">5. Your Rights</h3>
        <p>You can request a copy of your data or account deletion at any time by contacting our support team via the consultation form.</p>
      </Modal>
    </div>
  );
};

export default App;

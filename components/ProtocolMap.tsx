import React from 'react';

const ProtocolMap: React.FC = () => {
  const modules = [
    { id: 'M1', title: 'Neural Foundation', detail: 'Calibrating the biological baseline for prolonged focus.' },
    { id: 'M2', title: 'Environment Spec', detail: 'The hardware and physical space engineering protocol.' },
    { id: 'M3', title: 'Flow Sequencing', detail: 'Surgical triggers to enter the flow state on command.' },
    { id: 'M4', title: 'System Scale', detail: 'Scaling cognitive depth for high-impact careers.' },
  ];

  return (
    <section className="py-40 px-6 bg-slate-50/50 overflow-hidden border-y border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-[#00CC76] font-bold text-[10px] uppercase tracking-[0.6em] mb-4 block">The Curriculum</span>
          <h2 className="text-5xl md:text-7xl font-bold text-black tracking-tighter serif italic mb-8">System <span className="text-black/30">Architecture.</span></h2>
          <div className="h-px w-24 bg-[#00CC76]/40 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Technical Visual Connector Line */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-black/5 to-transparent z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {modules.map((m, i) => (
              <div key={i} className="group relative">
                <div className="mb-12 relative">
                   <div className="w-16 h-16 rounded-2xl bg-white border border-black/5 flex items-center justify-center font-black text-black group-hover:bg-black group-hover:text-[#00CC76] group-hover:border-black group-hover:scale-110 transition-all duration-500 shadow-xl shadow-black/5 z-10 relative">
                    {m.id}
                  </div>
                  {/* Subtle pulsing ring behind active/hovered step */}
                  <div className="absolute inset-0 bg-[#00CC76]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                
                <h4 className="text-black font-bold text-lg mb-4 tracking-tight uppercase tracking-[0.05em] group-hover:text-[#00CC76] transition-colors">{m.title}</h4>
                <p className="text-black/40 text-sm leading-relaxed mb-8 font-medium max-w-[200px]">{m.detail}</p>
                
                <div className="flex items-center space-x-2">
                   <div className="h-[2px] w-6 bg-[#00CC76] rounded-full"></div>
                   <div className="h-[2px] flex-1 bg-black/[0.03] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtocolMap;
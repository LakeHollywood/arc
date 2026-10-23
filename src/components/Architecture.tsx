export default function Architecture() {
  const pillars = [
    {
      id: 'arc',
      title: 'The ARC',
      subtitle: 'Ledger of Idea Immutability',
      description: 'A tamper-resistant ledger that records the fingerprint of a creative submission at the moment of creation. Once written, it cannot be altered retroactively.',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: 'cyan',
    },
    {
      id: 'timestamp',
      title: 'Hardware Timestamping',
      subtitle: 'Verified at the Source',
      description: 'Creator pitches are signed at the hardware level, not just the software level. This eliminates the possibility of timestamp manipulation by any party — including platform administrators.',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'blue',
    },
    {
      id: 'chain',
      title: 'Digital Chain of Custody',
      subtitle: 'Every Step Recorded',
      description: 'Every step from pitch → signature → submission → review is recorded, linked, and auditable. The creator retains a cryptographic receipt at each stage.',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      color: 'purple',
    },
    {
      id: 'pay1',
      title: 'Pay-1 Solution',
      subtitle: 'Film/TV Protection',
      description: 'Addresses the structural gap in studio submission windows, specifically targeting the $7B+ Pay-1 licensing tier where creator attribution is most frequently at risk.',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      color: 'emerald',
    },
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', glow: 'shadow-blue-500/20' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', glow: 'shadow-purple-500/20' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
  };

  return (
    <section id="architecture" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">Core Architecture</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-6">
            Four Pillars of <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Trust</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            KRISP/ARC establishes an immutable, hardware-verified chain of custody at the code level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const colors = colorMap[pillar.color];
            return (
              <div
                key={idx}
                className={`group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:${colors.border} transition-all duration-300 hover:shadow-lg ${colors.glow}`}
              >
                <div className={`inline-flex p-4 rounded-xl ${colors.bg} ${colors.text} mb-6`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold mb-1">{pillar.title}</h3>
                <p className={`text-sm font-medium ${colors.text} mb-3`}>{pillar.subtitle}</p>
                <p className="text-white/50 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Architecture diagram */}
        <div className="mt-16 p-8 rounded-2xl bg-white/[0.02] border border-white/5">
          <h3 className="text-lg font-semibold mb-6 text-center">System Flow</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {['Creator', 'CERL Compiler', 'ARC Ledger', 'Receipt', 'Verification'].map((step, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-lg">{idx + 1}</span>
                  </div>
                  <span className="text-xs text-white/50 mt-2 text-center">{step}</span>
                </div>
                {idx < 4 && (
                  <svg className="w-6 h-6 text-white/20 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Stakeholders() {
  const stakeholders = [
    {
      title: 'Film & TV Writers',
      org: 'WGA',
      description: 'Screenwriters and showrunners who pitch stories, develop scripts, and need verifiable proof of original creation and submission timing.',
      icon: '🎬',
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/20',
    },
    {
      title: 'Recording Artists',
      org: 'NMPA, SAG-AFTRA',
      description: 'Musicians and performers whose recordings, compositions, and performances need immutable authorship records for royalty distribution.',
      icon: '🎵',
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/20',
    },
    {
      title: 'Music Creators & Producers',
      org: 'Independent',
      description: 'Producers, beatmakers, and songwriters who create and license music — needing proof of creation date for copyright and royalty purposes.',
      icon: '🎧',
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/20',
    },
    {
      title: 'Talent Agencies',
      org: 'CAA & Equivalents',
      description: 'Agencies representing creators who need verifiable submission records to protect their clients\' intellectual property and negotiate fair deals.',
      icon: '🤝',
      color: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/20',
    },
    {
      title: 'Independent Creators',
      org: 'Unrepresented',
      description: 'Creators operating outside traditional representation who are most vulnerable to idea theft and need self-service protection tools.',
      icon: '💡',
      color: 'from-yellow-500/20 to-amber-500/20',
      borderColor: 'border-yellow-500/20',
    },
    {
      title: 'Studios & Labels',
      org: 'Enterprise',
      description: 'Content companies that benefit from clear attribution records — reducing legal disputes and ensuring proper licensing compliance.',
      icon: '🏢',
      color: 'from-blue-500/20 to-indigo-500/20',
      borderColor: 'border-blue-500/20',
    },
  ];

  return (
    <section id="stakeholders" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">Stakeholders</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-6">
            Who This <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Serves</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            KRISP/ARC protects creators across the entertainment and music industries — 
            from independent artists to major studios.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stakeholders.map((stakeholder, idx) => (
            <div
              key={idx}
              className={`group p-6 rounded-2xl bg-gradient-to-br ${stakeholder.color} border ${stakeholder.borderColor} hover:scale-[1.02] transition-all duration-300`}
            >
              <span className="text-3xl mb-4 block">{stakeholder.icon}</span>
              <h3 className="text-lg font-bold mb-1">{stakeholder.title}</h3>
              <span className="text-xs text-white/40 font-medium uppercase tracking-wider">{stakeholder.org}</span>
              <p className="text-white/50 text-sm mt-3 leading-relaxed">{stakeholder.description}</p>
            </div>
          ))}
        </div>

        {/* Pay-1 callout */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-amber-500/5 to-orange-500/5 border border-amber-500/20">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-4 rounded-xl bg-amber-500/10">
              <span className="text-3xl">🎯</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">The Pay-1 Solution</h3>
              <p className="text-white/50 leading-relaxed">
                Addresses the structural gap in studio submission windows, specifically targeting the 
                <span className="text-amber-400 font-semibold"> $7B+ Pay-1 licensing tier</span> where 
                creator attribution is most frequently at risk. KRISP/ARC provides the verifiable chain 
                of custody that makes Pay-1 disputes resolvable at the code level.
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-amber-400">$7B+</div>
              <div className="text-xs text-white/40">at-risk licensing tier</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

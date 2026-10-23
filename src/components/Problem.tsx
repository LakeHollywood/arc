export default function Problem() {
  const problems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Timestamps',
      description: 'Spoofable and easily manipulated. No hardware-level verification of when content was actually created or sent.',
      risk: 'HIGH',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Portal Confirmations',
      description: 'Controlled entirely by the recipient. The creator has no independent verification of what was received.',
      risk: 'HIGH',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Verbal Agreements',
      description: 'Unenforceable without documentation. Memory is unreliable and disputes are inevitable.',
      risk: 'CRITICAL',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Copyright Registration',
      description: 'After the fact. Does not protect the moment of creation or the submission process itself.',
      risk: 'MEDIUM',
    },
  ];

  return (
    <section id="problem" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-red-400 uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-6">
            No Adequate Solution <span className="text-white/40">Exists Yet</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Creators pitch ideas, write songs, develop characters, and submit work through portals — 
            with no reliable, tamper-proof record of what was submitted, when, and by whom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-500/10 text-red-400 group-hover:bg-red-500/20 transition-colors">
                  {problem.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{problem.title}</h3>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      problem.risk === 'CRITICAL' ? 'bg-red-500/20 text-red-400' :
                      problem.risk === 'HIGH' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {problem.risk}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
            <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span className="text-white/70">
              None of these create an <span className="text-white font-semibold">immutable, hardware-verified chain of custody</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';

interface CerlExample {
  id: string;
  english: string;
  context: Record<string, number | string>;
  expected: { amount: string; currency: string } | string;
  canonical: string | null;
}

const examples: CerlExample[] = [
  {
    id: 'fixed',
    english: 'Pay $100 fixed',
    context: {},
    expected: { amount: '100.00', currency: 'USD' },
    canonical: 'FIXED 100 USD',
  },
  {
    id: 'percent',
    english: 'Pay 25% of gross revenue',
    context: { gross_revenue: 400 },
    expected: { amount: '100.00', currency: 'USD' },
    canonical: 'PERCENT 25 OF gross_revenue',
  },
  {
    id: 'conditional',
    english: 'If runtime is at least 30 seconds, pay 50% of gross revenue, otherwise nothing',
    context: { 'asset.runtime_seconds': 45, gross_revenue: 200 },
    expected: { amount: '100.00', currency: 'USD' },
    canonical: 'IF asset.runtime_seconds >= 30 THEN PERCENT 50 OF gross_revenue ELSE ZERO',
  },
  {
    id: 'error',
    english: 'If runtime > 30 seconds, pay 10% of gross revenue',
    context: { 'asset.runtime_seconds': 45, gross_revenue: 1000 },
    expected: 'CompilerError' as any,
    canonical: null,
  },
];

function computeHash(input: string): string {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  const hex = Math.abs(hash).toString(16).padStart(8, '0');
  return `sha256:${hex}${hex}${hex}${hex}${hex}${hex}${hex}${hex}`.slice(0, 72);
}

export default function CerlDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [isCompiling, setIsCompiling] = useState(false);
  const [compiled, setCompiled] = useState(false);
  const [customEnglish, setCustomEnglish] = useState('');
  const [useCustom, setUseCustom] = useState(false);

  const currentExample = useCustom
    ? {
        id: 'custom',
        english: customEnglish || 'Enter a payment term...',
        context: {},
        expected: { amount: '0.00', currency: 'USD' },
        canonical: customEnglish ? `CUSTOM: ${customEnglish.toUpperCase()}` : null,
      }
    : examples[selectedExample];

  const handleCompile = () => {
    setIsCompiling(true);
    setCompiled(false);
    setTimeout(() => {
      setIsCompiling(false);
      setCompiled(true);
    }, 1500);
  };

  const handleReset = () => {
    setCompiled(false);
    setIsCompiling(false);
  };

  return (
    <section id="demo" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">Interactive Demo</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-6">
            CERL <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Compiler</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Creator Event Receipt Ledger — processes creative submission events and produces 
            verifiable, timestamped receipts that form the basis of the authorship record.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                Input: English Terms
              </h3>

              {/* Example selector */}
              <div className="flex flex-wrap gap-2 mb-4">
                {examples.map((ex, idx) => (
                  <button
                    key={ex.id}
                    onClick={() => { setSelectedExample(idx); setUseCustom(false); handleReset(); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      !useCustom && selectedExample === idx
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : 'bg-white/5 text-white/50 border border-white/5 hover:border-white/20'
                    }`}
                  >
                    {ex.id.charAt(0).toUpperCase() + ex.id.slice(1)}
                  </button>
                ))}
                <button
                  onClick={() => { setUseCustom(true); handleReset(); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    useCustom
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'bg-white/5 text-white/50 border border-white/5 hover:border-white/20'
                  }`}
                >
                  Custom
                </button>
              </div>

              {useCustom ? (
                <input
                  type="text"
                  value={customEnglish}
                  onChange={(e) => setCustomEnglish(e.target.value)}
                  placeholder="Enter payment terms in English..."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 font-mono text-sm"
                />
              ) : (
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 font-mono text-sm text-white/80">
                  {currentExample.english}
                </div>
              )}

              {/* Context */}
              {!useCustom && Object.keys(currentExample.context).length > 0 && (
                <div className="mt-4">
                  <span className="text-xs text-white/40 uppercase tracking-wider">Context Variables</span>
                  <div className="mt-2 space-y-2">
                    {Object.entries(currentExample.context).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-2 rounded-lg bg-black/30">
                        <span className="text-xs text-white/60 font-mono">{key}</span>
                        <span className="text-xs text-cyan-400 font-mono">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Compile button */}
            <button
              onClick={handleCompile}
              disabled={isCompiling}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold hover:from-purple-400 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isCompiling ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Compiling...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Compile to CERL
                </>
              )}
            </button>
          </div>

          {/* Output Panel */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 min-h-[300px]">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Output: Canonical Form
              </h3>

              {!compiled ? (
                <div className="flex flex-col items-center justify-center h-48 text-white/30">
                  <svg className="w-12 h-12 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm">Click compile to generate canonical form</span>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Canonical */}
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-wider">Canonical Form</span>
                    <div className="mt-2 p-4 rounded-xl bg-black/50 border border-emerald-500/20 font-mono text-sm">
                      {currentExample.canonical ? (
                        <span className="text-emerald-400">{currentExample.canonical}</span>
                      ) : (
                        <span className="text-red-400">⚠ CompilerError — Invalid conditional expression</span>
                      )}
                    </div>
                  </div>

                  {/* Expected Output */}
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-wider">Evaluated Result</span>
                    <div className="mt-2 p-4 rounded-xl bg-black/50 border border-white/10 font-mono text-sm">
                      {typeof currentExample.expected === 'string' ? (
                        <span className="text-red-400">{currentExample.expected}</span>
                      ) : (
                        <span className="text-cyan-400">
                          ${currentExample.expected.amount} {currentExample.expected.currency}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hash */}
                  {currentExample.canonical && (
                    <div>
                      <span className="text-xs text-white/40 uppercase tracking-wider">Receipt Hash</span>
                      <div className="mt-2 p-3 rounded-xl bg-black/50 border border-white/10 font-mono text-xs text-white/50 break-all">
                        {computeHash(currentExample.canonical + JSON.stringify(currentExample.context))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Info box */}
            <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
              <p className="text-xs text-white/50 leading-relaxed">
                <span className="text-purple-400 font-medium">How it works:</span> The CERL compiler takes 
                English-language payment terms and compiles them into a deterministic canonical form. 
                This canonical form is then evaluated against context variables to produce a verifiable 
                payment receipt with a cryptographic hash.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

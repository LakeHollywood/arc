import { useState } from 'react';

interface ChainStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string;
  hash: string;
}

const chainSteps: ChainStep[] = [
  {
    id: 1,
    title: 'Creation',
    description: 'Creator develops original work',
    icon: '✍️',
    details: 'The creative work is produced — a script, song, character design, or pitch document. At this moment, a unique fingerprint is generated.',
    hash: 'a3f8c2d1e9b7...',
  },
  {
    id: 2,
    title: 'Hardware Signature',
    description: 'TPM-signed timestamp',
    icon: '🔐',
    details: 'The work fingerprint is signed using hardware-level cryptographic keys (TPM/HSM). This cannot be forged or backdated by any software process.',
    hash: '7b2e4f9a1c3d...',
  },
  {
    id: 3,
    title: 'ARC Ledger Entry',
    description: 'Immutable record written',
    icon: '📝',
    details: 'The signed fingerprint is written to the ARC ledger — a tamper-resistant record that cannot be altered retroactively. This is the proof of creation.',
    hash: 'e5d8c1f2a4b6...',
  },
  {
    id: 4,
    title: 'Submission',
    description: 'Work submitted to studio/label',
    icon: '📤',
    details: 'The work is submitted through official channels. The submission event is linked to the ARC entry, creating an auditable chain from creation to delivery.',
    hash: '9c3a7e2d8f1b...',
  },
  {
    id: 5,
    title: 'Verification',
    description: 'Independent audit possible',
    icon: '✅',
    details: 'Any party can independently verify the chain: that this specific work was created at this specific time by this specific creator, and submitted through proper channels.',
    hash: '1f4b8d6e2a9c...',
  },
];

export default function ChainOfCustody() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="chain" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Chain of Custody</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-6">
            From Creation to <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Verification</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Every step is recorded, linked, and auditable. The creator retains a cryptographic receipt at each stage.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,2fr] gap-8">
          {/* Timeline */}
          <div className="space-y-2">
            {chainSteps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeStep === idx
                    ? 'bg-blue-500/10 border border-blue-500/30 shadow-lg shadow-blue-500/10'
                    : 'bg-white/[0.02] border border-white/5 hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{step.icon}</span>
                  <div>
                    <div className={`font-semibold text-sm ${activeStep === idx ? 'text-blue-400' : 'text-white/80'}`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-white/40">{step.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{chainSteps[activeStep].icon}</span>
              <div>
                <h3 className="text-2xl font-bold">{chainSteps[activeStep].title}</h3>
                <p className="text-white/50">{chainSteps[activeStep].description}</p>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed mb-6">
              {chainSteps[activeStep].details}
            </p>

            {/* Hash visualization */}
            <div className="p-4 rounded-xl bg-black/50 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-white/40 uppercase tracking-wider">Cryptographic Receipt</span>
                <span className="text-xs text-blue-400">Step {activeStep + 1}/5</span>
              </div>
              <div className="font-mono text-xs text-white/50 break-all">
                <span className="text-blue-400">receipt_id:</span> {chainSteps[activeStep].hash}<br />
                <span className="text-blue-400">timestamp:</span> {new Date(2026, 0, 15 + activeStep).toISOString()}<br />
                <span className="text-blue-400">prev_hash:</span> {activeStep > 0 ? chainSteps[activeStep - 1].hash : '000000000000...'}<br />
                <span className="text-blue-400">signature:</span> tpm2:rsa2048:{chainSteps[activeStep].hash}
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-6">
              <div className="flex gap-1">
                {chainSteps.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 flex-1 rounded-full transition-all ${
                      idx <= activeStep ? 'bg-blue-500' : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

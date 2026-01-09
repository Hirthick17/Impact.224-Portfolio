import React, { useState } from 'react';
import { seedDatabase } from '../scripts/seed-database';
import { Button } from '../components/UIComponents';
import { Database, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const SeedPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [details, setDetails] = useState<string[]>([]);

  const handleSeed = async () => {
    setStatus('loading');
    setMessage('Seeding database...');
    setDetails([]);
    
    try {
      // Capture console logs
      const logs: string[] = [];
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.join(' '));
        originalLog(...args);
      };

      await seedDatabase();

      console.log = originalLog;
      
      setStatus('success');
      setMessage('✅ Database seeded successfully!');
      setDetails(logs);
    } catch (error: any) {
      setStatus('error');
      setMessage(`❌ Error: ${error.message}`);
      setDetails([error.stack || error.toString()]);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <Database className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
          <h1 className="text-5xl font-bold mb-4">Seed Supabase Database</h1>
          <p className="text-neutral-400 text-lg">
            Populate your Supabase database with all 9 pages of default content
          </p>
        </div>

        <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 mb-8">
          <h2 className="text-xl font-bold mb-4">What will be seeded?</h2>
          <ul className="space-y-2 text-neutral-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Home page (hero, stats)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>About page (team, performance, promise)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Services page</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Pricing page (6 services × 3 tiers)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Blog page</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Projects page</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Service Detail: Web Development</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Service Detail: Digital Marketing</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Service Detail: Video Editing</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <Button
            onClick={handleSeed}
            disabled={status === 'loading'}
            size="lg"
            className="px-12 py-4 text-lg font-bold"
          >
            {status === 'loading' && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
            {status === 'loading' ? 'Seeding Database...' : 'Seed Database Now'}
          </Button>
        </div>

        {status !== 'idle' && (
          <div className={`mt-8 p-6 rounded-xl border ${
            status === 'success' ? 'bg-green-900/20 border-green-500' :
            status === 'error' ? 'bg-red-900/20 border-red-500' :
            'bg-blue-900/20 border-blue-500'
          }`}>
            <div className="flex items-start gap-3">
              {status === 'success' && <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />}
              {status === 'error' && <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />}
              {status === 'loading' && <Loader2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1 animate-spin" />}
              <div className="flex-1">
                <p className="font-bold text-lg mb-2">{message}</p>
                {details.length > 0 && (
                  <div className="mt-4 p-4 bg-black/50 rounded-lg font-mono text-sm overflow-auto max-h-64">
                    {details.map((detail, i) => (
                      <div key={i} className="text-neutral-300">{detail}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {status === 'success' && (
          <div className="mt-8 text-center">
            <p className="text-neutral-400 mb-4">Database seeded successfully! You can now:</p>
            <div className="flex gap-4 justify-center">
              <a href="/" className="text-yellow-400 hover:underline font-medium">
                View Homepage →
              </a>
              <a href="/admin/dashboard" className="text-yellow-400 hover:underline font-medium">
                Go to Admin Dashboard →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

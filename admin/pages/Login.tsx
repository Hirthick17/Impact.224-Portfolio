import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Mail, Lock, Lightbulb } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo authentication
    if (email === 'admin@demo.com') {
      localStorage.setItem('admin_auth', JSON.stringify({
        email,
        securityLevel: 'ADMINISTRATIVE',
        isSandboxMode: true,
      }));
      navigate('/admin/dashboard');
    } else {
      alert('Demo access only. Use: admin@demo.com');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-start justify-center mb-12">
          <div className="relative flex items-center">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-yellow-400">
              <Lightbulb size={28} strokeWidth={2.5} className="fill-current opacity-100" />
            </div>
            <div className="flex items-start pt-2">
              <span className="font-script text-5xl text-white leading-none">Impact</span>
              <span className="font-sans text-xl font-bold text-neutral-400 -mt-2 ml-1">224</span>
            </div>
          </div>
        </div>

        {/* Security Badge */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Shield className="w-5 h-5 text-yellow-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
            Security Level 1: Administrative
          </span>
        </div>

        {/* Demo Sandbox Banner */}
        <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-4 mb-8">
          <p className="text-sm text-yellow-400 font-medium text-center">
            <span className="font-bold">Sandbox Mode:</span> Use <span className="font-mono bg-black px-2 py-1 rounded">admin@demo.com</span> to access
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-600" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@demo.com"
                className="w-full pl-12 pr-6 py-4 bg-neutral-900 border-2 border-neutral-800 rounded-xl text-white font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-600" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 pr-6 py-4 bg-neutral-900 border-2 border-neutral-800 rounded-xl text-white font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl transition-all transform active:scale-95 uppercase tracking-wider text-sm"
          >
            Access Control Console
          </button>
        </form>

        <p className="text-center text-xs text-neutral-600 mt-8">
          Impact 224 Admin CMS • Secure Access Portal
        </p>
      </div>
    </div>
  );
};

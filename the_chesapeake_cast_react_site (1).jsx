/*
The Chesapeake Cast — single-file React component (App.jsx)
TailwindCSS required for styling. This file is ready to drop into a React app
that has Tailwind configured (Create React App / Vite + Tailwind). 

Notes:
- Black & white theme with grayscale camo border
- Pages: Home, Tees, UV Shirts, Hoodies (client-side nav)
- Product placeholders included
- Uses Tailwind utility classes and a small amount of inline CSS for camo
*/

import React, { useState } from 'react';

const NAV = [
  { key: 'home', label: 'Home' },
  { key: 'tees', label: 'Tees' },
  { key: 'uv', label: 'UV Shirts' },
  { key: 'hoodies', label: 'Hoodies' },
];

const PRODUCTS = {
  tees: [
    { id: 1, name: 'Cove Tee', price: '$24', desc: 'Classic crew neck' },
    { id: 2, name: 'Bayline Tee', price: '$26', desc: 'Soft cotton, crisp print' },
    { id: 3, name: 'Pilot Tee', price: '$28', desc: 'Boxy fit, modern cut' },
  ],
  uv: [
    { id: 1, name: 'SunGuard UV Shirt', price: '$39', desc: 'UPF 50+, breathable' },
    { id: 2, name: 'Tide Runner UV', price: '$42', desc: 'Quick-dry, stretch' },
  ],
  hoodies: [
    { id: 1, name: 'Harbor Hoodie', price: '$54', desc: 'Mid-weight, fleece-lined' },
    { id: 2, name: 'Deck Zip Hoodie', price: '$59', desc: 'Full-zip, sleek silhouette' },
    { id: 3, name: 'Skiff Pullover', price: '$49', desc: 'Casual, roomy fit' },
  ],
};

export default function App() {
  const [route, setRoute] = useState('home');

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        {/* Camo border container */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 camo-pattern -z-10" />

          <div className="bg-black/95 backdrop-blur-sm border-white/10 rounded-2xl p-8">
            {/* Header */}
            <header className="flex items-center justify-between gap-6 mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  The <span className="opacity-95">Chesapeake</span> <span className="text-gray-300">Cast</span>
                </h1>
                <p className="text-sm text-gray-400 mt-1">Clean, coastal-inspired apparel — in monochrome.</p>
              </div>

              <nav className="space-x-3">
                {NAV.map((n) => (
                  <button
                    key={n.key}
                    onClick={() => setRoute(n.key)}
                    className={`px-4 py-2 text-sm rounded-full font-medium transition-all
                      ${route === n.key ? 'bg-white text-black' : 'bg-white/5 hover:bg-white/10'}`}
                  >
                    {n.label}
                  </button>
                ))}
              </nav>
            </header>

            {/* Content */}
            <main>
              {route === 'home' && <Home />}
              {route === 'tees' && <ProductsPage title="Tees" items={PRODUCTS.tees} />}
              {route === 'uv' && <ProductsPage title="UV Shirts" items={PRODUCTS.uv} />}
              {route === 'hoodies' && <ProductsPage title="Hoodies" items={PRODUCTS.hoodies} />}
            </main>

            {/* Footer */}
            <footer className="mt-12 border-t border-white/6 pt-6 text-sm text-gray-400 flex justify-between items-center">
              <div>© {new Date().getFullYear()} The Chesapeake Cast</div>
              <div className="text-gray-400">Made with care — Monochrome & Camo</div>
            </footer>
          </div>
        </div>
      </div>

      {/* Inline styles for the camo border (grayscale camo) */}
      <style>{`
        .camo-pattern {
          pointer-events: none;
          background-image: radial-gradient(12px 8px at 10% 20%, rgba(255,255,255,0.06) 0%, transparent 60%),
                            radial-gradient(22px 14px at 30% 60%, rgba(255,255,255,0.04) 0%, transparent 60%),
                            radial-gradient(16px 10px at 70% 30%, rgba(255,255,255,0.05) 0%, transparent 60%),
                            linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          mix-blend-mode: normal;
          border-radius: 18px;
          box-shadow: 0 0 0 12px rgba(255,255,255,0.03) inset;
          z-index: -1;
          filter: contrast(0.9) saturate(0);
        }

        /* add an outer ring to emulate a camo border frame */
        .camo-pattern::before {
          content: '';
          position: absolute;
          inset: -12px;
          background-image: repeating-linear-gradient(45deg, #0b0b0b 0 4px, #1a1a1a 4px 8px, #ffffff05 8px 12px);
          border-radius: 22px;
          z-index: -2;
          filter: grayscale(100%) opacity(0.6);
        }

        /* small responsive tweaks */
        @media (max-width: 768px) {
          .camo-pattern::before { inset: -8px; }
        }
      `}</style>
    </div>
  );
}

function Home() {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Coastal-inspired essentials — stripped back to black & white.</h2>
          <p className="text-gray-300 mb-6">The Chesapeake Cast crafts simple, durable apparel designed for life on and near the water. Minimal color, maximum utility.</p>

          <div className="flex gap-3">
            <a className="inline-block px-5 py-3 rounded-full bg-white text-black font-semibold" href="#" onClick={(e)=>e.preventDefault()}>Shop Tees</a>
            <a className="inline-block px-5 py-3 rounded-full border border-white/10 text-sm text-gray-200" href="#" onClick={(e)=>e.preventDefault()}>Learn More</a>
          </div>
        </div>

        <div className="rounded-lg p-6 bg-white/3 border border-white/6">
          <div className="w-full h-56 bg-white/6 rounded-md flex items-center justify-center">
            <svg width="140" height="120" viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="140" height="120" rx="10" fill="#FFFFFF10"/>
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#FFFFFFAA">Product Mockup</text>
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard title="Quality Materials" text="Soft ringspun cotton, built to last." />
        <FeatureCard title="Monochrome Aesthetic" text="Black & white gear that pairs perfectly." />
        <FeatureCard title="Designed for Outdoors" text="Breathable, comfy, and easy to wear." />
      </div>
    </section>
  );
}

function ProductsPage({ title, items }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <div className="rounded-xl p-5 bg-white/3 border border-white/6 hover:scale-[1.01] transition-transform">
      <div className="w-full h-40 bg-white/6 rounded-md mb-4 flex items-center justify-center">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="80" rx="8" fill="#FFFFFF10"/>
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#FFFFFFAA">Image</text>
        </svg>
      </div>
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-gray-400 text-sm mt-1">{product.desc}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="font-medium">{product.price}</div>
        <button className="px-3 py-1 rounded-full bg-white text-black text-sm">Add</button>
      </div>
    </div>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="rounded-lg p-5 bg-white/3 border border-white/6">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  );
}

/*
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

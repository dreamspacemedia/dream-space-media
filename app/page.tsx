
export default function Home() {
  const clients = [
    "OPPO",
    "Hyundai",
    "Xiaomi",
    "TikTok",
    "Roborock",
    "Focallure",
    "Usmile",
    "Mistine",
    "Hexze",
    "UrbanX",
  ];

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      <section className="relative min-h-screen flex items-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-neutral-500 mb-6">
              PT Dream Space Media
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.92] mb-8">
              Cinematic
              <br />
              Creative
              <br />
              Production
            </h1>

            <p className="text-neutral-400 text-lg leading-relaxed max-w-xl mb-10">
              Premium production house & creative agency specializing in cinematic storytelling,
              social campaigns, commercial visuals, and modern brand experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/6281311803435"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                Start Your Project
              </a>

              <a
                href="#clients"
                className="border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
              >
                View Clients
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-white/10 blur-3xl rounded-full" />

            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute bottom-0 p-10">
                <p className="uppercase tracking-[0.3em] text-neutral-400 mb-4">
                  Production House & Creative Agency
                </p>

                <h2 className="text-4xl font-bold leading-tight">
                  Visual Stories That Elevate Modern Brands
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="py-32 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="uppercase tracking-[0.4em] text-neutral-500 mb-4">
              Trusted By
            </p>

            <h2 className="text-5xl md:text-6xl font-black">
              Selected Brand Partners
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clients.map((client) => (
              <div
                key={client}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 flex items-center justify-center min-h-[180px] hover:bg-white/[0.06] transition"
              >
                <div className="text-2xl font-semibold text-center text-white/90">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-neutral-500 text-sm border-t border-white/10">
        © 2025 PT Dream Space Media. All rights reserved.
      </footer>
    </main>
  );
}

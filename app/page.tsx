import Image from "next/image";

const clients = [
  { name: "Focallure", image: "/clients/focallure.png" },
  { name: "Hexze", image: "/clients/hexze.png" },
  { name: "Hyundai", image: "/clients/hyundai.png" },
  { name: "Mistine", image: "/clients/mistine.png" },
  { name: "Oppo", image: "/clients/oppo.png" },
  { name: "Roborock", image: "/clients/roborock.png" },
  { name: "Tiktok", image: "/clients/tiktok.png" },
  { name: "Urbanx", image: "/clients/urbanx.png" },
  { name: "Usmile", image: "/clients/usmile.png" },
  { name: "Xiaomi", image: "/clients/xiaomi.png" },
];

const services = [
  {
    title: "Commercial Ads",
    desc: "Luxury cinematic commercial production for modern brands."
  },
  {
    title: "Social Media Campaigns",
    desc: "Creative social-first campaigns engineered for digital impact."
  },
  {
    title: "Production House",
    desc: "Full-service production support for premium visual storytelling."
  }
];

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-purple-500/20 blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-cyan-500/20 blur-[140px] animate-pulse" />
      </div>

      <section className="relative min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center w-full">

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-xl rounded-full px-6 py-3 mb-10">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="uppercase tracking-[0.35em] text-sm text-neutral-300">
                PT Dream Space Media
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-[-0.04em] mb-8">
              Cinematic
              <br />
              Brand
              <br />
              Experiences
            </h1>

            <p className="text-neutral-300 text-xl leading-relaxed max-w-2xl mb-12">
              Premium production house & creative agency crafting cinematic visuals,
              luxury advertising campaigns, and modern digital storytelling.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="https://wa.me/6281311803435"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-500 shadow-2xl"
              >
                Start a Project
              </a>

              <a
                href="#services"
                className="border border-white/15 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-500"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[40px] blur-2xl scale-105" />

            <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl aspect-[4/5]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-70 scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 p-10">
                <p className="uppercase tracking-[0.3em] text-neutral-300 mb-4">
                  Production House & Creative Agency
                </p>

                <h2 className="text-4xl font-bold leading-tight">
                  Visual Stories
                  <br />
                  That Move Culture
                </h2>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="services" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="uppercase tracking-[0.35em] text-neutral-500 mb-5">
              Services
            </p>

            <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em]">
              What We Create
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-10 hover:-translate-y-3 transition duration-700"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-white/10 to-transparent" />

                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/10 mb-10 flex items-center justify-center text-2xl">
                    ✦
                  </div>

                  <h3 className="text-3xl font-bold mb-6">
                    {service.title}
                  </h3>

                  <p className="text-neutral-300 leading-relaxed text-lg">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 overflow-hidden">
        <div className="mb-16 px-6 max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-neutral-500 mb-5">
            Brand Partners
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em]">
            Trusted By
            <br />
            Leading Brands
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-8 animate-marquee whitespace-nowrap px-6">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="min-w-[240px] h-[150px] rounded-[30px] border border-white/10 bg-white/90 backdrop-blur-xl flex items-center justify-center shadow-2xl hover:scale-105 transition duration-500"
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  width={180}
                  height={90}
                  className="object-contain max-h-[90px] w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="relative rounded-[40px] overflow-hidden min-h-[420px] border border-white/10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-70" />
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 p-10 h-full flex flex-col justify-end">
              <p className="uppercase tracking-[0.3em] text-neutral-300 mb-4">
                Office
              </p>

              <h3 className="text-5xl font-black mb-6">
                Jakarta
              </h3>

              <p className="text-neutral-200 text-lg leading-relaxed">
                NEO SOHO APARTEMENT NOMOR 3503,
                Jl. Letjen S. Parman No.Kav. 28,
                RT.3/RW.5, Tj. Duren Sel.,
                Kec. Grogol Petamburan.
              </p>
            </div>
          </div>

          <div className="rounded-[40px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-12">
            <p className="uppercase tracking-[0.3em] text-neutral-400 mb-5">
              Contact
            </p>

            <h3 className="text-5xl font-black leading-tight mb-10">
              Let’s Create
              <br />
              Something Cinematic
            </h3>

            <div className="space-y-5 text-lg text-neutral-300">
              <p>+62 8131 1803 435</p>
              <p>dreamspacemedia08@gmail.com</p>
              <p>@dreamspacemedia</p>
            </div>

            <a
              href="https://wa.me/6281311803435"
              className="inline-flex mt-12 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-500"
            >
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

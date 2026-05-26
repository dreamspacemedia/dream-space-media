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
    description: "Premium commercial production for modern brands."
  },
  {
    title: "Social Media Campaigns",
    description: "Creative social-first campaigns for digital audiences."
  },
  {
    title: "Production House",
    description: "End-to-end cinematic production and visual storytelling."
  }
];

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <section className="relative min-h-screen flex items-center px-6 border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-center">
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
              Premium production house & creative agency focused on cinematic storytelling,
              commercial advertising, and modern brand experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/6281311803435"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
                Start Your Project
              </a>

              <a href="#services"
                className="border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
                Explore Services
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

      <section id="services" className="py-32 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="uppercase tracking-[0.4em] text-neutral-500 mb-4">
              Services
            </p>

            <h2 className="text-5xl md:text-6xl font-black">
              What We Do
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title}
                className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-10 hover:-translate-y-2 hover:bg-white/[0.06] transition duration-500">
                <div className="w-16 h-16 rounded-2xl bg-white/10 mb-8" />

                <h3 className="text-3xl font-bold mb-5">
                  {service.title}
                </h3>

                <p className="text-neutral-400 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="uppercase tracking-[0.4em] text-neutral-500 mb-4">
              Brand Partners
            </p>

            <h2 className="text-5xl md:text-6xl font-black">
              Trusted By Modern Brands
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clients.map((client) => (
              <div key={client.name}
                className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-8 flex items-center justify-center min-h-[170px] hover:bg-white/[0.06] transition duration-500">
                <Image
                  src={client.image}
                  alt={client.name}
                  width={180}
                  height={90}
                  className="object-contain max-h-[90px] w-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="rounded-[40px] overflow-hidden border border-white/10 min-h-[420px] relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-60" />
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 p-10 h-full flex flex-col justify-end">
              <p className="uppercase tracking-[0.3em] text-neutral-300 mb-4">
                Office Location
              </p>

              <h3 className="text-4xl font-bold mb-5">
                Jakarta, Indonesia
              </h3>

              <p className="text-neutral-300 leading-relaxed max-w-lg">
                NEO SOHO APARTEMENT NOMOR 3503,
                Jl. Letjen S. Parman No.Kav. 28,
                RT.3/RW.5, Tj. Duren Sel., Kec. Grogol Petamburan.
              </p>
            </div>
          </div>

          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-12 flex flex-col justify-between">
            <div>
              <p className="uppercase tracking-[0.3em] text-neutral-500 mb-4">
                Contact
              </p>

              <h3 className="text-5xl font-black leading-tight mb-8">
                Let’s Build Something Exceptional
              </h3>

              <div className="space-y-4 text-lg text-neutral-300">
                <p>+62 8131 1803 435</p>
                <p>dreamspacemedia08@gmail.com</p>
                <p>@dreamspacemedia</p>
              </div>
            </div>

            <a href="https://wa.me/6281311803435"
              className="mt-12 inline-flex bg-white text-black px-8 py-4 rounded-full font-semibold w-fit hover:scale-105 transition">
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

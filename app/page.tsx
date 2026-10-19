import Image from "next/image";

const clients = [
  { name: "Oppo", image: "/brands/brand logo/oppo.png" },
  { name: "Hyundai", image: "/brands/brand logo/hyundai.png" },
  { name: "Xiaomi", image: "/brands/brand logo/xiaomi.png" },
  { name: "Tiktok", image: "/brands/brand logo/tiktok.png" },
  { name: "Roborock", image: "/brands/brand logo/roborock.png" },
  { name: "Focallure", image: "/brands/brand logo/focallure.png" },
  { name: "Usmile", image: "/brands/brand logo/usmile.png" },
  { name: "Mistine", image: "/brands/brand logo/mistine.png" },
  { name: "Hexze", image: "/brands/brand logo/hexze.png" },
  { name: "Urbanx", image: "/brands/brand logo/urbanx.png" },
  { name: "Cuktech", image: "/brands/brand logo/cuktech.png" },
  { name: "Sebo", image: "/brands/brand logo/sebo.png" },
  { name: "Tuttoo", image: "/brands/brand logo/tuttoo.png" },
];

const services = [
  {
    title: "Commercial Ads",
    desc: "Luxury cinematic commercial production for modern brands.",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Social Media Campaigns",
    desc: "Creative social-first campaigns engineered for digital impact.",
    image:
      "https://images.unsplash.com/photo-1765718747826-0eae5a4387fb?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Production House",
    desc: "Full-service production support for premium visual storytelling.",
    image:
      "https://images.unsplash.com/photo-1654588832315-0a34f9267b1c?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute left-[-10%] top-[-20%] h-[700px] w-[700px] animate-pulse bg-purple-500/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[700px] w-[700px] animate-pulse bg-cyan-500/20 blur-[140px]" />
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-[100svh] items-center px-5 py-10 sm:min-h-screen sm:px-6 sm:py-0">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="relative z-10">
            {/* Logo and Company Name */}
            <div className="mb-8 flex min-w-0 items-center gap-3 sm:mb-12 sm:gap-5">
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.18)] sm:h-24 sm:w-24">
                <Image
                  src="/logo/dream-space-logo.png"
                  alt="Dream Space Media"
                  width={72}
                  height={72}
                  className="h-[85%] w-[85%] object-contain"
                  priority
                />
              </div>

              <div className="min-w-0">
                <p className="mb-1 text-[9px] font-medium uppercase tracking-[0.18em] text-neutral-400 sm:text-xs sm:tracking-[0.5em]">
                  Production House &amp; Creative Agency
                </p>

                <h3 className="break-words text-lg font-semibold tracking-[0.08em] text-white sm:text-2xl sm:tracking-[0.18em]">
                  PT DREAM SPACE MEDIA
                </h3>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 font-black leading-[0.98] tracking-[-0.04em] sm:mb-8 sm:text-6xl sm:leading-[0.9] md:text-8xl">
  {/* Mobile: dua baris */}
  <span className="block text-[clamp(1.75rem,8.2vw,3.75rem)] sm:hidden">
    Cinematic Brand
  </span>
  <span className="block text-[clamp(1.75rem,8.2vw,3.75rem)] sm:hidden">
    Experiences
  </span>

  {/* Desktop: tetap tiga baris */}
  <span className="hidden sm:block">
    Cinematic
    <br />
    Brand
    <br />
    Experiences
  </span>
</h1>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-neutral-300 sm:mb-12 sm:text-lg md:text-xl">
              Premium production house &amp; creative agency crafting cinematic
              visuals, luxury advertising campaigns, and modern digital
              storytelling.
            </p>

            {/* Hero Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
              <a
                href="https://wa.me/628131803435"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-center font-semibold text-black shadow-2xl transition duration-500 hover:scale-105 sm:px-8 sm:py-4"
              >
                Start a Project
              </a>

              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center backdrop-blur-xl transition duration-500 hover:bg-white hover:text-black sm:px-8 sm:py-4"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 scale-105 rounded-[40px] bg-gradient-to-br from-white/10 to-transparent blur-2xl" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="absolute inset-0 scale-105 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-70" />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 p-5 sm:p-10">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-300 sm:mb-4 sm:text-sm sm:tracking-[0.3em]">
                  Production House &amp; Creative Agency
                </p>

                <h2 className="text-2xl font-bold leading-tight sm:text-4xl">
                  Visual Stories
                  <br />
                  That Move Culture
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      
{/* Services Section */}
<section
  id="services"
  className="relative px-5 py-16 sm:px-6 sm:py-32"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 sm:mb-20">
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-500 sm:mb-5 sm:tracking-[0.35em]">
        Services
      </p>

      <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl md:text-7xl">
        What We Create
      </h2>

      {/* Petunjuk geser khusus mobile */}
      <p className="mt-4 text-sm text-neutral-400 md:hidden">
        Swipe to explore services →
      </p>
    </div>

    {/* Mobile: horizontal swipe | Desktop: grid 3 kolom */}
    <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain px-5 pb-4 touch-auto sm:-mx-6 sm:gap-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
      {services.map((service) => (
        <div
          key={service.title}
          className="group relative min-h-[380px] w-[82vw] max-w-[360px] shrink-0 snap-start overflow-hidden rounded-[28px] border border-white/10 transition duration-700 hover:-translate-y-3 sm:min-h-[520px] sm:w-[360px] sm:rounded-[36px] md:w-auto md:max-w-none md:shrink md:snap-none"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 scale-100 bg-cover bg-center transition duration-[1800ms] group-hover:scale-110"
            style={{
              backgroundImage: `url(${service.image})`,
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

          <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[2px]" />

          {/* Icon */}
          <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-white/15 bg-white/10 text-2xl backdrop-blur-xl">
            ✦
          </div>

          {/* Service Content */}
          <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-10">
            <div className="translate-y-2 transition duration-700 sm:translate-y-6 sm:group-hover:translate-y-0">
              <h3 className="mb-4 text-2xl font-black tracking-[-0.03em] sm:mb-6 sm:text-4xl">
                {service.title}
              </h3>

              <p className="text-base leading-relaxed text-neutral-200 opacity-90 transition group-hover:opacity-100 sm:text-lg">
                {service.desc}
              </p>
            </div>
          </div>

          {/* Border Effect */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10 transition duration-700 group-hover:ring-white/20 sm:rounded-[36px]" />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Brand Partners Section */}
      <section className="overflow-hidden py-16 sm:py-32">
        <div className="mx-auto mb-10 max-w-7xl px-5 sm:mb-16 sm:px-6">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-500 sm:mb-5 sm:tracking-[0.35em]">
            Brand Partners
          </p>

          <h2 className="font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl sm:leading-tight md:text-7xl">
  {/* Mobile: dua baris dengan ukuran lebih besar */}
  <span className="block text-4xl sm:hidden">
    Trusted By
  </span>
  <span className="block text-4xl sm:hidden">
    Leading Brands
  </span>

  {/* Desktop: tetap dua baris */}
  <span className="hidden sm:block">
    Trusted By
    <br />
    Leading Brands
  </span>
</h2>
        </div>

        <div className="cinematic-marquee">
          <div className="cinematic-track">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="cinematic-logo-card">
                <Image
                  src={client.image}
                  alt={client.name}
                  width={190}
                  height={100}
                  className="pointer-events-none h-auto max-h-[100px] w-auto select-none object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office and Contact Section */}
      <section className="w-full overflow-x-clip px-4 pb-20 sm:px-6 sm:pb-32">
        <div className="mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 gap-6 sm:gap-10 lg:grid-cols-2">
          {/* Office */}
          <div className="relative min-h-[380px] min-w-0 overflow-hidden rounded-[28px] border border-white/10 sm:min-h-[420px] sm:rounded-[40px]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-70" />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex h-full min-w-0 flex-col justify-end p-6 sm:p-10">
              <p className="mb-4 uppercase tracking-[0.3em] text-neutral-300">
                Office
              </p>

              <h3 className="mb-6 text-4xl font-black sm:text-5xl">
                Jakarta
              </h3>

              <p className="max-w-full break-words text-base leading-relaxed text-neutral-200 [overflow-wrap:anywhere] sm:text-lg">
                MR SANYES OFFICE{" "}
                Mall Taman Palem Lantai P8{" "}
                RT.13/RW.10, Kelurahan Cengkareng Timur,{" "}
                Kecamatan Cengkareng, Kota Jakarta Barat
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="w-full min-w-0 rounded-[28px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-2xl sm:rounded-[40px] sm:p-8 lg:p-10">
            <p className="mb-5 uppercase tracking-[0.3em] text-neutral-400">
              Contact
            </p>

            <h3 className="mb-8 break-words text-4xl font-black leading-tight sm:mb-10 sm:text-5xl">
              Let’s Create
              <br />
              Something Extraordinary
            </h3>

            <div className="min-w-0 space-y-5 text-base text-neutral-300 sm:text-lg">
              <p className="break-words [overflow-wrap:anywhere]">
                +62 8131 8034 35
              </p>

              <p className="break-all">dreamspacemedia08@gmail.com</p>
            </div>

            <div className="mt-8 flex min-w-0 flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap">
              <a
                href="https://wa.me/628131803435"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-0 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-4 text-center font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto sm:px-6"
              >
                Contact via WhatsApp
              </a>

              <a
                href="https://glints.com/id/companies/dream-space-media/8f105743-fdbb-4704-81d5-bb34a83db4c2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-0 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-4 text-center font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto sm:px-6"
              >
                Careers
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

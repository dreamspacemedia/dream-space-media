
export default function Home() {
  const services = [
    "Commercial Video Production",
    "Social Media Content",
    "Creative Campaign Strategy",
  ];

  const clients = [
    "Focallure",
    "Roborock",
    "Seven Green",
    "Usmile",
    "Ronmar",
    "Mistine",
    "Mystic",
  ];

  return (
    <main className="bg-black text-white">
      <section className="min-h-screen flex items-center justify-center px-6 border-b border-white/10">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-neutral-500 mb-5">
              PT Dream Space Media
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Production House
              <br />
              & Creative Agency
            </h1>

            <p className="text-neutral-400 text-lg leading-relaxed mb-10 max-w-xl">
              Premium production company focused on cinematic commercials,
              social media campaigns, and brand storytelling for modern brands.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/6281311803435"
                target="_blank"
                className="bg-white text-black px-7 py-4 rounded-2xl font-semibold"
              >
                Start Your Project
              </a>

              <a
                href="#services"
                className="border border-white/20 px-7 py-4 rounded-2xl"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="aspect-[4/5] rounded-[32px] bg-gradient-to-br from-neutral-800 to-neutral-950 border border-white/10 p-10 flex items-end">
            <div>
              <p className="text-neutral-400 mb-3">Trusted by modern brands</p>
              <h2 className="text-3xl font-bold">
                Creative visuals that elevate brand perception.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-28 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="uppercase tracking-[0.35em] text-neutral-500 mb-4">
              Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              What We Do
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {service}
                </h3>

                <p className="text-neutral-400 leading-relaxed">
                  High-end creative execution tailored for premium digital brands.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="uppercase tracking-[0.35em] text-neutral-500 mb-4">
              Selected Clients
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Brands We Worked With
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div
                key={client}
                className="border border-white/10 rounded-2xl p-8 text-center text-xl font-semibold bg-white/[0.02]"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="rounded-[32px] border border-white/10 p-10 bg-white/[0.02]">
            <p className="uppercase tracking-[0.35em] text-neutral-500 mb-4">
              Office
            </p>

            <h3 className="text-3xl font-bold mb-5">
              Jakarta, Indonesia
            </h3>

            <p className="text-neutral-400 leading-relaxed">
              NEO SOHO APARTEMENT NOMOR 3503,
              Jl. Letjen S. Parman No.Kav. 28,
              RT.3/RW.5, Tj. Duren Sel.,
              Kec. Grogol Petamburan.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 p-10 bg-white/[0.02]">
            <p className="uppercase tracking-[0.35em] text-neutral-500 mb-4">
              Contact
            </p>

            <div className="space-y-4 text-lg">
              <p>+62 8131 1803 435</p>
              <p>dreamspacemedia08@gmail.com</p>
              <p>@dreamspacemedia</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-neutral-500 mb-4">
            Ready To Collaborate
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
            Let’s Build Something Exceptional
          </h2>

          <a
            href="https://wa.me/6281311803435"
            target="_blank"
            className="inline-flex bg-white text-black px-8 py-4 rounded-2xl font-semibold"
          >
            Contact via WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

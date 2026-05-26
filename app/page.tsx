export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <p className="uppercase tracking-[0.3em] text-gray-500 mb-6">
          PT Dream Space Media
        </p>

        <h1 className="text-6xl font-black mb-8">
          Production House & Creative Agency
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Premium video production, commercial ads, and social media content.
        </p>

        <a
          href="https://wa.me/6281311803435"
          target="_blank"
          className="bg-white text-black px-8 py-4 rounded-2xl font-semibold"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}

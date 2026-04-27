
export default function About() {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Tech Webbing</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Tech Webbing combines web design, AI automation, and digital marketing to help businesses worldwide grow faster and smarter. Founded by <span className="text-emerald-400 font-semibold">Tarequl Islam</span>, we provide innovative solutions that save time, reduce costs, and increase profits.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Whether you're a local shop or a scaling startup, our AI-powered approach transforms how you work, allowing you to focus on what matters most—growing your business.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise spanning multiple industries and a commitment to excellence, we deliver results that make a real difference to your bottom line.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl p-8 border border-gray-800 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-3xl font-bold">
                  TI
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Tarequl Islam</h3>
                  <p className="text-emerald-400">Founder & CEO</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Our mission is to democratize AI automation and make cutting-edge technology accessible to businesses of all sizes, anywhere in the world."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

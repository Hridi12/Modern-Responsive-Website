import { Bot, Sparkles, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 opacity-0 animate-fadeIn">
          <Sparkles className="w-6 h-6 text-emerald-400" />
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">AI-Powered Business Solutions</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fadeIn animation-delay-200">
          Automate, Scale, and Grow
          <br />
          <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Any Business with AI
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fadeIn animation-delay-400">
          From small shops to global startups, we help businesses streamline operations, generate leads, and increase revenue using AI and smart web automation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeIn animation-delay-600">
          <a href="#contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 flex items-center justify-center gap-2 group">
            Book Your Free AI Consultation
            <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg border border-gray-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 group">
            See Our Services
            <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto opacity-0 animate-fadeIn animation-delay-800">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all transform hover:scale-105 text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">500+</div>
            <p className="text-gray-400">Clients Served</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all transform hover:scale-105 text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">500+</div>
            <p className="text-gray-400">Automations Built</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all transform hover:scale-105 text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">7+</div>
            <p className="text-gray-400">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

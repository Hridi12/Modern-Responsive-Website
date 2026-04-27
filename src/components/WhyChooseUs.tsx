import { CheckCircle, Globe2, Lightbulb, TrendingUp, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'AI + Web Design Tailored for ANY Business',
    description: 'We don\'t believe in one-size-fits-all solutions. Every business is unique, and we craft custom AI automation and web solutions that fit your specific needs, industry, and goals.'
  },
  {
    icon: CheckCircle,
    title: 'Proven Solutions Across Industries',
    description: 'From retail to healthcare, logistics to education—we\'ve successfully deployed AI automation and digital solutions for businesses in virtually every sector.'
  },
  {
    icon: TrendingUp,
    title: 'Flexible, Scalable, and Results-Driven',
    description: 'Our solutions grow with your business. Whether you\'re a startup or an established enterprise, we build systems that scale and deliver measurable ROI.'
  },
  {
    icon: Globe2,
    title: 'Serving EU, Global & USA Clients',
    description: 'With a global perspective and local expertise, we work seamlessly with businesses across Europe, USA, and worldwide, understanding diverse market needs.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation That Saves Time & Money',
    description: 'By automating repetitive tasks and optimizing processes, we help you reduce operational costs while freeing your team to focus on strategic growth.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden" id="why-choose-us">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Tech Webbing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge AI technology with proven web design expertise to deliver exceptional results
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-emerald-500/50 transition-all transform hover:scale-105 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 border border-gray-800 rounded-2xl p-12 text-center backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses worldwide who are already leveraging AI automation to work smarter, not harder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50">
              Start Your Free Consultation
            </a>
            <a href="#testimonials" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg border border-gray-700 transition-all transform hover:scale-105">
              View Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

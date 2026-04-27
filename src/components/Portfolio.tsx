import { ArrowRight, Building2, GraduationCap, Heart, Package, ShoppingCart, Truck } from 'lucide-react';

const industries = [
  {
    icon: ShoppingCart,
    industry: 'E-Commerce & Retail',
    problem: 'Manual inventory management and slow customer support',
    solution: 'AI chatbot for instant support + automated inventory alerts',
    result: '40% faster response time, 25% increase in sales'
  },
  {
    icon: Heart,
    industry: 'Healthcare & Wellness',
    problem: 'Appointment scheduling chaos and patient communication gaps',
    solution: 'Automated booking system + SMS reminders + patient portal',
    result: '60% reduction in no-shows, improved patient satisfaction'
  },
  {
    icon: Building2,
    industry: 'Professional Services',
    problem: 'Time-consuming client onboarding and proposal creation',
    solution: 'Automated intake forms + AI-generated proposals + CRM integration',
    result: '50% time saved on admin tasks, more billable hours'
  },
  {
    icon: Truck,
    industry: 'Logistics & Supply Chain',
    problem: 'Inefficient route planning and delivery tracking',
    solution: 'AI route optimization + real-time tracking dashboard',
    result: '30% fuel cost savings, improved delivery times'
  },
  {
    icon: GraduationCap,
    industry: 'Education & Training',
    problem: 'Manual student enrollment and course management',
    solution: 'Automated enrollment workflows + learning management system',
    result: '70% faster enrollment, better student engagement'
  },
  {
    icon: Package,
    industry: 'Manufacturing & Production',
    problem: 'Inefficient quality control and reporting delays',
    solution: 'AI quality inspection + automated reporting dashboards',
    result: '45% fewer defects, real-time visibility'
  }
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden" id="portfolio">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI Automation & Web Solutions <br />
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              for Any Industry
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've transformed businesses across different sectors with intelligent automation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-blue-400" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-blue-400">
                {item.industry}
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-sm font-semibold text-red-400">Problem</span>
                  </div>
                  <p className="text-gray-400 text-sm pl-4">{item.problem}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm font-semibold text-emerald-400">AI Solution</span>
                  </div>
                  <p className="text-gray-300 text-sm pl-4">{item.solution}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm font-semibold text-blue-400">Result</span>
                  </div>
                  <p className="text-gray-300 text-sm font-semibold pl-4">{item.result}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Don't see your industry? We work with businesses across all sectors.
          </p>
          <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}

import { Bot, Globe, Search, Share2, Target, Wrench, Workflow } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Automation Solutions',
    description: 'Lead generation, customer support chatbots, workflow automation, intelligent reporting, and process optimization powered by AI.',
    features: ['Smart Chatbots', 'Lead Generation', 'Auto-Reporting', 'Process Mining']
  },
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'WordPress and React websites with seamless AI integration, responsive design, and conversion-focused architecture.',
    features: ['WordPress Sites', 'React Apps', 'AI Integration', 'Mobile-First']
  },
  {
    icon: Search,
    title: 'SEO & Digital Marketing',
    description: 'Increase organic traffic and conversions using AI-powered insights, keyword research, and content optimization strategies.',
    features: ['Technical SEO', 'Content Strategy', 'AI Analytics', 'Local SEO']
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Targeted campaigns across all platforms with AI-optimized content scheduling, engagement tracking, and audience analysis.',
    features: ['Content Creation', 'Campaign Management', 'Analytics', 'Community Growth']
  },
  {
    icon: Target,
    title: 'Paid Advertising Campaigns',
    description: 'Automated Google Ads, Facebook Ads, and LinkedIn Ads optimized for maximum ROI with AI-driven bid management.',
    features: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'ROI Optimization']
  },
  {
    icon: Wrench,
    title: 'Website Maintenance & Fixes',
    description: 'Regular updates, security patches, performance monitoring, backup management, and emergency troubleshooting.',
    features: ['Security Updates', 'Performance Tuning', '24/7 Monitoring', 'Quick Fixes']
  },
  {
    icon: Workflow,
    title: 'Business Process Optimization',
    description: 'Automate repetitive tasks, streamline operations, integrate systems, and eliminate bottlenecks for maximum efficiency.',
    features: ['Task Automation', 'System Integration', 'Workflow Design', 'Efficiency Analysis']
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden" id="services">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">AI-Powered Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions designed for businesses of all sizes and industries
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-emerald-500/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-emerald-400" />
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { Mail, MessageSquare, Calendar } from 'lucide-react';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See How AI Can <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Transform Your Business</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Book a free consultation and discover how our AI-powered solutions can revolutionize your operations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">What You'll Get:</h3>
            <div className="space-y-4 mb-8">
              {[
                'Free 30-minute AI automation consultation',
                'Custom business analysis and recommendations',
                'ROI projections for your specific use case',
                'No-obligation proposal tailored to your needs',
                'Access to our portfolio of successful implementations'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  </div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-emerald-900/20 to-blue-900/20 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-bold mb-4">Prefer to reach out directly?</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <a href="mailto:techwebbingofficial@gmail.com" className="hover:text-emerald-300 transition-colors">techwebbingofficial@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <a href="tel:+393447447541" className="hover:text-emerald-300 transition-colors">+39 344 744 7541</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-bold">Book Your Consultation</h3>
            </div>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/techwebbingofficial/30min"
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

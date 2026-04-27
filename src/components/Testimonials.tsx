import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      videoId: '5pJIooiaSt0',
      title: 'Client Success Story',
      rating: 5,
      type: 'youtube'
    },
    {
      videoId: 'DKMwEdgOpgi',
      title: 'Client Testimonial',
      rating: 5,
      type: 'instagram'
    },
    {
      videoId: 'C6O048JJUeA',
      title: 'Success Story',
      rating: 5,
      type: 'instagram'
    },
    {
      videoId: 'CoFOifEsuR_',
      title: 'Client Review',
      rating: 5,
      type: 'instagram'
    },
    {
      videoId: 'C1HyXIpuCC3',
      title: 'Business Testimonial',
      rating: 5,
      type: 'instagram'
    }
  ];

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden" id="testimonials">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See What Our <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real businesses using our AI-powered solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="relative aspect-video bg-gray-800 overflow-hidden">
                {testimonial.type === 'youtube' ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                    title={testimonial.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.instagram.com/reel/${testimonial.videoId}/embed`}
                    title={testimonial.title}
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-300 font-semibold text-lg">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

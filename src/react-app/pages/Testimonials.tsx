import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'Canada',
      course: 'IELTS',
      text: 'Improved my IELTS score from 6.5 to 8.0 in just 3 months! The personalized coaching made all the difference.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200'
    },
    {
      name: 'Ahmed Hassan',
      country: 'Egypt',
      course: 'TOEFL',
      text: 'Best TOEFL preparation. Flexible timings worked perfectly for me. Scored 110!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
    },
    {
      name: 'Priya Sharma',
      country: 'India',
      course: 'PTE',
      text: 'PTE coaching helped me achieve my target score. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200'
    },
    {
      name: 'Michael Chen',
      country: 'China',
      course: 'GRE',
      text: 'GRE Verbal training was exceptional. Clear explanations and great support.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200'
    },
    {
      name: 'Maria Garcia',
      country: 'Spain',
      course: 'IELTS',
      text: 'From 6.0 to 7.5! The writing feedback was incredibly helpful.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200'
    },
    {
      name: 'David Kim',
      country: 'South Korea',
      course: 'CELPIP',
      text: 'Perfect for Canadian immigration. Scored 9 in all sections!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center text-blue-900 mb-4">Student Testimonials</h1>
        <p className="text-xl text-center text-blue-900 mb-12">
          Real stories from students who achieved their target scores
        </p>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Video Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
              <p className="text-blue-900">Video Testimonial 1</p>
            </div>
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
              <p className="text-blue-900">Video Testimonial 2</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Written Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-blue-900">{testimonial.name}</p>
                    <p className="text-sm text-blue-900">{testimonial.country}</p>
                    <p className="text-sm text-blue-900 font-medium">{testimonial.course}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-blue-900 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


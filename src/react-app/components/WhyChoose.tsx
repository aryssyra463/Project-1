export default function WhyChoose() {
  const points = [
    {
      icon: '👤',
      title: '1:1 Coaching',
      description: 'Personalized attention for maximum score improvement'
    },
    {
      icon: '📈',
      title: 'Proven Results',
      description: 'Track record of significant score improvements'
    },
    {
      icon: '🌍',
      title: 'Global Students',
      description: 'Training students from around the world'
    },
    {
      icon: '⏰',
      title: 'Flexible Timings',
      description: 'Schedule classes that fit your timezone'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
              <div className="text-7xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{point.title}</h3>
              <p className="text-blue-900">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


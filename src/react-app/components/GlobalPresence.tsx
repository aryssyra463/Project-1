export default function GlobalPresence() {
  const stats = [
    { label: 'Countries', value: '50+' },
    { label: 'Students Trained', value: '5000+' },
    { label: 'Success Rate', value: '95%' },
    { label: 'Average Score Improvement', value: '1.5+ Bands' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Global Presence</h2>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">{stat.value}</div>
              <div className="text-lg text-blue-900">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <p className="text-center text-blue-900 text-lg">
            Training students from <span className="font-semibold">North America</span>,{' '}
            <span className="font-semibold">Europe</span>, <span className="font-semibold">Asia</span>,{' '}
            <span className="font-semibold">Middle East</span>, and <span className="font-semibold">Africa</span>
          </p>
        </div>
      </div>
    </section>
  );
}


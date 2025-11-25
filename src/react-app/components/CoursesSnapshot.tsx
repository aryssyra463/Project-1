import { Link } from 'react-router-dom';

export default function CoursesSnapshot() {
  const courses = [
    { name: 'IELTS', path: '/courses/ielts', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400' },
    { name: 'TOEFL', path: '/courses/toefl', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400' },
    { name: 'PTE', path: '/courses/pte', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400' },
    { name: 'CELPIP', path: '/courses/celpip', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400' },
    { name: 'GRE', path: '/courses/gre', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Courses Snapshot</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {courses.map((course, index) => (
            <Link
              key={index}
              to={course.path}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="aspect-square">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                  <span className="text-sm font-medium opacity-90">Learn More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


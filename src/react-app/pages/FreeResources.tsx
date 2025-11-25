import { useState } from 'react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function FreeResources() {
  const [email, setEmail] = useState('');

  const resources = [
    {
      type: 'Downloadable',
      title: 'IELTS Writing Task 2 Templates',
      description: 'Essential templates for all essay types',
      download: true
    },
    {
      type: 'Downloadable',
      title: 'TOEFL Vocabulary List (500 Words)',
      description: 'High-frequency words for TOEFL success',
      download: true
    },
    {
      type: 'Downloadable',
      title: 'PTE Speaking Practice Questions',
      description: '100+ practice questions with answers',
      download: true
    },
    {
      type: 'Article',
      title: 'How to Prepare for IELTS in 30 Days',
      description: 'A comprehensive guide to fast-track your preparation',
      download: false
    },
    {
      type: 'Article',
      title: 'Top Mistakes Students Make in TOEFL Listening',
      description: 'Learn from common errors and improve your score',
      download: false
    },
    {
      type: 'Article',
      title: 'GRE Verbal: Vocabulary Building Strategies',
      description: 'Effective methods to expand your vocabulary',
      download: false
    }
  ];

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Download link sent to your email!');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center text-blue-900 mb-4">Free Resources</h1>
        <p className="text-xl text-center text-blue-900 mb-12">
          Download study materials and read helpful articles
        </p>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Download Free IELTS Writing E-book</h2>
          <p className="text-lg mb-6">Get your free guide to IELTS Writing success</p>
          <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg text-blue-900"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
            >
              Download Free E-book
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 text-sm font-semibold rounded mb-3">
                {resource.type}
              </span>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{resource.title}</h3>
              <p className="text-blue-900 mb-4">{resource.description}</p>
              {resource.download ? (
                <button className="text-blue-900 font-semibold hover:text-blue-800">
                  Download →
                </button>
              ) : (
                <a href={`/blog/${resource.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-900 font-semibold hover:text-blue-800">
                  Read Article →
                </a>
              )}
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Blog Articles</h2>
          <div className="space-y-4">
            {resources.filter(r => !r.download).map((article, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{article.title}</h3>
                <p className="text-blue-900 mb-3">{article.description}</p>
                <a href={`/blog/${article.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-900 font-semibold hover:text-blue-800">
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


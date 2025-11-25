import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'IELTS', 'TOEFL', 'GRE', 'PTE', 'CELPIP', 'Tips', 'Strategies'];

  const posts = [
    {
      id: 1,
      title: 'How to Prepare for IELTS in 30 Days',
      category: 'IELTS',
      excerpt: 'A comprehensive guide to fast-track your IELTS preparation and achieve your target score.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Top Mistakes Students Make in TOEFL Listening',
      category: 'TOEFL',
      excerpt: 'Learn from common errors and improve your TOEFL Listening score.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600',
      date: '2024-01-10'
    },
    {
      id: 3,
      title: 'GRE Verbal: Vocabulary Building Strategies',
      category: 'GRE',
      excerpt: 'Effective methods to expand your vocabulary for GRE success.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
      date: '2024-01-05'
    },
    {
      id: 4,
      title: 'PTE Speaking: Tips for High Scores',
      category: 'PTE',
      excerpt: 'Master PTE Speaking with these proven strategies and techniques.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600',
      date: '2024-01-01'
    },
    {
      id: 5,
      title: 'Time Management Tips for Test Day',
      category: 'Tips',
      excerpt: 'Essential time management strategies to maximize your performance.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
      date: '2023-12-28'
    },
    {
      id: 6,
      title: 'Writing High-Scoring Essays: A Step-by-Step Guide',
      category: 'Strategies',
      excerpt: 'Learn the structure and techniques for writing impressive essays.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600',
      date: '2023-12-25'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center text-blue-900 mb-4">Blog</h1>
        <p className="text-xl text-center text-blue-900 mb-12">
          Tips, strategies, and insights for test preparation
        </p>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 mx-auto block px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category.toLowerCase())}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                selectedCategory === category.toLowerCase()
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-100 text-blue-900 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 text-sm font-semibold rounded mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{post.title}</h3>
                <p className="text-blue-900 mb-4">{post.excerpt}</p>
                <p className="text-sm text-blue-900">{new Date(post.date).toLocaleDateString()}</p>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-blue-900">No articles found. Try a different search term or category.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}


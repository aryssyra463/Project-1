import { useParams, Link } from 'react-router-dom';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you'd fetch this from an API
  const post = {
    id: 1,
    title: 'How to Prepare for IELTS in 30 Days',
    category: 'IELTS',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200',
    date: '2024-01-15',
    content: `
      <h2>Introduction</h2>
      <p>Preparing for IELTS in just 30 days might seem challenging, but with the right strategy and dedication, it's absolutely achievable. This guide will walk you through a comprehensive 30-day preparation plan.</p>
      
      <h2>Week 1: Assessment and Foundation</h2>
      <p>Start by taking a full-length practice test to identify your strengths and weaknesses. Focus on understanding the test format and question types for all four modules.</p>
      
      <h2>Week 2: Skill Building</h2>
      <p>Dedicate each day to a specific module. Practice reading comprehension, work on listening skills, develop writing templates, and practice speaking regularly.</p>
      
      <h2>Week 3: Intensive Practice</h2>
      <p>Take daily practice tests and review your mistakes. Focus on time management and develop strategies for each question type.</p>
      
      <h2>Week 4: Final Preparation</h2>
      <p>Take full-length mock tests under exam conditions. Review all your notes, practice speaking with a partner, and ensure you're familiar with the test format.</p>
      
      <h2>Conclusion</h2>
      <p>With consistent practice and the right approach, you can significantly improve your IELTS score in 30 days. Remember to stay focused, practice daily, and maintain a positive mindset.</p>
    `
  };

  const relatedPosts = [
    { id: 2, title: 'Top Mistakes Students Make in TOEFL Listening', category: 'TOEFL' },
    { id: 3, title: 'GRE Verbal: Vocabulary Building Strategies', category: 'GRE' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <Link to="/blog" className="text-blue-900 hover:text-blue-800 mb-6 inline-block">
          ← Back to Blog
        </Link>
        
        <article>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 text-sm font-semibold rounded mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">{post.title}</h1>
          <p className="text-blue-900 mb-8">{new Date(post.date).toLocaleDateString()}</p>
          
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Share This Article</h3>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">
              Share on Facebook
            </button>
            <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">
              Share on Twitter
            </button>
            <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">
              Share on LinkedIn
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Related Posts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                to={`/blog/${related.id}`}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition"
              >
                <span className="text-blue-900 text-sm font-semibold">{related.category}</span>
                <h4 className="text-xl font-bold text-blue-900 mt-2">{related.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


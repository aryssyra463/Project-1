import { Link } from 'react-router-dom';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="/About/PritiGogoi.jpeg"
              alt="Priti Gogoi - Founder of FluentEdge"
              className="w-full h-[492px] object-cover object-top rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Your Expert Trainer</h1>
            <p className="text-xl text-blue-900 mb-6">IELTS/TOEFL/CELPIP/GRE/PTE Specialist</p>
            <p className="text-lg text-blue-900 mb-6">
              An accomplished educator and language trainer with over a decade's international experience in India and the USA, I specialise in English language acquisition, academic communication, and global exam preparation. I help learners achieve fluency, confidence, and clarity through research-driven, learner-focused training. My training approach combines evidence-based methodologies with real-world application to ensure measurable progress.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-3xl font-bold text-blue-900">10+</div>
                <div className="text-blue-900">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">95%</div>
                <div className="text-blue-900">Success Rate</div>
              </div>
            </div>
            <Link
              to="/book-demo"
              className="inline-block px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
            >
              Book a Free Demo Class
            </Link>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">My Teaching Philosophy</h2>
          <p className="text-lg text-blue-900 mb-4">
            I believe that every student is unique and requires a tailored approach to test preparation. My methodology focuses on:
          </p>
          <ul className="list-disc list-inside text-lg text-blue-900 space-y-2">
            <li>Identifying individual strengths and weaknesses</li>
            <li>Building confidence through practice and feedback</li>
            <li>Teaching effective test-taking strategies</li>
            <li>Providing continuous support and motivation</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Global Student Reach</h2>
          <p className="text-lg text-blue-900 mb-4">
            I have successfully trained students from over 50 countries, helping them achieve their academic and professional goals. Whether you're preparing for university admission, immigration, or career advancement, I'm here to guide you.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Certifications & Credentials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">IELTS Certified Trainer</h3>
              <p className="text-blue-900">British Council Certified</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">TOEFL Specialist</h3>
              <p className="text-blue-900">ETS Authorized Trainer</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Master's in Linguistics</h3>
              <p className="text-blue-900">Advanced Language Studies</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">10+ Years Experience</h3>
              <p className="text-blue-900">5000+ Students Trained</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/book-demo"
            className="inline-block px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition text-lg"
          >
            Book a Free Demo Class
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
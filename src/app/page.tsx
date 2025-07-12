import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Placeholder news data - will be replaced with MongoDB data later
  const latestNews = [
    {
      id: 1,
      title: "Christmas Service Schedule",
      excerpt: "Join us for our special Christmas services...",
      date: "2023-12-20",
    },
    {
      id: 2,
      title: "Youth Camp Registration Open",
      excerpt: "Register now for our annual youth camp...",
      date: "2023-12-18",
    },
    {
      id: 3,
      title: "New Worship Album Release",
      excerpt: "Our worship team is releasing a new album...",
      date: "2023-12-15",
    },
  ];

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-90 z-0" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 prose prose-invert">
          <h1 className="mb-6">Welcome to Jakarta Rock Center</h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience the transforming power of worship and community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center not-prose">
            <Link
              href="/small-groups"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Join a Small Group
            </Link>
            <Link
              href="/events"
              className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 prose">
        <h2 className="text-center">Who We Are</h2>
        <p className="text-center">
          Jakarta Rock Center is a vibrant, contemporary Christian church
          committed to helping people experience God's love and discover their
          purpose. We believe in authentic worship, meaningful relationships,
          and making a positive impact in our community.
        </p>
        <div className="text-center not-prose">
          <Link
            href="/about"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Learn More About Us →
          </Link>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 prose">
          <h2 className="text-center">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 not-prose">
            {latestNews.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <Link
                    href={`/news/${news.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 not-prose">
            <Link
              href="/news"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              View All News →
            </Link>
          </div>
        </div>
      </section>

      {/* Kings Word Preview */}
      <section className="max-w-4xl mx-auto px-4 py-16 prose text-center">
        <h2>King's Word</h2>
        <p>
          Daily devotionals and reflections to help you grow in your faith
          journey.
        </p>
        <div className="not-prose">
          <Link
            href="/kings-word"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Read Today's Reflection
          </Link>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Placeholder news data - will be replaced with MongoDB data later
  const latestNews = [
    {
      id: 1,
      title: "Pursuing Holiness",
      excerpt:
        "Join us this month as we explore the theme of pursuing holiness...",
      date: "2024-01-20",
    },
    {
      id: 2,
      title: "Youth Camp Registration Open",
      excerpt: "Register now for our annual youth camp...",
      date: "2024-01-18",
    },
    {
      id: 3,
      title: "New Worship Album Release",
      excerpt: "Our worship team is releasing a new album...",
      date: "2024-01-15",
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
            We help you to fulfill your destiny
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
              className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors text-white"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>

      {/* Our Pastors Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 prose">
        <h2 className="text-center">Our Senior Pastors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
          <div className="text-center">
            <div className="relative w-64 h-64 mx-auto mb-4 overflow-hidden rounded-full">
              <Image
                src="/rds.jpg"
                alt="Pdt. Dr. Ronny Daud Simeon"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h3 className="text-xl font-semibold">
              Pdt. Dr. Ronny Daud Simeon
            </h3>
          </div>
          <div className="text-center">
            <div className="relative w-64 h-64 mx-auto mb-4 overflow-hidden rounded-full">
              <Image
                src="/nancy.jpg"
                alt="Pdm. Nancy Limantono M. TH"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h3 className="text-xl font-semibold">
              Pdm. Nancy Limantono M. TH
            </h3>
          </div>
        </div>
      </section>

      {/* Schedule and Location Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4  text-center">
          <h2>Join Our Services</h2>
          <div className="not-prose bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">
              Kingdom Celebration & Rocky
            </h3>
            <p className="text-xl mb-2">Every Sunday</p>
            <p className="text-lg mb-2">
              📍 5th Floor, Rajawali Place (Samping St. Regis Kuningan)
            </p>
            <p className="text-xl font-semibold">🕚 11.00 WIB</p>
          </div>
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

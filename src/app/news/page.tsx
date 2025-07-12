import { Metadata } from "next";
import Image from "next/image";
import clientPromise from "@/lib/mongodb";
import { News } from "@/models/schemas";

export const metadata: Metadata = {
  title: "News | Jakarta Rock Center",
  description: "Latest news and announcements from Jakarta Rock Center",
};

async function getNews(): Promise<News[]> {
  try {
    const client = await clientPromise;
    const db = client.db("jakartarockcenter");

    const newsItems = await db
      .collection("news")
      .find<News>({})
      .sort({ date: -1 }) // Most recent first
      .limit(12) // Get latest 12 news items
      .toArray();

    return newsItems;
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return [];
  }
}

export default async function NewsPage() {
  const newsItems = await getNews();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Church News</h1>

      {newsItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">
            No news articles available at the moment. Please check back later!
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((news: News) => (
            <article
              key={news._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {news.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                <p className="text-gray-500 mb-2">
                  {new Date(news.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="text-xl font-bold mb-4">{news.title}</h2>
                <p className="text-gray-600 line-clamp-3">{news.content}</p>
                <div className="mt-4 pt-4 border-t">
                  <a
                    href={`/news/${news._id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {newsItems.length > 0 && (
        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Load More News
          </button>
        </div>
      )}
    </div>
  );
}

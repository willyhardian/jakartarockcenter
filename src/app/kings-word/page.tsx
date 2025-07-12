import { Metadata } from "next";
import clientPromise from "@/lib/mongodb";
import { KingsWord } from "@/models/schemas";

export const metadata: Metadata = {
  title: "King&apos;s Word | Jakarta Rock Center",
  description:
    "Daily devotionals and reflections to help you grow in your faith",
};

async function getReflections(): Promise<KingsWord[]> {
  try {
    const client = await clientPromise;
    const db = client.db("jakartarockcenter");

    const reflections = await db
      .collection("kings-word")
      .find<KingsWord>({})
      .sort({ date: -1 }) // Most recent first
      .limit(10) // Get latest 10 reflections
      .toArray();

    return reflections;
  } catch (error) {
    console.error("Failed to fetch reflections:", error);
    return [];
  }
}

export default async function KingsWordPage() {
  const reflections = await getReflections();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">King&apos;s Word</h1>
      <p className="text-xl text-gray-600 text-center mb-12">
        Daily devotionals and reflections to help you grow in your faith journey
      </p>

      {reflections.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">
            No reflections available at the moment. Please check back later!
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {reflections.map((reflection: KingsWord) => (
            <article
              key={reflection._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-8">
                <div className="mb-6">
                  <p className="text-gray-500">
                    {new Date(reflection.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="text-2xl font-bold mt-2">
                    {reflection.title}
                  </h2>
                </div>

                <div className="prose max-w-none">
                  {/* Split content into paragraphs */}
                  {reflection.content
                    .split("\n")
                    .map((paragraph: string, index: number) => (
                      <p key={index} className="text-gray-600 mb-4">
                        {paragraph}
                      </p>
                    ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-gray-500">
                    Written by{" "}
                    <span className="font-semibold">{reflection.author}</span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="mt-12 text-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
          Load More Reflections
        </button>
      </div>
    </div>
  );
}

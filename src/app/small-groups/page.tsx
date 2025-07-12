import { Metadata } from "next";
import clientPromise from "@/lib/mongodb";
import { SmallGroup } from "@/models/schemas";

export const metadata: Metadata = {
  title: "Small Groups | Jakarta Rock Center",
  description: "Join a small group at Jakarta Rock Center",
};

async function getSmallGroups(): Promise<SmallGroup[]> {
  try {
    const client = await clientPromise;
    const db = client.db("jakartarockcenter");

    const groups = await db
      .collection("small-groups")
      .find<SmallGroup>({})
      .sort({ name: 1 }) // Alphabetical order
      .toArray();

    return groups;
  } catch (error) {
    console.error("Failed to fetch small groups:", error);
    return [];
  }
}

export default async function SmallGroupsPage() {
  const groups = await getSmallGroups();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Small Groups</h1>
        <p className="text-xl text-gray-600">
          Connect with others and grow in your faith journey
        </p>
      </div>

      {groups.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">
            No small groups are currently available.
          </p>
          <p className="text-gray-600">
            Please check back later or contact us to learn about starting a new
            group.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group: SmallGroup) => (
            <div
              key={group._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{group.name}</h2>
                <p className="text-gray-600 mb-4">{group.description}</p>

                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-semibold">Meets:</span>{" "}
                    {group.meetingDay} at {group.meetingTime}
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span>{" "}
                    {group.location}
                  </p>
                  <p>
                    <span className="font-semibold">Contact:</span>{" "}
                    {group.contactPerson.name} ({group.contactPerson.phone})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Start a New Group</h2>
        <p className="text-gray-600 mb-6">
          Feel called to lead a small group? We'd love to help you get started!
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          Contact Us to Learn More
        </a>
      </div>
    </div>
  );
}

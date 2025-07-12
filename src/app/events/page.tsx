import { Metadata } from "next";
import clientPromise from "@/lib/mongodb";
import { Event } from "@/models/schemas";

export const metadata: Metadata = {
  title: "Events | Jakarta Rock Center",
  description: "Upcoming events at Jakarta Rock Center",
};

async function getEvents(): Promise<Event[]> {
  try {
    const client = await clientPromise;
    const db = client.db("jakartarockcenter");

    const events = await db
      .collection("events")
      .find<Event>({
        date: { $gte: new Date() }, // Only future events
      })
      .sort({ date: 1 }) // Ascending order by date
      .toArray();

    return events;
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return [];
  }
}

export default async function Events() {
  const events = await getEvents();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>

      {events.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">
            No upcoming events at the moment. Please check back later!
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event: Event) => (
            <div
              key={event._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-blue-600 font-semibold">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-gray-600">{event.time}</p>
                </div>

                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>

                <div className="border-t pt-4">
                  <p className="text-gray-600">
                    <span className="font-semibold">Location:</span>{" "}
                    {event.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Want to stay updated with our events?{" "}
          <a
            href="/contact"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Subscribe to our newsletter
          </a>
        </p>
      </div>
    </div>
  );
}

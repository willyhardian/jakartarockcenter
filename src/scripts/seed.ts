import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env.local" });

// Check for environment variable
if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

// Define Mongoose Schemas
const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const KingsWordSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  date: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const SmallGroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  meetingDay: { type: String, required: true },
  meetingTime: { type: String, required: true },
  contactPerson: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
  },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create Mongoose models
const Event = mongoose.model("Event", EventSchema);
const KingsWord = mongoose.model("KingsWord", KingsWordSchema);
const News = mongoose.model("News", NewsSchema);
const SmallGroup = mongoose.model("SmallGroup", SmallGroupSchema);

// Sample data
const sampleEvents = [
  {
    title: "Sunday Worship Service",
    date: new Date("2024-01-21"),
    time: "10:00 AM",
    location: "Main Sanctuary",
    description:
      "Join us for our weekly Sunday worship service with praise, prayer, and teaching.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Youth Night",
    date: new Date("2024-01-26"),
    time: "7:00 PM",
    location: "Youth Center",
    description: "A night of fellowship, games, and Bible study for teenagers.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const sampleKingsWords = [
  {
    title: "Walking in Faith",
    content:
      "Faith is the substance of things hoped for, the evidence of things not seen. In our daily walk with God, we must trust His promises even when we cannot see the path ahead.",
    author: "Pastor John Smith",
    date: new Date("2024-01-20"),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "The Power of Prayer",
    content:
      "Prayer is our direct line of communication with God. Through prayer, we build our relationship with Him and find strength for our daily challenges.",
    author: "Pastor Sarah Johnson",
    date: new Date("2024-01-19"),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const sampleNews = [
  {
    title: "New Building Project Announcement",
    content:
      "We are excited to announce our new building project that will expand our facilities to better serve our growing community.",
    image: "/images/building-project.jpg",
    date: new Date("2024-01-18"),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Mission Trip Report",
    content:
      "Our mission team has returned from their trip to Southeast Asia. Read about their experiences and the lives they touched.",
    date: new Date("2024-01-17"),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const sampleSmallGroups = [
  {
    name: "Young Adults Fellowship",
    location: "Church Conference Room",
    meetingDay: "Wednesday",
    meetingTime: "7:30 PM",
    contactPerson: {
      name: "Michael Chen",
      email: "michael.chen@example.com",
      phone: "+62 812-1234-5678",
    },
    description:
      "A group for young professionals and college students to study the Bible and share life together.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Family Bible Study",
    location: "Various Homes",
    meetingDay: "Friday",
    meetingTime: "7:00 PM",
    contactPerson: {
      name: "Lisa Anderson",
      email: "lisa.anderson@example.com",
      phone: "+62 812-8765-4321",
    },
    description:
      "A family-oriented small group focusing on applying Biblical principles to family life.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Seed function
async function seedDatabase() {
  try {
    // Connect to MongoDB
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "jakartarockcenter",
    });
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("MONGODB_URI is not defined in .env.local");
    }
    await mongoose.connect(mongoUri, {
      dbName: "jrc_database", // explicitly set database name
    });
    console.log("Connected successfully!");

    // Clear existing data
    console.log("Clearing existing data...");
    await Promise.all([
      Event.deleteMany({}),
      KingsWord.deleteMany({}),
      News.deleteMany({}),
      SmallGroup.deleteMany({}),
    ]);
    console.log("Existing data cleared.");

    // Insert new data
    console.log("Inserting new data...");
    await Promise.all([
      Event.insertMany(sampleEvents),
      KingsWord.insertMany(sampleKingsWords),
      News.insertMany(sampleNews),
      SmallGroup.insertMany(sampleSmallGroups),
    ]);
    console.log("Sample data inserted successfully!");

    // Close connection
    await mongoose.connection.close();
    console.log("Database connection closed.");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();

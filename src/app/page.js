import connectDB from "@/lib/db";

async function db() {
  await connectDB();
}

export default function Home() {
  db();

  return <div className="text-blue-600">PainSignal</div>;
}

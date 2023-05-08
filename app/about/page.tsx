export const dynamic = "force-static";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "We are a social media company!",
};

export default function About() {
  return (
    <main className="p-8">
      <h1 className="pb-4 text-2xl font-extrabold">About</h1>
      <p>We are a social media company!</p>
    </main>
  );
}

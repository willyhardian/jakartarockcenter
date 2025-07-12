"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function About() {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")?.slice(1);
        const element = document.getElementById(id!);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Navigation Menu */}
      <nav className="bg-white sticky top-20 z-10 border-b mb-12 py-4">
        <ul className="flex space-x-6 justify-center text-gray-600">
          <li>
            <a
              href="#who-we-are"
              className="hover:text-blue-600 transition-colors"
            >
              Who We Are
            </a>
          </li>
          <li>
            <a
              href="#our-mission"
              className="hover:text-blue-600 transition-colors"
            >
              Our Mission
            </a>
          </li>
          <li>
            <a
              href="#our-pastor"
              className="hover:text-blue-600 transition-colors"
            >
              Our Pastor
            </a>
          </li>
        </ul>
      </nav>

      {/* Who We Are Section */}
      <section id="who-we-are" className="mb-20 scroll-mt-40">
        <h2 className="text-4xl font-bold mb-8">Who We Are</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Jakarta Rock Center is a vibrant, contemporary Christian church
              that has been serving the Jakarta community since 2010. We are a
              diverse congregation united by our love for Jesus Christ and our
              commitment to making a positive impact in our city.
            </p>
            <p className="text-lg text-gray-600">
              Our church is built on the foundation of authentic worship,
              life-giving community, and passionate service. We believe that
              everyone has a unique purpose, and we are here to help you
              discover and fulfill that purpose.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/church-building.jpg"
              alt="Jakarta Rock Center building"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="our-mission" className="mb-20 scroll-mt-40">
        <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Vision</h3>
            <p className="text-lg text-gray-600 mb-8">
              To be a transformative presence in Jakarta, leading people to an
              authentic encounter with God and fostering a community that
              reflects His love and power.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Mission</h3>
            <p className="text-lg text-gray-600 mb-8">
              We exist to help people know God, find freedom, discover purpose,
              and make a difference.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Values</h3>
            <ul className="space-y-4 text-lg text-gray-600">
              <li>• Authentic Worship</li>
              <li>• Biblical Teaching</li>
              <li>• Community Connection</li>
              <li>• Passionate Service</li>
              <li>• Next Generation Focus</li>
              <li>• Cultural Relevance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Pastor Section */}
      <section id="our-pastor" className="scroll-mt-40">
        <h2 className="text-4xl font-bold mb-8">Our Pastor</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/pastor.jpg"
              alt="Lead Pastor"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Pastor John Doe</h3>
            <p className="text-lg text-gray-600 mb-6">
              Pastor John has been leading Jakarta Rock Center since its
              inception in 2010. With over 20 years of ministry experience, he
              brings a unique blend of biblical wisdom and contemporary
              relevance to his leadership.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              His passion is to see people encounter God&apos;s love and
              discover their full potential in Christ. Under his leadership,
              Jakarta Rock Center has grown from a small group of believers to a
              thriving community of faith.
            </p>
            <p className="text-lg text-gray-600">
              Pastor John holds a Master&apos;s degree in Theology and is known
              for his practical, life-applicable teaching style that helps
              people connect with God in meaningful ways.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

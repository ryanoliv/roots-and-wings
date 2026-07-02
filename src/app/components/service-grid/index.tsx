// src/app/components/service-grid/index.tsx
import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: "After-school tutoring",
    tagline: "Your child doesn’t need more pressure. They need someone who gets them.",
    description: "We use the Connect-Ed Method to help your child re-engage with learning, rebuild confidence and make real academic progress. Every session is tailored to your child’s pace, learning profile and emotional state on that day.",
    link: "/our-programme"
  },
  {
    title: "Homeschool & flex-school",
    tagline: "A complete education, built entirely around your child.",
    description: "Whether you’re home educating full-time, flexi-schooling, or supporting a child who’s recently left school — we build a bespoke programme around your child. Academic structure and emotional safety, together.",
    link: "/our-programme"
  },
  {
    title: "Emotional Resilience products",
    tagline: "The tools from our sessions, now for home and classroom.",
    description: "12 animal characters. 12 emotional skills. One beautifully designed resource that children return to again and again. Our curriculum and workbooks are grounded in the Connect-Ed Method.",
    link: "/shop"
  }
];

export default function ServiceGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-lg shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-blue-600 font-medium text-sm mb-4 italic">{service.tagline}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
              <Link href={service.link} className="text-blue-600 font-semibold hover:underline">
                Find out more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
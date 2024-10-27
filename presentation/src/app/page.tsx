"use client";
import React, { useState } from "react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Introduction to Shadcn UI",
      subtitle:
        "Shadcn UI is a modern, headless component library specifically designed to enhance UI development for Next.js applications. Built with accessibility and customization in mind, Shadcn UI empowers developers to create flexible, responsive interfaces that adhere to best practices in user experience.",
    },
    {
      title: "What is Shadcn UI?",
      content: (
        <p>
          Shadcn UI is a component library designed to help developers create
          accessible, customizable, and highly adaptable interfaces within
          Next.js applications. Unlike traditional UI libraries, Shadcn UI
          offers headless components, which are unstyled by default. This
          approach allows developers to have full control over the styling and
          integrate their preferred CSS frameworks, like Tailwind CSS.
        </p>
      ),
    },
    {
      title: "Key Features of Shadcn UI:",
      content: (
        <ul className="list-disc">
          <h2 className="text-xl font-bold text-black">
            1. Headless Components:
          </h2>
          <p>
            Shadcn UI gives you basic components that don&apos;t come with their own
            styles. This means you can easily change how they look or mix them
            with your favorite design styles.
          </p>
          <h2 className="text-xl font-bold text-black">
            2. Developer-Friendly:
          </h2>
          <p>
            Shadcn UI is made especially for Next.js developers. It includes
            clear instructions and tools to help you set everything up quickly
            and without hassle.
          </p>
          <h2 className="text-xl font-bold text-black">
            3. Works Well with Tailwind:
          </h2>
          <p>
            If you&apos;re using Tailwind CSS for your styles, Shadcn UI fits right
            in! It allows you to customize your components easily and makes your
            design process faster.
          </p>
        </ul>
      ),
    },
    {
      title: "Pros and Cons of Shadcn UI",
      content: (
        <ul className="list-disc">
          <li className="list-none font-bold text-lg">1. Pros:</li>
          <li>Quick to set up in Next.js.</li>
          <li>Tailwind compatibility makes styling easy.</li>
          <li>Developer-friendly documentation.</li>

          <li className="list-none font-bold text-lg">2. Cons:</li>
          <li>Limited support outside Next.js.</li>
          <li>Less flexibility if you&apos;re not using Tailwind.</li>
        </ul>
      ),
    },
    {
      title: "What is Radix UI?",
      content: (
        <p>
          Redux is a JavaScript library for managing application state in a
          predictable way. It stores all the app&apos;s data in a central place
          called the store. When something changes, an action is dispatched,
          which is processed by reducers to update the state. This makes it
          easier to manage complex data and keep everything organized in your
          app.
        </p>
      ),
    },
    {
      title: "Key Features of Radix UI:",
      content: (
        <ul className="list-disc">
          <li>
            Accessibility: Fully accessible by default, with a strong focus on
            WCAG standards.
          </li>
          <li>
            Unstyled Components: Provides only functionality, allowing
            developers to add custom styles.
          </li>
        </ul>
      ),
    },
    {
      title: "Pros and Cons of Radix UI",
      content: (
        <ul className="list-disc">
          <li className="list-none font-bold text-lg">1. Pros:</li>
          <li>Complete control over styling.</li>
          <li>Ensures accessibility out-of-the-box.</li>
          <li>Broad support for React.</li>

          <li className="list-none font-bold text-lg">2. Cons:</li>
          <li>More work required for styling.</li>
          <li>
            Might need additional libraries for better styling compatibility.
          </li>
        </ul>
      ),
    },
    {
      title: "Summary",
      content: (
        <ul className="list-disc">
          <li>
            Shadcn UI: Great for Next.js and Tailwind users; balances styling
            with accessibility.
          </li>
          <li>
            Radix UI: Offers flexibility and accessibility, perfect for broader
            React projects.
          </li>
        </ul>
      ),
    },
  ];

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black py-10">
      <h1 className="text-3xl font-bold mt-20 lg:ml-0 ml-6">
        Shadcn UI & Radix UI Presentation
      </h1>

      <div className="mt-8 p-12 border rounded-lg bg-white shadow-md w-11/12 md:w-2/3 lg:w-55% h-full">
        <h2 className="text-2xl font-semibold text-blue-600">
          {slides[currentSlide].title}
        </h2>
        {slides[currentSlide].subtitle && (
          <h3 className="text-lg text-gray-600">
            {slides[currentSlide].subtitle}
          </h3>
        )}
        <div className="mt-4 text-gray-800 text-left">
          {slides[currentSlide].content}
        </div>
      </div>

      <div className="flex mt-6 space-x-4">
        <button
          onClick={() => goToSlide(currentSlide - 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
          disabled={currentSlide === 0}
        >
          Previous
        </button>
        <button
          onClick={() => goToSlide(currentSlide + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
          disabled={currentSlide === slides.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

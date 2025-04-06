"use client";
import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Free Plan",
    price: "$0",
    description: "Free for everyone",
    button: "Get Started",
    features: [
      "✅ 5 Course Curation Limit",
      "🎯Customize: Category, Duration, No. of Chapters",
      "✍️ Customize: Course Name & Description"
    ],
    unavailable: [
      "📚 Customize: Chapter Name & Content",
      "🎥 Video Preference (Select preferred video sources)",
      "🔊 AI Voice Assistant (to read course content)",
      "🚀 On Demand Features"
    ],
  },
  {
    title: "Pro Plan",
    price: "$9.99",
    description: "Advanced features for professionals",
    button: "Upgrade Now",
    features: [
      "✅ 5 Course Curation Limit",
      "🎯Customize: Category, Duration, No. of Chapters",
      "✍️ Customize: Course Name & Description",
      "📚 Customize: Chapter Name & Content",
      "🎥 Video Preference (Select preferred video sources)"
    ],
    unavailable: [
      "🔊 AI Voice Assistant (to read course content)",
      "🚀 On Demand Features"
    ],
  },
  {
    title: "Developer Plan",
    price: "$14.99",
    description: "Developer features for professionals",
    button: "Beast Mode",
    features: [
      "✅ 5 Course Curation Limit",
      "🎯Customize: Category, Duration, No. of Chapters",
      "✍️ Customize: Course Name & Description",
      "📚 Customize: Chapter Name & Content",
      "🎥 Video Preference (Select preferred video sources)",
      "🔊 AI Voice Assistant (to read course content)",
      "🚀 On Demand Features"
    ],
    unavailable: [],
  }
];

const UpgradePlans = () => {
  return (
    <div className="min-h-screen text-white px-5 py-10 relative overflow-hidden">
      {/* 🎉 Honeycomb Background */}
      <div className="absolute inset-0 honeycomb-background z-0 pointer-events-none" />

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-4">Upgrade Your Plan</h1>
        <p className="text-center text-gray-400 mb-10">Choose the plan that suits your AI learning journey</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg hover:scale-105 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold">{plan.title}</h2>
              <p className="text-3xl font-semibold mt-2">{plan.price} <span className="text-base text-gray-400">/month</span></p>
              <p className="text-sm text-gray-400 mb-4">{plan.description}</p>

              <button className="bg-white text-black px-5 py-2 rounded-md font-semibold mb-6 hover:bg-gray-300 transition">
                {plan.button}
              </button>

              <h3 className="font-semibold text-lg mb-3">What's Included</h3>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-purple-400">
                    <span>✔</span> {feature}
                  </li>
                ))}
                {plan.unavailable.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-500 line-through">
                    <span>✖</span> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpgradePlans;

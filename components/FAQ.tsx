"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you decorate destination weddings?",
    answer:
      "Yes! We provide complete wedding decoration services for destination weddings across India.",
  },
  {
    question: "How early should I book my wedding decoration?",
    answer:
      "We recommend booking at least 2–3 months in advance so we can plan every detail perfectly.",
  },
  {
    question: "Can you customize decorations according to my theme?",
    answer:
      "Absolutely! Every wedding is unique. We create customized themes based on your vision, venue, and budget.",
  },
  {
    question: "Do you provide floral decorations?",
    answer:
      "Yes, we provide premium fresh flower decorations including stage, mandap, entrance, and table arrangements.",
  },
  {
    question: "Which cities do you serve?",
    answer:
      "We primarily serve Delhi NCR, Noida, Ghaziabad, Gurugram, and also take destination wedding bookings.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-28 bg-black-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
  key={index}
  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
>
            <button
  onClick={() =>
    setOpenIndex(openIndex === index ? null : index)
  }
  className="w-full flex justify-between items-center p-6 text-left"
>
  <span className="text-lg font-semibold text-gray-900">
    {faq.question}
  </span>

  <span className="text-3xl font-light text-yellow-600">
    {openIndex === index ? "−" : "+"}
  </span>
</button>

            {openIndex === index && (
  <div className="px-6 pb-6 text-gray-600 leading-8 border-t border-gray-100">
    {faq.answer}
  </div>
)}
          </div>
        ))}
      </div>
    </section>
  );
}
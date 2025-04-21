import React from 'react';

const FAQ = () => {
    const faqs = [
        { question: "What is this platform about?", answer: "This platform helps users to manage events efficiently." },
        { question: "How do I create an event?", answer: "You can create an event by going to the 'Create Event' section." },
        // Add more FAQs as needed.
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border p-4 rounded shadow">
                        <h2 className="font-semibold">{faq.question}</h2>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
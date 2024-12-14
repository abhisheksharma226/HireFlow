import React from 'react';

const FAQs = () => {
  const faqs = [
    { question: 'How do I schedule an interview?', answer: '' },
    { question: 'Will I be charged per interview?', answer: '' },
    { question: 'Can I get a trial for On-demand interviews?', answer: '' },
    { question: "How is Intervue's Platform different than zoom, google meets and teams?", answer: '' },
    { question: 'Do Interviewers provide detailed feedback?', answer: '' },
    { question: 'Can I add team members?', answer: '' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="w-full max-w-2xl bg-gray-100 p-6 rounded-lg shadow-lg">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-gray-600">Still have doubts? <span className="text-blue-500">Talk to our representative</span></p>
      </div>
    </div>
  );
};

export default FAQs;

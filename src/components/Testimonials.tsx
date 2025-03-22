
import React from 'react';

const testimonials = [
  {
    quote: "This platform has completely transformed how our team collaborates. The integration of Notion-like organization with AI insights is game-changing.",
    author: "Sarah Johnson",
    role: "Product Manager, Atlassian",
    avatar: "SJ"
  },
  {
    quote: "I've tried dozens of productivity tools, but this is the first one that actually adapts to how I think rather than forcing me into a specific workflow.",
    author: "Michael Chen",
    role: "UX Designer, Google",
    avatar: "MC"
  },
  {
    quote: "The AI-powered features have helped us discover insights in our documentation that we would have never found otherwise. It's like having an extra team member.",
    author: "Priya Patel",
    role: "Engineering Lead, Stripe",
    avatar: "PP"
  },
  {
    quote: "As someone who manages multiple projects simultaneously, this platform has been a lifesaver for keeping everything organized and accessible.",
    author: "David Rodriguez",
    role: "Freelance Consultant",
    avatar: "DR"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-gray-500 tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Loved by thousands of teams
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See why people choose our platform for their productivity needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-hover bg-white rounded-xl p-8 border border-gray-100 shadow-soft relative"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
              
              <div className="flex flex-col h-full">
                <p className="text-gray-700 mb-6 flex-grow">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

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
    <section id="testimonials" className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-gray-500 tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Loved by thousands of teams
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See why people choose JotIt for their productivity needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border border-gray-100 shadow-none hover:shadow-md transition-all duration-300 bg-white/70 backdrop-blur-sm transform hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/90"
            >
              <CardContent className="pt-6">
                <div className="mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mt-4">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center pt-0 border-t border-gray-100 mt-6">
                <HoverCard>
                  <HoverCardTrigger>
                    <div className="flex-shrink-0 h-9 w-9 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-600 font-medium text-sm cursor-pointer hover:from-gray-200 hover:to-gray-300 transition-colors">
                      {testimonial.avatar}
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-64 p-4">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{testimonial.author}</p>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                      <p className="text-xs mt-2 text-gray-600">Verified JotIt user since 2023</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

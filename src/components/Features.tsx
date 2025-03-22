
import React from 'react';
import { Check } from 'lucide-react';

const featuresList = [
  {
    title: "Intelligent Organization",
    description: "Structure your content with advanced, flexible organization tools that adapt to your thinking process.",
    icon: "📊"
  },
  {
    title: "Real-time Collaboration",
    description: "Work together seamlessly with your team, with changes syncing instantly across all devices.",
    icon: "👥"
  },
  {
    title: "AI-Powered Insights",
    description: "Get intelligent suggestions and insights that help you discover connections in your content.",
    icon: "✨"
  },
  {
    title: "Customizable Workflows",
    description: "Tailor the platform to fit your unique workflow needs with flexible customization options.",
    icon: "⚙️"
  },
  {
    title: "Secure & Private",
    description: "Your data is encrypted and secure, with granular permission controls for shared content.",
    icon: "🔒"
  },
  {
    title: "Cross-Platform Access",
    description: "Access your workspace from any device, with native apps for desktop, mobile, and web.",
    icon: "📱"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-gray-500 tracking-wide uppercase">
            Features
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Everything you need in one place
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover all the ways our platform can transform your productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index}
              className="feature-card-hover bg-white rounded-xl p-8 border border-gray-100 shadow-soft"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="mt-6 space-y-2">
                {[1, 2].map((item) => (
                  <div key={item} className="flex items-start">
                    <Check size={18} className="text-gray-400 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-500">Feature benefit {item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

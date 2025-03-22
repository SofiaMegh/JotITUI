
import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-50 to-transparent"></div>
      
      <div className="relative max-w-5xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_top_right,#3a3a3a,transparent_50%)]"></div>
        
        <div className="relative px-6 py-16 md:py-20 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-2xl mx-auto text-balance">
            Ready to transform your workflow?
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Join thousands of teams who've already upgraded their productivity. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 font-medium text-lg rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-colors shadow-sm">
              Get Started
            </button>
            <button className="px-8 py-3 font-medium text-lg rounded-lg bg-transparent border border-gray-600 text-white hover:bg-white/10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

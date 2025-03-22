
import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-gray-50 to-transparent z-[-1]"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <span className="inline-block animate-fade-in opacity-0 animate-delay-100 px-3 py-1 mb-4 text-sm font-medium bg-gray-100 rounded-full">
            Reimagine your workflow
          </span>
          
          <h1 className="animate-fade-up opacity-0 text-4xl md:text-6xl font-bold tracking-tight text-balance">
            All-in-one workspace for your best ideas
          </h1>
          
          <p className="animate-fade-up opacity-0 animate-delay-200 text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            Organize your thoughts, collaborate seamlessly, and discover insights with our intuitive platform.
          </p>
          
          <div className="animate-fade-up opacity-0 animate-delay-300 flex flex-col md:flex-row gap-4 justify-center pt-6">
            <button className="px-8 py-3 font-medium rounded-lg bg-black text-white hover:bg-gray-800 transition shadow-sm">
              Get Started — Free
            </button>
            <button className="px-8 py-3 font-medium rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition shadow-sm">
              See how it works
            </button>
          </div>
        </div>
        
        <div className="mt-20 animate-fade-in opacity-0 animate-delay-500">
          <div className="relative mx-auto max-w-5xl glass-effect rounded-xl overflow-hidden shadow-glass animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/50 to-white/30"></div>
            <div className="h-[400px] md:h-[500px] bg-gray-100 rounded-lg m-2 overflow-hidden flex items-center justify-center">
              <div className="text-gray-400 font-medium">Dashboard Preview</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

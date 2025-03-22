
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

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
            <div className="bg-white rounded-lg m-2 overflow-hidden">
              {/* Dashboard UI with productivity images */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="w-72 h-6 bg-gray-100 rounded-md"></div>
                  <div className="w-6 h-6 bg-gray-100 rounded-md"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 h-[400px] md:h-[500px]">
                {/* Sidebar */}
                <div className="hidden md:block md:col-span-3 border-r border-gray-100 p-4">
                  <div className="space-y-4">
                    <div className="w-full h-8 bg-black rounded-md"></div>
                    <div className="w-full h-8 bg-gray-100 rounded-md"></div>
                    <div className="w-full h-8 bg-gray-100 rounded-md"></div>
                    <div className="w-full h-8 bg-gray-100 rounded-md"></div>
                    <div className="w-full h-8 bg-gray-100 rounded-md"></div>
                  </div>
                </div>
                
                {/* Main content with productivity images */}
                <div className="col-span-9 p-4">
                  <div className="relative h-full overflow-hidden rounded-lg">
                    {images.map((src, index) => (
                      <div
                        key={index}
                        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                        style={{ opacity: currentImage === index ? 1 : 0 }}
                      >
                        <img 
                          src={src} 
                          alt={`Productivity image ${index + 1}`} 
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {index === 0 ? "Streamline your workflow" : 
                               index === 1 ? "Collaborate with your team" : 
                               "Bring your ideas to life"}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {index === 0 ? "Everything you need in one organized space" : 
                               index === 1 ? "Work together in real-time from anywhere" : 
                               "Turn concepts into actionable projects"}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

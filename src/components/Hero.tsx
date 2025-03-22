
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
  ];
  
  const usageSummaries = [
    {
      title: "Team collaboration at its best",
      description: "93% of teams reported improved project clarity after one week of use."
    },
    {
      title: "Boosting remote productivity",
      description: "Remote teams save an average of 6 hours per week on information retrieval."
    },
    {
      title: "Transforming idea management",
      description: "Users organize 3× more ideas and execute 2× faster on key projects."
    }
  ];

  // Sidebar menu items for the dashboard preview
  const sidebarItems = [
    { name: "My Workspace", isActive: true },
    { name: "Shared Projects", isActive: false },
    { name: "Team Goals", isActive: false },
    { name: "Knowledge Base", isActive: false },
    { name: "Meeting Notes", isActive: false }
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
            Organize your thoughts, collaborate seamlessly, and discover insights with JotIt.
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
                  <div className="mb-6">
                    <h3 className="text-xs uppercase tracking-wider text-gray-500 font-medium pb-2">
                      Workspaces
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {sidebarItems.map((item, index) => (
                      <div 
                        key={index} 
                        className={`w-full py-2 px-3 rounded-md flex items-center text-sm ${
                          item.isActive 
                            ? 'bg-black text-white font-medium' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors'
                        }`}
                      >
                        <span>{item.name}</span>
                        {item.isActive && <span className="ml-auto text-xs bg-white/20 px-1.5 py-0.5 rounded">3</span>}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xs uppercase tracking-wider text-gray-500 font-medium pb-2">
                      Recent Activity
                    </h3>
                    <div className="space-y-3 mt-2">
                      <div className="flex items-center text-xs text-gray-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        <span>Product roadmap updated</span>
                        <span className="ml-auto">2m ago</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span>New comment from Alex</span>
                        <span className="ml-auto">18m ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Main content with productivity images */}
                <div className="col-span-9 p-4">
                  <div className="relative h-full overflow-hidden rounded-lg">
                    {/* Dashboard heading */}
                    <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-white via-white to-transparent">
                      <h2 className="text-2xl font-bold text-gray-900">Welcome to Your JotIt Dashboard</h2>
                      <p className="text-sm text-gray-600">Here's how your team is making progress today</p>
                    </div>
                    
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
                              {usageSummaries[index].title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {usageSummaries[index].description}
                            </p>
                            <div className="mt-3 flex items-center">
                              <div className="flex -space-x-2">
                                {[...Array(3)].map((_, i) => (
                                  <div key={i} className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                                    {String.fromCharCode(65 + i)}
                                  </div>
                                ))}
                              </div>
                              <div className="ml-3 text-xs text-gray-500">Active now</div>
                            </div>
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

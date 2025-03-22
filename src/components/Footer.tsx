
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          <div className="col-span-2">
            <div className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 mb-4">
              Notion<span className="font-light">Perplexity</span>
            </div>
            <p className="text-gray-600 max-w-sm">
              The all-in-one workspace for your notes, tasks, wikis, and databases.
            </p>
          </div>
          
          {['Product', 'Company', 'Resources'].map((category) => (
            <div key={category}>
              <h3 className="font-medium text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-3">
                {[1, 2, 3, 4].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                      {category} Link {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2023 NotionPerplexity, Inc. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Twitter', 'LinkedIn', 'GitHub', 'YouTube'].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-gray-700 text-sm transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

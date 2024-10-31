import React from 'react';

function OutputCard({ note }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Left Side PDF Preview */}
      <div className="flex">
        <div className="w-1/3 bg-indigo-50/50 p-4 flex items-center justify-center border-r">
          <div className="text-indigo-400">
            <svg 
              className="w-16 h-16" 
              viewBox="0 0 24 24" 
              fill="none"
            >
              <path 
                d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-2/3 p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors">
              {note.subjectName}
            </h3>
            <span className="text-sm text-gray-500 font-medium">
              {note.year}
            </span>
          </div>

          <div className="mb-3">
            <span className="inline-block px-3 py-1.5 text-sm font-medium bg-indigo-50 text-indigo-600 rounded-lg">
              {note.subjectCode}
            </span>
          </div>

          <p className="text-base text-gray-600 mb-4 line-clamp-2">
            {note.description}
          </p>

          <a 
            href={note.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-base font-medium text-indigo-600 hover:text-indigo-700 group"
          >
            <span className="mr-2">Open PDF</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OutputCard;
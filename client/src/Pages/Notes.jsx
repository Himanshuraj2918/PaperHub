import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import UploadForm from '../components/UploadForm';

function Notes() {
  const { branch } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const semesters = [
    { num: 1, title: `First Semester`, desc: "Foundation courses and basic engineering concepts" },
    { num: 2, title: `Second Semester`, desc: "Core subjects and fundamental principles" },
    { num: 3, title: "Third Semester", desc: "Advanced concepts and specialized topics" },
    { num: 4, title: "Fourth Semester", desc: "Technical electives and core subjects" },
    { num: 5, title: "Fifth Semester", desc: "Professional core courses and lab work" },
    { num: 6, title: "Sixth Semester", desc: "Advanced electives and technical subjects" },
    { num: 7, title: "Seventh Semester", desc: "Specialized courses and project work" },
    { num: 8, title: "Eighth Semester", desc: "Final year projects and electives" },
  ];

  return (
    <div className="container mx-auto px-4 py-16 relative">
      <h1 className="text-3xl font-bold text-center mb-12">
        {branch.charAt(0).toUpperCase() + branch.slice(1)} Engineering Notes
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {semesters.map((sem) => (
          <div 
            key={sem.num}
            className="bg-black/5 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all cursor-pointer hover:bg-black/10"
          >
            <div className="text-4xl font-bold text-black/20 mb-4">
              {sem.num}
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {sem.title}
            </h2>
            <p className="text-gray-600 text-sm">
              {sem.desc}
            </p>
            <div className="mt-4 flex items-center text-gray-800 hover:gap-2 transition-all">
              <span>View Notes</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-16 right-3 bg-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 4v16m8-8H4" 
          />
        </svg>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl mx-4 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>

            <UploadForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default Notes;

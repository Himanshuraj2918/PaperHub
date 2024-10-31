import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNotes } from '../services/api';
import UploadForm from '../components/UploadForm';
import OutputCard from '../components/OutputCard';

function Notes() {
  const { branch } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [loadingSemester, setLoadingSemester] = useState(null);
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  
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

  // Warning modal component
  const WarningModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md mx-4 relative">
        <div className="mb-4 text-amber-500">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 mx-auto" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">
          Important Notice
        </h3>
        <p className="text-gray-600 text-center mb-6">
          Please ensure:
        </p>
        <ul className="text-gray-600 mb-6 space-y-2 list-disc pl-4">
          <li>Upload only valid and verified study materials</li>
          <li>Check for duplicate content before uploading</li>
          <li>File size should be less than 2MB</li>
          <li>Only PDF format is supported</li>
          <li>
            We have limited resources to access, so please upload only important materials
          </li>
        </ul>
        <div className="flex justify-end space-x-3">
          <button
            onClick={() => setShowWarning(false)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setShowWarning(false);
              setIsModalOpen(true);
            }}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );

  // Handle semester click
  const handleSemesterClick = async (semesterNumber) => {
    try {
      setLoadingSemester(semesterNumber);
      setError(null);
      const data = await getNotes(branch, semesterNumber);
      // console.log(data);
      // console.log(data.data[0]);
      setSelectedSemester(semesterNumber)
      setNotes(data.data);
      
      setTimeout(() => {
        document.getElementById('notes-section').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);

    } catch (error) {
      console.error('Error fetching notes:', error);
      setNotes([]);
      setError('Failed to fetch notes. Please try again.');
    } finally {
      setLoadingSemester(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 relative">
      <h1 className="text-3xl font-bold text-center mb-12">
        {branch.charAt(0).toUpperCase() + branch.slice(1)} Engineering Notes
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {semesters.map((sem) => {
          const isLoading = loadingSemester === sem.num;
          // console.log(loadingSemester,isLoading);
          // console.table(sem.num,isLoading,loadingSemester);
          
          return (
            <div 
              key={sem.num}
              onClick={() => !isLoading && handleSemesterClick(sem.num)}
              className={`bg-black/5 backdrop-blur-sm p-6 rounded-xl border border-gray-200 
                hover:shadow-xl transition-all cursor-pointer hover:bg-black/10
                ${isLoading ? 'opacity-50' : ''}`}
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
                <span>{isLoading ? 'Loading...' : 'View Notes'}</span>
                {isLoading ? (
                  <svg 
                    className="animate-spin ml-2 h-5 w-5" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    />
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-4 text-center text-red-500">
          {error}
        </div>
      )}

      {/* Notes Display Section */}
      {selectedSemester && (
        <div id="notes-section">
          {loadingSemester ? (
            // Loading State
            <div className="mt-8 text-center">
              <div className="inline-flex items-center justify-center">
                <svg 
                  className="animate-spin h-8 w-8 text-gray-600" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span className="ml-3 text-lg text-gray-600">Loading notes...</span>
              </div>
            </div>
          ) : !error ? (
            // Data Display
            <>
              {notes.length > 0 ? (
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Available Notes - Semester {selectedSemester}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notes.map((note) => (
                      <OutputCard key={note._id} note={note} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    No Notes Available
                  </h3>
                  <p className="text-gray-500">
                    There are no notes available for semester {selectedSemester} yet.
                  </p>
                </div>
              )}
            </>
          ) : null}
        </div>
      )}

      <button
        onClick={() => setShowWarning(true)}
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

      {showWarning && <WarningModal />}

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

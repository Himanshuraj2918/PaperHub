import React from 'react'
import desktop from '../assets/desktop.jpg'
import Notes from './Notes';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
    {/* home  */}
    <div className="flex items-center mt-20 mx-auto w-5/6 gap-16">
      {/* Left side - Text content */}
      <div className="w-1/2">
        <div className="max-w-2xl">
          <h2 className='text-4xl font-bold text-center p-6 text-slate-900 tracking-tight'>
            All your paper needs in one place.
          </h2>
          <p className='text-lg text-center text-slate-600 p-4 leading-relaxed'>
            PaperHub is a platform that provide you assignment, report, pyq of mid-sem and all study materials related to GEC Daman.
          </p>
          
          {/* Get Started Button */}
          <div className="flex justify-center mt-8">
            <button 
            onClick={()=>{
                document.getElementById('notes-section').scrollIntoView({behavior:'smooth'});
            }}
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Get Notes
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
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-1/2 h-[400px] flex items-center justify-center p-2">
        <div className="overflow-hidden rounded-lg w-full h-full ">
          <img 
            src={desktop} 
            alt="PaperHub illustration"
            className=" h-full object-contain rounded-2xl "
          />
        </div>
      </div>
    </div>

    {/* end of home  */}

    {/* department  */}
    <div id="notes-section" className="text-center mt-24 mb-5  ">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Notes for Every Engineering Stream
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        From Computer Science to Biomedical, we've got comprehensive study materials for all departments.
      </p>
    </div>

    {/* Department Cards */}
    <div className="w-4/5 mx-auto mb-10">
      {/* First row - 3 cards */}
      <div className="grid grid-cols-3 gap-8 mb-8">
        <div 
          onClick={() => navigate('/notes/computer')}
          className="p-6 rounded-xl border hover:shadow-lg transition-all cursor-pointer"
        >
          <div className="text-2xl mb-2">💻</div>
          <h3 className="font-semibold text-xl mb-2">Computer Engineering</h3>
          <p className="text-slate-600">Data Structures, OS, DBMS, and more core CS subjects.</p>
        </div>

        <div 
          onClick={() => navigate('/notes/electrical')}
          className="p-6 rounded-xl border hover:shadow-lg transition-all cursor-pointer"
        >
          <div className="text-2xl mb-2">⚡</div>
          <h3 className="font-semibold text-xl mb-2">Electrical Engineering</h3>
          <p className="text-slate-600">Circuit Theory, Power Systems, Control Systems.</p>
        </div>

        <div 
          onClick={() => navigate('/notes/mechanical')}
          className="p-6 rounded-xl border hover:shadow-lg transition-all cursor-pointer"
        >
          <div className="text-2xl mb-2">⚙️</div>
          <h3 className="font-semibold text-xl mb-2">Mechanical Engineering</h3>
          <p className="text-slate-600">Thermodynamics, Machine Design, Fluid Mechanics.</p>
        </div>
      </div>

      {/* Second row - 2 centered cards */}
      <div className="grid grid-cols-2 gap-8 max-w-[700px] mx-auto">
        <div 
          onClick={() => navigate('/notes/biomedical')}
          className="p-6 rounded-xl border hover:shadow-lg transition-all cursor-pointer"
        >
          <div className="text-2xl mb-2">🔬</div>
          <h3 className="font-semibold text-xl mb-2">Biomedical Engineering</h3>
          <p className="text-slate-600">Biomechanics, Medical Imaging, Biomedical Instrumentation.</p>
        </div>

        <div 
          onClick={() => navigate('/notes/civil')}
          className="p-6 rounded-xl border hover:shadow-lg transition-all cursor-pointer"
        >
          <div className="text-2xl mb-2">🏗️</div>
          <h3 className="font-semibold text-xl mb-2">Civil Engineering</h3>
          <p className="text-slate-600">Structural Analysis, Surveying, Construction Management.</p>
        </div>
      </div>
    </div>

    
    
    </>
  )
}

export default Home

import React, { useState } from 'react';

function UploadForm() {
  const [formData, setFormData] = useState({
    subjectName: '',
    subjectCode: '',
    department: '',
    semester: '',
    file: null
  });

  const departments = [
    'Computer ',
    'Electrical ',
    'Mechanical ',
    'Biomedical ',
    'Civil '
  ];

  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFormData(prev => ({
        ...prev,
        file: file
      }));
    } else {
      alert('Please upload only PDF files');
      e.target.value = null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add your form submission logic here
    console.log(formData);
    
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Upload Study Material</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Subject Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject Name
          </label>
          <input
            type="text"
            name="subjectName"
            value={formData.subjectName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        {/* Subject Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject Code
          </label>
          <input
            type="text"
            name="subjectCode"
            value={formData.subjectCode}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department
          </label>
          <select
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          >
            <option value="">Select Department</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        {/* Semester */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Semester
          </label>
          <select
            name="semester"
            value={formData.semester}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          >
            <option value="">Select Semester</option>
            {semesters.map(sem => (
              <option key={sem} value={sem}>Semester {sem}</option>
            ))}
          </select>
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload PDF
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
        >
          Upload Material
        </button>
      </form>
    </div>
  );
}

export default UploadForm; 
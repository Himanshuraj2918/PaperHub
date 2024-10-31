import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';

function UploadForm() {
  // States
  const [isLoading, setIsLoading] = useState(false);
  const [fileError, setFileError] = useState('');
  const [formData, setFormData] = useState({
    subjectName: '',
    subjectCode: '',
    department: '',
    semester: '',
    year: '',
    description: '',
    file: null
  });

  // Add state for success message
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Constants
  const departments = [
    'Computer',
    'Electrical',
    'Mechanical',
    'Civil',
    'Biomedical'
  ];

  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

  // Generate year options (current year to 4 years back)
  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = 0; i < 5; i++) {
      years.push(currentYear - i);
    }
    return years;
  };

  // Handle regular input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle file input changes with validation
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileError('');

    if (file) {
      // Validate file type
      if (file.type !== 'application/pdf') {
        setFileError('Please upload only PDF files');
        e.target.value = null;
        return;
      }

      // Validate file size (2MB limit)
      const maxSize = 2 * 1024 * 1024; // 2MB in bytes
      if (file.size > maxSize) {
        setFileError('File size must be less than 2MB');
        e.target.value = null;
        return;
      }

      setFormData(prev => ({
        ...prev,
        file: file
      }));
    }
  };

  // Format file size to readable format
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append('subjectName', formData.subjectName);
    formDataToSend.append('subjectCode', formData.subjectCode);
    formDataToSend.append('year', formData.year);
    formDataToSend.append('department', formData.department);
    formDataToSend.append('semester', formData.semester);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('notesFile', formData.file);

    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/notes/add-notes',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data) {
        // Show success message
        setShowSuccess(true);
        
        // After 2 seconds, close and refresh
        setTimeout(() => {
          navigate(0);

          // setShowSuccess(false);
          // Option 1: Refresh current page
          // navigate(0);
          
          // OR Option 2: Navigate to same path
          // navigate(location.pathname, { replace: true });
          
          // OR Option 3: Window reload
          // window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.error('Upload error:', error.response?.data);
      toast.error(error.response?.data?.message || 'Error uploading file');
    } finally {
      setIsLoading(false);
    }
  };

  // Show success message instead of form
  if (showSuccess) {
    return (
      <div className="h-full bg-gray-50 p-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-sm text-center">
          <div className="mb-4 text-green-500">
            <svg 
              className="w-16 h-16 mx-auto" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Thank You!
          </h2>
          <p className="text-gray-600">
            Your file has been successfully uploaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gray-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto bg-white p-5 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
          Upload Study Material
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {/* Left Column */}
            <div className="space-y-3">
              {/* Subject Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subject Name
                </label>
                <input
                  type="text"
                  name="subjectName"
                  value={formData.subjectName}
                  onChange={handleInputChange}
                  placeholder="Enter subject name"
                  className="mt-1 w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  required
                />
              </div>

              {/* Subject Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subject Code
                </label>
                <input
                  type="text"
                  name="subjectCode"
                  value={formData.subjectCode}
                  onChange={handleInputChange}
                  placeholder="Enter subject code"
                  className="mt-1 w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  required
                />
              </div>

              {/* Year */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Year
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  required
                >
                  <option value="">Select Year</option>
                  {generateYearOptions().map(year => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Department
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
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
                <label className="block text-sm font-medium text-gray-700">
                  Semester
                </label>
                <select
                  name="semester"
                  value={formData.semester}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  required
                >
                  <option value="">Select Semester</option>
                  {semesters.map(sem => (
                    <option key={sem} value={sem}>Semester {sem}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="8"
                  className="mt-1 w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black resize-none h-[200px]"
                  placeholder="Enter description about the study material..."
                  required
                ></textarea>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload PDF
                </label>
                <input
                  type="file"
                  name="notesFile"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className={`mt-1 w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-1 focus:ring-black ${
                    fileError ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {fileError ? (
                  <p className="mt-1 text-sm text-red-500">
                    {fileError}
                  </p>
                ) : formData.file ? (
                  <p className="mt-1 text-sm text-gray-500">
                    File size: {formatFileSize(formData.file.size)} | Max size: 2MB
                  </p>
                ) : (
                  <p className="mt-1 text-sm text-gray-500">
                    Only PDF files less than 2MB are allowed
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button - Full Width */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2.5 px-4 rounded-md transition-colors ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-black hover:bg-gray-800'
              } text-white font-medium`}
            >
              {isLoading ? 'Uploading...' : 'Upload Material'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadForm; 
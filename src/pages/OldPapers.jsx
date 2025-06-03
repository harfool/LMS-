// src/pages/OldPapers.js
import React, { useState, useEffect } from 'react';

const OldPapers = () => {
  const [selectedExam, setSelectedExam] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [filteredPapers, setFilteredPapers] = useState([]);
  
  const exams = [
    { id: 'rcit', name: 'RCIT', years: [2023, 2022, 2021, 2020] },
    { id: 'bstc', name: 'BSTC', years: [2023, 2022, 2021] },
    { id: 'cbse', name: 'CBSE', years: [2023, 2022, 2021] },
    { id: 'nios', name: 'NIOS', years: [2023, 2022] },
    { id: 'scholarship', name: 'Scholarship Exams', years: [2023, 2022] },
  ];
  
  const papers = [
    { id: 1, title: 'RCIT Final Exam 2023', exam: 'rcit', year: 2023, type: 'Question Paper', size: '3.2 MB' },
    { id: 2, title: 'BSTC Entrance Exam 2022', exam: 'bstc', year: 2022, type: 'Question Paper', size: '2.8 MB' },
    { id: 3, title: 'CBSE Class 10 Maths 2023', exam: 'cbse', year: 2023, type: 'Question Paper', size: '1.9 MB' },
    { id: 4, title: 'NIOS Secondary Exam 2022', exam: 'nios', year: 2022, type: 'Question Paper', size: '2.5 MB' },
    { id: 5, title: 'National Scholarship Exam 2023', exam: 'scholarship', year: 2023, type: 'Question Paper', size: '1.7 MB' },
    { id: 6, title: 'RCIT Mid-Term 2022', exam: 'rcit', year: 2022, type: 'Question Paper', size: '2.1 MB' },
    { id: 7, title: 'BSTC Teaching Aptitude 2021', exam: 'bstc', year: 2021, type: 'Question Paper', size: '1.8 MB' },
    { id: 8, title: 'CBSE Class 12 Physics 2022', exam: 'cbse', year: 2022, type: 'Question Paper', size: '2.3 MB' },
  ];
  
  const availableYears = selectedExam === 'all' 
    ? [] 
    : exams.find(e => e.id === selectedExam)?.years || [];
  
  // Update filtered papers whenever filters change
  useEffect(() => {
    const filtered = papers.filter(paper => {
      const examMatch = selectedExam === 'all' || paper.exam === selectedExam;
      
      // Fixed: Compare as numbers instead of strings
      const yearMatch = selectedYear === 'all' || paper.year === parseInt(selectedYear);
      
      return examMatch && yearMatch;
    });
    
    setFilteredPapers(filtered);
  }, [selectedExam, selectedYear]);
  
  const handleView = (paperId) => {
    alert(`Viewing paper: ${paperId}`);
  };

  // Get placeholder image based on exam type
  const getPlaceholderImage = (examId) => {
    const colors = {
      rcit: 'from-blue-400 to-indigo-600',
      bstc: 'from-green-400 to-teal-600',
      cbse: 'from-amber-400 to-orange-600',
      nios: 'from-purple-400 to-fuchsia-600',
      scholarship: 'from-rose-400 to-pink-600'
    };
    
    return (
      <div className={`w-full h-48 bg-gradient-to-br ${colors[examId] || 'from-gray-300 to-gray-400'} rounded-t-xl flex items-center justify-center`}>
        <div className="bg-white bg-opacity-20 rounded-full p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Previous Year Papers</h1>
        <p className="text-xl opacity-90">
          Access past exam papers for better preparation
        </p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Exam Type
            </label>
            <select
              value={selectedExam}
              onChange={(e) => {
                setSelectedExam(e.target.value);
                setSelectedYear('all');
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="all">All Exams</option>
              {exams.map(exam => (
                <option key={exam.id} value={exam.id}>{exam.name}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Year
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              disabled={selectedExam === 'all'}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                selectedExam === 'all' ? 'bg-gray-100' : ''
              }`}
            >
              <option value="all">All Years</option>
              {availableYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-end">
            <button
              onClick={() => {
                setSelectedExam('all');
                setSelectedYear('all');
              }}
              className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
      
      {filteredPapers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map(paper => {
            const exam = exams.find(e => e.id === paper.exam);
            return (
              <div key={paper.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                {getPlaceholderImage(paper.exam)}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg">{paper.title}</h3>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded whitespace-nowrap">
                      {paper.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                      {exam?.name}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                      {paper.year}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                      {paper.size}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleView(paper.id)}
                      className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View
                    </button>
                    <button
                      onClick={() => alert(`Downloading paper: ${paper.id}`)}
                      className="flex-1 px-4 py-2 bg-white border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-xl p-12 text-center shadow-md border border-gray-100">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium mt-6 mb-2">No papers found</h3>
          <p className="text-gray-600">
            {selectedExam !== 'all' || selectedYear !== 'all'
              ? "There are no papers matching your current filters."
              : "No papers available yet. Please check back later."}
          </p>
        </div>
      )}
      
      <div className="bg-indigo-50 rounded-xl p-8 mt-8">
        <h2 className="text-xl font-bold mb-4">How to Use Previous Papers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium mb-3 flex items-center">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-5 h-5" />
              </div>
              Understand the Pattern
            </h3>
            <p className="text-gray-700">
              Analyze the question pattern, marking scheme, and frequently asked topics.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium mb-3 flex items-center">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-5 h-5" />
              </div>
              Practice Under Exam Conditions
            </h3>
            <p className="text-gray-700">
              Solve papers within the time limit to improve speed and accuracy.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium mb-3 flex items-center">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-5 h-5" />
              </div>
              Identify Weak Areas
            </h3>
            <p className="text-gray-700">
              After solving, review your answers to identify topics that need more focus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldPapers;
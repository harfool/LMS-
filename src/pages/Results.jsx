// src/pages/Results.js
import React, { useState } from 'react';

const Results = () => {
  const [searchType, setSearchType] = useState('name');
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const sampleResults = [
    {
      id: 'RES001',
      name: 'Rahul Sharma',
      rollNo: 'RCIT2023001',
      test: 'RCIT Mid-Term Exam',
      date: '2023-10-10',
      score: '85%',
      rank: 4,
      totalStudents: 120
    },
    {
      id: 'RES002',
      name: 'Priya Patel',
      rollNo: 'RCIT2023002',
      test: 'RCIT Mid-Term Exam',
      date: '2023-10-10',
      score: '92%',
      rank: 1,
      totalStudents: 120
    },
    {
      id: 'RES003',
      name: 'Vikram Singh',
      rollNo: 'RCIT2023003',
      test: 'RCIT Mid-Term Exam',
      date: '2023-10-10',
      score: '78%',
      rank: 15,
      totalStudents: 120
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setResults(sampleResults);
      setIsLoading(false);
    }, 1000);
  };

  const handleDownload = (resultId) => {
    alert(`Downloading result PDF for ${resultId}`);
    // In a real app, this would trigger a PDF download
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Results Portal</h1>
        <p className="text-xl opacity-90">
          Check your exam results and performance analysis
        </p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 mb-8">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="flex">
              <select 
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="border border-gray-300 rounded-l-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="name">Search by Name</option>
                <option value="roll">Search by Roll No</option>
                <option value="test">Search by Test Code</option>
              </select>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder={
                  searchType === 'name' ? 'Enter student name' : 
                  searchType === 'roll' ? 'Enter roll number' : 'Enter test code'
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-3 rounded-lg text-white font-medium ${
              isLoading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
            } transition-colors`}
          >
            {isLoading ? 'Searching...' : 'Search Results'}
          </button>
        </form>
      </div>
      
      {results.length > 0 ? (
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Test Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {results.map((result) => (
                  <tr key={result.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{result.name}</div>
                      <div className="text-sm text-gray-500">{result.rollNo}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium">{result.test}</div>
                      <div className="text-sm text-gray-500">Date: {result.date}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-2xl font-bold text-indigo-600">{result.score}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        {result.rank} of {result.totalStudents}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDownload(result.id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Download PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl p-12 text-center shadow-md border border-gray-100">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto" />
          <h3 className="text-xl font-medium mt-6 mb-2">No results found</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            {searchValue 
              ? `We couldn't find any results matching your search for "${searchValue}"`
              : 'Search for results by name, roll number, or test code'}
          </p>
        </div>
      )}
      
      <div className="bg-indigo-50 rounded-xl p-8 mt-8">
        <h2 className="text-xl font-bold mb-4 text-center">Result Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium mb-2">Subject-wise Performance</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Computer Science</span>
                  <span>92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Mathematics</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>English</span>
                  <span>78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium mb-2">Performance Summary</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <span>Total Questions Attempted</span>
                  <span className="font-medium">45/50</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Correct Answers</span>
                  <span className="font-medium">38</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Accuracy</span>
                  <span className="font-medium">84.4%</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Time Taken</span>
                  <span className="font-medium">24m 35s</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium mb-2">Comparison</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <span>Your Score</span>
                  <span className="font-medium text-indigo-600">85%</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Class Average</span>
                  <span className="font-medium">72%</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Top Score</span>
                  <span className="font-medium text-green-600">92%</span>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">85%</div>
                  <div className="text-sm text-gray-600">Your Overall Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
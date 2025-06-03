// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ user }) => {
  const upcomingTests = [
    { id: 1, name: 'RCIT Mid-Term Exam', date: '2023-10-15', duration: '60 min' },
    { id: 2, name: 'BSTC Practice Test', date: '2023-10-18', duration: '45 min' },
    { id: 3, name: 'CBSE Maths Quiz', date: '2023-10-20', duration: '30 min' },
  ];

  const recentResults = [
    { id: 1, test: 'RCIT Chapter 5 Test', date: '2023-10-05', score: '85%' },
    { id: 2, test: 'BSTC English Test', date: '2023-10-01', score: '78%' },
    { id: 3, test: 'CBSE Science Test', date: '2023-09-28', score: '92%' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-6 mb-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 mb-4 md:mb-0 md:mr-6" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Welcome back, {user.name}</h1>
            <p className="mt-2 opacity-90">
              You're enrolled in: <span className="font-semibold">{user.course}</span>
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-indigo-800 bg-opacity-50 px-3 py-1 rounded-full text-sm">
                Student ID: {user.id}
              </span>
              <span className="bg-indigo-800 bg-opacity-50 px-3 py-1 rounded-full text-sm">
                Email: {user.email}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link 
          to="/tests" 
          className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-indigo-300 transition-colors group"
        >
          <div className="flex items-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-indigo-200 transition-colors">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold group-hover:text-indigo-700 transition-colors">
              Take a Test
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Start an online test or continue an incomplete test
          </p>
        </Link>
        
        <Link 
          to="/results" 
          className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-indigo-300 transition-colors group"
        >
          <div className="flex items-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-indigo-200 transition-colors">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold group-hover:text-indigo-700 transition-colors">
              View Results
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Check your test results and performance analysis
          </p>
        </Link>
        
        <Link 
          to="/notes" 
          className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-indigo-300 transition-colors group"
        >
          <div className="flex items-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-indigo-200 transition-colors">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold group-hover:text-indigo-700 transition-colors">
              Study Materials
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Access notes, assignments, and learning resources
          </p>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Upcoming Tests</h2>
            <Link to="/tests" className="text-indigo-600 hover:text-indigo-800">
              View All
            </Link>
          </div>
          
          <div className="space-y-4">
            {upcomingTests.map(test => (
              <div key={test.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                <div>
                  <h3 className="font-medium">{test.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Date: {test.date} | Duration: {test.duration}
                  </p>
                </div>
                <button className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors">
                  Start
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Recent Results</h2>
            <Link to="/results" className="text-indigo-600 hover:text-indigo-800">
              View All
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentResults.map(result => (
              <div key={result.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                <div>
                  <h3 className="font-medium">{result.test}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Date: {result.date}
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-lg mr-3">{result.score}</span>
                  <button className="text-indigo-600 hover:text-indigo-800">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 mt-8">
        <h2 className="text-xl font-bold mb-6">Quick Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link 
            to="/old-papers" 
            className="p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
          >
            <h3 className="font-medium text-indigo-700">Previous Year Papers</h3>
            <p className="text-sm text-gray-600 mt-1">Access past exam papers</p>
          </Link>
          <a 
            href="#" 
            className="p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
          >
            <h3 className="font-medium text-indigo-700">Scholarship Info</h3>
            <p className="text-sm text-gray-600 mt-1">Check scholarship opportunities</p>
          </a>
          <a 
            href="#" 
            className="p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
          >
            <h3 className="font-medium text-indigo-700">Academic Calendar</h3>
            <p className="text-sm text-gray-600 mt-1">View important dates</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
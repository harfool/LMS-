// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredCourses = [
    { id: 1, name: 'RCIT', description: 'Rajasthan State Certificate in Information Technology' },
    { id: 2, name: 'BSTC', description: 'Basic School Teaching Certificate' },
    { id: 3, name: 'CBSE Coaching', description: 'Class 9-12 CBSE Syllabus' },
    { id: 4, name: 'NIOS', description: 'National Institute of Open Schooling' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-indigo-800">
          Welcome to  <span className='text-amber-300' >Shri Balaji Computer and Education Center</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Your complete learning management solution for online tests, results, study materials, and more.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/login" 
            className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            Student Login
          </Link>
          <Link 
            to="/results" 
            className="px-8 py-3 bg-white text-indigo-600 border border-indigo-600 font-medium rounded-lg shadow-md hover:bg-indigo-50 transition-colors"
          >
            Check Results
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Online Tests</h3>
            <p className="text-gray-600">
              Take timed tests with instant results and performance analysis.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Results Portal</h3>
            <p className="text-gray-600">
              Check your results by name, roll number, or test code.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Study Materials</h3>
            <p className="text-gray-600">
              Access notes, assignments, and resources categorized by course.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Exam Repository</h3>
            <p className="text-gray-600">
              Download previous years' papers to prepare for exams.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <button className="w-full py-2 bg-indigo-100 text-indigo-700 font-medium rounded-lg hover:bg-indigo-200 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-700 text-white rounded-xl my-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Learning Experience?</h2>
          <p className="text-xl mb-8">
            Join thousands of students who have improved their academic performance with our LMS.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/login" 
              className="px-8 py-3 bg-white text-indigo-700 font-medium rounded-lg shadow-md hover:bg-indigo-50 transition-colors"
            >
              Login Now
            </Link>
            <Link 
              to="/notes" 
              className="px-8 py-3 bg-indigo-800 text-white font-medium rounded-lg shadow-md hover:bg-indigo-900 transition-colors"
            >
              Browse Study Materials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
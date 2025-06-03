// src/pages/Notes.js
import React, { useState } from 'react';

const Notes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'rcit', name: 'RCIT', count: 12 },
    { id: 'bstc', name: 'BSTC', count: 8 },
    { id: 'cbs', name: 'CBSE', count: 15 },
    { id: 'nios', name: 'NIOS', count: 6 },
    { id: 'assignments', name: 'Assignments', count: 10 },
    { id: 'scholarship', name: 'Scholarship', count: 4 },
  ];
  
  const notes = [
    { id: 1, title: 'RCIT Chapter 1: Introduction to Computers', category: 'rcit', date: '2023-09-15', size: '2.4 MB' },
    { id: 2, title: 'BSTC English Grammar Notes', category: 'bstc', date: '2023-09-20', size: '1.8 MB' },
    { id: 3, title: 'CBSE Class 10 Maths Formulas', category: 'cbs', date: '2023-09-05', size: '3.1 MB' },
    { id: 4, title: 'NIOS Social Science Study Material', category: 'nios', date: '2023-08-28', size: '4.2 MB' },
    { id: 5, title: 'Assignment 1: Programming Basics', category: 'assignments', date: '2023-10-01', size: '1.5 MB' },
    { id: 6, title: 'Scholarship Application Guidelines', category: 'scholarship', date: '2023-09-10', size: '0.8 MB' },
    { id: 7, title: 'RCIT Chapter 2: Operating Systems', category: 'rcit', date: '2023-09-18', size: '2.7 MB' },
    { id: 8, title: 'BSTC Teaching Methodology Notes', category: 'bstc', date: '2023-09-22', size: '2.1 MB' },
  ];
  
  const filteredNotes = selectedCategory === 'all' 
    ? notes 
    : notes.filter(note => note.category === selectedCategory);
  
  const handleDownload = (noteId) => {
    alert(`Downloading note: ${noteId}`);
    // In a real app, this would trigger a PDF download
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Study Materials</h1>
        <p className="text-xl opacity-90">
          Download notes, assignments, and learning resources
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    selectedCategory === 'all' 
                      ? 'bg-indigo-100 text-indigo-700 font-medium' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  All Materials
                </button>
              </li>
              {categories.map(category => (
                <li key={category.id}>
                  <button
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg flex justify-between items-center ${
                      selectedCategory === category.id 
                        ? 'bg-indigo-100 text-indigo-700 font-medium' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="md:w-3/4">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold">
                {selectedCategory === 'all' 
                  ? 'All Study Materials' 
                  : categories.find(c => c.id === selectedCategory)?.name + ' Materials'}
              </h2>
              <p className="text-gray-600 mt-1">
                {filteredNotes.length} resources available
              </p>
            </div>
            
            <div className="divide-y divide-gray-200">
              {filteredNotes.map(note => (
                <div key={note.id} className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <h3 className="font-medium text-lg">{note.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">
                        {categories.find(c => c.id === note.category)?.name}
                      </span>
                      <span className="text-gray-600 text-sm">
                        Uploaded: {note.date}
                      </span>
                      <span className="text-gray-600 text-sm">
                        Size: {note.size}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownload(note.id)}
                    className="mt-4 sm:mt-0 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
            
            {filteredNotes.length === 0 && (
              <div className="p-12 text-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto" />
                <h3 className="text-xl font-medium mt-6 mb-2">No materials found</h3>
                <p className="text-gray-600">
                  There are no study materials in this category yet.
                </p>
              </div>
            )}
          </div>
          
          <div className="bg-indigo-50 rounded-xl p-8 mt-8">
            <h2 className="text-xl font-bold mb-4">How to Use These Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-medium mb-3 flex items-center">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-5 h-5" />
                  </div>
                  Study Tips
                </h3>
                <ul className="space-y-2 text-gray-700 pl-11">
                  <li>• Review notes before and after class</li>
                  <li>• Create your own summaries</li>
                  <li>• Use assignments for practice</li>
                  <li>• Refer to materials during revision</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-medium mb-3 flex items-center">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-5 h-5" />
                  </div>
                  Download Instructions
                </h3>
                <ul className="space-y-2 text-gray-700 pl-11">
                  <li>• Click the Download PDF button</li>
                  <li>• Save files to your device</li>
                  <li>• Use a PDF reader to open files</li>
                  <li>• Print materials if needed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
// src/pages/TestModule.js
import React, { useState, useEffect } from 'react';

const TestModule = () => {
  const [testStarted, setTestStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  
  const questions = [
    {
      id: 1,
      text: "What is the capital of Rajasthan?",
      options: [
        { id: 'a', text: "Jaipur" },
        { id: 'b', text: "Udaipur" },
        { id: 'c', text: "Jodhpur" },
        { id: 'd', text: "Bikaner" }
      ],
      correctAnswer: 'a'
    },
    {
      id: 2,
      text: "Which of the following is not a programming language?",
      options: [
        { id: 'a', text: "Python" },
        { id: 'b', text: "Java" },
        { id: 'c', text: "HTML" },
        { id: 'd', text: "C++" }
      ],
      correctAnswer: 'c'
    },
    {
      id: 3,
      text: "What is the full form of CPU?",
      options: [
        { id: 'a', text: "Central Processing Unit" },
        { id: 'b', text: "Central Process Unit" },
        { id: 'c', text: "Computer Processing Unit" },
        { id: 'd', text: "Control Processing Unit" }
      ],
      correctAnswer: 'a'
    }
  ];

  useEffect(() => {
    if (testStarted && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (testStarted && timeLeft === 0) {
      handleSubmit();
    }
  }, [testStarted, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartTest = () => {
    setTestStarted(true);
  };

  const handleAnswerSelect = (questionId, optionId) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setTestStarted(false);
    alert('Test submitted successfully! Your results will be available soon.');
    // In a real app, this would navigate to results page
  };

  if (!testStarted) {
    return (
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-indigo-700 mb-4">RCIT Mid-Term Exam</h1>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-8" />
          
          <div className="bg-indigo-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Test Instructions</h2>
            <ul className="text-left space-y-2 text-gray-700">
              <li>• Total Questions: {questions.length}</li>
              <li>• Time Allotted: 30 minutes</li>
              <li>• Each question carries equal marks</li>
              <li>• There is no negative marking</li>
              <li>• Do not refresh the page during the test</li>
              <li>• The test will auto-submit when time expires</li>
            </ul>
          </div>
          
          <button
            onClick={handleStartTest}
            className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            Start Test Now
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-bold text-indigo-700">RCIT Mid-Term Exam</h1>
          <p className="text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>
        <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-medium">
          Time Remaining: {formatTime(timeLeft)}
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-4">{currentQ.text}</h2>
        <div className="space-y-3">
          {currentQ.options.map(option => (
            <div 
              key={option.id}
              onClick={() => handleAnswerSelect(currentQ.id, option.id)}
              className={`p-4 border rounded-lg cursor-pointer ${
                answers[currentQ.id] === option.id 
                  ? 'border-indigo-600 bg-indigo-50' 
                  : 'border-gray-200 hover:border-indigo-300'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
                  answers[currentQ.id] === option.id 
                    ? 'border-indigo-600 bg-indigo-600 text-white' 
                    : 'border-gray-300'
                }`}>
                  {option.id}
                </div>
                <span>{option.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={handlePrevQuestion}
          disabled={currentQuestion === 0}
          className={`px-5 py-2 rounded-lg ${
            currentQuestion === 0 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Previous
        </button>
        
        {currentQuestion < questions.length - 1 ? (
          <button
            onClick={handleNextQuestion}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Submit Test
          </button>
        )}
      </div>
    </div>
  );
};

export default TestModule;
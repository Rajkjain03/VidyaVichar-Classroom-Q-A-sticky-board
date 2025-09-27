import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionForm from "./components/QuestionForm";
import QuestionCard from "./components/QuestionCard";
import FilterControls from "./components/FilterControls";
import "./App.css";

const API_URL = "http://localhost:5000/api/questions";

function App() {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`${API_URL}?status=${filter}`);
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
    // Set up polling to refresh questions every 5 seconds
    const interval = setInterval(fetchQuestions, 5000);
    return () => clearInterval(interval);
  }, [filter]);

  const handleQuestionSubmit = async (questionData) => {
    try {
      await axios.post(API_URL, questionData);
      fetchQuestions(); // Refresh immediately after posting
    } catch (error) {
      console.error("Error submitting question:", error.response.data.message);
      alert(`Error: ${error.response.data.message}`);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.patch(`${API_URL}/${id}`, { status });
      fetchQuestions(); // Refresh immediately after status change
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleClearAll = async () => {
    if (window.confirm("Are you sure you want to clear all questions?")) {
      try {
        await axios.delete(`${API_URL}/clear`);
        fetchQuestions(); // Refresh immediately after clearing
      } catch (error) {
        console.error("Error clearing questions:", error);
      }
    }
  };

  return (
    <div className="App">
      <header>
        <h1>VidyaVichar - Classroom Q&A Board</h1>
      </header>
      <main>
        <div className="controls-container">
          <QuestionForm onQuestionSubmit={handleQuestionSubmit} />
          <FilterControls setFilter={setFilter} onClear={handleClearAll} />
        </div>
        <div className="question-board">
          {questions.map((q) => (
            <QuestionCard key={q._id} question={q} onStatusChange={handleStatusChange} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
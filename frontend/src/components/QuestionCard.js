import React from "react";

function QuestionCard({ question, onStatusChange }) {
  const cardColor = {
    unanswered: "#fffac8", // Light yellow
    answered: "#c8e6c9",   // Light green
    important: "#ffcdd2",  // Light red
  };

  const handleStatusUpdate = (newStatus) => {
    onStatusChange(question._id, newStatus);
  };

  return (
    <div className="question-card" style={{ backgroundColor: cardColor[question.status] }}>
      <p className="question-text">{question.text}</p>
      <p className="question-author">- {question.author}</p>
      <div className="instructor-controls">
        <button onClick={() => handleStatusUpdate("answered")}>Answered</button>
        <button onClick={() => handleStatusUpdate("important")}>Important</button>
        <button onClick={() => handleStatusUpdate("unanswered")}>Un-Answer</button>
      </div>
    </div>
  );
}

export default QuestionCard;
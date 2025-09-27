
import React, { useState } from "react";

function QuestionForm({ onQuestionSubmit }) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert("Please enter a question.");
      return;
    }
    onQuestionSubmit({ text, author: author.trim() || "Anonymous" });
    setText("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit} className="question-form">
      <h3>Ask a Question</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your question here..."
        rows="3"
      ></textarea>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Your Name (Optional)"
      />
      <button type="submit">Post Question</button>
    </form>
  );
}

export default QuestionForm;
import { useState } from "react";

function AskQuestion() {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!question.trim()) return;

    // For now: log it
    console.log("User Question:", question);

    // Later → Send to AI / Email / WhatsApp
    setQuestion("");
  };

  return (
    <div className="mt-12 bg-blue-50 p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold mb-3">
        Didn’t find your answer?
      </h3>

      <p className="text-gray-600 mb-4">
        Ask us a question and we’ll respond as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          rows="4"
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Ask Question
        </button>
      </form>
    </div>
  );
}

export default AskQuestion;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WasteManagementAtHome = () => {
  const [showReading, setShowReading] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showCoins, setShowCoins] = useState(false);

  const startQuiz = () => {
    setShowReading(false);
    setShowQuiz(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBackPage = () => {
    window.history.back();
  };

  const goBack = () => {
    setShowQuiz(false);
    setShowReading(true);
    document.getElementById("quizForm").reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScore = (e) => {
    e.preventDefault();
    let tempScore = 0;

    const answers = {
      q1: "b",
      q2: "c",
      q3: "a",
      q4: "c",
      q5: "b",
      q6: "a",
      q7: "d",
      q8: "c",
      q9: "b",
      q10: "a",
    };

    for (let q in answers) {
      const selected = document.querySelector(`input[name="${q}"]:checked`);
      if (selected && selected.value === answers[q]) tempScore++;
    }

    const percentage = (tempScore / 10) * 100;
    setScore(percentage);
    setShowQuiz(false);
    setShowResult(true);

    if (percentage >= 50) {
      setFeedback("🎉 Great job! You understand how to manage waste at home responsibly!");
      setShowCoins(true);
    } else if (percentage < 35) {
      alert("❌ You failed the quiz. Please revisit the Reading Section and try again.");
      setShowResult(false);
      setShowReading(true);
      document.getElementById("quizForm").reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setFeedback("⚠️ You scored below 50%. Try again to improve your score!");
      setShowCoins(false);
    }
  };

  const restartQuiz = () => {
    setShowResult(false);
    setShowQuiz(true);
    setShowCoins(false);
    document.getElementById("quizForm").reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", fontFamily: "'Poppins', sans-serif" }}>
      {/* HEADER */}
      <header style={{ backgroundColor: "#198754", color: "white", padding: "15px 0", textAlign: "center" }}>
        <h2>🌍 Clean & Green Technology Portal</h2>
        <p>Learn. Manage. Earn. Build a Sustainable Home!</p>
      </header>

      <div className="container mt-5">
        <h2 className="text-success text-center mb-4">🏠 Course: Waste Management at Home</h2>

        {/* READING SECTION */}
        {showReading && (
          <div
            className="reading-section"
            style={{
              backgroundColor: "#e9f7ef",
              padding: "25px",
              borderRadius: "10px",
              marginTop: "30px",
            }}
          >
            <h5 style={{ textAlign: "center", color: "#155d27", marginBottom: "20px" }}>
              📘 Reading Section : Learn Before You Quiz!
            </h5>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🌱 Introduction</h6>
            <p>
              Waste management at home is the process of handling, reducing, and disposing of household waste in a
              sustainable manner. It includes steps like segregation, recycling, composting, and reusing materials.
              Every household can contribute to a cleaner planet by making small lifestyle changes.
            </p>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🗑️ Types of Household Waste</h6>
            <ul>
              <li><b>Biodegradable Waste:</b> Kitchen scraps, fruit peels, garden leaves.</li>
              <li><b>Non-biodegradable Waste:</b> Plastics, glass bottles, metals, and packaging materials.</li>
              <li><b>E-Waste:</b> Old electronic devices, batteries, chargers.</li>
              <li><b>Hazardous Waste:</b> Paints, cleaning chemicals, medical waste.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>♻️ Steps to Manage Waste Efficiently</h6>
            <ol>
              <li><b>Segregate Waste:</b> Use separate bins for wet, dry, and hazardous waste.</li>
              <li><b>Compost Organic Waste:</b> Convert food waste into fertilizer for plants.</li>
              <li><b>Recycle:</b> Send paper, glass, and plastic to recycling centers.</li>
              <li><b>Reduce Usage:</b> Avoid single-use plastics and use reusable items.</li>
            </ol>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🏡 Real-Life Example</h6>
            <p>
              In Indore, India — one of the cleanest cities — households actively segregate waste into wet and dry bins.
              This practice has helped the city recycle more than 90% of its waste, creating compost and energy from it.
            </p>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🌿 Simple Tips</h6>
            <ul>
              <li>🧺 Keep labeled bins at home to make segregation easier.</li>
              <li>🚯 Avoid throwing plastic bottles and food waste together.</li>
              <li>🌾 Use kitchen waste to make compost instead of throwing it away.</li>
              <li>🛍️ Reuse glass jars and carry your own bag for shopping.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🚨 Common Mistakes</h6>
            <ul>
              <li>🚫 Mixing wet and dry waste together.</li>
              <li>🚫 Burning garbage at home, which releases harmful gases.</li>
              <li>🚫 Throwing batteries or medicines in regular dustbins.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>📚 Did You Know?</h6>
            <p>
              According to the Central Pollution Control Board (CPCB), India generates about <b>62 million tons</b> of
              waste annually — and 75% of it can be recycled or composted if managed properly!
            </p>

            <div className="text-center mt-4">
              <button className="btn btn-primary" onClick={startQuiz}>
                Start Quiz
              </button>
              <button className="btn btn-secondary ms-3" onClick={goBackPage}>
                🔙 Back
              </button>
            </div>
          </div>
        )}

        {/* QUIZ SECTION */}
        {showQuiz && (
          <div className="quiz-section mt-5" style={{ backgroundColor: "#e9f7ef", padding: "30px", borderRadius: "10px" }}>
            <div
              className="quiz-header text-center"
              style={{
                backgroundColor: "#a8e6a2",
                color: "#155d27",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "25px",
              }}
            >
              <h4>🧩 Waste Management Awareness Quiz</h4>
              <p>Test your knowledge and earn your Eco Coins!</p>
            </div>

            <form id="quizForm" onSubmit={checkScore}>
              {[
                { q: "1. What is the first step in waste management at home?", opts: ["Burning waste", "Segregating waste", "Throwing waste together", "Burying waste"], name: "q1" },
                { q: "2. Which color bin is used for biodegradable waste in India?", opts: ["Blue", "Red", "Green", "Yellow"], name: "q2" },
                { q: "3. What should you do with vegetable peels?", opts: ["Compost them", "Throw in plastic bag", "Flush in toilet", "Burn them"], name: "q3" },
                { q: "4. What is e-waste?", opts: ["Paper waste", "Food waste", "Electronic waste", "Medical waste"], name: "q4" },
                { q: "5. Which of the following is recyclable?", opts: ["Food leftovers", "Plastic bottles", "Used tissue paper", "Cooking oil"], name: "q5" },
                { q: "6. What is composting?", opts: ["Converting organic waste into fertilizer", "Melting plastic", "Recycling metals", "Collecting rainwater"], name: "q6" },
                { q: "7. Which of these should NOT go into compost bin?", opts: ["Fruit peels", "Vegetable waste", "Tea leaves", "Plastic wrappers"], name: "q7" },
                { q: "8. What is the benefit of waste segregation?", opts: ["Takes more time", "Increases pollution", "Helps in recycling and reduces landfill", "Costs more money"], name: "q8" },
                { q: "9. How can we reduce plastic waste?", opts: ["Burn plastic", "Use reusable bags", "Throw plastic in drains", "Use more packaging"], name: "q9" },
                { q: "10. Why is waste management important?", opts: ["To protect environment and health", "To increase garbage", "To waste resources", "No reason"], name: "q10" },
              ].map((item, index) => (
                <div key={index} className="quiz-card mb-4 p-3" style={{ background: "#fff", border: "1px solid #b7e8d2", borderRadius: "10px" }}>
                  <p><b>{item.q}</b></p>
                  {item.opts.map((opt, i) => (
                    <div key={i}>
                      <label>
                        <input type="radio" name={item.name} value={String.fromCharCode(97 + i)} style={{ marginRight: "8px" }} />
                        {opt}
                      </label>
                    </div>
                  ))}
                </div>
              ))}

              <div className="text-center mt-4">
                <button type="submit" className="btn btn-success">
                  Submit Quiz
                </button>
                <button type="button" className="btn btn-secondary ms-3" onClick={goBack}>
                  🔙 Back
                </button>
              </div>
            </form>
          </div>
        )}

        {/* RESULT SECTION */}
        {showResult && (
          <div id="result-section" className="text-center mt-4">
            <h4>Your Score: {score.toFixed(0)}%</h4>
            <p>{feedback}</p>
            {showCoins && (
              <div>
                <div className="coin-box" style={{ background: "#d4edda", border: "2px solid #198754", color: "#155d27", padding: "15px", borderRadius: "10px", display: "inline-block", fontWeight: "bold" }}>
                  💰 You Earned: <b>10 Eco Coins!</b>
                </div>
                <div className="mt-4">
                  <button className="btn btn-primary" onClick={goBackPage}>
                    🔙 Back to Courses
                  </button>
                </div>
              </div>
            )}
            <button className="btn btn-secondary mt-3" onClick={restartQuiz}>
              Try Again
            </button>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className="mt-5" style={{ backgroundColor: "#198754", color: "white", padding: "15px 0", textAlign: "center" }}>
        <p>© 2025 Clean & Green Technology | Designed for Eco Awareness 🌿</p>
      </footer>
    </div>
  );
};

export default WasteManagementAtHome;

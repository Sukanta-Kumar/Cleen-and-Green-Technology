import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EcoFriendlyAgriculture = () => {
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
      q1: "a",
      q2: "b",
      q3: "c",
      q4: "a",
      q5: "a",
      q6: "b",
      q7: "a",
      q8: "a",
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
      setFeedback("🎉 Excellent! You have completed this course successfully!");
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
        <h2>🌾 Eco-Friendly Agriculture Portal</h2>
        <p>Learn. Cultivate. Sustain. Make Farming Green!</p>
      </header>

      {/* MAIN CONTENT */}
      <div className="container mt-5">
        <h2 className="text-success text-center mb-4">🌱 Course: Eco-Friendly Agriculture</h2>

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
              Eco-friendly agriculture focuses on sustainable farming practices that protect the environment, enhance soil fertility, and promote biodiversity. It reduces reliance on chemical fertilizers and pesticides, aiming for long-term agricultural sustainability.
            </p>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🌎 Importance of Sustainable Farming</h6>
            <ul>
              <li>🌿 Preserves soil health and prevents erosion.</li>
              <li>💧 Conserves water through rainwater harvesting and drip irrigation.</li>
              <li>🐝 Supports pollinators and biodiversity on farms.</li>
              <li>⚡ Reduces greenhouse gas emissions from synthetic chemicals.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🌾 Eco-Friendly Farming Techniques</h6>
            <ul>
              <li>♻️ Composting organic waste to enrich soil naturally.</li>
              <li>🛠️ Crop rotation and intercropping to maintain soil nutrients.</li>
              <li>🌳 Agroforestry: integrating trees and crops for biodiversity and shade.</li>
              <li>🐄 Using natural fertilizers like manure instead of chemical alternatives.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🌍 Real-life Examples</h6>
            <p>
              In India, Sikkim became the first 100% organic state by promoting chemical-free farming, composting, and organic certification for farmers. This reduced chemical runoff and increased eco-tourism.
            </p>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🪣 Practical Tips for Farmers</h6>
            <ul>
              <li>💧 Install rainwater harvesting systems to reduce dependency on groundwater.</li>
              <li>🪴 Use native plant species and cover crops to prevent soil degradation.</li>
              <li>🦋 Encourage beneficial insects to reduce pest damage naturally.</li>
              <li>🛑 Avoid overuse of synthetic fertilizers to prevent water pollution.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🚨 Common Mistakes to Avoid</h6>
            <ul>
              <li>🚫 Over-irrigation leading to waterlogging.</li>
              <li>🚫 Monocropping without crop rotation.</li>
              <li>🚫 Using chemical pesticides excessively.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>📚 Further Reading</h6>
            <p>
              Learn more about sustainable agriculture innovations here:{" "}
              <a href="https://www.fao.org/sustainable-agriculture" target="_blank" rel="noreferrer">
                FAO Sustainable Agriculture
              </a>
              .
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
              <h4>🧩 Eco-Friendly Agriculture Quiz</h4>
              <p>Test your knowledge and earn Green Eco Coins!</p>
            </div>

            <form id="quizForm" onSubmit={checkScore}>
              {[
                { q: "1. What is the main goal of eco-friendly agriculture?", opts: ["Sustainable farming and environmental protection", "Maximizing chemical use", "Reducing biodiversity", "Increasing pollution"], name: "q1" },
                { q: "2. Which method helps maintain soil fertility naturally?", opts: ["Synthetic fertilizer application", "Composting and crop rotation", "Mono-cropping", "Over-irrigation"], name: "q2" },
                { q: "3. What is agroforestry?", opts: ["Growing crops indoors", "Using hydroponics", "Integrating trees and crops on farmland", "Burning crop residues"], name: "q3" },
                { q: "4. What is a benefit of using organic fertilizers?", opts: ["Improves soil health", "Pollutes water", "Reduces biodiversity", "Increases chemical dependency"], name: "q4" },
                { q: "5. Which of these reduces water usage in farms?", opts: ["Drip irrigation", "Flood irrigation", "Over-irrigation", "No irrigation"], name: "q5" },
                { q: "6. What can replace chemical pesticides naturally?", opts: ["Beneficial insects", "More chemicals", "Monocropping", "Burning fields"], name: "q6" },
                { q: "7. Why is crop rotation important?", opts: ["Maintains soil nutrients", "Increases chemical use", "Reduces biodiversity", "Causes erosion"], name: "q7" },
                { q: "8. What is the environmental impact of eco-friendly farming?", opts: ["Reduces pollution and greenhouse gases", "Increases waste", "Destroys soil", "Uses more energy"], name: "q8" },
                { q: "9. Which is an example of sustainable farming practice?", opts: ["Cover crops and organic compost", "Excess chemical fertilizers", "Monocropping only", "Burning forests"], name: "q9" },
                { q: "10. How does biodiversity help in farming?", opts: ["Pest control and ecosystem stability", "Reduces soil health", "Increases pests", "Pollutes water"], name: "q10" },
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
        <p>© 2025 Eco-Friendly Agriculture Portal | Designed for Sustainable Farming 🌿</p>
      </footer>
    </div>
  );
};

export default EcoFriendlyAgriculture;

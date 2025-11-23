import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EnvironmentalAwareness = () => {
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
      q3: "a",
      q4: "d",
      q5: "c",
      q6: "a",
      q7: "b",
      q8: "c",
      q9: "d",
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
      setFeedback("🎉 Excellent! You’ve completed the Environmental Awareness course successfully!");
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
        <h2>🌏 Clean & Green Technology Portal</h2>
        <p>Learn • Practice • Protect Our Planet</p>
      </header>

      {/* MAIN CONTENT */}
      <div className="container mt-5">
        <h2 className="text-success text-center mb-4">🌿 Course: Environmental Awareness for Students</h2>

        {/* READING SECTION */}
        {showReading && (
          <div className="reading-section" style={{ backgroundColor: "#e9f7ef", padding: "25px", borderRadius: "10px" }}>
            <h5 className="text-center mb-4" style={{ color: "#155d27" }}>
              📘 Reading Section: Understand Before You Act!
            </h5>

            <h6 style={{ color: "#198754" }}>🌱 Introduction</h6>
            <p>
              Environmental awareness means understanding how our actions affect the planet. Every small step we take
              — from saving water to recycling waste — helps in protecting nature and maintaining the balance of the
              ecosystem. Awareness among students builds the foundation for a sustainable future.
            </p>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🌍 Importance of Environmental Awareness</h6>
            <ul>
              <li>🌳 Promotes sustainable living and conservation of resources.</li>
              <li>🌞 Helps fight global warming by encouraging eco-friendly habits.</li>
              <li>🚯 Reduces pollution and supports waste management.</li>
              <li>💧 Encourages the protection of biodiversity and water bodies.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>📖 Real-Life Example</h6>
            <p>
              Students in Kerala, India launched the <strong>“Suchitwa Mission”</strong> — a campaign that turned their
              schools into “Zero Waste Zones.” They reduced plastic use and planted thousands of trees within a year!
            </p>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>⚡ Small Actions That Make Big Impact</h6>
            <ul>
              <li>💡 Turn off lights and fans when not in use.</li>
              <li>🚿 Save water while brushing or bathing.</li>
              <li>🌾 Participate in tree-planting drives at your school or neighborhood.</li>
              <li>🚴‍♂️ Walk or cycle for short distances instead of using vehicles.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>📊 Fun Fact</h6>
            <p>
              One recycled plastic bottle saves enough energy to power a 60-watt light bulb for 6 hours! Imagine what
              millions of bottles can do!
            </p>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>📘 Research Insight</h6>
            <p>
              According to the <strong>UNESCO Environment Education Report (2022)</strong>, early environmental
              education can reduce community waste by 40% and increase green practices in schools by 70%.
            </p>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🌎 Call to Action</h6>
            <p>
              The Earth doesn’t need just awareness — it needs action! Start with your surroundings: clean your school
              area, plant trees, and inspire your friends to go green.
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
              <h4>🧩 Environmental Awareness Quiz</h4>
              <p>Answer these 10 questions to earn your Eco Coins!</p>
            </div>

            <form id="quizForm" onSubmit={checkScore}>
              {[
                { q: "1. What is the main goal of environmental awareness?", opts: ["To protect and preserve nature", "To build more industries", "To use more plastics", "To increase pollution"], name: "q1" },
                { q: "2. Which gas causes the greenhouse effect?", opts: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], name: "q2" },
                { q: "3. Planting trees helps in reducing?", opts: ["Air pollution", "Noise", "Internet usage", "Plastic waste"], name: "q3" },
                { q: "4. What is a renewable energy source?", opts: ["Coal", "Petrol", "Diesel", "Solar energy"], name: "q4" },
                { q: "5. Which of these is harmful to marine life?", opts: ["Paper bags", "Banana peels", "Plastic waste", "Glass bottles"], name: "q5" },
                { q: "6. Why should we turn off taps while brushing?", opts: ["To save water", "To make noise", "To waste time", "For fun"], name: "q6" },
                { q: "7. Which practice supports sustainability?", opts: ["Recycling waste", "Wasting food", "Cutting more trees", "Using diesel cars"], name: "q7" },
                { q: "8. How can students help the environment?", opts: ["Throw waste on streets", "Ignore pollution", "Participate in clean-up drives", "Use plastic bottles daily"], name: "q8" },
                { q: "9. What is the symbol of recycling?", opts: ["A red circle", "A green leaf", "A water drop", "Three chasing arrows"], name: "q9" },
                { q: "10. What does ‘Reduce, Reuse, Recycle’ mean?", opts: ["Minimize waste and conserve resources", "Use more plastic", "Throw away easily", "Ignore environment"], name: "q10" },
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
                <div
                  className="coin-box"
                  style={{
                    background: "#d4edda",
                    border: "2px solid #198754",
                    color: "#155d27",
                    padding: "15px",
                    borderRadius: "10px",
                    display: "inline-block",
                    fontWeight: "bold",
                  }}
                >
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

export default EnvironmentalAwareness;

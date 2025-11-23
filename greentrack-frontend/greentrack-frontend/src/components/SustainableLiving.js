import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SustainableLiving = () => {
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
      q5: "b",
      q6: "a",
      q7: "c",
      q8: "a",
      q9: "b",
      q10: "d",
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
      setFeedback("🌱 Great job! You’ve successfully completed this course on Sustainable Living!");
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
      <header
        style={{
          backgroundColor: "#198754",
          color: "white",
          padding: "15px 0",
          textAlign: "center",
        }}
      >
        <h2>🌍 Clean & Green Technology Portal</h2>
        <p>Learn. Act. Sustain. Make Earth Greener!</p>
      </header>

      {/* MAIN CONTENT */}
      <div className="container mt-5">
        <h2 className="text-success text-center mb-4">
          🌿 Course: Sustainable Living Practices
        </h2>

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
              📖 Reading Section: Learn Before You Quiz!
            </h5>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🌱 Introduction</h6>
            <p>
              Sustainable living means making daily choices that reduce our environmental
              impact while ensuring a better future for the next generations. It involves
              using fewer resources, generating less waste, and promoting harmony between
              people and nature.
            </p>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🌍 Key Principles</h6>
            <ul>
              <li>💧 Conserve water and energy by mindful usage.</li>
              <li>♻️ Reduce, Reuse, and Recycle wherever possible.</li>
              <li>🌾 Support eco-friendly and local products.</li>
              <li>🚴 Prefer walking, cycling, or public transport to reduce emissions.</li>
              <li>🏡 Adopt minimalism — buy what you truly need.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🏠 Daily Life Examples</h6>
            <ul>
              <li>Using solar panels at home to generate clean energy.</li>
              <li>Switching to LED bulbs that use 80% less electricity.</li>
              <li>Carrying a reusable water bottle instead of buying plastic bottles.</li>
              <li>Composting kitchen waste into organic fertilizer.</li>
              <li>Shopping with cloth bags instead of single-use plastic.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🌎 Global Insight</h6>
            <p>
              According to the <strong>UN Environment Programme (2023)</strong>, adopting
              sustainable lifestyle habits could reduce global carbon emissions by up to{" "}
              <strong>40% by 2030</strong>. Small changes by individuals add up to large
              environmental benefits when practiced collectively.
            </p>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>📘 Quick Tips</h6>
            <ul>
              <li>Turn off lights and unplug devices when not in use.</li>
              <li>Opt for plant-based meals a few times a week.</li>
              <li>Buy long-lasting and repairable items.</li>
              <li>Plant trees — they absorb carbon and provide oxygen.</li>
              <li>Support sustainable brands and businesses.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🚨 Common Mistakes to Avoid</h6>
            <ul>
              <li>Leaving water taps open unnecessarily.</li>
              <li>Using disposable cups and cutlery daily.</li>
              <li>Buying fast fashion that promotes waste and pollution.</li>
              <li>Ignoring product packaging made from plastic.</li>
            </ul>

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
          <div
            className="quiz-section mt-5"
            style={{ backgroundColor: "#e9f7ef", padding: "30px", borderRadius: "10px" }}
          >
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
              <h4>🧩 Sustainable Living Quiz</h4>
              <p>Test your eco habits and earn Green Coins!</p>
            </div>

            <form id="quizForm" onSubmit={checkScore}>
              {[
                { q: "1. What is sustainable living?", opts: ["Using resources responsibly to protect future generations", "Buying more products", "Ignoring environmental impact", "Using all natural resources"], name: "q1" },
                { q: "2. Which of the following helps conserve energy?", opts: ["Leaving lights on", "Using LED bulbs", "Using plastic bags", "Running water taps all day"], name: "q2" },
                { q: "3. What is the '3R' principle?", opts: ["Reuse, Reform, Reduce", "Recycle, Repair, Repeat", "Reduce, Reuse, Recycle", "Reuse, Renew, React"], name: "q3" },
                { q: "4. How can we reduce carbon footprint?", opts: ["Use public transport", "Travel by air frequently", "Use plastic daily", "Ignore recycling"], name: "q4" },
                { q: "5. What is the benefit of composting?", opts: ["Creates pollution", "Produces organic fertilizer", "Wastes food", "Uses plastic"], name: "q5" },
                { q: "6. Why should we support local products?", opts: ["Reduces transportation emissions", "They’re more expensive", "They cause deforestation", "They waste water"], name: "q6" },
                { q: "7. Which of the following is a renewable energy source?", opts: ["Coal", "Oil", "Solar power", "Natural gas"], name: "q7" },
                { q: "8. What is minimalism in sustainable living?", opts: ["Owning less and avoiding unnecessary consumption", "Buying everything new", "Wasting resources", "Avoiding recycling"], name: "q8" },
                { q: "9. What can we use instead of single-use plastic bottles?", opts: ["Reusable metal bottles", "Disposable cups", "Paper boxes", "None of the above"], name: "q9" },
                { q: "10. Which daily habit helps sustainability the most?", opts: ["Turning off lights", "Buying more items", "Using plastic daily", "Throwing everything together"], name: "q10" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="quiz-card mb-4 p-3"
                  style={{
                    background: "#fff",
                    border: "1px solid #b7e8d2",
                    borderRadius: "10px",
                  }}
                >
                  <p><b>{item.q}</b></p>
                  {item.opts.map((opt, i) => (
                    <div key={i}>
                      <label>
                        <input
                          type="radio"
                          name={item.name}
                          value={String.fromCharCode(97 + i)}
                          style={{ marginRight: "8px" }}
                        />
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
      <footer
        className="mt-5"
        style={{
          backgroundColor: "#198754",
          color: "white",
          padding: "15px 0",
          textAlign: "center",
        }}
      >
        <p>© 2025 Clean & Green Technology | Designed for Eco Awareness 🌿</p>
      </footer>
    </div>
  );
};

export default SustainableLiving;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GreenTechInnovation = () => {
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
      q2: "a",
      q3: "b",
      q4: "c",
      q5: "a",
      q6: "a",
      q7: "b",
      q8: "a",
      q9: "a",
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
        <h2>🌍 Clean & Green Technology Portal</h2>
        <p>Learn. Innovate. Save Earth!</p>
      </header>

      {/* MAIN CONTENT */}
      <div className="container mt-5">
        <h2 className="text-success text-center mb-4">🌱 Course: Green Technology Innovations</h2>

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
              📘 Reading Section : Explore Green Innovations!
            </h5>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>💡 Introduction to Green Technology</h6>
            <p>
              Green Technology, or clean technology, focuses on sustainable solutions that minimize environmental impact. It integrates renewable energy, energy efficiency, and eco-friendly design to combat climate change and pollution.
            </p>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🌎 Key Areas of Green Innovation</h6>
            <ul>
              <li>⚡ <strong>Renewable Energy:</strong> Solar panels, wind turbines, and hydroelectric systems that reduce reliance on fossil fuels.</li>
              <li>🏭 <strong>Green Manufacturing:</strong> Using sustainable materials and reducing industrial waste and emissions.</li>
              <li>🚗 <strong>Eco-friendly Transportation:</strong> Electric vehicles, hydrogen fuel cells, and public transport innovations.</li>
              <li>🏡 <strong>Energy-efficient Buildings:</strong> Smart homes, LED lighting, and passive cooling/heating systems.</li>
              <li>♻️ <strong>Circular Economy:</strong> Designing products for reuse, recycling, and minimal environmental footprint.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🌾 Real-life Examples</h6>
            <p>
              - Denmark generates over 50% of its electricity from wind turbines. <br/>
              - Tesla’s electric vehicles are transforming the automotive sector toward zero emissions. <br/>
              - Singapore uses vertical gardens and green rooftops to reduce urban heat and improve air quality.
            </p>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🪣 Tips to Support Green Technology</h6>
            <ul>
              <li>🔌 Use energy-efficient appliances and turn off unused electronics.</li>
              <li>🚶 Prefer walking, cycling, or public transport over private vehicles.</li>
              <li>💧 Conserve water with smart irrigation and water-saving devices.</li>
              <li>🌳 Support renewable energy projects and green startups.</li>
              <li>🛍️ Reduce plastic usage and support sustainable products.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🚨 Common Mistakes to Avoid</h6>
            <ul>
              <li>⚠️ Ignoring energy-efficient options in homes or offices.</li>
              <li>⚠️ Buying products without considering lifecycle sustainability.</li>
              <li>⚠️ Not recycling electronic waste properly.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>📘 Research Insights</h6>
            <p>
              According to the International Energy Agency (IEA, 2024), global adoption of green technologies could cut global CO₂ emissions by 40% by 2050 while creating millions of new jobs in renewable energy and sustainable infrastructure.
            </p>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>📚 Further Reading</h6>
            <p>
              Explore innovations in green tech:{" "}
              <a href="https://www.nature.com/subjects/green-technology" target="_blank" rel="noreferrer">
                Nature - Green Technology
              </a>
              ,{" "}
              <a href="https://www.sciencedirect.com/journal/renewable-and-sustainable-energy-reviews" target="_blank" rel="noreferrer">
                Renewable & Sustainable Energy Reviews
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
              <h4>🧩 Green Technology Quiz</h4>
              <p>Test your knowledge and earn your Green Eco Coins!</p>
            </div>

            <form id="quizForm" onSubmit={checkScore}>
              {[
                { q: "1. What is Green Technology primarily focused on?", opts: ["Sustainability & Environment", "Increasing pollution", "Fossil fuel extraction", "Urban sprawl"], name: "q1" },
                { q: "2. Which energy source is renewable?", opts: ["Solar power", "Coal", "Petroleum", "Natural gas"], name: "q2" },
                { q: "3. Which is an eco-friendly transport?", opts: ["Gasoline cars", "Electric vehicles", "Diesel trucks", "None"], name: "q3" },
                { q: "4. What does the circular economy promote?", opts: ["One-time use products", "Landfill expansion", "Reuse and recycling", "Ignore sustainability"], name: "q4" },
                { q: "5. Which building practice saves energy?", opts: ["Smart lighting & passive heating", "Using air conditioners constantly", "Concrete-only buildings", "Ignoring insulation"], name: "q5" },
                { q: "6. How does green tech help climate change?", opts: ["Reduces emissions & pollution", "Increases CO2", "Consumes more energy", "Wastes resources"], name: "q6" },
                { q: "7. What is an example of renewable energy?", opts: ["Wind turbines", "Coal plant", "Diesel generator", "None"], name: "q7" },
                { q: "8. Which innovation is an example of energy efficiency?", opts: ["LED bulbs", "Incandescent bulbs", "Open flame lamps", "Diesel lamps"], name: "q8" },
                { q: "9. What is the role of electric vehicles?", opts: ["Reduce fossil fuel use", "Increase pollution", "Harm environment", "None"], name: "q9" },
                { q: "10. Why support green startups?", opts: ["Promotes eco-friendly solutions", "Increases waste", "Consumes fossil fuels", "No impact"], name: "q10" },
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

export default GreenTechInnovation;

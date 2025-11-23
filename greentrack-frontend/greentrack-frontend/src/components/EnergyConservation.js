import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EnergyConservation = () => {
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
      q4: "a",
      q5: "d",
      q6: "b",
      q7: "a",
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
      setFeedback("🎉 Great work! You have successfully completed the Energy Conservation course!");
      setShowCoins(true);
    } else if (percentage < 35) {
      alert("❌ You didn’t score enough. Please read again carefully and try again.");
      setShowResult(false);
      setShowReading(true);
      document.getElementById("quizForm").reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setFeedback("⚠️ You scored below 50%. Try again to improve your knowledge!");
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
        style={{ backgroundColor: "#198754", color: "white", padding: "15px 0", textAlign: "center" }}
      >
        <h2>🌍 Clean & Green Technology Portal</h2>
        <p>Learn. Save Energy. Earn. Conserve Earth’s Future!</p>
      </header>

      {/* MAIN CONTENT */}
      <div className="container mt-5">
        <h2 className="text-success text-center mb-4">⚡ Course: Energy Conservation Techniques</h2>

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
            <h5 className="text-center text-success mb-4">📖 Learn Before You Quiz!</h5>

            <h6 className="text-success mt-3">🌱 Introduction</h6>
            <p>
              Energy conservation means using energy efficiently and avoiding unnecessary wastage. 
              It plays a key role in reducing energy bills, protecting the environment, 
              and ensuring future energy availability. Conserving energy also reduces the need for fossil fuels.
            </p>

            <h6 className="text-success mt-3">💡 Why Energy Conservation is Important</h6>
            <ul>
              <li>🌍 Reduces pollution caused by energy production.</li>
              <li>💸 Saves money on electricity and fuel bills.</li>
              <li>⚡ Ensures availability of energy for future generations.</li>
              <li>🔥 Reduces dependency on non-renewable energy sources.</li>
            </ul>

            <h6 className="text-success mt-3">🏠 Energy Conservation at Home</h6>
            <ul>
              <li>🔌 Switch off lights, fans, and devices when not in use.</li>
              <li>💧 Use solar water heaters and energy-efficient appliances.</li>
              <li>🌤️ Allow natural light during daytime instead of electric bulbs.</li>
              <li>🪟 Use curtains and ventilation to reduce air-conditioner usage.</li>
            </ul>

            <h6 className="text-success mt-3">🏢 Energy Conservation in Industries</h6>
            <p>
              Industries can conserve energy by upgrading machinery, recycling waste heat, and 
              using renewable sources such as solar or wind. Automation also helps reduce energy losses.
            </p>

            <h6 className="text-success mt-3">🚗 Energy Conservation in Transport</h6>
            <p>
              Using public transport, carpooling, electric vehicles, and maintaining proper tire pressure 
              helps in saving fuel and reducing emissions.
            </p>

            <h6 className="text-success mt-3">🌞 Renewable Energy and Smart Technology</h6>
            <p>
              Using renewable energy sources like solar, wind, and hydroelectric power is the 
              most sustainable way to conserve energy. Smart meters and IoT devices help track 
              energy consumption and optimize usage.
            </p>

            <h6 className="text-success mt-3">📈 Real-life Example</h6>
            <p>
              Japan’s “Top Runner Program” promotes the most energy-efficient appliances in the market, 
              reducing national energy consumption by over 30% since 2000.
            </p>

            <h6 className="text-success mt-3">📊 Research Insight</h6>
            <p>
              According to the International Energy Agency (IEA), improving global energy efficiency 
              could reduce CO₂ emissions by 40% by 2050.
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
              <h4>🧠 Energy Conservation Quiz</h4>
              <p>Test your knowledge and earn your Eco Coins!</p>
            </div>

            <form id="quizForm" onSubmit={checkScore}>
              {[
                { q: "1. What is energy conservation?", opts: ["Using energy efficiently", "Using more energy", "Avoiding renewable sources", "Generating waste energy"], name: "q1" },
                { q: "2. Which appliance consumes the most energy at home?", opts: ["Air conditioner", "Ceiling fan", "LED bulb", "Laptop"], name: "q2" },
                { q: "3. Which energy source is renewable?", opts: ["Coal", "Wind", "Diesel", "Petrol"], name: "q3" },
                { q: "4. Why should we turn off unused lights?", opts: ["To save electricity", "For decoration", "To increase bills", "For fun"], name: "q4" },
                { q: "5. Which action saves the most fuel?", opts: ["Idling engine", "Fast driving", "Frequent braking", "Carpooling"], name: "q5" },
                { q: "6. What does LED stand for?", opts: ["Light Energy Device", "Light Emitting Diode", "Low Energy Detector", "Low Emission Device"], name: "q6" },
                { q: "7. How can we conserve energy in schools?", opts: ["Use solar panels", "Leave lights on", "Waste paper", "Keep computers running"], name: "q7" },
                { q: "8. What is the benefit of using energy-efficient appliances?", opts: ["Higher bills", "Less brightness", "Lower energy consumption", "More heat"], name: "q8" },
                { q: "9. Which organization promotes global energy efficiency?", opts: ["IEA", "NASA", "WHO", "UNESCO"], name: "q9" },
                { q: "10. What is the slogan for energy conservation?", opts: ["Save Energy, Save Earth", "Use More, Waste More", "Burn More Power", "Electricity Forever"], name: "q10" },
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

export default EnergyConservation;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RecyclingCourse = () => {
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
      q3: "a",
      q4: "c",
      q5: "a",
      q6: "a",
      q7: "a",
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
        <p>Learn. Recycle. Earn. Make Earth Cleaner!</p>
      </header>

      {/* MAIN CONTENT */}
      <div className="container mt-5">
        <h2 className="text-success text-center mb-4">♻️ Course: Basics of Recycling</h2>

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
              Recycling is the process of turning waste materials into new products, reducing the need for new raw
              materials. This process helps prevent pollution, saves energy, and supports sustainable living.
            </p>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🌎 Why Recycling Matters</h6>
            <p>
              Every item we throw away has a life beyond the bin. Recycling gives waste a second chance — aluminum cans
              can be back on shelves within 60 days after being recycled.
            </p>
            <ul>
              <li>🌿 Saves natural resources like trees, minerals, and fossil fuels.</li>
              <li>⚡ Reduces energy usage by up to 70% in some industries.</li>
              <li>🚯 Lowers waste that ends up in landfills and oceans.</li>
              <li>💨 Cuts greenhouse gas emissions, fighting climate change.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🌾 Real-life Example</h6>
            <p>
              In Sweden, less than 1% of household waste goes to landfills. Most waste is recycled or used for energy
              production.
            </p>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🪣 Recycling Tips</h6>
            <ul>
              <li>♻️ Keep recyclable materials clean and dry before disposal.</li>
              <li>📰 Flatten cardboard boxes to save bin space.</li>
              <li>🚫 Avoid mixing glass with food waste.</li>
              <li>🛍️ Carry your own cloth bags while shopping to avoid plastic bags.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>🚨 Common Mistakes to Avoid</h6>
            <ul>
              <li>🚫 Throwing plastic bags in recycling bins — they jam sorting machines.</li>
              <li>🚫 Not rinsing food containers before recycling.</li>
              <li>🚫 Putting electronics or batteries in household recycling — they need special handling.</li>
            </ul>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>📘 Research Insight</h6>
            <p>
              A <strong>UN Environment Programme study (2023)</strong> reported that global recycling rates could reduce
              greenhouse gas emissions by 20% by 2040.
            </p>

            <h6 style={{ color: "#198754", marginTop: "20px" }}>📚 Further Reading</h6>
            <p>
              Explore sustainable recycling innovations here:{" "}
              <a href="https://www.sciencedirect.com/journal/resources-conservation-and-recycling" target="_blank" rel="noreferrer">
                Resources, Conservation & Recycling Journal
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
              <h4>🧩 Recycling Awareness Quiz</h4>
              <p>Test your knowledge and earn your Green Eco Coins!</p>
            </div>

            <form id="quizForm" onSubmit={checkScore}>
              {[
                { q: "1. What is the main purpose of recycling?", opts: ["To reuse resources and reduce waste", "To increase pollution", "To fill landfills faster", "To make waste management harder"], name: "q1" },
                { q: "2. Which material can usually be recycled?", opts: ["Plastic bottles", "Food waste", "Used tissues", "Styrofoam cups"], name: "q2" },
                { q: "3. What color bin is typically used for paper waste?", opts: ["Blue", "Green", "Yellow", "Red"], name: "q3" },
                { q: "4. Which of these is NOT recyclable?", opts: ["Glass jars", "Aluminum cans", "Used batteries", "Newspapers"], name: "q4" },
                { q: "5. What is e-waste?", opts: ["Waste from electronic devices", "Energy waste", "Water pollution", "Paper waste"], name: "q5" },
                { q: "6. Why is recycling important for the environment?", opts: ["It saves natural resources", "It increases global warming", "It uses more energy", "It fills landfills faster"], name: "q6" },
                { q: "7. What should you do before recycling a plastic bottle?", opts: ["Rinse and remove the cap", "Throw it with food waste", "Crush and burn it", "Cover with paper"], name: "q7" },
                { q: "8. Which is an example of upcycling?", opts: ["Turning old jeans into a handbag", "Throwing paper into trash", "Melting plastic bottles", "Using more packaging"], name: "q8" },
                { q: "9. What happens if non-recyclables are put in recycling bins?", opts: ["It contaminates recyclables", "It saves energy", "It helps recycling workers", "It improves sorting"], name: "q9" },
                { q: "10. Which helps reduce waste most?", opts: ["Reuse and recycle items", "Buy more packaged goods", "Throw away items quickly", "Ignore sorting waste"], name: "q10" },
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

export default RecyclingCourse;

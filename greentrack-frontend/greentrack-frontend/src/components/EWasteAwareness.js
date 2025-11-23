import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EWasteAwareness = () => {
  const [view, setView] = useState("reading");
  const [score, setScore] = useState(null);
  const [coinsEarned, setCoinsEarned] = useState(false);

  const correctAnswers = {
    q1: "a",
    q2: "a",
    q3: "a",
    q4: "a",
    q5: "a",
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let userScore = 0;

    Object.keys(correctAnswers).forEach((q) => {
      const selected = e.target[q]?.value;
      if (selected === correctAnswers[q]) userScore++;
    });

    const percentage = (userScore / Object.keys(correctAnswers).length) * 100;
    setScore(percentage);
    setView("result");

    if (percentage >= 50) setCoinsEarned(true);
  };

  const restartQuiz = () => {
    setScore(null);
    setCoinsEarned(false);
    setView("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBackToCourses = () => {
    window.location.href = "/courses";
  };

  return (
    <div className="container mt-4 mb-5">
      <header className="text-center bg-success text-white py-3 rounded">
        <h2>🌍 Clean & Green Technology Portal</h2>
        <p>Learn. Live. Sustain. Inspire a Greener Tomorrow!</p>
      </header>

      <h2 className="text-success text-center my-4">🚮 E-Waste Awareness</h2>

      {/* READING SECTION */}
      {view === "reading" && (
        <div className="reading-section bg-light p-4 rounded">
          <h5 className="text-center text-success mb-3">
            📘 Reading Section – Learn Before You Quiz!
          </h5>

          <h6>♻️ Introduction</h6>
          <p>
            E-waste or electronic waste refers to discarded electrical or
            electronic devices such as computers, phones, televisions, and
            batteries. As technology advances rapidly, the volume of e-waste is
            increasing every year, posing serious environmental and health
            challenges.
          </p>

          <h6>🌍 Why E-Waste Awareness Matters</h6>
          <ul>
            <li>
              🔋 Prevents toxic substances like lead, mercury, and cadmium from
              polluting soil and water.
            </li>
            <li>
              🌱 Encourages recycling of valuable metals like gold, silver, and
              copper.
            </li>
            <li>🏭 Reduces landfill waste and resource extraction.</li>
            <li>💼 Creates green job opportunities in recycling sectors.</li>
            <li>🌍 Promotes responsible consumption and eco-friendly habits.</li>
          </ul>

          <h6>⚠️ Causes of E-Waste Generation</h6>
          <ul>
            <li>📱 Rapid technological upgrades and frequent replacements.</li>
            <li>💻 Lack of proper recycling systems.</li>
            <li>🗑️ Discarding working electronics due to brand changes.</li>
            <li>🏢 Corporate e-waste due to bulk disposal.</li>
          </ul>

          <h6>💀 Effects of Improper E-Waste Disposal</h6>
          <ul>
            <li>☣️ Toxic chemicals pollute air, soil, and water.</li>
            <li>💧 Contamination of groundwater by hazardous materials.</li>
            <li>😷 Health issues like respiratory and skin problems.</li>
            <li>🌡️ Increases carbon footprint from unsafe recycling.</li>
          </ul>

          <h6>🌿 Eco-Friendly E-Waste Management</h6>
          <ul>
            <li>✅ Donate or sell working electronics.</li>
            <li>♻️ Use certified e-waste collection centers.</li>
            <li>🔋 Recycle batteries, boards, and cables.</li>
            <li>🏬 Support sustainable companies.</li>
            <li>📦 Prefer durable products and buy only what you need.</li>
          </ul>

          <h6>📊 Real-Life Example</h6>
          <p>
            The <strong>Chennai E-Waste Initiative (2022)</strong> collected 250
            tons of discarded electronics and recycled 85% of them—reducing
            pollution and promoting awareness.
          </p>

          <h6>📘 Research Insights</h6>
          <ul>
            <li>
              🌐 <b>World Economic Forum (2023)</b>: 57 million tons of e-waste
              generated globally each year.
            </li>
            <li>
              🧪 <b>UN Study (2022)</b>: Only 17% of e-waste is formally
              recycled.
            </li>
            <li>
              🇮🇳 <b>Indian Report (2024)</b>: Awareness improved safe disposal
              by 35% in metro cities.
            </li>
            <li>
              💻 <b>Global Study (2021)</b>: Reusing 1M laptops saves power for
              3,500 homes yearly.
            </li>
          </ul>

          <div className="text-center mt-4">
            <button
              className="btn btn-primary"
              onClick={() => setView("quiz")}
            >
              Start Quiz
            </button>
            <button
              className="btn btn-secondary ms-3"
              onClick={goBackToCourses}
            >
              🔙 Back
            </button>
          </div>
        </div>
      )}

      {/* QUIZ SECTION */}
      {view === "quiz" && (
        <div className="quiz-section bg-light p-4 rounded mt-4">
          <div className="quiz-header text-center mb-3">
            <h4>🧩 E-Waste Awareness Quiz</h4>
            <p>Test your knowledge and become a Responsible Recycler!</p>
          </div>

          <form onSubmit={handleQuizSubmit}>
            <div className="quiz-card mb-3">
              <p>
                <b>1.</b> What is e-waste?
              </p>
              <label>
                <input type="radio" name="q1" value="a" /> Discarded electrical
                or electronic devices
              </label>
              <label>
                <input type="radio" name="q1" value="b" /> Organic kitchen waste
              </label>
              <label>
                <input type="radio" name="q1" value="c" /> Agricultural residue
              </label>
            </div>

            <div className="quiz-card mb-3">
              <p>
                <b>2.</b> Which of the following is a harmful effect of e-waste?
              </p>
              <label>
                <input type="radio" name="q2" value="a" /> Soil and water
                contamination
              </label>
              <label>
                <input type="radio" name="q2" value="b" /> Improved air quality
              </label>
              <label>
                <input type="radio" name="q2" value="c" /> Growth of plants
              </label>
            </div>

            <div className="quiz-card mb-3">
              <p>
                <b>3.</b> What can you do with old working electronics?
              </p>
              <label>
                <input type="radio" name="q3" value="a" /> Donate or sell them
              </label>
              <label>
                <input type="radio" name="q3" value="b" /> Throw them away
              </label>
              <label>
                <input type="radio" name="q3" value="c" /> Burn them
              </label>
            </div>

            <div className="quiz-card mb-3">
              <p>
                <b>4.</b> Who estimated 57 million tons of e-waste annually?
              </p>
              <label>
                <input type="radio" name="q4" value="a" /> World Economic Forum
              </label>
              <label>
                <input type="radio" name="q4" value="b" /> FIFA
              </label>
              <label>
                <input type="radio" name="q4" value="c" /> NASA
              </label>
            </div>

            <div className="quiz-card mb-3">
              <p>
                <b>5.</b> How does recycling e-waste help the environment?
              </p>
              <label>
                <input type="radio" name="q5" value="a" /> Conserves resources
                and reduces pollution
              </label>
              <label>
                <input type="radio" name="q5" value="b" /> Increases landfill
                waste
              </label>
              <label>
                <input type="radio" name="q5" value="c" /> Causes air pollution
              </label>
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn btn-success">
                Submit Quiz
              </button>
              <button
                type="button"
                className="btn btn-secondary ms-3"
                onClick={() => setView("reading")}
              >
                🔙 Back
              </button>
            </div>
          </form>
        </div>
      )}

      {/* RESULT SECTION */}
      {view === "result" && (
        <div className="text-center mt-5">
          <h4>Your Score: {score?.toFixed(0)}%</h4>
          {score >= 50 ? (
            <>
              <p className="text-success">
                🎉 Excellent! You completed this E-Waste Awareness course!
              </p>
              {coinsEarned && (
                <div className="coin-box bg-success text-white p-3 rounded">
                  💰 You Earned: <b>30 Eco Coins!</b>
                </div>
              )}
            </>
          ) : (
            <p className="text-danger">
              ⚠️ You scored below 50%. Try again to strengthen your knowledge!
            </p>
          )}
          <div className="mt-4">
            <button className="btn btn-primary" onClick={restartQuiz}>
              Try Again
            </button>
            <button
              className="btn btn-secondary ms-3"
              onClick={goBackToCourses}
            >
              🔙 Back to Courses
            </button>
          </div>
        </div>
      )}

      <footer className="text-center bg-success text-white mt-5 py-3 rounded">
        © 2025 Clean & Green Technology | Designed for E-Waste Awareness ♻️
      </footer>
    </div>
  );
};

export default EWasteAwareness;

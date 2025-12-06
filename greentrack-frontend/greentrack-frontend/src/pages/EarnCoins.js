import React from "react";
import "./EarnCoins.css";

const EarnCoins = () => {
  return (
    <div className="coins-container">

      {/* ================= HEADER SECTION ================= */}
      <div className="coins-header">
        <h1 className="coins-title">Green Coins 💚</h1>

        <div className="coins-balance-card">
          <div className="balance-row">
            <p className="balance-label">Balance</p>
            <p className="balance-value">0</p>
          </div>

          <div className="balance-row small">
            <p className="balance-label">Pending Coins</p>
            <p className="balance-value">120</p>
          </div>

          <button className="view-btn">View your transactions</button>
        </div>
      </div>

      {/* ================= HOW TO EARN ================= */}
      <div className="earn-box">
        <h3>Earn Coins</h3>
        <p>Earn Green Coins whenever you report waste responsibly.</p>

        <ul className="tick-list">
          <li>✔ Earn 30% Coins on every report</li>
          <li>✔ Coins valid for 365 days</li>
          <li>✔ Use Coins to get discounts on eco-products</li>
        </ul>
      </div>

      {/* ================= WHAT ARE COINS ================= */}
      <div className="info-card">
        <h3>What are Green Coins?</h3>
        <p>
          Green Coins are reward points you earn for contributing to cleaner
          surroundings. You can redeem them to get eco-friendly product
          discounts or other benefits.
        </p>
      </div>

      {/* ================= HOW DO I EARN ================= */}
      <div className="info-card">
        <h3>How do I earn Coins?</h3>
        <p>You earn Coins when you submit reports about waste or pollution.</p>

        <table className="coins-table">
          <thead>
            <tr>
              <th>Report Type</th>
              <th>Coins Earned</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Plastic Waste Report</td>
              <td>30</td>
            </tr>
            <tr>
              <td>E-Waste Report</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Illegal Dumping Report</td>
              <td>75</td>
            </tr>
            <tr>
              <td>Community Clean-Up Contribution</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================= WHEN DO I GET COINS ================= */}
      <div className="info-card">
        <h3>When do I get my Coins?</h3>
        <p>
          Coins from approved reports are added to your wallet once verification completes.
        </p>
      </div>

      {/* ================= HOW TO USE COINS ================= */}
      <div className="info-card">
        <h3>How do I use my Coins?</h3>
        <ul className="tick-list">
          <li>Redeem Coins for discounts on eco-products</li>
          <li>10 Coins = ₹1 Discount</li>
          <li>Use Coins during checkout in the Marketplace</li>
        </ul>
      </div>

      {/* ================= FAQ ================= */}
      <div className="faq-card">
        <h3>Frequently Asked Questions</h3>

        <details>
          <summary>Are Coins refundable?</summary>
          <p>No, Coins are not refundable once redeemed.</p>
        </details>

        <details>
          <summary>Do Coins expire?</summary>
          <p>Yes, they expire in 365 days if unused.</p>
        </details>

        <details>
          <summary>Where can I use my Coins?</summary>
          <p>You can use them on Marketplace products.</p>
        </details>
      </div>

      <div className="footer-space"></div>
    </div>
  );
};

export default EarnCoins;

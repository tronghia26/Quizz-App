import React from "react";

const Introduce = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        lineHeight: "1.6",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ color: "#4CAF50" }}>Welcome to QuizMaster!</h1>
        <p>Your ultimate destination for mastering subjects through quizzes!</p>
      </header>

      <section style={{ marginBottom: "20px" }}>
        <h2>About QuizMaster</h2>
        <p>
          QuizMaster is a platform designed to help students like you excel in
          their studies. Whether you're preparing for exams or just brushing up
          on your knowledge, our quizzes are tailored to enhance your learning
          experience.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>Key Features</h2>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>
            Wide variety of subjects including Math, Science, History, and more.
          </li>
          <li>Instant feedback on your answers to help you improve.</li>
          <li>Track your progress and identify areas for improvement.</li>
          <li>User-friendly interface for a seamless experience.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>How to Get Started</h2>
        <ol style={{ listStyleType: "decimal", paddingLeft: "20px" }}>
          <li>Choose a subject from our list of available quizzes.</li>
          <li>Answer the multiple-choice questions at your own pace.</li>
          <li>Review your answers and learn from detailed explanations.</li>
        </ol>
      </section>
    </div>
  );
};

export default Introduce;

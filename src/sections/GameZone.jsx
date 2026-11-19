
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Gamepad2,
  Trophy,
  Brain,
  Film,
  Timer,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  CheckCircle,
  XCircle,
  Zap,
  Star,
  Lightbulb,
  Crown,
  Target,
  Home,
} from "lucide-react";

import "./GameZone.css";

/* =====================================
   GAME 01 — SRK TRIVIA
===================================== */

const quizQuestions = [
  {
    question: "What is Shah Rukh Khan's character name in Baazigar?",
    options: ["Ajay Sharma", "Sunil", "Raj Aryan", "Arjun Sagar"],
    answer: "Ajay Sharma",
  },
  {
    question: "In Kabhi Haan Kabhi Naa, what is SRK's character called?",
    options: ["Rahul", "Sunil", "Aman", "Vikram"],
    answer: "Sunil",
  },
  {
    question: "Which character does SRK portray in Darr?",
    options: ["Devdas", "Rahul Mehra", "Raj Malhotra", "Karan"],
    answer: "Rahul Mehra",
  },
  {
    question: "What is SRK's character name in Dil Se..?",
    options: ["Amar", "Sameer", "Mohan", "Vijay"],
    answer: "Amar",
  },
  {
    question: "In Pardes, what is the name of SRK's character?",
    options: ["Arjun Sagar", "Raj Aryan", "Rahul Joshi", "Ajay"],
    answer: "Arjun Sagar",
  },
  {
    question: "Which character does SRK play in Yes Boss?",
    options: ["Rahul Joshi", "Sunil", "Devdas", "Kabir"],
    answer: "Rahul Joshi",
  },
  {
    question: "What is SRK's character name in Mohabbatein?",
    options: ["Raj Aryan Malhotra", "Raj Mathur", "Raj Malhotra", "Rahul"],
    answer: "Raj Aryan Malhotra",
  },
  {
    question: "In Devdas (2002), what is the full name of SRK's character?",
    options: [
      "Devdas Mukherjee",
      "Devendra Singh",
      "Dev Anand",
      "Dev Pratap",
    ],
    answer: "Devdas Mukherjee",
  },
  {
    question: "Which character does SRK portray in Deewana?",
    options: ["Raja Sahai", "Ajay Sharma", "Sunil", "Vikram"],
    answer: "Raja Sahai",
  },
  {
    question: "What is SRK's character name in Koyla?",
    options: ["Shankar", "Max", "Kishan", "Charlie"],
    answer: "Shankar",
  },
];

/* =====================================
   GAME 02 — GUESS THE MOVIE
===================================== */

const moviePuzzles = [
  {
    emoji: "👬 🏍️ ⚽",
    hint: "Two brothers, a college rivalry and a football-loving gang.",
    options: ["Josh", "Duplicate", "Asoka", "Billu"],
    answer: "Josh",
  },
  {
    emoji: "👥 🎭 🔄",
    hint: "One man discovers that someone looks exactly like him.",
    options: ["Duplicate", "Don 2", "Paheli", "Koyla"],
    answer: "Duplicate",
  },
  {
    emoji: "👑 ⚔️ 🏛️",
    hint: "A historical epic inspired by the life of an Indian emperor.",
    options: ["Asoka", "Devdas", "Ra.One", "Billu"],
    answer: "Asoka",
  },
  {
    emoji: "🎖️ 🏫 🇮🇳",
    hint: "An army officer goes undercover at a college.",
    options: ["Main Hoon Na", "Josh", "Chalte Chalte", "Don 2"],
    answer: "Main Hoon Na",
  },
  {
    emoji: "🚚 ❤️ 🛣️",
    hint: "A transport business owner and a love story on the road.",
    options: ["Chalte Chalte", "Paheli", "Asoka", "Duplicate"],
    answer: "Chalte Chalte",
  },
  {
    emoji: "👻 🏜️ 💍",
    hint: "A mysterious spirit takes the place of a woman's missing husband.",
    options: ["Paheli", "Billu", "Josh", "Ra.One"],
    answer: "Paheli",
  },
  {
    emoji: "🕴️ 🌍 💣",
    hint: "An international criminal returns for another high-stakes mission.",
    options: ["Don 2", "Koyla", "Asoka", "Main Hoon Na"],
    answer: "Don 2",
  },
  {
    emoji: "🎮 🤖 ⚡",
    hint: "A video-game character enters the real world.",
    options: ["Ra.One", "Duplicate", "Billu", "Josh"],
    answer: "Ra.One",
  },
  {
    emoji: "💈 🤝 ⭐",
    hint: "A village barber reconnects with his superstar childhood friend.",
    options: ["Billu", "Paheli", "Don 2", "Chalte Chalte"],
    answer: "Billu",
  },
  {
    emoji: "🧳 🇪🇺 ❤️ ✈️",
    hint: "A tour guide and a traveller meet during a European journey.",
    options: [
      "Jab Harry Met Sejal",
      "Main Hoon Na",
      "Asoka",
      "Duplicate",
    ],
    answer: "Jab Harry Met Sejal",
  },
];

/* =====================================
   GAME 03 — SPEED ROUND
===================================== */

const challengeQuestions = [
  {
    question: "What is SRK's character name in Chak De! India?",
    options: ["Kabir Khan", "Charlie", "Surinder Sahni", "Rizwan Khan"],
    answer: "Kabir Khan",
  },
  {
    question: "In Rab Ne Bana Di Jodi, what is the name of SRK's character?",
    options: ["Surinder Sahni", "Rahul", "Gaurav", "Bauua Singh"],
    answer: "Surinder Sahni",
  },
  {
    question: "Which character does SRK play in My Name Is Khan?",
    options: ["Rizwan Khan", "Raees Alam", "Kabir Khan", "Vikram"],
    answer: "Rizwan Khan",
  },
  {
    question: "What is SRK's character name in Chennai Express?",
    options: ["Rahul Mithaiwala", "Charlie", "Don", "Raj Aryan"],
    answer: "Rahul Mithaiwala",
  },
  {
    question: "In Happy New Year, what is SRK's character called?",
    options: ["Charlie", "Gaurav", "Shekhar", "Pathaan"],
    answer: "Charlie",
  },
  {
    question: "Who does SRK portray in Fan?",
    options: ["Gaurav Chandna", "Kabir Khan", "Rizwan Khan", "Raees Alam"],
    answer: "Gaurav Chandna",
  },
  {
    question: "What is SRK's character name in Raees?",
    options: ["Raees Alam", "Azad", "Vikram", "Surinder"],
    answer: "Raees Alam",
  },
  {
    question: "In Zero, what is the name of SRK's character?",
    options: ["Bauua Singh", "Charlie", "Rahul", "Gaurav"],
    answer: "Bauua Singh",
  },
  {
    question: "Which filmmaker directed Pathaan?",
    options: [
      "Siddharth Anand",
      "Atlee",
      "Farah Khan",
      "Rajkumar Hirani",
    ],
    answer: "Siddharth Anand",
  },
  {
    question: "Who directed Jawan?",
    options: ["Atlee", "Siddharth Anand", "Kabir Khan", "Rohit Shetty"],
    answer: "Atlee",
  },
];

/* =====================================
   GAME CARD DATA
===================================== */

const games = [
  {
    id: "quiz",
    number: "01",
    title: "SRK TRIVIA",
    description:
      "10 questions on characters, films and iconic performances.",
    icon: Brain,
    label: "FILM KNOWLEDGE",
    count: "10 QUESTIONS",
  },
  {
    id: "movie",
    number: "02",
    title: "GUESS THE MOVIE",
    description:
      "Decode movie titles through visual clues and emojis.",
    icon: Film,
    label: "MOVIE PUZZLE",
    count: "10 PUZZLES",
  },
  {
    id: "challenge",
    number: "03",
    title: "SPEED ROUND",
    description:
      "Answer 10 rapid-fire questions before time runs out.",
    icon: Zap,
    label: "60-SECOND MODE",
    count: "60 SECONDS",
  },
];

function GameZone() {
  const [activeGame, setActiveGame] = useState(null);

  // QUIZ STATE
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  // MOVIE PUZZLE STATE
  const [movieIndex, setMovieIndex] = useState(0);
  const [movieScore, setMovieScore] = useState(0);
  const [movieAnswer, setMovieAnswer] = useState(null);
  const [hintVisible, setHintVisible] = useState(false);
  const [movieFinished, setMovieFinished] = useState(false);

  // SPEED CHALLENGE STATE
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [challengeScore, setChallengeScore] = useState(0);
  const [challengeTime, setChallengeTime] = useState(60);
  const [challengeActive, setChallengeActive] = useState(false);
  const [challengeFinished, setChallengeFinished] = useState(false);

  // PERSONAL BEST SCORES
  const [bestScores, setBestScores] = useState({
    quiz: 0,
    movie: 0,
    challenge: 0,
  });

  const updateBestScore = (game, score) => {
    setBestScores((previous) => ({
      ...previous,
      [game]: Math.max(previous[game], score),
    }));
  };

  /* START GAME */

  const startGame = (game) => {
    setActiveGame(game);

    if (game === "quiz") {
      setQuizIndex(0);
      setQuizScore(0);
      setQuizAnswer(null);
      setQuizFinished(false);
    }

    if (game === "movie") {
      setMovieIndex(0);
      setMovieScore(0);
      setMovieAnswer(null);
      setHintVisible(false);
      setMovieFinished(false);
    }

    if (game === "challenge") {
      setChallengeIndex(0);
      setChallengeScore(0);
      setChallengeTime(60);
      setChallengeFinished(false);
      setChallengeActive(true);
    }
  };

  const backToArena = () => {
    setActiveGame(null);
    setChallengeActive(false);
  };

  /* =====================================
     SPEED CHALLENGE TIMER
  ===================================== */

  useEffect(() => {
    if (!challengeActive) return;

    if (challengeTime <= 0) {
      setChallengeActive(false);
      setChallengeFinished(true);
      updateBestScore("challenge", challengeScore);
      return;
    }

    const timer = setTimeout(() => {
      setChallengeTime((previous) => previous - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [challengeActive, challengeTime, challengeScore]);

  /* =====================================
     QUIZ ANSWERS
  ===================================== */

  const handleQuizAnswer = (option) => {
    if (quizAnswer !== null) return;

    setQuizAnswer(option);

    if (option === quizQuestions[quizIndex].answer) {
      setQuizScore((previous) => previous + 1);
    }
  };

  const nextQuizQuestion = () => {
    if (quizIndex + 1 < quizQuestions.length) {
      setQuizIndex((previous) => previous + 1);
      setQuizAnswer(null);
    } else {
      setQuizFinished(true);
      updateBestScore("quiz", quizScore);
    }
  };

  /* =====================================
     MOVIE PUZZLE ANSWERS
  ===================================== */

  const handleMovieAnswer = (option) => {
    if (movieAnswer !== null) return;

    setMovieAnswer(option);

    if (option === moviePuzzles[movieIndex].answer) {
      setMovieScore((previous) => previous + 1);
    }
  };

  const nextMovieQuestion = () => {
    if (movieIndex + 1 < moviePuzzles.length) {
      setMovieIndex((previous) => previous + 1);
      setMovieAnswer(null);
      setHintVisible(false);
    } else {
      setMovieFinished(true);
      updateBestScore("movie", movieScore);
    }
  };

  /* =====================================
     SPEED CHALLENGE ANSWERS
  ===================================== */

  const handleChallengeAnswer = (option) => {
    if (!challengeActive) return;

    const current = challengeQuestions[challengeIndex];
    if (!current) return;

    const isCorrect = option === current.answer;
    const nextScore = challengeScore + (isCorrect ? 1 : 0);
    const nextIndex = challengeIndex + 1;

    setChallengeScore(nextScore);
    setChallengeIndex(nextIndex);

    if (nextIndex >= challengeQuestions.length) {
      setChallengeActive(false);
      setChallengeFinished(true);
      updateBestScore("challenge", nextScore);
    }
  };

  /* CURRENT QUESTIONS */

  const currentQuiz = quizQuestions[quizIndex];
  const currentMovie = moviePuzzles[movieIndex];
  const currentChallenge = challengeQuestions[challengeIndex];

  /* =====================================
     REUSABLE ANSWER OPTIONS
  ===================================== */

  const renderOptions = (options, selected, answer, onSelect) => (
    <div className="arena-options">
      {options.map((option, index) => {
        const isCorrect = option === answer;
        const isSelected = selected === option;

        let className = "arena-option";

        if (selected !== null && isCorrect) {
          className += " correct";
        }

        if (isSelected && !isCorrect) {
          className += " incorrect";
        }

        return (
          <button
            key={option}
            className={className}
            onClick={() => onSelect(option)}
            disabled={selected !== null}
          >
            <span className="option-letter">
              {String.fromCharCode(65 + index)}
            </span>

            <span className="option-text">{option}</span>

            {selected !== null && isCorrect && (
              <CheckCircle size={18} />
            )}

            {isSelected && !isCorrect && (
              <XCircle size={18} />
            )}
          </button>
        );
      })}
    </div>
  );

  /* =====================================
     RESULT SCREEN
  ===================================== */

  const renderResult = (score, total, title, onReplay) => (
    <motion.div
      className="arena-result"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
    >
      <div className="result-trophy">
        <Trophy size={44} />
      </div>

      <span className="result-eyebrow">CHALLENGE COMPLETED</span>

      <h3>{title}</h3>

      <div className="result-score">
        <strong>{score}</strong>
        <span>/ {total}</span>
      </div>

      <p>
        {score === total && total > 0
          ? "PERFECT SCORE. YOU KNOW YOUR CINEMA."
          : score >= total / 2
          ? "IMPRESSIVE PERFORMANCE. THE SHOW GOES ON."
          : "EVERY FILM IS ANOTHER CHANCE TO IMPROVE. TRY AGAIN."}
      </p>

      <div className="result-actions">
        <button className="arena-primary-btn" onClick={onReplay}>
          <RotateCcw size={17} />
          PLAY AGAIN
        </button>

        <button className="arena-secondary-btn" onClick={backToArena}>
          <Home size={17} />
          ARENA HOME
        </button>
      </div>
    </motion.div>
  );

  return (
  <section className="game-zone section-padding" id="game-zone">
      <div className="game-container">

        {/* SECTION HEADING */}

        <motion.div
          className="game-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">
            <Gamepad2 size={17} />
            KING | THE FAN ARENA
          </span>

          <h2>
            THE <span>KINGDOM ARENA</span>
          </h2>

          <p>
            Test your knowledge of Shah Rukh Khan's filmography.
            Take on movie puzzles, trivia and a race against time.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!activeGame ? (
            <motion.div
              key="home"
              className="arena-home"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* WELCOME PANEL */}

              <div className="arena-welcome">
                <div className="arena-welcome-icon">
                  <Crown size={34} />
                </div>

                <div>
                  <span>WELCOME TO THE FAN ARENA</span>
                  <h3>THE SPOTLIGHT IS YOURS.</h3>

                  <p>
                    Choose a game mode, put your film knowledge
                    to the test and set your personal high score.
                  </p>
                </div>
              </div>

              {/* ARENA STATISTICS */}

              <div className="arena-stats">
                <div className="arena-stat">
                  <Trophy size={20} />

                  <div>
                    <strong>
                      {bestScores.quiz +
                        bestScores.movie +
                        bestScores.challenge}
                    </strong>

                    <span>TOTAL BEST POINTS</span>
                  </div>
                </div>

                <div className="arena-stat">
                  <Target size={20} />

                  <div>
                    <strong>03</strong>
                    <span>GAME MODES</span>
                  </div>
                </div>

                <div className="arena-stat">
                  <Star size={20} />

                  <div>
                    <strong>
                      {Math.max(
                        bestScores.quiz,
                        bestScores.movie,
                        bestScores.challenge
                      )}
                    </strong>

                    <span>PERSONAL BEST</span>
                  </div>
                </div>
              </div>

              {/* GAME CARDS */}

              <div className="arena-game-grid">
                {games.map((game, index) => {
                  const Icon = game.icon;
                  const best = bestScores[game.id];

                  return (
                    <motion.button
                      key={game.id}
                      className="arena-game-card"
                      onClick={() => startGame(game.id)}
                      whileHover={{ y: -7 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="game-card-top">
                        <span>{game.number}</span>

                        <span className="game-card-label">
                          {game.label}
                        </span>
                      </div>

                      <div className="game-card-icon">
                        <Icon size={31} />
                      </div>

                      <h3>{game.title}</h3>

                      <p>{game.description}</p>

                      <div className="game-card-footer">
                        <span>
                          BEST: {best} <small>• {game.count}</small>
                        </span>

                        <span className="game-play-link">
                          PLAY NOW <ArrowRight size={16} />
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* ARENA FOOTER */}

              <div className="arena-note">
                <Zap size={17} />

                <span>
                  THREE GAME MODES. THIRTY QUESTIONS. YOUR CHALLENGE.
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={activeGame}
              className="arena-play-area"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <button
                className="arena-back-btn"
                onClick={backToArena}
              >
                <ArrowLeft size={17} />
                BACK TO ARENA
              </button>

              {/* =====================================
                  GAME 01 — SRK TRIVIA
              ===================================== */}

              {activeGame === "quiz" && (
                <div className="arena-panel">
                  <div className="arena-panel-header">
                    <span>
                      <Brain size={18} />
                      SRK TRIVIA
                    </span>

                    <strong>
                      {quizIndex + 1} / {quizQuestions.length}
                    </strong>
                  </div>

                  {!quizFinished ? (
                    <>
                      <div className="arena-progress">
                        <div
                          style={{
                            width: `${
                              ((quizIndex + 1) / quizQuestions.length) * 100
                            }%`,
                          }}
                        />
                      </div>

                      <div className="arena-question">
                        <span>
                          QUESTION {String(quizIndex + 1).padStart(2, "0")}
                        </span>

                        <h3>{currentQuiz.question}</h3>
                      </div>

                      {renderOptions(
                        currentQuiz.options,
                        quizAnswer,
                        currentQuiz.answer,
                        handleQuizAnswer
                      )}

                      {quizAnswer !== null && (
                        <div className="arena-feedback">
                          {quizAnswer === currentQuiz.answer
                            ? "CORRECT ANSWER! +1 POINT"
                            : `CORRECT ANSWER: ${currentQuiz.answer}`}
                        </div>
                      )}

                      {quizAnswer !== null && (
                        <button
                          className="arena-primary-btn arena-next-btn"
                          onClick={nextQuizQuestion}
                        >
                          {quizIndex === quizQuestions.length - 1
                            ? "VIEW RESULTS"
                            : "NEXT QUESTION"}

                          <ArrowRight size={17} />
                        </button>
                      )}
                    </>
                  ) : (
                    renderResult(
                      quizScore,
                      quizQuestions.length,
                      "SRK TRIVIA",
                      () => startGame("quiz")
                    )
                  )}
                </div>
              )}

              {/* =====================================
                  GAME 02 — GUESS THE MOVIE
              ===================================== */}

              {activeGame === "movie" && (
                <div className="arena-panel">
                  <div className="arena-panel-header">
                    <span>
                      <Film size={18} />
                      GUESS THE MOVIE
                    </span>

                    <strong>
                      {movieIndex + 1} / {moviePuzzles.length}
                    </strong>
                  </div>

                  {!movieFinished ? (
                    <>
                      <div className="arena-progress">
                        <div
                          style={{
                            width: `${
                              ((movieIndex + 1) / moviePuzzles.length) * 100
                            }%`,
                          }}
                        />
                      </div>

                      <div className="movie-puzzle">
                        <span>DECODE THE MOVIE</span>

                        <div className="movie-emoji">
                          {currentMovie.emoji}
                        </div>

                        <button
                          className="hint-btn"
                          onClick={() =>
                            setHintVisible((previous) => !previous)
                          }
                        >
                          <Lightbulb size={17} />

                          {hintVisible ? "HIDE HINT" : "REVEAL HINT"}
                        </button>

                        <AnimatePresence>
                          {hintVisible && (
                            <motion.p
                              className="movie-hint"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                            >
                              {currentMovie.hint}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {renderOptions(
                        currentMovie.options,
                        movieAnswer,
                        currentMovie.answer,
                        handleMovieAnswer
                      )}

                      {movieAnswer !== null && (
                        <div className="arena-feedback">
                          {movieAnswer === currentMovie.answer
                            ? "YOU GOT IT! +1 POINT"
                            : `THE ANSWER IS: ${currentMovie.answer}`}
                        </div>
                      )}

                      {movieAnswer !== null && (
                        <button
                          className="arena-primary-btn arena-next-btn"
                          onClick={nextMovieQuestion}
                        >
                          {movieIndex === moviePuzzles.length - 1
                            ? "VIEW RESULTS"
                            : "NEXT PUZZLE"}

                          <ArrowRight size={17} />
                        </button>
                      )}
                    </>
                  ) : (
                    renderResult(
                      movieScore,
                      moviePuzzles.length,
                      "MOVIE MASTER",
                      () => startGame("movie")
                    )
                  )}
                </div>
              )}

              {/* =====================================
                  GAME 03 — SPEED ROUND
              ===================================== */}

              {activeGame === "challenge" && (
                <div className="arena-panel">
                  <div className="arena-panel-header">
                    <span>
                      <Zap size={18} />
                      SPEED ROUND
                    </span>

                    <strong
                      className={
                        challengeTime <= 10 ? "timer-danger" : ""
                      }
                    >
                      <Timer size={16} />
                      {challengeTime}s
                    </strong>
                  </div>

                  {!challengeFinished ? (
                    <>
                      <div className="challenge-live-stats">
                        <div>
                          <span>YOUR SCORE</span>
                          <strong>{challengeScore}</strong>
                        </div>

                        <div>
                          <span>QUESTION</span>
                          <strong>
                            {challengeIndex + 1}/
                            {challengeQuestions.length}
                          </strong>
                        </div>
                      </div>

                      <div className="arena-progress challenge-progress">
                        <div
                          style={{
                            width: `${(challengeTime / 60) * 100}%`,
                          }}
                        />
                      </div>

                      <div className="arena-question">
                        <span>QUICK FIRE QUESTION</span>

                        <h3>{currentChallenge.question}</h3>
                      </div>

                      {renderOptions(
                        currentChallenge.options,
                        null,
                        currentChallenge.answer,
                        handleChallengeAnswer
                      )}

                      <p className="challenge-tip">
                        <Zap size={15} />

                        Answer quickly! Each correct answer earns one point.
                      </p>
                    </>
                  ) : (
                    renderResult(
                      challengeScore,
                      challengeQuestions.length,
                      "SPEED ROUND",
                      () => startGame("challenge")
                    )
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default GameZone;

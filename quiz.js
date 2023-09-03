const questions = [
  {
      question: "Windowsでコピーするショートカットキーは？",
      choices: ["Ctrl+C", "Ctrl+X", "Ctrl+V", "Ctrl+P"],
      correct: "Ctrl+C"
  },
  {
      question: "新しいウィンドウを開くショートカットキーは？",
      choices: ["Ctrl+N", "Ctrl+O", "Ctrl+S", "Ctrl+Z"],
      correct: "Ctrl+N"
  },
  {
      question: "ファイルを保存するショートカットキーは？",
      choices: ["Ctrl+C", "Ctrl+X", "Ctrl+S", "Ctrl+P"],
      correct: "Ctrl+S"
  },
  {
      question: "元に戻すショートカットキーは？",
      choices: ["Ctrl+C", "Ctrl+X", "Ctrl+Z", "Ctrl+P"],
      correct: "Ctrl+Z"
  },
  {
      question: "コピーしたテキストを貼り付けるショートカットキーは？",
      choices: ["Ctrl+C", "Ctrl+X", "Ctrl+V", "Ctrl+P"],
      correct: "Ctrl+V"
  },
  {
      question: "画面をプリントするショートカットキーは？",
      choices: ["Ctrl+C", "Ctrl+X", "Ctrl+V", "Ctrl+P"],
      correct: "Ctrl+P"
  },
  {
      question: "ファイルを開くショートカットキーは？",
      choices: ["Ctrl+N", "Ctrl+O", "Ctrl+S", "Ctrl+Z"],
      correct: "Ctrl+O"
  },
  {
      question: "コンピューターを再起動するショートカットキーは？",
      choices: ["Ctrl+R", "Ctrl+O", "Ctrl+S", "Ctrl+Z"],
      correct: "Ctrl+R"
  },
  {
      question: "テキストを太字にするショートカットキーは？",
      choices: ["Ctrl+B", "Ctrl+I", "Ctrl+U", "Ctrl+S"],
      correct: "Ctrl+B"
  },
  {
      question: "テキストを斜体にするショートカットキーは？",
      choices: ["Ctrl+B", "Ctrl+I", "Ctrl+U", "Ctrl+S"],
      correct: "Ctrl+I"
  },
  {
      question: "テキストに下線を引くショートカットキーは？",
      choices: ["Ctrl+B", "Ctrl+I", "Ctrl+U", "Ctrl+S"],
      correct: "Ctrl+U"
  },
  {
      question: "テキストを保存するショートカットキーは？",
      choices: ["Ctrl+D", "Ctrl+O", "Ctrl+S", "Ctrl+P"],
      correct: "Ctrl+S"
  },
  {
      question: "テキストをコピーするショートカットキーは？",
      choices: ["Ctrl+C", "Ctrl+X", "Ctrl+V", "Ctrl+P"],
      correct: "Ctrl+C"
  },
  {
      question: "テキストを切り取るショートカットキーは？",
      choices: ["Ctrl+C", "Ctrl+X", "Ctrl+V", "Ctrl+P"],
      correct: "Ctrl+X"
  },
  {
      question: "ウィンドウを閉じるショートカットキーは？",
      choices: ["Ctrl+W", "Ctrl+O", "Ctrl+S", "Ctrl+Z"],
      correct: "Ctrl+W"
  },
  {
      question: "新しいタブを開くショートカットキーは？",
      choices: ["Ctrl+T", "Ctrl+O", "Ctrl+S", "Ctrl+Z"],
      correct: "Ctrl+T"
  },
  {
      question: "ページを更新するショートカットキーは？",
      choices: ["Ctrl+R", "Ctrl+O", "Ctrl+S", "Ctrl+Z"],
      correct: "Ctrl+R"
  },
  {
      question: "ファイルを印刷するショートカットキーは？",
      choices: ["Ctrl+P", "Ctrl+O", "Ctrl+S", "Ctrl+Z"],
      correct: "Ctrl+P"
  },
  {
      question: "テキストを元に戻すショートカットキーは？",
      choices: ["Ctrl+Z", "Ctrl+O", "Ctrl+S", "Ctrl+P"],
      correct: "Ctrl+Z"
  },
  {
      question: "ファイルを開くショートカットキーは？",
      choices: ["Ctrl+O", "Ctrl+X", "Ctrl+V", "Ctrl+P"],
      correct: "Ctrl+O"
  },
  // 他の質問を追加することができます
  // 20個のクイズデータを追加
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let questionsToAsk = [];

function initializeQuiz() {
  shuffleQuestions();
  questionsToAsk = questions.slice(0, 5);
  currentQuestionIndex = 0;
  correctAnswers = 0;

  displayQuestion();
}
function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}
function displayQuestion() {
  const questionDiv = document.getElementById("question");
  const choicesDiv = document.getElementById("choices");
  const answerDiv = document.getElementById("answer");
  const resultDiv = document.getElementById("result");
  const submitButton = document.getElementById("submitButton");
  const nextButton = document.getElementById("nextButton");
  const restartButton = document.getElementById("restartButton");

  if (currentQuestionIndex < questionsToAsk.length) {
    questionDiv.textContent = questionsToAsk[currentQuestionIndex].question;

  // 選択肢を表示
  restartButton.style.display = "none";
  resultDiv.textContent = "";
  choicesDiv.innerHTML = "";
  questions[currentQuestionIndex].choices.forEach((choice) => {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.addEventListener("click", () => selectChoice(choice,currentQuestionIndex)); // 選択肢を選ぶとselectChoiceが呼ばれる
    choicesDiv.appendChild(choiceButton);
  });

  // 回答と次の問題ボタンを非表示に
  answerDiv.textContent = "";
  resultDiv.textContent = "";
  submitButton.style.display = "none";
  nextButton.style.display = "none";
  restartButton.style.display = "none";
  }else{
    //displayResult();
  }
}

function selectChoice(selectedChoice,currentQuestionIndex) {
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", () => checkAnswer(selectedChoice,currentQuestionIndex)); // 回答ボタンをクリックするとcheckAnswerが呼ばれる
  submitButton.style.display = "block"; // 回答ボタンを表示
  
  console.log(currentQuestionIndex);
}

function checkAnswer(selectedChoice,currentQuestionIndex) {
  const correctAnswer = questions[currentQuestionIndex].correct;
  const answerDiv = document.getElementById("answer");
  const nextButton = document.getElementById("nextButton");

  if (selectedChoice === correctAnswer) {
    answerDiv.textContent = "正解！";
    correctAnswers++;
  } else {
    answerDiv.textContent = "不正解。正解は " + correctAnswer + " です。";
  }

  // 回答ボタンを非表示に
  const submitButton = document.getElementById("submitButton");
  submitButton.style.display = "none";

  // 次の問題ボタンを表示
  if (currentQuestionIndex < questionsToAsk.length) {
  nextButton.style.display = "block";
  } else {
    //displayResult();
  }
}

function displayResult(resultDiv) {
  resultDiv = document.getElementById("result");
  resultDiv.textContent = "クイズ終了！ 正解数: " + correctAnswers + " / " + questionsToAsk.length;
  //currentQuestionIndex = 0;
  //correctAnswers=0;
  questionsToAsk = [];
  nextButton.style.display = "none"
  restartButton.style.display = "block"
}

// 次の問題ボタンのクリックイベント
document.getElementById("nextButton").addEventListener("click", () => {
  
console.log(currentQuestionIndex);
console.log(questionsToAsk.length);
  if (currentQuestionIndex < questionsToAsk.length-1) {
    currentQuestionIndex++;
    displayQuestion(); // 次の質問を表示
  } else {
    displayResult(); // 結果を表示
  }
});

// 最初から始めるボタンのクリックイベント
document.getElementById("restartButton").addEventListener("click", () => {
  //currentQuestionIndex = 0;
  //correctAnswers = 0;
  initializeQuiz(); // クイズを初期化して再開始
});

// クイズを初期化して開始
initializeQuiz();

'use strict';

// 0.ボタンを非表示
document.getElementById("nextbtn").style.display = "none";
document.getElementById("resetbtn").style.display = "none";

// 1. 問題questionsの中からランダムに3問選ぶ

// JSDocにすることで、ホバー時に説明が出てくるようになります
/** 現在の問題のインデックス */
let currentQuestionIndex = 0;
/** 正解数 */
let numCorrect = 0;

/**
 * ランダムに選んだ問題を格納する配列
 * @type {{question:string, choices:string[], correct:string}[]}
 */
let quiz = [];
quiz = shuffle(shuffle(questions).slice(0, 3)); // 元の問題をシャッフルして再設定

// HTML要素を取得
const questionElement = document.getElementById("question");

/** buttonが4つ入る予定 */
const choicesElement = document.getElementById("choices");

// nullかどうか一応チェック
if (!questionElement || !choicesElement) {
  throw new Error('questionまたはchoicesエレメントnullです');
}

/** 選択肢をクリックした際の処理 @param {HTMLButtonElement} event  */
function handleChoiceClick(event) {
  const selectedChoiceIndex = event.target.getAttribute("data-index");
  const currentQuestion = quiz[currentQuestionIndex];

  // 選択が正解かどうかをチェック
  if (currentQuestion.choices[selectedChoiceIndex] === currentQuestion.correct) {
    // 正解の場合
    document.getElementById("answer").textContent = "正解！"; // FIX answerをグローバルに
    numCorrect++;
  } else {
    // 不正解の場合
    document.getElementById("answer").textContent = `不正解！正解は${currentQuestion.correct}です！`
  }

  //次の問題へボタンを表示
  document.getElementById("nextbtn").style.display = "block";
  //選択肢のボタンを無効化
  choicesElement.querySelectorAll("#choices > button").forEach((button) => {
    button.removeEventListener("click", handleChoiceClick);
  });
}

// FIX 問題更新処理をまとめる
//次の問題へボタンをクリックした際の処理
document.getElementById("nextbtn").addEventListener("click", () => {
  //現在の問題のインデックスをインクリメント
  currentQuestionIndex++;

  //次の問題が存在するかチェック
  if (currentQuestionIndex < quiz.length) {
    //次の問題を表示
    displayQuestion();

    //回答と次の問題へボタンをクリア
    document.getElementById("answer").textContent = "";
    document.getElementById("nextbtn").style.display = "none";

    //選択肢のボタンを有効化
    const choiceButtons = choicesElement.querySelectorAll("button");
    choiceButtons.forEach((button) => {
      button.addEventListener("click", handleChoiceClick);
    });
  } else {
    //クイズが終了した場合、結果を表示
    displayResult();
  }
});

// リセットボタンをクリックした際の処理
document.getElementById("resetbtn").addEventListener("click", () => {
  // クイズの問題の状態をリセット
  // FIX reset関数の追加
  currentQuestionIndex = 0;
  numCorrect = 0;
  shuffle(questions);
  quiz = shuffle(questions.slice(0, 3)); // 元の問題をシャッフルして再設定

  // 結果とリセットボタンを非表示に
  document.getElementById("answer").textContent = "";
  document.getElementById("result").textContent = "";
  document.getElementById("resetbtn").style.display = "none";

  // 最初の問題を表示
  displayQuestion();
});

// 2. 最初の問題を表示
displayQuestion();

/**
 * 配列の中身をシャッフルする関数
 * @param {unknown[]} arr 
 * @returns {unknown[]}
 */
function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    const bIndex = Math.floor(Math.random() * i);

    // 入れ替え
    arr[i] = arr[bIndex];
    arr[bIndex] = a;
  }
  return arr;
}

/** 問題と選択肢を更新する関数 @returns 現在の問題 */
function displayQuestion() { // FIX 現在の問題数の引数を追加
  /** 現在の問題 */
  const currentQuestion = quiz[currentQuestionIndex];
  // 画面の文字を更新
  questionElement.textContent = currentQuestion.question;

  // 選択肢のボタンを追加
  choicesElement.innerHTML = "";
  currentQuestion.choices.forEach((choice, index) => {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.setAttribute("data-index", index);
    choiceButton.addEventListener("click", handleChoiceClick);
    choicesElement.appendChild(choiceButton);
  });

  return currentQuestion;
}

/** クイズの結果を表示する関数 */
function displayResult() {
  const resultElement = document.getElementById("result"); // FIX グローバル化

  resultElement.textContent = `クイズ終了！正解数: ${numCorrect} / ${quiz.length}`;

  // リセットボタンを表示
  document.getElementById("resetbtn").style.display = "block";
  // 次の問題へボタンを非表示に
  document.getElementById("nextbtn").style.display = "none";
}

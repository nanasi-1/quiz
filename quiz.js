'use strict';

const game = {
  // JSDocにすることで、ホバー時に説明が出てくるようになります
  /**
   * ランダムに選んだ問題を格納する配列
   * @type {{question:string, choices:string[], correct:string}[]}
   */
  quiz: [],
  
  /** 現在の問題のインデックス */ currentQuestionIndex: 0,
  /** 正解数 */ numCorrect: 0,

  /** 現在の状態 */
  state: 0 // 0:読み込み中 1:回答可能 2: 次の問題へが押せる 3: 結果が表示されてる
};


// ここから関数定義

// 要素を非表示にする関数
HTMLElement.prototype.hide = function() {
  this.style.display = 'none';
  return this;
}
// 要素を表示する関数
// display引数には、blockとかinlineとかを入れる
HTMLElement.prototype.show = function(display = 'block') {
  this.style.display = display;
  return this;
}

/**
 * 配列の中身をシャッフルする関数
 * @param {unknown[]} arr 
 * @returns {unknown[]}
 */
function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 変数に保管
    const a = arr[i];
    const bIndex = Math.floor(Math.random() * i);

    // 入れ替え
    arr[i] = arr[bIndex];
    arr[bIndex] = a;
  }
  return arr;
}

/** 変数と画面を初期化する関数 */
function init() {
  game.state = 0;

  // ボタンと結果を非表示
  document.getElementById("nextbtn").hide();
  document.getElementById("resetbtn").hide();
  document.getElementById("answer").textContent = "";
  document.getElementById("result").textContent = "";

  // 正解数と問題数を0にする
  game.currentQuestionIndex = 0;
  game.numCorrect = 0;

  // 問題questionsの中からランダムに3問選ぶ
  game.quiz = shuffle(shuffle(questions).slice(0, 3));

  // 選択肢をシャッフル
  for (const q of game.quiz) {
    shuffle(q.choices);
  }
}

/** 
 * 問題と選択肢を更新する関数 
 * @param {(0 | 1 | 2)} questionIndex 
 * @returns 現在の問題 
 */
function displayQuestion(questionIndex) {
  /** 現在の問題 */
  const currentQuestion = game.quiz[questionIndex];
  // 画面の文字を更新
  document.getElementById("question").textContent = currentQuestion.question;

  // 選択肢のボタンを追加
  const choicesElement = document.getElementById("choices");
  choicesElement.innerHTML = "";
  currentQuestion.choices.forEach((choice, index) => {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.setAttribute("data-index", index);
    choiceButton.addEventListener("click", handleChoiceClick); // 3. 選択肢ボタンが押される

    choicesElement.appendChild(choiceButton); // 追加
  });

  game.state = 1;

  return currentQuestion;
}

/** クイズの結果を表示する関数 */
function displayResult() {
  // 正解数を表示
  document.getElementById("result").textContent = `クイズ終了！正解数: ${game.numCorrect} / ${game.quiz.length}`;

  // リセットボタンを表示
  document.getElementById("resetbtn").show();
  // 次の問題へボタンを非表示に
  document.getElementById("nextbtn").hide();

  game.state = 3;
}

/** 選択肢をクリックした際の処理 @param {MouseEvent} event  */
function handleChoiceClick(event) {
  if(game.state !== 1) return;
  game.state = 2;

  const selectedChoiceIndex = event.target.getAttribute("data-index");
  const currentQuestion = game.quiz[game.currentQuestionIndex];

  // 選択が正解かどうかをチェック
  const answerElement = document.getElementById("answer");
  if (currentQuestion.choices[selectedChoiceIndex] === currentQuestion.correct) {
    // 正解の場合
    answerElement.textContent = "正解！";
    game.numCorrect++;
  } else {
    // 不正解の場合
    answerElement.textContent = `不正解！正解は${currentQuestion.correct}です！`
  }

  // 次の問題へボタンを表示
  document.getElementById("nextbtn").show();
}


// ここから処理

// * 1. 初期化
init(); 

// * 2. 最初の問題を表示
displayQuestion(0);

// * 3. 選択肢ボタンが押される => handleChoiceClick(event)

// * 4. 次の問題へボタンをクリックした際の処理
document.getElementById("nextbtn").addEventListener("click", () => {
  // 現在の問題のインデックスをインクリメント
  game.currentQuestionIndex++;

  /** 現在の問題のインデックス */
  const current = game.currentQuestionIndex;

  // 次の問題が存在するかチェック
  if (current < game.quiz.length) {
    // 回答と次の問題へボタンをクリア
    document.getElementById("answer").textContent = "";
    document.getElementById("nextbtn").hide();

    displayQuestion(current); // 次の問題を表示
  } else {
    displayResult(); // 結果を表示
  }
});

// * 5. 3~4を問題の回数分繰り返す

// * 6. リセットボタンをクリックした際の処理
document.getElementById("resetbtn").addEventListener("click", () => {
  init(); // 初期化
  displayQuestion(0); // 最初の問題を表示
});

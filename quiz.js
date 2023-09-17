  //問題を定義
  const questions=[
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

   //問題questionsの中からランダムに3問
   //ランダムに選んだ問題を格納する配列
    let quiz = [];
    //ランダムに選んだ問題のインデックスを格納する配列
    let quizIndex = [];
    //shuffle関数
    function shuffle(arr){
      let i = arr.length;
      while(i){
        let j = Math.floor(Math.random()*i);
        let t = arr[--i];
        arr[i] = arr[j];
        arr[j] = t;
      }
      return arr;
    }


    ///ボタンを非表示
    //document.getElementById("submmitbtn").style.display="none";
    document.getElementById("nextbtn").style.display="none";
    document.getElementById("resetbtn").style.display="none";

    //quizの問題を表示
    //現在の問題のインデックス
    let currentQuestionIndex = 0;
    //正解数
    let numCorrect = 0;
    //問題をシャッフル
    shuffle(questions);

    quizIndex = [];
    quiz = shuffle(questions.slice(0,3)); // 元の問題をシャッフルして再設定
    //HTML要素を取得
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    //問題を表示する関数
    function displayQuestion() {
      const currentQuestion = quiz[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
      
      //選択肢を表示
      choicesElement.innerHTML = "";
      currentQuestion.choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.setAttribute("data-index", index);
        choiceButton.addEventListener("click", handleChoiceClick);
        choicesElement.appendChild(choiceButton);
      });
    }

    //クイズの結果を表示する関数
  function displayResult() {
    const resultElement = document.getElementById("result");

    
    resultElement.textContent = `クイズ終了！正解数: ${numCorrect} / ${quiz.length}`;
    
    // リセットボタンを表示
    document.getElementById("resetbtn").style.display = "block";
    // 回答ボタンを非表示に
    //document.getElementById("submmitbtn").style.display = "none";
    // 次の問題へボタンを非表示に
    document.getElementById("nextbtn").style.display = "none";
  }

    //選択肢をクリックした際の処理
    function handleChoiceClick(event) {
      const selectedChoiceIndex = event.target.getAttribute("data-index");
      const currentQuestion = quiz[currentQuestionIndex];

      //選択が正解かどうかをチェック
      if (currentQuestion.choices[selectedChoiceIndex] === currentQuestion.correct) {
        //正解の場合
        document.getElementById("answer").textContent = "正解！";
        numCorrect++;
      } else {
        //不正解の場合
        document.getElementById("answer").textContent = `不正解！正解は${currentQuestion.correct}です！`
      }


      //次の問題へボタンを表示
      document.getElementById("nextbtn").style.display = "block";
      //選択肢のボタンを無効化
      const choiceButtons = choicesElement.querySelectorAll("button");
      choiceButtons.forEach((button) => {
        button.removeEventListener("click", handleChoiceClick);
      });
    }

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

    //リセットボタンをクリックした際の処理
document.getElementById("resetbtn").addEventListener("click", () => {
  // クイズの問題の状態をリセット
  currentQuestionIndex = 0;
  numCorrect = 0;
  quizIndex = [];
  shuffle(questions);
  quiz = shuffle(questions.slice(0,3)); // 元の問題をシャッフルして再設定
  
  // 結果とリセットボタンを非表示に
  document.getElementById("answer").textContent = "";
  document.getElementById("result").textContent = "";
  document.getElementById("resetbtn").style.display = "none";
  // 最初の問題を表示
  displayQuestion();

});


    //最初の問題を表示
    displayQuestion();

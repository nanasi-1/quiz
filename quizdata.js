'use strict';

// ファイル分けすると見やすくなります
// このファイルはquiz.htmlのscriptタグで読み込んでいます

/**
 * 問題が入った配列
 * @type {{question:string, choices:string[], correct:string}[]}
 */
const questions = [
  {
    "question": "新しいタブを開くショートカットキーは？",
    "choices": [
      "Ctrl+T",
      "Ctrl+O",
      "Ctrl+S",
      "Ctrl+Z"
    ],
    "correct": "Ctrl+T"
  },
  {
    "question": "ファイルを印刷するショートカットキーは？",
    "choices": [
      "Ctrl+P",
      "Ctrl+O",
      "Ctrl+S",
      "Ctrl+Z"
    ],
    "correct": "Ctrl+P"
  },
  {
    "question": "ファイルを開くショートカットキーは？",
    "choices": [
      "Ctrl+N",
      "Ctrl+O",
      "Ctrl+S",
      "Ctrl+Z"
    ],
    "correct": "Ctrl+O"
  },
  {
    "question": "テキストを太字にするショートカットキーは？",
    "choices": [
      "Ctrl+B",
      "Ctrl+I",
      "Ctrl+U",
      "Ctrl+S"
    ],
    "correct": "Ctrl+B"
  },
  {
    "question": "ウィンドウを閉じるショートカットキーは？",
    "choices": [
      "Ctrl+W",
      "Ctrl+O",
      "Ctrl+S",
      "Ctrl+Z"
    ],
    "correct": "Ctrl+W"
  },
  {
    "question": "ページを更新するショートカットキーは？",
    "choices": [
      "Ctrl+R",
      "Ctrl+O",
      "Ctrl+S",
      "Ctrl+Z"
    ],
    "correct": "Ctrl+R"
  },
  {
    "question": "コンピューターを再起動するショートカットキーは？",
    "choices": [
      "Ctrl+R",
      "Ctrl+O",
      "Ctrl+S",
      "Ctrl+Z"
    ],
    "correct": "Ctrl+R"
  },
  {
    "question": "テキストをコピーするショートカットキーは？",
    "choices": [
      "Ctrl+C",
      "Ctrl+X",
      "Ctrl+V",
      "Ctrl+P"
    ],
    "correct": "Ctrl+C"
  },
  {
    "question": "テキストを斜体にするショートカットキーは？",
    "choices": [
      "Ctrl+B",
      "Ctrl+I",
      "Ctrl+U",
      "Ctrl+S"
    ],
    "correct": "Ctrl+I"
  },
  {
    "question": "新しいウィンドウを開くショートカットキーは？",
    "choices": [
      "Ctrl+N",
      "Ctrl+O",
      "Ctrl+S",
      "Ctrl+Z"
    ],
    "correct": "Ctrl+N"
  },
  {
    "question": "テキストを元に戻すショートカットキーは？",
    "choices": [
      "Ctrl+Z",
      "Ctrl+O",
      "Ctrl+S",
      "Ctrl+P"
    ],
    "correct": "Ctrl+Z"
  },
  {
    "question": "コピーしたテキストを貼り付けるショートカットキーは？",
    "choices": [
      "Ctrl+C",
      "Ctrl+X",
      "Ctrl+V",
      "Ctrl+P"
    ],
    "correct": "Ctrl+V"
  },
  {
    "question": "画面をプリントするショートカットキーは？",
    "choices": [
      "Ctrl+C",
      "Ctrl+X",
      "Ctrl+V",
      "Ctrl+P"
    ],
    "correct": "Ctrl+P"
  },
  {
    "question": "ファイルを保存するショートカットキーは？",
    "choices": [
      "Ctrl+C",
      "Ctrl+X",
      "Ctrl+S",
      "Ctrl+P"
    ],
    "correct": "Ctrl+S"
  },
  {
    "question": "元に戻すショートカットキーは？",
    "choices": [
      "Ctrl+C",
      "Ctrl+X",
      "Ctrl+Z",
      "Ctrl+P"
    ],
    "correct": "Ctrl+Z"
  },
  {
    "question": "テキストを切り取るショートカットキーは？",
    "choices": [
      "Ctrl+C",
      "Ctrl+X",
      "Ctrl+V",
      "Ctrl+P"
    ],
    "correct": "Ctrl+X"
  },
  {
    "question": "テキストに下線を引くショートカットキーは？",
    "choices": [
      "Ctrl+B",
      "Ctrl+I",
      "Ctrl+U",
      "Ctrl+S"
    ],
    "correct": "Ctrl+U"
  },
  {
    "question": "Windowsでコピーするショートカットキーは？",
    "choices": [
      "Ctrl+C",
      "Ctrl+X",
      "Ctrl+V",
      "Ctrl+P"
    ],
    "correct": "Ctrl+C"
  },
  {
    "question": "ファイルを開くショートカットキーは？",
    "choices": [
      "Ctrl+O",
      "Ctrl+X",
      "Ctrl+V",
      "Ctrl+P"
    ],
    "correct": "Ctrl+O"
  },
  {
    "question": "テキストを保存するショートカットキーは？",
    "choices": [
      "Ctrl+D",
      "Ctrl+O",
      "Ctrl+S",
      "Ctrl+P"
    ],
    "correct": "Ctrl+S"
  }
  // 他の質問を追加することができます
  // 20個のクイズデータを追加
]
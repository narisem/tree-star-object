'use strict';
const gameBoard = document.getElementById('gameBoard'); // gameBoard要素を取得
const height = 10; // ツリーの高さ

for (let i = 0; i < height; i++) {
const stars = '*'.repeat(i * 2 + 1); // 各行における星(*)の数
const line = document.createElement('div'); // 新しいdiv要素を作成
line.textContent = stars; // 作成したdiv要素に星を設定
gameBoard.appendChild(line); // gameBoardに追加
 }

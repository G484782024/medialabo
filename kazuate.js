
// 答え
let kotae = Math.floor(Math.random()*10) + 1;

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let y = document.querySelector('input[name="seisu"]') ;
let b = document.querySelector('button#kaito') ;
b.addEventListener('click', hantei); 

let a = document.querySelector('p#result');
let n = document.querySelector('span#kaisu'); 
let m = document.querySelector('span#answer');
let yoso;
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
    yoso = Number(y.value);


    kaisu = kaisu + 1;
    n.textContent = (kaisu);
    m.textContent = (yoso);

    if(kaisu > 3){
        a.textContent = ("答えは "+ kotae +" でした．すでにゲームは終わっています")
    }else{
        if(yoso === kotae){
            foo(yoso);
        }else if(yoso > kotae){
            if(kaisu === 3){
                a.textContent = ("まちがい．残念でした答えは "+ kotae +" です．")
            }else{
            over(yoso);
            }
        }else{
            if(kaisu === 3){
                a.textContent = ("まちがい．残念でした答えは "+ kotae +" です．")
            }else{
            under(yoso);
            }
        }
        
        function foo(A){
            a.textContent = ("正解です．おめでとう!");
            kaisu = 4;
        }
        function over(A){
            a.textContent = ("まちがい．答えはもっと小さいですよ")
        }
        function under(A){
            a.textContent = ("まちがい．答えはもっと大きいですよ")
        }

    }


}
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

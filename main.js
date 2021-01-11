(function () {
  'use strict'; // Strict モード：落とし穴になる項目をエラーにして バグの発生を抑える

  // getElementByIdメソッドで各Idを取得し、変数で定義
  var timer = document.getElementById('timer');
  var start = document.getElementById('start');
  var stop  = document.getElementById('stop');
  var reset = document.getElementById('reset');

  //クリック時の時間を保持するための変数
  var startTime;

  //経過時間を更新するための変数。初めは０で初期化する
  var elapsedTime = 0

  //タイマーを止めるにはclearTimeoutメソッドが必要になるが、その引数にはidが必要なため、変数を用意する
  //http://www.htmq.com/js/cleartimeout.shtmlこの辺りが参考になるかも
  var timerId;

  //ストップし、再開した時に0になるのを避けるための変数
  var timerToAdd;

  //ミリ秒ではなく、分や秒に治すための関数を用意
  //計算方法  ->  EX)135200ミリを直すと02:15:200になる

  function updateTime() {

    // Math.floor()関数は与えられた数値以下の最大の整数を返す
    // m(分) = 135200 / 60000ミリ秒で割った数の商 ->2分
    var m  = Math.floor(elapsedTime / 60000);

    //s(秒) = 135200 % 60000ミリ秒 / 1000 (ミリ秒なので1000で割る) -> 15秒
    var s  = Math.floor(elapsedTime % 60000 / 1000);

    //ms(ミリ秒) = 135200ミリ秒を % 1000ミリ秒で割った余り。余りなので、Math.floor()関数は用いない
    var ms = elapsedTime % 1000;
  }
})

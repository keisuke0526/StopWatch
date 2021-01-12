(function () {
  // Strict モード：落とし穴になる項目をエラーにして バグの発生を抑える
  'use strict';

  // getElementByIdメソッドで各Idを取得し、変数で定義
  var timer = document.getElementById('timer');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var reset = document.getElementById('reset');

  // クリック時の時間を保持するための変数
  var startTime;

  // 経過時間を更新するための変数。初めは０で初期化する
  var elapsedTime = 0;

  // タイマーを止めるにはclearTimeoutメソッドが必要になるが、その引数にはidが必要なため、変数を用意する
  // http://www.htmq.com/js/cleartimeout.shtml この辺りが参考になるかも
  var timerId;

  // ストップし、再開した時に0になるのを避けるための変数
  var timerToAdd;

  // ミリ秒ではなく、分や秒に治すための関数を用意
  // 計算方法  ->  EX)135200ミリを直すと02:15:200になる

  function updateTime() {

    // Math.floor()関数は与えられた数値以下の最大の整数を返す
    // m(分) = 135200 / 60000ミリ秒で割った数の商 ->2分
    var m = Math.floor(elapsedTime / 60000);

    // s(秒) = 135200 % 60000ミリ秒 / 1000 (ミリ秒なので1000で割る) -> 15秒
    var s = Math.floor(elapsedTime % 60000 / 1000);

    // ms(ミリ秒) = 135200ミリ秒を % 1000ミリ秒で割った余り。余りなので、Math.floor()関数は用いない
    var ms = elapsedTime % 1000;

    // HTMLの表示の桁数を固定する  EX)  3 -> 03  、12 -> 012
    // 文字列 + 数字 = 文字列となる
    // 末尾２桁を表示するため、sliceメソッドの引数を-2で指定する

    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('0' + ms), slice(-2);

    // htmlのIdであるtimerに、textContent関数を適用する。
    timer.textContent = m + ':' + s + ':' + ms;
  }

  // // 再帰的に使える用の関数 (再帰的とは？: http://blog.livedoor.jp/engineercollege/archives/46559976.html)
  function countUp() {

    // 関数setTimeOutを定義し、戻り値をtimerIdに代入
    timerId = setTimeout(function () {

      // 経過時間のelapsedTimeは、現在時刻をミリ秒で示すDate.now()から、startを押したきの時刻(startTime)を引く
      elapsedTime = Date.now() - startTime + timeToadd;
      updateTime()

      // countUp関数自身を呼ぶことで10ミリ秒毎に以下の計算を始める
      countUp();

      // 1秒以下の時間を表示するために10ミリ秒後に始めるよう宣言
    }, 10);
  }

  // startボタンのクリックイベント
  start.addEventListener('ckick', function () {

    // 現在時刻を代入
    startTime = Date.now();

    // countUp関数の呼び出し。押した時の時刻(startTime)をcountUp関数で処理をする
    countUp()
  });

  // stopボタンのクリックイベント
  stop.addEventListener('click', function () {

    // setTimeOutで実行した処理を止めるには、clearTimeOutを使う必要があり、引数にtimerIdが必要のため、渡す
    clearTimeout(timerId)

    // ※ここ少し複雑
    // タイマーに表示される時間(elapsedTime)は、現在時刻からスタートボタンを押した時刻を引いたもので、タイマーを再開させたら0になる。
    // これを回避するため、過去のスタート時刻からストップ時間までの経過時間を足さなければならない。
    // elapsedTime = Data.now() - startTime + timeToAdd (timeToadd = ストップを押した時刻(Date.now)から直近のスタート時刻(startTime)を引く)
    timeToAdd += Date.now() - startTime;
  })

  // resetボタンのクリックイベント
  reset.addEventListener('click', function () {

    // 経過時間を更新するための変数elapsedTimeを0にし、updateTimeで0になったタイムを表示
    elapsedTime = 0

    //レセット時に0に初期化したいため、0を代入
    timrToAdd = 0

    updateTime();
  })
})();

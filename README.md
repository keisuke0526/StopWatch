# StopWatch

## 概要
学習用アプリのため、模倣はするものの、ロジックを言語化させつつ実装していくため、コード自体少々見にくくなる。

## 学習メモ

### 経過時間とは
Startボタンを押した時の時刻からどれくらいの時間が経過したのか、ということ。
現在時刻とStartを押した時間を引くと、経過時間の値を取得することができる。

差分を表示させることでストップウォッチができる。
Dateクラスは、標準で備わっているため、インポートやクラスを定義する必要がない。

### Strict モードに関して
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Strict_mode

## 作成した第一印象
スクールでは、JSはrailsに簡単に組み込んだ記憶しかなかったが、多くの関数があるということを知ることができ汎用性があると感じた。個人的に今後とも力を入れて行こうと思えて、とても楽しいと感じた。


# 登場した関数

### Math.floor()
リンク: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
引数に受けとった数値以下の最大の整数を返す。
nullの場合は0を返す。

Ex) 
```
Math.floor( 45.95); //  45
Math.floor( 45.05); //  45
Math.floor(  4   ); //   4
Math.floor(-45.05); // -46
Math.floor(-45.95); // -46
```

### slice()
リンク：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
引数に受けとったインデックスを使い、元の配列をコピーし、新しく配列を作り返す。


Ex)
```
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
var citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

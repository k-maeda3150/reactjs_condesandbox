/**
 * const,let
 */

// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// // let val2 = "再宣言";

// const val4 = {
//   name: "ああ",
//   age: 28
// };

// console.log(val4);
// val4.name = "あいう";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "まっま";
// const age = 9;

// // 従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列
// const message2 = `私の名前は${name}です。年齢${age}`;
// console.log(message2);

/**
 * アロー関数
 */
//従来

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("a"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("b"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(1, 2));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "まっま",
//   age: 9
// };

// const message1 = `名前:${myProfile.name},年齢:${myProfile.age}`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前${name},年齢${age}`;
// console.log(message2);

// const myProfile = ["まっま", 9];
// const message3 = `名前${myProfile[0]},年齢${myProfile[1]}`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前${name}、年齢${age}`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello();

/**
 * スプレッド構文
 */
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * map,filter
 */
// const nameArr = ["aaa", "bbb", "ccc"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index},${name}`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "aaa") {
//     return name;
//   }
//   return `${name}xyz`;
// });
// console.log(newNameArr);

/**
 * 参考演算子
 */

// const num = 1300;

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力";
// console.log(formattedNum);

// const checkNum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています。" : "おｋ";
// };
// console.log(checkNum(50, 50));

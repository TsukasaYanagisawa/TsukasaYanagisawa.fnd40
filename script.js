'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("Yay! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Keep trying!");
//     console.log("  expected:", expected);
//     console.log("   actual:", actual);
//   }
// }
//　テストコード

const button = document.getElementById("button");
const Snatch = document.getElementById("Snatch");
const Snatch2 = document.getElementById("Snatch2");
let reps = document.getElementById("reps")
// const img1 = document.getElementById("Snatch");
const img1 = "バーベルを持ち上げる人のシルエットアイコン.jpg";
const img2 = "バーベルを持ち上げる人のシルエット02アイコン.jpg";

function buttonClick() {
    let rep = document.getElementById("myTextbox").value
    for (let i = 0; i < rep; i++) {
        // let k = 0
            setTimeout(() => {
                Snatch.style.display = "none";
                Snatch2.style.display = "block";
                reps.textContent = i + 1;
                // console.log(k = (2 * i) * 500)
            },(2 * i) * 500);
            setTimeout(() => {
                Snatch.style.display = "block";
                Snatch2.style.display = "none";
                // console.log(k = (2 * i + 1) * 500)
            },(2 * i + 1) * 500);
            setTimeout(() => {
                document.getElementById("clear").style.display = "block";
            },(2 * rep) * 500);
    }
}

button.addEventListener(`click`,buttonClick);

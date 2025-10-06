'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const button = document.getElementById("button");
const reset = document.getElementById("Reset");
const myText = document.getElementById("myTextbox")
const Snatch = document.getElementById("Snatch");
const Snatch2 = document.getElementById("Snatch2");
let reps = document.getElementById("reps")
const img1 = "バーベルを持ち上げる人のシルエットアイコン.jpg";
const img2 = "バーベルを持ち上げる人のシルエット02アイコン.jpg";

function buttonClick() {
    document.getElementById("clear").style.display = "none";
    let rep = document.getElementById("myTextbox").value
    for (let i = 0; i < rep; i++) {
        setTimeout(() => {
            Snatch.style.display = "none";
            Snatch2.style.display = "block";
            reps.textContent = i + 1;
        },(2 * i) * 500);
            setTimeout(() => {
                Snatch.style.display = "block";
                Snatch2.style.display = "none";
            },(2 * i + 1) * 500);
            setTimeout(() => {
                document.getElementById("clear").style.display = "block";
            },(2 * rep) * 500);
        }
    }

    button.addEventListener(`click`,buttonClick);
    
    
function resetClick() {
        myText.value = "";
        reps.innerText = "0";
        document.getElementById("clear").style.display = "none";        
}

reset.addEventListener(`click`,resetClick);


const pagetop_btn = document.querySelector(".pagetop");

pagetop_btn.addEventListener("click", scroll_top);
function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}

function scroll_event() {
  if (window.pageYOffset > 100) {
    pagetop_btn.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    pagetop_btn.style.opacity = "0";
  }
}
window.addEventListener("scroll", scroll_event);

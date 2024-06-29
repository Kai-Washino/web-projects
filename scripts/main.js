const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/kai-washino.jpg") {
    myImage.setAttribute("src", "images/kai-washino2.png");
  } else {
    myImage.setAttribute("src", "images/kai-washino.jpg");
  }
};


let iceCream = "チョコレート";
if (iceCream === "チョコレート") {
  alert("やった！チョコレートアイス大好き！");
} else {
  alert("あれれ、でもチョコレートが好きなのに......");
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `鷲野 はかっこいいよ、${myName} さん、鷲野 はかっこいいよ。`;        
    }
}
  
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `鷲野 はかっこいいよ、${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };
  

// document.querySelector("html").addEventListener("click", function () {
//     alert("痛っ! つつかないで!");
//   });
  
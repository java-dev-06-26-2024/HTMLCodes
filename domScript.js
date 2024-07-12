const body = document.getElementsByTagName("body")[0];
body.setAttribute("style", "background-color:blue;");

const header = document.getElementById("domh1");

header.setAttribute("style", "color:white;");

const div = document.createElement("div");
div.setAttribute("id", "box");
div.setAttribute(
  "style",
  "width:100px;height:100px;background-color:white; margin-left:10px;margin-right-10px;border-radius:50%"
);

body.appendChild(div);

const button1 = document.createElement("button");
button1.innerText = "Move Left";
body.appendChild(button1);

const button2 = document.createElement("button");
button2.innerText = "Move Right";
body.appendChild(button2);

const button3 = document.createElement("button");
button3.innerText = "Move";
body.appendChild(button3);

const box = document.getElementById("box");
button1.addEventListener("click", function () {
  moveLeft();
  console.log("you clicked on Move Left");
});

button2.addEventListener("click", function () {
  moveRight();
  console.log("you clicked on Move Right");
});

function moveLeft() {
  const box = document.getElementById("box");

  let marginRight = parseInt(
    box.style.marginRight.slice(0, box.style.marginRight.length - 2)
  );

  console.log("loop" + marginRight);

  box.style.marginRight = marginRight + 10 + "px";
  marginRight = parseInt(
    box.style.marginRight.slice(0, box.style.marginRight.length - 2)
  );
}
function moveRight() {
  const box = document.getElementById("box");

  let marginLeft = parseInt(
    box.style.marginLeft.slice(0, box.style.marginLeft.length - 2)
  );

  console.log("loop" + marginLeft);

  box.style.marginLeft = marginLeft + 10 + "px";

  marginLeft = parseInt(
    box.style.marginLeft.slice(0, box.style.marginLeft.length - 2)
  );
}


button3.addEventListener("click", moveTheBox);

function moveTheBox() {
  const box = document.getElementById("box");

  let direction = "left";
  let marginLeft = parseInt(
    box.style.marginLeft.slice(0, box.style.marginLeft.length - 2)
  );
 let width  = parseInt( box.style.width.slice(0, box.style.width.length - 2));
 let height = parseInt( box.style.height.slice(0, box.style.height.length - 2));

  setInterval(()=>{
    if (direction == "left") {
        box.style.marginLeft = marginLeft - 10 + "px";
        box.style.backgroundColor="red";
        box.style.width= width + 1 + "px";
        box.style.height= height + 1 +"px";

      } else if (direction == "right") {
        box.style.marginLeft = marginLeft + 10 + "px";
        box.style.backgroundColor="green";
        box.style.width= width - 1 + "px";
        box.style.height= height - 1 +"px";
      }
    
      marginLeft = parseInt(
        box.style.marginLeft.slice(0, box.style.marginLeft.length - 2)
      );

      width  = parseInt( box.style.width.slice(0, box.style.width.length - 2));
      height = parseInt( box.style.height.slice(0, box.style.height.length - 2));
      console.log(marginLeft);

      if (marginLeft >=1200) {
        direction = "left";
      } else if (marginLeft <= 10) {
        direction = "right";
      }
  },10)
}

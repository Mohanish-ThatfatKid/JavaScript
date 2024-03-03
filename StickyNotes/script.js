const buttons = document.querySelectorAll("button");
const container = document.querySelector(".container");
console.log(buttons);

//function for add button listner
const add = () => {
  //creating not-container
  const div = document.createElement("div");
  div.className = "note-container";
  //creating heading container and inner Html
  const divHeading = document.createElement("div");
  divHeading.className = "heading";

  const buttonDel = document.createElement("button");
  const buttonAdd = document.createElement("button");
  const h3 = document.createElement("h3");
  buttonDel.textContent = "-";
  buttonDel.setAttribute = ("type", "delete");
  buttonAdd.textContent = "+";
  buttonAdd.setAttribute("type", "add");
  buttonAdd.addEventListener("click", add);
  buttonDel.addEventListener("click", (e) => deleteItem(e));
  h3.contentEditable = true;
  h3.innerText = "Add Title";

  //creating content area div
  const divContentArea = document.createElement("div");
  divContentArea.className = "content-area";
  const txtarea = document.createElement("textarea");
  txtarea.placeholder = "Type your note here...";

  //adding Divs
  divHeading.appendChild(buttonDel);
  divHeading.appendChild(h3);
  divHeading.appendChild(buttonAdd);

  divContentArea.appendChild(txtarea);

  div.appendChild(divHeading);
  div.appendChild(divContentArea);

  container.appendChild(div);
};

const deleteItem = (e) => {
  container.removeChild(e.target.parentNode.parentNode);
  e.target.addEventListener("click", (e) => deleteItem(e));
};

buttons.forEach((button) => {
  let type = button.getAttribute("type");
  if(buttons[0] === button){
    button.addEventListener("click", () => {
        alert("can not delete this")
    })
  }else{
  if (type === "add") {
    button.addEventListener("click", add);
    console.log(button);
  } else if (type === "delete") {
    button.addEventListener("click", (e) => deleteItem(e));
  }
}
});

let todos =
  localStorage && localStorage.getItem("todolist")
    ? JSON.parse(localStorage.getItem("todolist"))
    : [];

function submit() {
  let textBox = document.getElementById("input-sub");
  let content = textBox.value;
  let randId = Math.random(); // 0.1235
  document.getElementById("new-task-message").classList.add("error-message");
  if (content == "") {
    onkeydown = function () {
      document
        .getElementById("new-task-message")
        .classList.remove("error-message");
    };
    return;
  } else {
    addContent(content, randId);

    textBox.value = "";

    //f5 =>
    todos.push(content);
    setstorages()
  }
}

function setstorages() {
  localStorage && localStorage.setItem("todolist", JSON.stringify(todos));
}

function addContent(content, randId) {
  document.getElementById("new-task-message").classList.remove("error-message");

  $("#products").append(
    '<div style="color: black" class="product1" id="row' + randId + '">' +
      content +
      '<div><input id="' +
      '"  class="checkbox" type="checkbox"  onclick="checkItem(event)"/></div> <button class"delete-item" onclick="deleteItem(event)">Delete</button>' +
      "</div>"
  );
}

function deleteAll() {
  var products = document.getElementById("products");
  products.innerHTML = "";
}

function checkAll() {
  var checkboxes = document.getElementsByClassName("checkbox");
  for (var checkbox of checkboxes) {
    checkbox.checked = true;
    checkbox.closest("div").parentNode.style.color = "red";
  }
}

function unCheckAll() {
  var checkboxes = document.getElementsByClassName("checkbox");
  for (var checkbox of checkboxes) {
    checkbox.checked = false;
    checkbox.closest("div").parentNode.style.color = "orange";
  }
}
var textBox2 = document.getElementById("input-sub");
textBox2.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    submit();
  }
});

function deleteItem(event) {
  debugger 
  var products = document.getElementById("products");
  var div = event.currentTarget.parentNode;
  console.log(div)
  products.removeChild(div);
  
  var idiv = div.id;
  console.log(idiv);
 

  // let index = todos.findindex(getIndex);
  let texob = div.firstChild;
  console.log(typeof texob );
  console.log( texob ); //"ad"
  let tex = JSON.stringify(texob) 
  console.log(typeof tex);
  console.log(todos)
  let index = todos.indexOf(tex)
  let index2 = Array.prototype.indexOf.call(todos, texob);
  //how to get index ?????????????????????????????????????????????????????
  console.log(index);
  console.log(index2);

  todos.splice(index,1); 
  setstorages()
}


function checkItem(event) {
  var currenti = event.currentTarget;
  var color = currenti.checked ? "red" : "orange";
  var bgcolor = currenti.checked ? "blue" : "";
  currenti.closest("div").parentNode.style.color = color;
  currenti.closest("div").parentNode.style.backgroundColor = bgcolor;
}

document.addEventListener("DOMContentLoaded", function () {
  if (Array.isArray && todos.length > 0) {
    todos.forEach(function printlocal(content, randId) {
      addContent(content, randId);
    });
  }
});



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
      '<div class="taskname">' + content + '</div>' +  '<div><button class="make" onclick="movedoing(event)"> Make </button></div>'+
      '<div class="checkbox-item"><input id="'  +
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
  var products = document.getElementById("products");
  var arraypro= document.getElementsByClassName("product1");
  var div = event.currentTarget.parentNode;
  console.log(div)
  let index1 = Array.prototype.indexOf.call(arraypro, div );
  let index2 = Array.prototype.indexOf.call(todos, index1);
  todos.splice(index2,1); 
  products.removeChild(div);
  setstorages()
}


function checkItem(event) {
  var currenti = event.currentTarget;
  var color = currenti.checked ? "red" : "orange";
  // debugger
  currenti.closest("div").parentNode.style.color = color;
  let div = event.currentTarget.parentNode;
  let div2 = event.currentTarget.parentNode.parentNode;

  //move colum 
  let produclist= document.getElementsByClassName("product1");
  // var  produclistj = JSON.parse(produclist);
  let produclistj = Array.from(produclist)

  let index1 = Array.prototype.indexOf.call(produclistj, div2 );
  produclistj.splice(index1,1);

  //create array and insert to done list
  let doinglist = [];
  doinglist.push(div2);

  let textitem = div2.firstChild.textContent;
  console.log(textitem);
  let randId2 = Math.random()
  $("#idone").append('<div style="color: black" class="product1" id="row' + randId2 + '">' +
  '<div class="taskname">' + textitem + '</div> <button class"delete-item" onclick="deleteItem(event)">Delete</button>' +
  "</div>")
}

document.addEventListener("DOMContentLoaded", function () {
  if (Array.isArray && todos.length > 0) {
    todos.forEach(function printlocal(content, index) {
      addContent(content, index);
    });
  }
});
//1
// moveitem to done 

// let makeid = document.getElementById(products.id)
// console.log(makeid)
// makeid.addEventListener("click", movedoing)
// function movedoing() {
//   console.log('movedoing');
// }

// thu casch 2
// moveitem to done
function movedoing(event){
  console.log('moved')
  let itemcurrent = event.currentTarget.parentNode.parentNode;
  console.log(itemcurrent)
  console.log(todos)
  let listitem = document.getElementsByClassName('product1')
  console.log(listitem)
  let indexpro = Array.prototype.indexOf.call(listitem, itemcurrent);
  let indextodo = Array.prototype.indexOf.call(todos, indexpro);
  todos.splice(indextodo, 1);
   
}

 


// function click checkall will move all items to  colum done
// let checkallbox = document.getElementById('checkall')
// checkallbox.addEventListener("click", checkallmove)

// function checkallmove(){
//   console.log('da lam duoc')

// }


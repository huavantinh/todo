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
  console.log(index1)
  let index2 = Array.prototype.indexOf.call(todos, index1);
  console.log(index2)
  todos.splice(index2,1); 
  products.removeChild(div);
  setstorages()
}


function checkItem(event) {
  var currenti = event.currentTarget;
  var color = currenti.checked ? "red" : "orange";
  currenti.closest("div").parentNode.style.color = color;
  let div = event.currentTarget.parentNode;
  let div2 = event.currentTarget.parentNode.parentNode;
console.log(div2)

  //move colum 
  let product1= document.getElementsByClassName("product1");
  console.log(products)
  let produclistj = Array.from(product1)
  console.log(produclistj)
  let index1 = Array.prototype.indexOf.call(produclistj, div2 );
  console.log(index1)
  produclistj.splice(index1,1);
  
  //create array and insert to done list
  let donelist = [];
  donelist.push(div2);

  let textitem = div2.firstChild.textContent;
  console.log(textitem);
  let randId2 = Math.random()
  $("#idone").append('<div style="color: black" class="product1" id="row' + randId2 + '">' +
  '<div class="taskname">' + textitem + '</div> <button class"delete-item" onclick="deleteItem2(event)">Delete</button>' +
  "</div>")
  let products = document.getElementsByTagName('product')
  products.removeChild(div);
  setstorages()
}


function deleteItem2(event) {
  var products = document.getElementById("idone");
  var arraypro= document.getElementsByClassName("product1");
  var div = event.currentTarget.parentNode;
  console.log(div)
  let index1 = Array.prototype.indexOf.call(arraypro, div );
  console.log(index1)
  let index2 = Array.prototype.indexOf.call(todos, index1);
  console.log(index2)
  todos.splice(index2,1); 
  products.removeChild(div);
  setstorages()
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
  let itemcurrent = event.currentTarget.parentNode.parentNode;
  console.log(itemcurrent)
  let listitem = document.getElementsByClassName('product1')
  console.log(listitem)
  //change object to array 
  let listarray = Array.from(listitem)
  console.log(listarray)
  // debugger
  //Lấy index của item trong list
    let indexpro = Array.prototype.indexOf.call(listarray, itemcurrent);
  console.log(indexpro)   

  listarray.splice(indexpro, 1);
  console.log(listarray)
  //create array and insert to done list
  let doinglist = [];
  doinglist.push(itemcurrent);

  let textitem = itemcurrent.firstChild.textContent;
  console.log(textitem);
  let randId = Math.random()
  $("#idoing").append(' <div style="color: black" class="product1" id="row' + randId + '">' +
  '<div class="taskname">' + textitem +' </div> <div class="checkbox-item"><input id="'  +
  '"  class="checkbox" type="checkbox"  onclick="checkItem(event)"/></div>' + '<button class"delete-item" onclick="deleteItem3(event)">Delete</button>' +
  "</div>")
}

function deleteItem3(event) {
  var products = document.getElementById("idoing");
  var arraypro= document.getElementsByClassName("product1");
  var div = event.currentTarget.parentNode;
  console.log(div)
  let index1 = Array.prototype.indexOf.call(arraypro, div );
  console.log(index1)
  let index2 = Array.prototype.indexOf.call(todos, index1);
  console.log(index2)
  todos.splice(index2,1); 
  products.removeChild(div);
  setstorages()
}

 

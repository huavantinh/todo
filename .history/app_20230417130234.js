let todos =
  localStorage.length > 0
    ? JSON.parse(localStorage.getItem("todolist"))
    : [];

let idoingsave =
  localStorage.length > 0 
    ? JSON.parse(localStorage.getItem("idoinglist"))
    : [];

let idonesave =
  localStorage.length > 0 
    ? JSON.parse(localStorage.getItem("idonelist"))
    : [];
 
function submit() {
  let textBox = document.getElementById("input-sub");
  let content = textBox.value;
  let randId = Math.random();  
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
    
    todos.push(content);
    setstorages();
  }
}
 
function setstorages() {
  localStorage.length > 0 && localStorage.setItem("todolist", JSON.stringify(todos));
}
function setstorages2() {
  localStorage.length > 0 && localStorage.setItem("idoinglist", JSON.stringify(idoingsave));
}
function setstorages3() {
  localStorage.length > 0 && localStorage.setItem("idonelist", JSON.stringify(idonesave));
}

function addContent(content, randId) {
  document.getElementById("new-task-message").classList.remove("error-message");

  $("#products").append(
    '<div style="color: black" class="product1" id="row' +
      randId +
      '">' +
      '<div class="taskname">' +
      content +
      "</div>" +
      '<div><button class="make" onclick="makedoing(event)"> Make </button></div>' +
      '<div class="checkbox-item"><input id="' +
      '"  class="checkbox" type="checkbox"  onclick="checkItem(event)"/></div> <button class"delete-item" onclick="deleteItem(event)">Delete</button>' +
      "</div>"
  );
}
function addContent2(content, randId) {
  document.getElementById("new-task-message").classList.remove("error-message");

  $("#idoing").append(
    '<div style="color: black" class=" productdoing product1" id="row' +
      randId +
      '">' +
      '<div class="taskname">' +
      content +
      "</div>" +
      '<div class="checkbox-item"><input class="checkbox" type="checkbox"  onclick="checkidoing(event)"/></div> <button class"delete-item" onclick="deleteItemdoing(event)">Delete</button>' +
      "</div>"
  );
}
function addContent3(content, randId) {
  document.getElementById("new-task-message").classList.remove("error-message");

  $("#idone").append(
    '<div style="color: black" class="productdone product1" id="row' +
      randId +
      '">' +
      '<div class="taskname">' +
      content +
      "</div>" +
       '<button class= "  delete-item" onclick="deleteItemdone(event)">Delete</button>' +
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
  var arraypro = document.getElementsByClassName("product1");
  var div = event.currentTarget.parentNode;
  let index1 = Array.prototype.indexOf.call(arraypro, div);
  let index2 = Array.prototype.indexOf.call(todos, index1);
  todos.splice(index2, 1);
  products.removeChild(div);
  setstorages();
}
function deleteItemdoing(event) {
  var doings = document.getElementById("idoing");
  var arraypro = document.getElementsByClassName("productdoing"); //// cần phân biệt 3 cột, tìm arraypro của cột 2
  var div = event.currentTarget.parentNode;
  let index1 = Array.prototype.indexOf.call(arraypro, div);
  let index2 = Array.prototype.indexOf.call(idoingsave, index1);
  idoingsave.splice(index2, 1);
  doings.removeChild(div);
  setstorages2();
}
function deleteItemdone(event) {
  // debugger
  var dones = document.getElementById("idone");
  var arraypro = document.getElementsByClassName("productdone"); //// cần phân biệt 3 cột, tìm arraypro của cột 3
  var div = event.currentTarget.parentNode;
  let index1 = Array.prototype.indexOf.call(arraypro, div);
  let index2 = Array.prototype.indexOf.call(idonesave, index1);
  dones.removeChild(div);
  idonesave.splice(index2, 1);
 
  setstorages3();
}

function checkItem(event) {
  var currenti = event.currentTarget;
  var color = currenti.checked ? "red" : "orange";
  currenti.closest("div").parentNode.style.color = color;
  let div = event.currentTarget.parentNode;
  let div2 = event.currentTarget.parentNode.parentNode;
  // insert to done list
  let content = div2.firstChild.textContent;
  console.log(content);
  // debugger
  idonesave.push(content);
  let indextext = Array.prototype.indexOf.call(todos, content);
  todos.splice(indextext, 1);
  let randId = Math.random();
  $("#idone").append(
    '<div style="color: black" class="product1 productdone" id="row' +
      randId +
      '">' +
      '<div class="taskname">' +
      content +
      '</div> <button class"delete-item" onclick="deleteItemdone(event)">Delete</button>' +
      "</div>"
  );

  let products = document.getElementById("products");
  products.removeChild(div2);
  setstorages();
  setstorages3();

}

document.addEventListener("DOMContentLoaded", function () {
  // debugger
  if (Array.isArray && todos.length > 0) {
    todos.forEach(function printlocal(content, index) {
      addContent(content, index);
    });
  }
  if (Array.isArray && idoingsave.length > 0) {
    idoingsave.forEach(function printlocal2(content, index) {
      addContent2(content, index);
    });
  }
  if (Array.isArray && idonesave.length > 0) {
      idonesave.forEach(function printlocal3(content, index) {
        addContent3(content, index);
      });
    }
  }
);

// moveitem to done
function makedoing(event) {
  let itemcurrent = event.currentTarget.parentNode.parentNode;
  console.log(itemcurrent);
  let listitem = document.getElementsByClassName("  product1");
  console.log(listitem);
  //change object to array
  let listarray = Array.from(listitem);
  console.log(listarray);
  //Lấy index của item trong list
  let indexpro = Array.prototype.indexOf.call(listarray, itemcurrent);
  console.log(indexpro);

  listarray.splice(indexpro, 1);
  console.log(listarray);

  let content = itemcurrent.firstChild.textContent;
  console.log(content);
  let randId = Math.random();
  $("#idoing").append(
    ' <div style="color: black" class="productdoing product1" id="row' +
      randId +
      '">' +
      '<div class="taskname">' +
      content +
      ' </div> <div class="checkbox-item"><input id="' +
      '"  class="checkbox" type="checkbox"   onclick="checkidoing(event)" /></div>' +
      '<button class"delete-item" onclick="deleteItemdoing(event)">Delete</button>' +
      "</div>"
  );
  // debugger

  let products = document.getElementById("products");
  products.removeChild(itemcurrent);
  idoingsave.push(content);

  let indextext = Array.prototype.indexOf.call(todos, content);
  todos.splice(indextext, 1);
  setstorages();

  setstorages2();
}

function checkidoing(event) {
  var currenti = event.currentTarget;
  var color = currenti.checked ? "red" : "orange";
  currenti.closest("div").parentNode.style.color = color;
  let div = event.currentTarget.parentNode;
  let div2 = event.currentTarget.parentNode.parentNode;
  console.log(div2);
  //move colum
  let product1 = document.getElementsByClassName("productdoing product1");
  console.log(product1);
  let produclistj = Array.from(product1);
  console.log(produclistj);
  let index1 = Array.prototype.indexOf.call(produclistj, div2);
  console.log(index1);
  produclistj.splice(index1, 1);
// debugger 
  let content = div2.firstChild.textContent;
  let randId = Math.random();
  $("#idone").append(
    '<div style="color: black" class="product1" id="row' +
      randId +
      '">' +
      '<div class="taskname">' +
      content +
      '</div> <button class"delete-item" onclick="deleteItemdone(event)">Delete</button>' +
      "</div>"
  );
  
  idonesave.push(content);
  let idoing = document.getElementById("idoing");
  idoing.removeChild(div2);
  // idoingsave.filter(item => item !== content);
  
  let indexcon = Array.prototype.indexOf.call(idoingsave, content);
  idoingsave.splice(indexcon,1) 
  setstorages2();
  setstorages3();

}

function deleteItem3(event) {
  var products = document.getElementById("idoing");
  var arraypro = document.getElementsByClassName("product1");
  var div = event.currentTarget.parentNode;
  console.log(div);
  let index1 = Array.prototype.indexOf.call(arraypro, div);
  console.log(index1);
  let index2 = Array.prototype.indexOf.call(todos, index1);
  console.log(index2);
  todos.splice(index2, 1);
  products.removeChild(div);
  setstorages();
}

console.log(todos);
console.log(idoingsave);
console.log(idonesave);

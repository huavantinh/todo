let todos =
  localStorage.getItem("todolist") ? JSON.parse(localStorage.getItem("todolist")) : [];

let idoingsave =
  localStorage.getItem("idoinglist") ? JSON.parse(localStorage.getItem("idoinglist")) : [];

let idonesave =
localStorage.getItem("idonelist") ? JSON.parse(localStorage.getItem("idonelist")) : [];

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
  localStorage &&
    localStorage.setItem("todolist", JSON.stringify(todos));
}
function setstorages2() {
  localStorage &&
    localStorage.setItem("idoinglist", JSON.stringify(idoingsave));
}
function setstorages3() {
  localStorage &&
    localStorage.setItem("idonelist", JSON.stringify(idonesave));
}

function addContent(content, randId) {
  document.getElementById("new-task-message").classList.remove("error-message");

  $("#products").append(
    '<div style="color: black" class="producttask product1" id="row' +
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
// function make all columns
// let makebutton = document.getElementById("makeall");
// makebutton.addEventListener("click", makecol);
// function makecol() {
//   idoingsave = idoingsave.concat(todos);
//   var products = document.getElementById("products");
//   let doings = document.getElementById("idoing");
//   console.log(doings)
//   let content = document.getElementsByClassName("taskname");
//   while (products.firstChild) {
//       products.firstChild.removeChild(products.firstChild.firstChild.nextSibling)
//       products.firstChild.removeChild(products.firstChild.firstChild.nextSibling.nextSibling.nextSibling)
// products.firstChild.innerHTML = '<button class"delete-item" onclick="deleteItemdoing(event)">Delete</button>';
//     doings.appendChild(products.firstChild);
//   }
//   clearitemscol();
//   setstorages2();
// }

let makebutton = document.getElementById("makeall");
makebutton.addEventListener("click", makecol);
function makecol() {
  idoingsave = idoingsave.concat(todos);
  var products = document.getElementById("products");
  while (products.firstChild) {
    let content = products.firstChild.firstChild.textContent;
  console.log(content)
  let randId = Math.random()
  makealladdContent2(content, randId);
  products.removeChild(products.firstChild);
  }
  clearitemscol();
  setstorages2();
}
function makealladdContent2(content, randId) {
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

//function for doneall1 
let donebutton = document.getElementById("doneall1");
donebutton.addEventListener("click", doneall);
function doneall() {
  let products = document.getElementById("products");
  let dones = document.getElementById("idone");
  idonesave = idonesave.concat(todos);
  while (products.firstChild) {
    let content = products.firstChild.firstChild.textContent;
  let randId = Math.random()
  donealladdContent3(content, randId);
  products.removeChild(products.firstChild);
  }
  clearitemscol();
  setstorages();
  setstorages3();
}
function donealladdContent3(content, randId) {
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

//function for doneall2
let donebutton2 = document.getElementById("doneall2");
donebutton2.addEventListener("click", doneall2);
function doneall2() {
  let doings = document.getElementById("idoing");
  // let dones = document.getElementById("idone");
  idonesave = idonesave.concat(idoingsave);
  while (doings.firstChild) {
    let content = doings.firstChild.firstChild.textContent;
  let randId = Math.random()
  donealladdContent3(content, randId);
  doings.removeChild(doings.firstChild);
  }
  clearitemscol2();
  setstorages2();
  setstorages3();
}
function donealladdContent3(content, randId) {
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

// function clearitems in columns
let clearitems = document.getElementById("clear1");
clearitems.addEventListener("click", clearitemscol);
function clearitemscol() {
  var products = document.getElementById("products");
  while (products.firstChild) {
    products.removeChild(products.firstChild);
  }
  // console.log(products);
  todos = [];
  // console.log(todos);
  setstorages();
}

let clearitem2 = document.getElementById("clear2");
clearitem2.addEventListener("click", clearitemscol2);
function clearitemscol2() {
  var doings = document.getElementById("idoing");
  while (doings.firstChild) {
    doings.removeChild(doings.firstChild);
  }
  idoingsave = [];
  setstorages2();
}

let clearitem3 = document.getElementById("clear3");
clearitem3.addEventListener("click", clearitemscol3);
function clearitemscol3() {
  var dones = document.getElementById("idone");
  while (dones.firstChild) {
    dones.removeChild(dones.firstChild);
  }
  idonesave = [];
  setstorages3();
}

function deleteAll() {
  clearitemscol()
  clearitemscol2()
  clearitemscol3()

}
// function checkAll() {
//   var checkboxes = document.getElementsByClassName("checkbox");
//   for (var checkbox of checkboxes) {
//     checkbox.checked = true;
//     checkbox.closest("div").parentNode.style.color = "red";
//   }
// }
// function unCheckAll() {
//   var checkboxes = document.getElementsByClassName("checkbox");
//   for (var checkbox of checkboxes) {
//     checkbox.checked = false;
//     checkbox.closest("div").parentNode.style.color = "orange";
//   }
// }
var textBox2 = document.getElementById("input-sub");
textBox2.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    submit();
  }
});

function deleteItem(event) {
  var products = document.getElementById("products");
  var arraypro = document.getElementsByClassName("producttask");
  var div = event.currentTarget.parentNode;
  let index1 = Array.prototype.indexOf.call(arraypro, div);
  // let index2 = Array.prototype.indexOf.call(todos2, index1);  ////////check lại function này. không lọc ra được index trong todos
  // console.log(index2)
  todos.splice(index1, 1); // dùng luôn index 1 . vì 2 array giống, index nó giống nhau
  products.removeChild(div);
  setstorages();
}
function deleteItemdoing(event) {
  var doings = document.getElementById("idoing");
  var arraypro = document.getElementsByClassName("productdoing"); //// cần phân biệt 3 cột, tìm arraypro của cột 2
  var div = event.currentTarget.parentNode;
  let index1 = Array.prototype.indexOf.call(arraypro, div);
  // let index2 = Array.prototype.indexOf.call(idoingsave, index1);
  idoingsave.splice(index1, 1);
  doings.removeChild(div);
  setstorages2();
}
function deleteItemdone(event) {
  // debugger
  var dones = document.getElementById("idone");
  var arraypro = document.getElementsByClassName("productdone"); //// cần phân biệt 3 cột, tìm arraypro của cột 3
  var div = event.currentTarget.parentNode;
  let index1 = Array.prototype.indexOf.call(arraypro, div);
  // let index2 = Array.prototype.indexOf.call(idonesave, index1);
  dones.removeChild(div);
  idonesave.splice(index1, 1);

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
});

// moveitem to done
function makedoing(event) {
  let itemcurrent = event.currentTarget.parentNode.parentNode;
  let listitem = document.getElementsByClassName(" producttask");
  //change object to array
  let listarray = Array.from(listitem);
  //Lấy index của item trong list
  let indexpro = Array.prototype.indexOf.call(listarray, itemcurrent);

  listarray.splice(indexpro, 1);

  let content = itemcurrent.firstChild.textContent;
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
  //change color
  // var currenti = event.currentTarget;
  // var color = currenti.checked ? "red" : "orange";
  // currenti.closest("div").parentNode.style.color = color;
  // let div = event.currentTarget.parentNode;
  let div2 = event.currentTarget.parentNode.parentNode;
  //move colum
  let productdoing = document.getElementsByClassName("productdoing");
  let produclistj = Array.from(productdoing);
  let index1 = Array.prototype.indexOf.call(produclistj, div2);
  produclistj.splice(index1, 1);
  let content = div2.firstChild.textContent;
  let randId = Math.random();
  $("#idone").append(
    '<div style="color: black" class="productdone product1" id="row' +
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
  idoingsave.splice(index1, 1);
  setstorages2();
  setstorages3();
}


//test function change text
let textslogan = document.getElementById("i22")
console.log(textslogan);
textslogan.addEventListener("click", changeText)
function changeText(){
  let initaltext = i22.textContent; 
  // i22.innerHTML = prompt(initaltext);
  i22.innerHTML =  initaltext
  
}

// import validator from "../utils/Validator";
var arr = [];

var errorSpan = document.getElementById("txtIntegerError");

var validator = new Validator();
var changeNumberPosition = document.querySelector("#changeNumberPosition");

var addRealNum = document.querySelector("#addRealNum");
var result = document.querySelector("#txtResult");
var displayNoneAll = function(){
  errorSpan.style.display = "none";
  changeNumberPosition.style.display = "none";
  addRealNum.style.display = "none";
  
}
displayNoneAll();







// Print array
var txtArray = document.querySelector("#txtArray");
var printArray = function () {
  if (arr.length === 0) {
    txtArray.innerHTML = "Mảng hiện tại đang rỗng";
    return;
  }
  content = "Mảng hiện tại là : [";
  for (var i = 0; i < arr.length; i++) {
    content += arr[i] + " ,";
  }
  content += "]";
  return content;
};

// Take positive integer to array
var btnAdd = document.querySelector("#btnAdd");
btnAdd.onclick = function () {
  var txtNumber = parseFloat(document.querySelector("#txtNumber").value);
  var check = validator.checkIntegerInput(
    txtNumber,
    "txtIntegerError",
    "Bạn cần nhập số nguyên"
  );

  if (check) {
    errorSpan.style.display = "none";
    arr.push(txtNumber);
    // document.querySelector("#txtNumber").innerHTML = "aaaa";
  }
  printArray();
  txtArray.innerHTML = printArray();
};

var btnRefresh = document.querySelector("#btnRefresh");
btnRefresh.onclick = function () {
  arr = [];
  window.alert("Refresh mảng thành công!");
  printArray();
};

// Sum of positive integer in array



var sumOfPositiveInteger = function () {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  result.innerHTML = "Tổng của các số dương trong mảng là: " + sum;
};

// Count positive integer
var countPositiveInteger = function () {
  // debugger
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count += 1;
    }
  }
  result.innerHTML = "Số các số dương trong mảng là: " + count;
};

// FInd min number

var findMinNumber = function () {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  result.innerHTML = "Số nhỏ nhất trong mảng là : " + min;
};

// Find min positive integer num

var findMinPositiveIntegerNum = function () {
  var content = "";
  var index = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      index = i;
      break;
    }
  }
  for (var i = index + 1; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < arr[index]) {
      index = i;
    }
  }
  content =
    index == -1
      ? "Mảng không tồn tại số nguyên dương"
      : "Số nguyên dương nhỏ nhất trong mảng là : " + arr[index];
  result.innerHTML = content;
};

// Find final evenNum

var findFinalEvenNum = function () {
  //   debugger;
  var content = "";
  var resultNum = -1;
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      resultNum = arr[i];
      break;
    }
  }
  content =
    resultNum !== -1
      ? "Số chẵn cuối cùng trong mảng là: " + resultNum
      : "Mảng không tồn tại số chắn. Giá trị trả về là -1 theo yêu cầu đề bài";
  result.innerHTML = content;
};

// Change number in array

var changeNumberInArray = function () {
  changeNumberPosition.style.display = "block";
};
var btnChangePosition = document.querySelector("#btnChangePosition");
btnChangePosition.onclick = function () {
  var txtPos1 = parseFloat(document.querySelector("#txtPos1").value);
  var txtPos2 = parseFloat(document.querySelector("#txtPos2").value);
  if (
    validator.checkPositionInput(
      parseFloat(txtPos1),
      "txtpos1Error",
      "Vị trí không hợp lệ",
      arr.length
    ) &&
    validator.checkPositionInput(
      parseFloat(txtPos2),
      "txtpos2Error",
      "Vị trí không hợp lệ",
      arr.length
    )
  ) {
    var tmp = arr[txtPos1 -1 ];
    arr[txtPos1 -1 ] = arr[txtPos2 -1];
    arr[txtPos2 -1] = tmp;
  }
  result.innerHTML = printArray();
};

var btnClose = document.querySelector("#btnClose");
btnClose.onclick = function(){
  changeNumberPosition.style.display = "none";
}

// Sort array ascending

var sortArrayAscending = function () {
  // debugger
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  result.innerHTML = printArray();
  txtArray.innerHTML = printArray();
};

var checkPrimeNum = function (num) {
  if (num < 2) {
    return false;
  }
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// Find first prime number
var findFirstPrimeNum = function () {
  // debugger;
  var firstPrimeNum = -1;
  for (var i = 0; i < arr.length; i++) {
    if (checkPrimeNum(arr[i])) {
      firstPrimeNum = arr[i];
      break;
    }
  }
  var content =
    firstPrimeNum === -1
      ? "Không tồn tại số nguyên tố trong mảng nên trả về -1 theo yêu cầu đề bài"
      : "Số nguyên tố đầu tiên trong mảng là : " + firstPrimeNum;
  result.innerHTML = content;
};

// Add real number 

var showAddRealNum = function(){
  
  addRealNum.style.display = "block";
}

var btnAddRealNum = document.querySelector("#btnAddRealNum");
btnAddRealNum.onclick = function(){
  var txtRealNum = parseFloat(document.querySelector("#txtRealNum").value);
  arr.push(txtRealNum);
  window.alert("Thêm vào mảng thành công!");
}

var btnCountIntegerNum = document.querySelector("#btnCountIntegerNum");
btnCountIntegerNum.onclick= function(){
  // debugger
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    
    if(arr[i] % 1 === 0){
      count += 1;
    }

  }
  result.innerHTML = "Số các số nguyên trong mảng là: " + count;
  txtArray.innerHTML = printArray();
}

var btnCloseReal = document.querySelector("#btnCloseReal");
btnCloseReal.onclick= function(){
  addRealNum.style.display = "none";
}

// Compare positive and negative number in array

var compareNumPositiveAndNegative = function () {
  var numNeg = 0;
  var numPos = 0;
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      numNeg += 1;
    } else if (arr[i] > 0) {
      numPos += 1;
    }
  }
  if (numNeg > numPos) {
    content = "Mảng có nhiều số âm hơn";
  } else if (numPos > numNeg) {
    content = "Mảng có nhiều số dương hơn";
  } else {
    content = "Mảng có số âm và số dương bằng nhau";
  }
  result.innerHTML = content;
};

var btnDo = document.querySelector("#btnDo");
btnDo.onclick = function () {
  var slFunction = document.querySelector("#slFunction").value;
  if (arr.length === 0) {
    result.innerHTML = "Mảng hiện đang rỗng !";
    return;
  }
 

  switch (parseInt(slFunction)) {
    case 1:
      sumOfPositiveInteger();
      break;
    case 2:
      countPositiveInteger();
      break;
    case 3:
      findMinNumber();
      break;
    case 4:
      findMinPositiveIntegerNum();
      break;
    case 5:
      findFinalEvenNum();
      break;
    case 6:
      changeNumberInArray();
      break;
    case 7:
      sortArrayAscending();
      break;
    case 8:
      findFirstPrimeNum();
      break;
    case 9:showAddRealNum();
      break;
    case 10:
      compareNumPositiveAndNegative();
      break;
  }
};

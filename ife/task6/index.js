function init() {
	var input = document.getElementById('input');
	var leftIn = document.getElementById('btn-left-In');
	var rightIn = document.getElementById('btn-right-In');
	var leftOut = document.getElementById('btn-left-Out');
	var rightOut = document.getElementById('btn-rught-Out');
	var arr = [];
	addEvent(leftIn, 'click', function () {
		inDate(arr, input.value, true);	
		initInput(input);	
	});
	addEvent(rightIn, 'click', function () {
		inDate(arr, input.value, false);	
		initInput(input);	
	});
	addEvent(leftOut, 'click', function () {
		outDate(arr, input.value, true);	
		initInput(input);	
	});
	addEvent(rightOut, 'click', function () {
		outDate(arr, input.value, false);	
		initInput(input);	
	});
	//冒泡
	var bubbleBtn = document.getElementById('bubbleBtn');
	addEvent(bubbleBtn, 'click', function () {
		bubbleSort(arr);
	});
	//选择
	var selectBtn = document.getElementById('selectBtn');
	addEvent(selectBtn, 'click', function () {
		selectSort(arr);
	});
	//插入
	var insertionBtn = document.getElementById('insertionBtn');
	addEvent(insertionBtn, 'click', function () {
		selectSort(arr);
	});
}
init();
/*事件绑定*/
function addEvent(ele, event, handle) {
	if (ele.addEventListener) {
		ele.addEventListener(event, handle, false);
	} else if (ele.attachEvent) {
		ele.attachEvent('on' + event, function () {
			handle.call(this);
		})	
	} else {
		ele['on' + event] = handle;
	}
}

/*输入初始化*/
function initInput(ele) {
	ele.value = '';
	ele.focus();
}

/*验证属否为数字*/
function isNum(value) {
	if (value.trim().length === 0 ) {
		return false;
	} else if (!isNaN(value)) {	
		return true;
	} else {
		return false;
	}
}
/*入栈*/
function inDate(arr, value, type) {
	if (isNum(value) && Number(value) >= 10 && Number(value) <= 100) {
		if (type) {
			arr.unshift(Number(value));
			craeteDom(arr);
		} else {
			arr.push(Number(value));
			craeteDom(arr);
		}
		
	} else {
		alert('请输入10-100以内的整数');
	}	
}

/*出栈*/
function outDate(arr, value, type) {	
	if (type) {
		arr.shift(Number(value));
		craeteDom(arr);
	} else {
		arr.pop(Number(value));
		craeteDom(arr);
	}			
}


/*创建节点*/
function craeteDom(arr) {
	var num = document.getElementById('num');
	num.innerHTML = '';
	arr.forEach(function (ele, index, arr) {
		var li = document.createElement('li');
		li.innerHTML = arr[index];
		li.style = "height:" + arr[index]*2 + "px";
		//console.log(arr);
		num.appendChild(li);
	})
	deleteNode(arr);	
}
function deleteNode(arr) {
	var num = document.getElementById('num');
 	var lis = num.getElementsByTagName('li');
 	for (var i = 0; i < lis.length; i++) {
 		(function (i) {
 			addEvent(lis[i], 'click', function () {
 				arr.splice(i, 1);
 				craeteDom(arr);
 				console.log(arr);
 			})
 		})(i);
 	}
}


/*冒泡排序*/
function bubbleSort(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				var team = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = team;
			}
			
		}
	}
	console.log(arr);
	craeteDom(arr);
}
/*选择排序*/
function selectSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[i]) {
				var team = arr[j];
				arr[j] = arr[i];
				arr[i] = team;
			}
			
		}
	}
	console.log(arr);
	craeteDom(arr);
} 

//快速排序
function quickSort(arr) {
    
}
/*插入排序*/
function insertionSort(arr) {
	for(var i=0; i<arr.length; i++) {
	    for(var j=i-1; j>=0; j--) {
	    	if(arr[j+1] < arr[j]) {
		        var temp = arr[j+1];
		        arr[j+1] = arr[j];
		        arr[j] = temp
	    	}
	    }
	}
	console.log(arr);
	craeteDom(arr);
}
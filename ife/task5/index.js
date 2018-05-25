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
	if (isNum(value)) {
		if (type) {
			arr.unshift(Number(value));
			craeteDom(arr);
		} else {
			arr.push(Number(value));
			craeteDom(arr);
		}
		
	} else {
		alert('请输入数字！');
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
		//console.log(arr);
		num.appendChild(li);
	})	
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
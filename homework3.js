var exercise1 = function (nums) {
	var sumSoFar = 0,
	i,
	arrLength = nums.length;
	for (i = 0; i < arrLength; i++) {
	sumSoFar = sumSoFar + nums[i];
	}

	document.getElementById('exercise1').innerHTML = "Average = " + sumSoFar/arrLength;
};

var exercise2 = function (nums) {
	var max = nums[0],
	i,
	arrLength = nums.length;
	for(i=1; i < arrLength; i++){
		if(nums[i]>max)
			max = nums[i];
	}

	document.getElementById('exercise2').innerHTML = "Maximum = " + max;
};

var underscore_exercise2 = function (nums) {
	document.getElementById('underscore_exercise2').innerHTML = "Maximum = " + _.max(nums);
};

var exercise3 = function (nums) {
	var flag = false,
	i,
	arrLength = nums.length;
	for(i=0; i < arrLength; i++){
		if(nums[i] % 2 === 0)
			flag = true;
	}

	document.getElementById('exercise3').innerHTML = "Contains even = " + flag;

};

var underscore_exercise3 = function (nums) {
	document.getElementById('underscore_exercise3').innerHTML = "Contains even = " + _.some(nums, function(x){ return x % 2 === 0;});
};

var exercise4 = function (nums) {
	var flag = false,
	i,
	arrLength = nums.length;
	for(i = 0; i < arrLength; i++){
		if(nums[i] % 2 === 0){
			flag = true;
		} else{
			flag = false;
			break;
		}
	}

	document.getElementById('exercise4').innerHTML = "All even = " + flag;
};

var underscore_exercise4 = function (nums) {
	document.getElementById('underscore_exercise4').innerHTML = "All even = " + _.every(nums, function(x){ return x % 2 === 0;});
};

var arrayContains = function (str, subStr){
	var flag = false,
	i;
	for(i = 0; i < str.length; i++){
		if(str[i] == subStr)
			flag = true;
	}

	document.getElementById('exercise5').innerHTML = "The main string contains the sub string = " + flag;
};

var arrayContainsTwo = function (str, subStr){
	var flag = false,
	count = 0,
	i;
	for(i = 0; i < str.length; i++){
		if(str[i] == subStr)
			count++;
		if(count == 2){
			flag = true;
			break;
		}
	}

	document.getElementById('exercise6').innerHTML = "The main string contains the sub string twice = " + flag;
};

var arrayContainsThree = function (str, subStr){
	var flag = false,
	count = 0,
	i;
	for(i = 0; i < str.length; i++){
		if(str[i] == subStr)
			count++;
		if(count == 3){
			flag = true;
			break;
		}
	}

	document.getElementById('exercise62').innerHTML = "The main string contains the sub string thrice = " + flag;
};

var arrayContainsNTimes = function (str, subStr, n){
	var flag = false,
	count = 0,
	i;
	for(i = 0; i < str.length; i++){
		if(str[i] == subStr)
			count++;
		if(count == n){
			flag = true;
			break;
		}
	}

	document.getElementById('exercise63').innerHTML = "The main string contains the sub string " + n + " times = " + flag;
};
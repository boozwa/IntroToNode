// Make a program that takes an array and computes the averages of all elements

var scores = [90, 98, 89, 100, 100,  86, 94];
average(scores);

console.log("");

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);

function average(arr) {
    var ave = 0;
    for (var i = 0; i < arr.length; i++) {
		ave += arr[i];
    }
	ave = ave/arr.length;
    return console.log(Math.round(ave));
}
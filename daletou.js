function clickRandomNum(num) {
	var html = ''
	for(var i=0;i<num;i++) {
		html += oneOfFive()
	} 

	document.getElementById('resultBall').innerHTML = html
}
function oneOfFive() {
	var results = randomDaLeTou()
	var lastTwo = results.splice(5,2).sort()
	var result = results.sort().concat(lastTwo)

	var one = ''
	var bluehtml = ''
	var redhtml = ''
	result.forEach(function(item, index) {
		if(index < 5) {
			bluehtml += "<div class='children'>" + item + "</div>"
		}else if(index > 4) {
			redhtml += "<div class='children'>" + item + "</div>"
		}
	})
	one += "<div class='group'>" + 
				"<div class='redball'>" + 
					bluehtml + 
				"</div>" + 
				"<div class='buleball'>" + 
					redhtml + 
				"</div>" + 
			"</div>"
	return	one
}
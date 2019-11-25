function doubleColorNum(num) {
	var html = ''
	for(var i=0;i<num;i++) {
		html += oneOfSix()
	} 

	document.getElementById('doubleColorNum').innerHTML = html
}
function oneOfSix() {
	var results = randomShuangSeQiu()
	var lastOne = results.splice(6,1)
	var result = results.sort().concat(lastOne)
	var one = ''
	var bluehtml = ''
	var redhtml = ''
	result.forEach(function(item, index) {
		if(index < 6) {
			bluehtml += "<div class='children'>" + item + "</div>"
		}else if(index > 5) {
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
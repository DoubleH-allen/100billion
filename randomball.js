
function randomDaLeTou() {
	var redball = []
	var result = []
	for(var i = 1;i<36; i++) {
		if (i < 10) {
			i = '0' + i
		}else {
			i = '' + i
		}
		redball.push(i)
	}
	for(var j =0;j<5;j++){
		var b = redball[Math.floor((Math.random()*redball.length))]
		result.push(b)
		redball.splice(redball.indexOf(b),1)
	}
	var blueball = []
	for(var k = 1;k<13; k++) {
		if (k < 10) {
			k = '0' + k
		}else {
			k = '' + k
		}
		blueball.push(k)
	}
	for(var l =0;l<2;l++){
		var bb = blueball[Math.floor((Math.random()*blueball.length))]
		result.push(bb)
		blueball.splice(blueball.indexOf(bb),1)
	}
	return result
}
function randomShuangSeQiu() {
	var redball = []
	var result = []
	for(var i = 1;i<34; i++) {
		if (i < 10) {
			i = '0' + i
		}else {
			i = '' + i
		}
		redball.push(i)
	}
	for(var j =0;j<6;j++){
		var b = redball[Math.floor((Math.random()*redball.length))]
		result.push(b)
		redball.splice(redball.indexOf(b),1)
	}
	var blueball = []
	for(var k = 1;k<17; k++) {
		if (k < 10) {
			k = '0' + k
		}else {
			k = '' + k
		}
		blueball.push(k)
	}
	var bb = blueball[Math.floor((Math.random()*blueball.length))]
	result.push(bb)
	blueball.splice(blueball.indexOf(bb),1)
	return result
}


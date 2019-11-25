function date() {
	var date = new Date()
	var h = date.getFullYear() + '年' + parseInt(date.getMonth() + 1)+ '月' + date.getDate()+ '日' + '  '+'星期'+ date.getDay()
	console.log(h)
	document.getElementById('date').innerHTML = h
	document.getElementById('date2').innerHTML = h
}
date()
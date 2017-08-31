function initSelect() {
	var currencySel = $('#currencySel')
	var selUrl = "selections.json"
	
	currencySel.select2({})
	
	$.getJSON(selUrl, function(res){
		res.currency.forEach(function(val, index){
			currencySel.append("<option>"+val+"</option>")
		})
	})
}

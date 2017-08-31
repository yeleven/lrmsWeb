//init select2
function initSelect() {

	//define url for select data
	var selUrl = "selections.json"
	
	//init select
	$("#frequenceSel").select2({});
	
	//init options to "#frequenceSel"
	var frequenceSel = $('#frequenceSel');
	$.getJSON(selUrl, function(res) {
		res[0].frequence.forEach(function(val, index) {
			frequenceSel.append("<option>" + val + "</option>")
		})
	});
}
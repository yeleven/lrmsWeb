//init select2
function initSelect() {

	//define url for select data
	var selUrl = "selections.json"
	
	//init select
	$("#stateSel").select2({
		placeholder: "请选择状态"
	});
	
	//init options to "#stateSel"
	var stateSel = $('#stateSel');
	$.getJSON(selUrl, function(res) {
		res[0].status.forEach(function(val, index) {
			stateSel.append("<option>" + val + "</option>")
		})
	});

}
//init select2
function initSelect() {

	//define url for select data
	var selUrl = "selections.json"
	
	//init select
	$("#lineSel").select2({
		placeholder: "请选择所属条线"
	});
	$("#productSel").select2({});
	$("#cardCateSel").select2({});
	$('#cardCateSel_pop').select2({});

	//init options to "#lineSel"
	var lineSel = $('#lineSel');
	$.getJSON(selUrl, function(res) {
		res[0].lines.forEach(function(val, index) {
			lineSel.append("<option>" + val + "</option>")
		})
	});

	//init options to "#productSel"
	var productSel = $('#productSel');
	$.getJSON(selUrl, function(res) {
		res[0].productCate.forEach(function(val, index) {
			productSel.append("<option>" + val + "</option>")
		})
	})
	
	//init options to "#cardCateSel"
	var cardCateSel = $('#cardCateSel');
	var cardCateSelPop = $('#cardCateSel_pop');
	$.getJSON(selUrl, function(res) {
		res[0].cardCate.forEach(function(val, index) {
			cardCateSel.append("<option>" + val + "</option>")
			cardCateSelPop.append("<option>" + val + "</option>")
		})
	})

}
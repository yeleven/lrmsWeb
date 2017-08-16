//init select2
function initSelect() {

	//define url for select data
	var selUrl = "selections.json"
	
	//init select
	$("#lineSel").select2({
		placeholder: "请选择所属条线"
	});
	$("#productCateSel").select2({});
	$("#cardCateSel").select2({});
	$('#cardCateSel_pop').select2({});
	$('#productCateSel_pop').select2({});
	$('#productSel_pop').select2({});
	$('#lineSel_pop').select2({});
	$('#rateTypeSel_pop').select2({});
	$('#termTypeSel_pop').select2({});
	$('#cashFlowStyleSel_pop').select2({});
	$('#inOutFlagSel_pop').select2({}); 
	$('#modelIdSel_pop').select2({});
	$('#depSel_pop').select2({});
	
	//init options to "#lineSel" and "#lineSel_pop"
	var lineSel = $('#lineSel');
	var lineSelPop = $('#lineSel_pop')
	$.getJSON(selUrl, function(res) {
		res[0].lines.forEach(function(val, index) {
			lineSel.append("<option>" + val + "</option>")
			lineSelPop.append("<option>" + val + "</option>")
		})
	});

	//init options to "#productCateSel" and "productCateSel_pop"
	var productCateSel = $('#productCateSel');
	var productCateSelPop = $('#productCateSel_pop');
	$.getJSON(selUrl, function(res) {
		res[0].productCate.forEach(function(val, index) {
			productCateSel.append("<option>" + val + "</option>")
			productCateSelPop.append("<option>" + val + "</option>")
		})
	})
	
	//init options to "#cardCateSel" and "#cardCateSel_pop"
	var cardCateSel = $('#cardCateSel');
	var cardCateSelPop = $('#cardCateSel_pop');
	$.getJSON(selUrl, function(res) {
		res[0].cardCate.forEach(function(val, index) {
			cardCateSel.append("<option>" + val + "</option>")
			cardCateSelPop.append("<option>" + val + "</option>")
		})
	})
	
	//init options to "#productSel"
	var productSel = $('#productSel_pop')
	$.getJSON(selUrl, function(res) {
		res[0].product.forEach(function(val, index) {
			productSel.append("<option>" + val + "</option>")
		})
	})
	
	//init options to "#rateTypeSel_pop"
	var rateTypeSelPop = $('#rateTypeSel_pop')
	$.getJSON(selUrl, function(res) {
		res[0].rateType.forEach(function(val, index) {
			rateTypeSelPop.append("<option>" + val + "</option>")
		})
	})
	
	//init options to "#termTypeSel_pop"
	var termTypeSelPop = $('#termTypeSel_pop')
	$.getJSON(selUrl, function(res) {
		res[0].termType.forEach(function(val, index) {
			termTypeSelPop.append("<option>" + val + "</option>")
		})
	})
	
	//init options to "#cashFlowStyleSel_pop"
	var cashFlowStyleSelPop = $('#cashFlowStyleSel_pop')
	$.getJSON(selUrl, function(res) {
		res[0].cashFlowStyle.forEach(function(val, index) {
			cashFlowStyleSelPop.append("<option>" + val + "</option>")
		})
	})
	
	//init options to "#inOutFlagSel_pop"
	var inOutFlagSelPop = $('#inOutFlagSel_pop')
	$.getJSON(selUrl, function(res) {
		res[0].inOutFlag.forEach(function(val, index) {
			inOutFlagSelPop.append("<option>" + val + "</option>")
		})
	})
	
	//init options to "#modelIdSel_pop"
	var modelIdSelPop = $('#modelIdSel_pop')
	$.getJSON(selUrl, function(res) {
		res[0].modelId.forEach(function(val, index) {
			modelIdSelPop.append("<option>" + val + "</option>")
		})
	})
	
	//init options to "#depSel_pop"
	var depSelPop = $('#depSel_pop')
	$.getJSON(selUrl, function(res) {
		res[0].dep.forEach(function(val, index) {
			depSelPop.append("<option>" + val + "</option>")
		})
	})
}
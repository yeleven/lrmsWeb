function initSelect(){
	var selUrl="rate.json"
	
	$("#stateSel").select2({});
	
	var lineSel=$('#stateSel');
	$.getJSON(selUrl,function(res){
		res[0].state.forEach(function(val,index){
			lineSel.append("<option>"+val+"</option>")
		})
	});
	
}

//function initSelect() {
//
//	//define url for select data
//	var selUrl = "rate.json"
//	
//	//init select
//	$("#stateSel").select2({});
//
//	//init options to "#lineSel"
//	var lineSel = $('#stateSel');
//	$.getJSON(selUrl, function(res) {
//		res[0].state.forEach(function(val, index) {
//			lineSel.append("<option>" + val + "</option>")
//		})
//	});
//
//}
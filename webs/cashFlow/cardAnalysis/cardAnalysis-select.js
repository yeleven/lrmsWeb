function initSelect(){
	var selUrl="selections.json"
	var inOutSel=$('#inOutSel');
	var productSel =$('#productSel')
	var termStructSel=$('#termStructSel')
	var unitSel=$('#unitSel')
	
	inOutSel.select2({});	
	productSel.select2({});
	termStructSel.select2({});
	unitSel.select2({});
	
	$.getJSON(selUrl,function(res){
		res[0].inOut.forEach(function(val,index){
			inOutSel.append("<option>"+val+"</option>")
		})
		
		res[0].product.forEach(function(val,index){
			productSel.append("<option>"+val+"</option>")
		})
		
		res[0].termStruct.forEach(function(val,index){
			termStructSel.append("<option>"+val+"</option>")
		})
		
		res[0].unit.forEach(function(val,index){
			unitSel.append("<option>"+val+"</option>")
		})
	});
	
}
function initSelect(){
	var selUrl="selections.json"
	var stateSel=$('#stateSel');
	var stateSel2=$('#state');
	var currencySel=$('#currencySel')
	var inOut = $('#inOut')
	
	stateSel.select2({});	
	stateSel2.select2({});
	currencySel.select2({});
	inOut.select2({});
	
	$.getJSON(selUrl,function(res){
		res[0].state.forEach(function(val,index){
			stateSel.append("<option>"+val+"</option>")
			stateSel2.append("<option>"+val+"</option>")
		})
		
		res[0].currency.forEach(function(val,index){
			currencySel.append("<option>"+val+"</option>")
		})
		
		res[0].inOut.forEach(function(val,index){
			inOut.append("<option>"+val+"</option>")
		})
	});
	
}
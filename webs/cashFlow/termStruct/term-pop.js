
$('#add').click(function(){
	layer.open({
		type: 1,
		content: $('#cardContent'),
		title: ['新增期限结构', 'color:rgb(99,102,104)'],
		area: ['400px', '400px'],
		maxmin: false,
		btn: ['确定', '取消'],
		yes: function(index, layero) {
//			$('#orgId').val(node_temp.id);
//			$('#orgName').val(node_temp.name);
			layer.close(index);
		},
		btn2: function(index, layero) {}
	});
})

function onEdit(){
	layer.open({
		type: 1,
		content: $('#cardContent'),
		title: ['新增期限结构', 'color:rgb(99,102,104)'],
		area: ['400px', '400px'],
		maxmin: false,
		btn: ['确定', '取消'],
		yes: function(index, layero) {
//			$('#orgId').val(node_temp.id);
//			$('#orgName').val(node_temp.name);
			layer.close(index);
		},
		btn2: function(index, layero) {}
	});
}
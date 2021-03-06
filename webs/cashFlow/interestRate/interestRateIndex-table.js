var columns = [{
		field: 'id',
		title: '编号',
		align: 'center'
	}, {
		field: 'section',
		title: '区间(左开右闭)',
		align: 'center'
	}, {
		field: 'rate',
		title: '利率(%)',
		align: 'center'
	}, {
		field: 'effectTime',
		title: '生效日期',
		align: 'center'
	}, {
		field: 'invalidTime',
		title: '失效日期',
		align: 'center'
	}, {
		field: 'state',
		title: '状态',
		align: 'center'
	}, {
		field: 'option',
		title: '操作',
		width: '110px',
		align: 'center',
		formatter: function(value, row, index) {
			// var e = '<a href="#" class="btn btn-default" onclick="onSearch(\'' + index + '\')"><i class="fa fa-search" title="查看"></i></a> ';
			var d = '<a href="#" class="btn btn-default" onclick="onEdit()"><i class="glyphicon glyphicon-edit" title="编辑"></i></a> ';
			var f = '<a href="#" class="btn btn-default" onclick=""><i class="glyphicon glyphicon-trash" title="失效"></i></a> ';
			return d + f;
		}

}];
function initTable(){
	$('#table').bootstrapTable('destroy');
	$('#table').bootstrapTable({
		url:'interestRate.json',
		cache:false,
		pagination:true,
		striped:true,
		pageList:[10],
		columns:columns
	});
}

//function initTable() {
//	$('#table').bootstrapTable('destroy');
//  $('#table').bootstrapTable({
//      url: 'interestRate.json',
//      cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
//      pagination: true, //是否显示分页（*）
//      striped: true,
//      pageList:[10],
//      columns: columns	//列配置项
//  });
//}

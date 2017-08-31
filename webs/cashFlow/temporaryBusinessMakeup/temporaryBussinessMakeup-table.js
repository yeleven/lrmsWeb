
//bootstrapTable columns
var columns = [{
    field: 'id',
    title: '编号',
    align: 'center'
}, {
    field: 'desc',
    title: '业务描述',
    align: 'center'
}, {
    field: 'expectDate',
    title: '业务预计日期',
    align: 'center'
}, {
    field: 'amount',
    title: '金额(元)',
    align: 'center'
}, {
    field: 'currency',
    title: '币种',
    align: 'center'
}, {
    field: 'inOut',
    title: '流入流出',
    align: 'center'
}, {
    field: 'state',
    title: '业务状态',
    align: 'center'
},{
    field: 'inOut',
    title: '录入日期',
    align: 'center'
}, {
    field: 'option',
    title: '操作',
    width: '110px',
    align: 'center',
    formatter: function (value, row, index) {
        // var e = '<a href="#" class="btn btn-default" onclick="onSearch(\'' + index + '\')"><i class="fa fa-search" title="查看"></i></a> ';
        var d = '<a href="#" class="btn btn-default" onclick="edit()"><i class="glyphicon glyphicon-edit" title="编辑"></i></a> ';
        var f = '<a href="#" class="btn btn-default" onclick=""><i class="glyphicon glyphicon-remove" title="删除"></i></a> ';
        return d + f;
    }
}];
//init bootstrapTable
function initTable() {
    $('#table').bootstrapTable('destroy');
    $('#table').bootstrapTable({
        url: 'business.json',
        cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true, //是否显示分页（*）
        striped: true,
        pageList:[10],
        columns: columns	//列配置项
    });
}

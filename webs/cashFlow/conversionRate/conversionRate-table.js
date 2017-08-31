
//bootstrapTable columns
var columns = [{
    field: 'id',
    title: '折算率编号',
    align: 'center'
}, {
    field: 'cardName',
    title: '账卡名称',
    align: 'center'
}, {
    field: 'cardId',
    title: '账卡编号',
    align: 'center'
}, {
    field: 'conversionRate',
    title: '折算率(%)',
    align: 'center'
}, {
    field: 'effectDate',
    title: '生效日期',
    align: 'center'
}, {
    field: 'status',
    title: '状态',
    align: 'center'
}, {
    field: 'option',
    title: '操作',
    width: '160px',
    align: 'center',
    formatter: function (value, row, index) {
        var d = '<a href="#" class="btn btn-default" onclick="onEdit()"><i class="glyphicon glyphicon-edit" title="编辑"></i></a> ';
        var e = '<a href="#" class="btn btn-default" onclick=""><i class="glyphicon glyphicon-trash" title="失效"></i></a> ';
        var f = '<a href="#" class="btn btn-default" onclick=""><i class="glyphicon glyphicon-remove" title="删除"></i></a> ';
        return d + e + f;
    }
}];
//init bootstrapTable
function initTable() {
    $('#table').bootstrapTable('destroy');
    $('#table').bootstrapTable({
        url: 'conversionRate.json',
        cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true, //是否显示分页（*）
        striped: true,
        pageList:[10],
        columns: columns	//列配置项
    });
}

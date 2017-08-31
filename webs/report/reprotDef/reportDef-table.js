
//bootstrapTable columns
var columns = [{
    field: 'id',
    title: '报表编号',
    align: 'center'
}, {
    field: 'name',
    title: '报表名称',
    align: 'center'
}, {
    field: 'lines',
    title: '行数',
    align: 'center'
}, {
    field: 'cols',
    title: '列数',
    align: 'center'
}, {
    field: 'frequency',
    title: '频率',
    align: 'center'
}, {
    field: 'option',
    title: '操作',
    width: '200px',
    align: 'center',
    formatter: function (value, row, index) {
        // var e = '<a href="#" class="btn btn-default" onclick="onSearch(\'' + index + '\')"><i class="fa fa-search" title="查看"></i></a> ';
        var d = '<a href="#" class="btn btn-default" onclick="edit()"><i class="glyphicon glyphicon-edit" title="编辑"></i></a> ';
        var f = '<a href="#" class="btn btn-default" onclick=""><i class="glyphicon glyphicon-remove" title="删除"></i></a> ';
        var g = '<a href="#" class="btn btn-default" onclick="">内容维护</a> ';
        return d + f + g;
    }
}];
//init bootstrapTable
function initTable() {
    $('#table').bootstrapTable('destroy');
    $('#table').bootstrapTable({
        url: 'report.json',
        cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true, //是否显示分页（*）
        striped: true,
        pageList:[10],
        columns: columns	//列配置项
    });
}

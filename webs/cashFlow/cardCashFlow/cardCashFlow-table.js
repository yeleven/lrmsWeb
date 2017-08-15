
//bootstrapTable columns
var columns = [{
    field: 'cardId',
    title: '账卡编号',
    align: 'center'
}, {
    field: 'cardName',
    title: '账卡名称',
    align: 'center'
}, {
    field: 'cardCate',
    title: '账卡类别',
    align: 'center'
}, {
    field: 'product',
    title: '所属产品',
    align: 'center'
}, {
    field: 'productCate',
    title: '产品大类',
    align: 'center'
}, {
    field: 'department',
    title: '所属部门',
    align: 'center'
}, {
    field: 'line',
    title: '所属条线',
    align: 'center'
},{
    field: 'inOut',
    title: '表内表外',
    align: 'center'
},  {
    field: 'rateType',
    title: '利率类型',
    align: 'center'
}, {
    field: 'termType',
    title: '期限类型',
    align: 'center'
}, {
    field: 'cashFlowMode',
    title: '现金流方式',
    align: 'center'
}, {
    field: 'flowFlag',
    title: '流入流出标志',
    align: 'center'
}, {
    field: 'modelId',
    title: '模型编号',
    align: 'center'
}, {
    field: 'option',
    title: '操作',
    width: '110px',
    align: 'center',
    formatter: function (value, row, index) {
        // var e = '<a href="#" class="btn btn-default" onclick="onSearch(\'' + index + '\')"><i class="fa fa-search" title="查看"></i></a> ';
        var d = '<a href="#" class="btn btn-default" onclick=""><i class="glyphicon glyphicon-edit" title="编辑"></i></a> ';
        var f = '<a href="#" class="btn btn-default" onclick=""><i class="glyphicon glyphicon-trash" title="作废"></i></a> ';
        return d + f;
    }
}];
//init bootstrapTable
function initTable() {
    $('#table').bootstrapTable('destroy');
    $('#table').bootstrapTable({
        url: 'card.json',
        cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true, //是否显示分页（*）
        striped: true,
        pageList:[10],
        columns: columns	//列配置项
    });
}

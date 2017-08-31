//bootstrapTable columns
var columns = [{
    field: 'date',
    title: '查询日期',
    align: 'center'
}, {
    field: 'orgName',
    title: '机构名称',
    align: 'center'
}, {
    field: 'cardId',
    title: '账卡编号',
    align: 'center'
}, {
    field: 'cardName',
    title: '账卡名称',
    align: 'center'
}, {
    field: 'selectTermAmount',
    title: '查询日对应期限余额',
    align: 'center'
}, {
    field: 'analysisTermAmount',
    title: '分析日对应期限余额',
    align: 'center'
}, {
    field: 'unit',
    title: '单位',
    align: 'center'
},{
    field: 'changeRate',
    title: '变动比例(%)',
    align: 'center'
},  {
    field: 'inOut',
    title: '流入流出',
    align: 'center'
}];
//init bootstrapTable
function initTable() {
    $('#table').bootstrapTable('destroy');
    $('#table').bootstrapTable({
        url: 'cardAnalysis.json',
        cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: false, //是否显示分页（*）
        striped: true,
        pageList:[10],
        columns: columns	//列配置项
    });
}


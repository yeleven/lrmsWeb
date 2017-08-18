//bootstrapTable columns
var columns = [{
	field: 'id',
	title: '编号',
	align: 'center'
}, {
	field: 'assetsName',
	title: '资产名称',
	align: 'center'
}, {
	field: 'assetsClass',
	title: '资产类别',
	align: 'center'
}, {
	field: 'needSource',
	title: '需求来源',
	align: 'center'
}, {
	field: 'assetBelongs',
	title: '资产归属',
	align: 'center'
}, {
	field: 'reportDay',
	title: '报表日',
	align: 'center'
}, {
	field: 'amount',
	title: '余额',
	align: 'center'
}, {
	field: 'yearTopAmount',
	title: '年初余额',
	align: 'center'
}, {
	field: 'lastDayAmount',
	title: '上日余额',
	align: 'center'
}, {
	field: 'lastQuarterAmount',
	title: '上季末余额',
	align: 'center'
}, {
	field: 'lastMonthAmount',
	title: '上月末余额',
	align: 'center'
}, {
	field: 'changeYearAmount',
	title: '较年初变动额',
	align: 'center'
}, {
	field: 'changeDayAmount',
	title: '较上日变动额',
	align: 'center'
}, {
	field: 'changeQuarterAmount',
	title: '较上季末变动额',
	align: 'center'
}, {
	field: 'changeMonthAmount',
	title: '较上月末变动额',
	align: 'center'
}, {
	field: 'changeYearRate',
	title: '较年初变动比例',
	align: 'center'
}, {
	field: 'changeDayRate',
	title: '较上日变动比例',
	align: 'center'
}, {
	field: 'changeQuarterRate',
	title: '较上季末变动比例',
	align: 'center'
}, {
	field: 'changeMonthRate',
	title: '较上月末变动比例',
	align: 'center'
}];
//init bootstrapTable
function initTable() {
	$('#table').bootstrapTable('destroy');
	$('#table').bootstrapTable({
		url: './demo/dailyMonitoringOfPremiumLiquidAssets.json',
		cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
		pagination: false, //是否显示分页（*）
		striped: true,
		columns: columns
	});
}
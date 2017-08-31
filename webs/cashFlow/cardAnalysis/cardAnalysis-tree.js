//zTree初始化对象
var zTreeObj;
// zTree 的参数配置
var setting = {
	data: {
		simpleData: {
			enable: true,
			idKey: "id",
			pIdKey: "pId",
			rootPId: null
		}
	},
	callback: {
		onClick: zTreeOnClick,
		onDblClick: zTreeOnDbClick
	}
};
//全局节点对象,临时存取节点值
var node_temp = {
	id: null,
	name: null
}
//单击树节点
function zTreeOnClick(event, treeId, treeNode, clickFlag) {
	node_temp.id = treeNode.id;
	node_temp.name = treeNode.name;

}
//双击树节点
function zTreeOnDbClick(event, treeId, treeNode) {
	$('#orgId').val(treeNode.id);
	$('#orgName').val(treeNode.name);
	layer.closeAll();
}

//初始化机构树,把机构树填充到隐藏的div
function initOrgTree() {
	$.ajax({
		url: '../../../demo/org.json',
		data: {},
		type: 'get',
		cache: false,
		dataType: 'json',
		success: function(data) {
			if (data) {
				console.log("机构树加载成功");
				zTreeObj = $.fn.zTree.init($("#tree"), setting, data);
				zTreeObj.expandAll(true);
			} else {
				console.log("机构树加载失败");
			}
		},
		error: function() {
			alert("异常！");
		}
	});
}

//加载机构树容器
$('#orgLoad').click(function() {
	layer.open({
		type: 1,
		content: $('#treeContent'),
		title: ['选择机构', 'color:rgb(99,102,104)'],
		area: ['400px', '300px'],
		maxmin: false,
		btn: ['确定', '取消'],
		yes: function(index, layero) {
			$('#orgId').val(node_temp.id);
			$('#orgName').val(node_temp.name);
			layer.close(index);
		},
		btn2: function(index, layero) {}
	});
});
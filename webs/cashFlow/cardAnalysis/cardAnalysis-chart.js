//Chart x轴显示参数
var labels = [];
//生成1~30
for(var i=1; i<=30; i++){
	labels.push(i+'');
}
//30天对应期限余额
var cpb = [20000000,10000000,5000000,8000000,13000000,15000000,9000000,25000000,8500000,25000000,20000000,10000000,5000000,8000000,13000000,15000000,9000000,25000000,8500000,25000000,20000000,10000000,5000000,8000000,13000000,15000000,9000000,25000000,17000000,20000000];
//Chart data
var data = {
	labels: labels,

	datasets: [{
		label:'对应期限余额',
		data:cpb,
		borderColor: 'rgb(255,172,155)'
	}]
}

//Chart操作
var options = {
	scales: {
		yAxes: [{
			ticks: {
				beginAtZero: true
			}
		}]
	}
}

//初始化chart
function initChart() {
	var ctx = $("#chart").get(0).getContext("2d");
	var myLineChart = new Chart(ctx, {
		type: 'line',
		data: data,
		options: options
	});
}
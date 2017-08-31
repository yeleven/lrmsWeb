function initChart() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('main1'));
	var myChart2 = echarts.init(document.getElementById('main2'));
	// 指定图表的配置项和数据
	var option = {
		backgroundColor: '#1b1b1b',
		tooltip: {
			formatter: "{a} {c}%"
		},
		toolbox: {
			show: true,
			feature: {
				mark: {
					show: true
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		series: [{
			name: '流动性比例',
			type: 'gauge',
			min: 0,
			max: 100,
			splitNumber: 10,
			radius: '75%',
			axisLine: { // 坐标轴线
				lineStyle: { // 属性lineStyle控制线条样式
					color: [
						[0.25, 'lime'],
						[0.82, '#1e90ff'],
						[1, '#ff4500']
					],
					width: 3,
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			axisLabel: { // 坐标轴小标记
				textStyle: { // 属性lineStyle控制线条样式
					fontWeight: 'bolder',
					color: '#fff',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			axisTick: { // 坐标轴小标记
				length: 15, // 属性length控制线长
				lineStyle: { // 属性lineStyle控制线条样式
					color: 'auto',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			splitLine: { // 分隔线
				length: 25, // 属性length控制线长
				lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
					width: 3,
					color: '#fff',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			pointer: { // 分隔线
				shadowColor: '#fff', //默认透明
				shadowBlur: 5
			},
			title: {
				textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder',
					fontSize: 20,
					fontStyle: 'italic',
					color: '#fff',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			detail: {
				backgroundColor: 'rgba(30,144,255,0.8)',
				borderWidth: 1,
				borderColor: '#fff',
				shadowColor: '#fff', //默认透明
				shadowBlur: 5,
				offsetCenter: [0, '50%'], // x, y，单位px
				textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder',
					color: '#fff'
				}
			},
			data: [{
				value: 20,
				name: '流动性比例'
			}]
		}]
	};
	
	var option2 = {
		backgroundColor: '#1b1b1b',
		tooltip: {
			formatter: "{a} {c}%"
		},
		toolbox: {
			show: true,
			feature: {
				mark: {
					show: true
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		series: [{
			name: '超额备付金率',
			type: 'gauge',
			min: 0,
			max: 100,
			splitNumber: 10,
			radius: '75%',
			axisLine: { // 坐标轴线
				lineStyle: { // 属性lineStyle控制线条样式
					color: [
						[0.1, 'lime'],
						[0.9, '#1e90ff'],
						[1, '#ff4500']
					],
					width: 3,
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			axisLabel: { // 坐标轴小标记
				textStyle: { // 属性lineStyle控制线条样式
					fontWeight: 'bolder',
					color: '#fff',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			axisTick: { // 坐标轴小标记
				length: 15, // 属性length控制线长
				lineStyle: { // 属性lineStyle控制线条样式
					color: 'auto',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			splitLine: { // 分隔线
				length: 25, // 属性length控制线长
				lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
					width: 3,
					color: '#fff',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			pointer: { // 分隔线
				shadowColor: '#fff', //默认透明
				shadowBlur: 5
			},
			title: {
				textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder',
					fontSize: 20,
					fontStyle: 'italic',
					color: '#fff',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			detail: {
				backgroundColor: 'rgba(30,144,255,0.8)',
				borderWidth: 1,
				borderColor: '#fff',
				shadowColor: '#fff', //默认透明
				shadowBlur: 5,
				offsetCenter: [0, '50%'], // x, y，单位px
				textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder',
					color: '#fff'
				}
			},
			data: [{
				value: 80,
				name: '超额备付金率'
			}]
		}]
	};
	
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	myChart2.setOption(option2);
}
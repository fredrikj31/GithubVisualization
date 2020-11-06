var ctx = document.getElementById("myChart").getContext("2d");

ctx.canvas.width = 600;
ctx.canvas.height = 200;

var myDoughnutChart = new Chart(ctx, {
	type: "doughnut",
	data: {
		datasets: [
			{
				data: [10, 20, 30],
				backgroundColor: ["#FF0000", "#00FF00", "#DAE363"],
			},
		],

		// These labels appear in the legend and in the tooltips when hovering different arcs
		labels: ["HTML", "CSS", "JavaScript"],
	},
	options: {
		responsive: true,
		maintainAspectRatio: true,
	},
});

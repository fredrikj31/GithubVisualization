// Get the graph container HTML element.
const graphContainer = document.getElementById("welcome-graph");

const options = {
	orientation: "horizontal",
	//orientation: "horizontal-reverse",
	template: GitgraphJS.templateExtend("metro", {
		colors: ["#F00", "#0F0", "#00F"], // branches colors, 1 per column
		branch: {
			lineWidth: 8,
			spacingX: 50,
			showLabel: false, // display branch names on graph
		},
		commit: {
			spacingY: -80,
			dot: {
				size: 12,
			},
			message: {
				displayAuthor: false,
				displayBranch: false,
				displayHash: false,
				font: "normal 12pt Arial",
			},
			shouldDisplayTooltipsInCompactMode: false, // default = true
		},
		// …
	}),
};

// Instantiate the graph.
const gitgraph = GitgraphJS.createGitgraph(graphContainer, options);

// Simulate git commands with Gitgraph API.
const master = gitgraph.branch("Master");
master.commit("");

const develop = master.branch("Feature 1");
develop.commit("");

const aFeature = develop.branch("Feature 2");
aFeature.commit("");

aFeature.commit("");
aFeature.commit("");

develop.merge(aFeature);
develop.commit("");

master.merge(develop);


//! Overwrites the hover effect
document.getElementById("welcome-graph").removeEventListener("hover");
document.getElementById("welcome-graph").removeEventListener("mouseover");
// Get the graph container HTML element.
const graphContainer = document.getElementById("graph-container");

const options = {
	orientation: "horizontal-reverse",
	template: GitgraphJS.templateExtend("metro", {
		colors: ["#F00", "#0F0", "#00F"], // branches colors, 1 per column
		branch: {
			lineWidth: 8,
			spacingX: 50,
			showLabel: true, // display branch names on graph
		},
		commit: {
			spacingY: -80,
			dot: {
				size: 12,
			},
			message: {
				displayAuthor: true,
				displayBranch: true,
				displayHash: true,
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
const master = gitgraph.branch("master");
master.commit({
	subject: "Add feature",
	body: "More details about the feature...",
	tag: "v1.2",
	author: "Fredrik Johansen <test@mail.com>",
	style: {
		// Specific style for this commit
	},
	onClick(commit) {
		alert(`Commit ${commit.hash} selected`);
		console.log(commit);
	},
	/*onMouseOver(commit) {
		alert(`Commit ${commit.hash} selected`);
	},*/
});

const develop = master.branch("develop");
develop.commit("Add TypeScript");

const aFeature = develop.branch("a-feature");
aFeature.commit("Make it work", {
	onClick(commit) {
		alert(`Commit ${commit.hash} selected`);
		console.log(commit);
	},
});

aFeature.commit("AkEcBziNcD3p9zjX8lkQbbSUJYjgbmf5XQpnS3YhhGkR3orUXoMh0BuOaL3VDpWiWUC2GAX9dSnuu5ve");
aFeature.commit("Make it fast");

develop.merge({
	branch: aFeature,
	//fastForward: true,
	commitOptions: {
		onClick(commit) {
			alert(`Commit ${commit.hash} selected`);
		},
	},
});
develop.commit("Prepare v1");

master.merge(develop).tag("v1.0.0");

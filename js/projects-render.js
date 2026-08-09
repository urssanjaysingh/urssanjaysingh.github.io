/**
 * Renders projectsData into #project-tree as a branching timeline.
 * Uses a MutationObserver so it works regardless of when the
 * "projects" partial gets injected by include.js.
 */
(function () {
	function createEl(tag, className, text) {
		const el = document.createElement(tag);
		if (className) el.className = className;
		if (text !== undefined) el.textContent = text;
		return el;
	}

	function buildLeaf(project) {
		const leaf = createEl("div", "project-leaf");

		if (project.thumbnail) {
			const imgWrap = createEl("div", "leaf-img-wrap");
			const img = createEl("img", "leaf-img");
			img.src = project.thumbnail;
			img.alt = project.title;
			imgWrap.appendChild(img);
			leaf.appendChild(imgWrap);
		}

		const meta = createEl("div", "leaf-meta");
		meta.appendChild(createEl("span", "leaf-period", project.period));
		meta.appendChild(createEl("span", "leaf-org", project.org));
		leaf.appendChild(meta);

		leaf.appendChild(createEl("h3", "leaf-title", project.title));

		if (project.description && project.description.length) {
			const list = createEl("ul", "leaf-desc");
			project.description.forEach((point) => {
				list.appendChild(createEl("li", null, point));
			});
			leaf.appendChild(list);
		}

		if ((project.skills && project.skills.length) || project.skillsMore) {
			const pills = createEl("div", "leaf-skills");
			(project.skills || []).forEach((skill) => {
				const pill = createEl("span", "skill-pill");
				pill.appendChild(createEl("p", "skill-name", skill));
				pills.appendChild(pill);
			});
			if (project.skillsMore) {
				const morePill = createEl(
					"span",
					"skill-pill skill-pill--more",
				);
				morePill.appendChild(
					createEl("p", "skill-name", `+${project.skillsMore} more`),
				);
				pills.appendChild(morePill);
			}
			leaf.appendChild(pills);
		}

		if (project.github || project.demo) {
			const actions = createEl("div", "btn-container leaf-actions");
			if (project.github) {
				const btn = createEl(
					"button",
					"btn btn-outlined project-btn",
					"GitHub",
				);
				btn.addEventListener("click", () =>
					window.open(project.github, "_blank"),
				);
				actions.appendChild(btn);
			}
			if (project.demo) {
				const btn = createEl(
					"button",
					"btn btn-outlined project-btn",
					"Live Link",
				);
				btn.addEventListener("click", () =>
					window.open(project.demo, "_blank"),
				);
				actions.appendChild(btn);
			}
			leaf.appendChild(actions);
		}

		return leaf;
	}

	function renderProjectsTree() {
		const container = document.getElementById("project-tree");
		if (!container || typeof projectsData === "undefined") return false;
		if (container.dataset.rendered === "true") return true;

		container.appendChild(createEl("div", "tree-trunk"));

		projectsData.forEach((project, index) => {
			const side = index % 2 === 0 ? "right" : "left";
			const node = createEl("div", `project-node project-node--${side}`);

			const dot = createEl(
				"div",
				"project-dot" + (index === 0 ? " project-dot--current" : ""),
			);
			node.appendChild(dot);
			node.appendChild(buildLeaf(project));

			container.appendChild(node);
		});

		container.dataset.rendered = "true";
		return true;
	}

	if (!renderProjectsTree()) {
		const observer = new MutationObserver(() => {
			if (renderProjectsTree()) observer.disconnect();
		});
		observer.observe(document.body, { childList: true, subtree: true });
	}
})();

// Loads all [data-include] partials, then boots the main script.js
// only after every section is actually in the DOM (so theme toggle,
// nav links, etc. all find the elements they expect).
async function includeHTML() {
    const includes = document.querySelectorAll("[data-include]");

    await Promise.all(
        Array.from(includes).map(async (el) => {
            const file = el.getAttribute("data-include");
            try {
                const res = await fetch(file);
                el.innerHTML = res.ok
                    ? await res.text()
                    : `<!-- Failed to load ${file} (${res.status}) -->`;
            } catch (err) {
                console.error(`Error loading ${file}:`, err);
                el.innerHTML = `<!-- Error loading ${file} -->`;
            }
        })
    );

    // Now that all sections exist, load the interactive script
    const script = document.createElement("script");
    script.src = "js/script.js";
    document.body.appendChild(script);
}

document.addEventListener("DOMContentLoaded", includeHTML);

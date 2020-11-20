function collapseSidebar() {
	let sidebar = document.getElementById("sidebar")
	sidebar.style.right = -sidebar.offsetWidth + "px"
}
document.getElementById("sidebar_backButton").addEventListener("click", collapseSidebar)

function openSidebar() {
	let sidebar = document.getElementById("sidebar")
	sidebar.style.right = 0
}
document.getElementById("actionButton_openSidebar").addEventListener("click", openSidebar)
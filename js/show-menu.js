var menuIsShowing = true,
	shouldShowSidebar = true;
var menuElement = $("#side-nav"),
	contentElement = $("#content");

var SIDEBAR_WIDTH = "20rem";
/** determines whether to hide the sidebar by default or not */
function shouldShowSidebarByDefault() {
	// return ( $(document).width() > 768 )
	return window.innerWidth > 1200
}

function hideSidebar() {
	contentElement.css("margin-left", 0);
	menuElement.hide();
	menuIsShowing = false;
}

function showSidebar() {
	contentElement.css("margin-left", SIDEBAR_WIDTH);
	menuElement.show();
	menuIsShowing = true;
}

function toggleSidebar() {
	if (menuIsShowing) {
		hideSidebar();
	}
	else {
		showSidebar();
	}
}

function defaultSidebarActions() {
	shouldShowSidebar = shouldShowSidebarByDefault();
	if (!shouldShowSidebar){

		$("#toggle-menu").show();
		$("#close-menu").show()
		hideSidebar();

	} 
	else { 
		$("#toggle-menu").hide();
		$("#close-menu").hide()
		showSidebar()
	}
}

$(function() {
	
	$('#toggle-menu').on('click', function() {
		toggleSidebar()
	})
	$("#close-menu").on("click", hideSidebar)
	$(window).on("resize", function () {
		if (shouldShowSidebarByDefault() !== shouldShowSidebar) {
			shouldShowSidebar = !shouldShowSidebar;
			defaultSidebarActions();
		}
	}) 
	defaultSidebarActions();
})



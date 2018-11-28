$(function() {
    var imageViewer = document.getElementById("image-viewer");
    var imageViewerImage = document.getElementById("image-viewer-image");
    var imageViewerCaption = document.getElementById("image-viewer-caption");
    imageViewer.style.display = "none";

    $(".thumbnail").click(function() {
        var src = $(this).attr("data-src");
        var caption = $(this).attr("data-caption");

        imageViewer.style.display = "flex";
        imageViewerImage.setAttribute("src", src);
        imageViewerCaption.innerText = caption;

    })
    

    $("#image-viewer-close").click(function() {
        imageViewer.style.display = "none";
        $(imageViewerImage).attr("src", "");
        imageViewerCaption.innerText = "";
    })
});
const LEFT_BUTTON_CLASS = "hero-scroll-button-left";
const RIGHT_BUTTON_CLASS = "hero-scroll-button-right";

const images = document.getElementsByClassName("hero-image-div");
const numberOfImages = images.length;
let currentIndex = 0;

const onClickHeroScrollButton = function () {
    let newIndex;
    if ($(this).hasClass(LEFT_BUTTON_CLASS)) {
        newIndex = (currentIndex - 1 + numberOfImages) % numberOfImages;
    }
    else if ($(this).hasClass(RIGHT_BUTTON_CLASS)) {
        newIndex = (currentIndex + 1) % numberOfImages;
    }
    $(images[currentIndex]).hide();
    $(images[newIndex]).show();
    currentIndex = newIndex;
};

$(".hero-scroll-button").on("click", onClickHeroScrollButton)
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuanMiLCJoZXJvLmpzIiwic2hvdy1tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzb3VyY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGltYWdlVmlld2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZS12aWV3ZXJcIik7XHJcbiAgICB2YXIgaW1hZ2VWaWV3ZXJJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2Utdmlld2VyLWltYWdlXCIpO1xyXG4gICAgdmFyIGltYWdlVmlld2VyQ2FwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2Utdmlld2VyLWNhcHRpb25cIik7XHJcbiAgICBpbWFnZVZpZXdlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgJChcIi50aHVtYm5haWxcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNyYyA9ICQodGhpcykuYXR0cihcImRhdGEtc3JjXCIpO1xyXG4gICAgICAgIHZhciBjYXB0aW9uID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1jYXB0aW9uXCIpO1xyXG5cclxuICAgICAgICBpbWFnZVZpZXdlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgaW1hZ2VWaWV3ZXJJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc3JjKTtcclxuICAgICAgICBpbWFnZVZpZXdlckNhcHRpb24uaW5uZXJUZXh0ID0gY2FwdGlvbjtcclxuXHJcbiAgICB9KVxyXG4gICAgXHJcblxyXG4gICAgJChcIiNpbWFnZS12aWV3ZXItY2xvc2VcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaW1hZ2VWaWV3ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICQoaW1hZ2VWaWV3ZXJJbWFnZSkuYXR0cihcInNyY1wiLCBcIlwiKTtcclxuICAgICAgICBpbWFnZVZpZXdlckNhcHRpb24uaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgIH0pXHJcbn0pOyIsImNvbnN0IExFRlRfQlVUVE9OX0NMQVNTID0gXCJoZXJvLXNjcm9sbC1idXR0b24tbGVmdFwiO1xyXG5jb25zdCBSSUdIVF9CVVRUT05fQ0xBU1MgPSBcImhlcm8tc2Nyb2xsLWJ1dHRvbi1yaWdodFwiO1xyXG5cclxuY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImhlcm8taW1hZ2UtZGl2XCIpO1xyXG5jb25zdCBudW1iZXJPZkltYWdlcyA9IGltYWdlcy5sZW5ndGg7XHJcbmxldCBjdXJyZW50SW5kZXggPSAwO1xyXG5cclxuY29uc3Qgb25DbGlja0hlcm9TY3JvbGxCdXR0b24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbmV3SW5kZXg7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhMRUZUX0JVVFRPTl9DTEFTUykpIHtcclxuICAgICAgICBuZXdJbmRleCA9IChjdXJyZW50SW5kZXggLSAxICsgbnVtYmVyT2ZJbWFnZXMpICUgbnVtYmVyT2ZJbWFnZXM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgkKHRoaXMpLmhhc0NsYXNzKFJJR0hUX0JVVFRPTl9DTEFTUykpIHtcclxuICAgICAgICBuZXdJbmRleCA9IChjdXJyZW50SW5kZXggKyAxKSAlIG51bWJlck9mSW1hZ2VzO1xyXG4gICAgfVxyXG4gICAgJChpbWFnZXNbY3VycmVudEluZGV4XSkuaGlkZSgpO1xyXG4gICAgJChpbWFnZXNbbmV3SW5kZXhdKS5zaG93KCk7XHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXdJbmRleDtcclxufTtcclxuXHJcbiQoXCIuaGVyby1zY3JvbGwtYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgb25DbGlja0hlcm9TY3JvbGxCdXR0b24pIiwidmFyIG1lbnVJc1Nob3dpbmcgPSB0cnVlLFxyXG5cdHNob3VsZFNob3dTaWRlYmFyID0gdHJ1ZTtcclxudmFyIG1lbnVFbGVtZW50ID0gJChcIiNzaWRlLW5hdlwiKSxcclxuXHRjb250ZW50RWxlbWVudCA9ICQoXCIjY29udGVudFwiKTtcclxuXHJcbnZhciBTSURFQkFSX1dJRFRIID0gXCIyMHJlbVwiO1xyXG4vKiogZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGhpZGUgdGhlIHNpZGViYXIgYnkgZGVmYXVsdCBvciBub3QgKi9cclxuZnVuY3Rpb24gc2hvdWxkU2hvd1NpZGViYXJCeURlZmF1bHQoKSB7XHJcblx0Ly8gcmV0dXJuICggJChkb2N1bWVudCkud2lkdGgoKSA+IDc2OCApXHJcblx0cmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoID4gMTIwMFxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlU2lkZWJhcigpIHtcclxuXHRjb250ZW50RWxlbWVudC5jc3MoXCJtYXJnaW4tbGVmdFwiLCAwKTtcclxuXHRtZW51RWxlbWVudC5oaWRlKCk7XHJcblx0bWVudUlzU2hvd2luZyA9IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2lkZWJhcigpIHtcclxuXHRjb250ZW50RWxlbWVudC5jc3MoXCJtYXJnaW4tbGVmdFwiLCBTSURFQkFSX1dJRFRIKTtcclxuXHRtZW51RWxlbWVudC5zaG93KCk7XHJcblx0bWVudUlzU2hvd2luZyA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoKSB7XHJcblx0aWYgKG1lbnVJc1Nob3dpbmcpIHtcclxuXHRcdGhpZGVTaWRlYmFyKCk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0c2hvd1NpZGViYXIoKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZmF1bHRTaWRlYmFyQWN0aW9ucygpIHtcclxuXHRzaG91bGRTaG93U2lkZWJhciA9IHNob3VsZFNob3dTaWRlYmFyQnlEZWZhdWx0KCk7XHJcblx0aWYgKCFzaG91bGRTaG93U2lkZWJhcil7XHJcblxyXG5cdFx0JChcIiN0b2dnbGUtbWVudVwiKS5zaG93KCk7XHJcblx0XHQkKFwiI2Nsb3NlLW1lbnVcIikuc2hvdygpXHJcblx0XHRoaWRlU2lkZWJhcigpO1xyXG5cclxuXHR9IFxyXG5cdGVsc2UgeyBcclxuXHRcdCQoXCIjdG9nZ2xlLW1lbnVcIikuaGlkZSgpO1xyXG5cdFx0JChcIiNjbG9zZS1tZW51XCIpLmhpZGUoKVxyXG5cdFx0c2hvd1NpZGViYXIoKVxyXG5cdH1cclxufVxyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHRcclxuXHQkKCcjdG9nZ2xlLW1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdHRvZ2dsZVNpZGViYXIoKVxyXG5cdH0pXHJcblx0JChcIiNjbG9zZS1tZW51XCIpLm9uKFwiY2xpY2tcIiwgaGlkZVNpZGViYXIpXHJcblx0JCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChzaG91bGRTaG93U2lkZWJhckJ5RGVmYXVsdCgpICE9PSBzaG91bGRTaG93U2lkZWJhcikge1xyXG5cdFx0XHRzaG91bGRTaG93U2lkZWJhciA9ICFzaG91bGRTaG93U2lkZWJhcjtcclxuXHRcdFx0ZGVmYXVsdFNpZGViYXJBY3Rpb25zKCk7XHJcblx0XHR9XHJcblx0fSkgXHJcblx0ZGVmYXVsdFNpZGViYXJBY3Rpb25zKCk7XHJcbn0pXHJcblxyXG5cclxuIl19

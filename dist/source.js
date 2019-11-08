$(function() {
  var imageViewer = document.getElementById("image-viewer");
  var imageViewerImage = document.getElementById("image-viewer-image");
  var imageViewerCaption = document.getElementById("image-viewer-caption");
  imageViewer.style.display = "none";

  $(".thumbnail").click(function() {
    var src = $(this).attr("data-src");
    var caption = $(this).attr("data-caption");

    imageViewer.style.display = "flex";
    // imageViewer.style.display = "block";
    imageViewerImage.setAttribute("src", src);
    imageViewerCaption.innerText = caption;
  });

  $("#image-viewer-close").click(function() {
    imageViewer.style.display = "none";
    $(imageViewerImage).attr("src", "");
    imageViewerCaption.innerText = "";
  });
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuanMiLCJoZXJvLmpzIiwic2hvdy1tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzb3VyY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkge1xyXG4gIHZhciBpbWFnZVZpZXdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2Utdmlld2VyXCIpO1xyXG4gIHZhciBpbWFnZVZpZXdlckltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZS12aWV3ZXItaW1hZ2VcIik7XHJcbiAgdmFyIGltYWdlVmlld2VyQ2FwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2Utdmlld2VyLWNhcHRpb25cIik7XHJcbiAgaW1hZ2VWaWV3ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAkKFwiLnRodW1ibmFpbFwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgIHZhciBzcmMgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXNyY1wiKTtcclxuICAgIHZhciBjYXB0aW9uID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1jYXB0aW9uXCIpO1xyXG5cclxuICAgIGltYWdlVmlld2VyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIC8vIGltYWdlVmlld2VyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBpbWFnZVZpZXdlckltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzcmMpO1xyXG4gICAgaW1hZ2VWaWV3ZXJDYXB0aW9uLmlubmVyVGV4dCA9IGNhcHRpb247XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjaW1hZ2Utdmlld2VyLWNsb3NlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgaW1hZ2VWaWV3ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgJChpbWFnZVZpZXdlckltYWdlKS5hdHRyKFwic3JjXCIsIFwiXCIpO1xyXG4gICAgaW1hZ2VWaWV3ZXJDYXB0aW9uLmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJjb25zdCBMRUZUX0JVVFRPTl9DTEFTUyA9IFwiaGVyby1zY3JvbGwtYnV0dG9uLWxlZnRcIjtcclxuY29uc3QgUklHSFRfQlVUVE9OX0NMQVNTID0gXCJoZXJvLXNjcm9sbC1idXR0b24tcmlnaHRcIjtcclxuXHJcbmNvbnN0IGltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJoZXJvLWltYWdlLWRpdlwiKTtcclxuY29uc3QgbnVtYmVyT2ZJbWFnZXMgPSBpbWFnZXMubGVuZ3RoO1xyXG5sZXQgY3VycmVudEluZGV4ID0gMDtcclxuXHJcbmNvbnN0IG9uQ2xpY2tIZXJvU2Nyb2xsQnV0dG9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IG5ld0luZGV4O1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoTEVGVF9CVVRUT05fQ0xBU1MpKSB7XHJcbiAgICAgICAgbmV3SW5kZXggPSAoY3VycmVudEluZGV4IC0gMSArIG51bWJlck9mSW1hZ2VzKSAlIG51bWJlck9mSW1hZ2VzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoJCh0aGlzKS5oYXNDbGFzcyhSSUdIVF9CVVRUT05fQ0xBU1MpKSB7XHJcbiAgICAgICAgbmV3SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSBudW1iZXJPZkltYWdlcztcclxuICAgIH1cclxuICAgICQoaW1hZ2VzW2N1cnJlbnRJbmRleF0pLmhpZGUoKTtcclxuICAgICQoaW1hZ2VzW25ld0luZGV4XSkuc2hvdygpO1xyXG4gICAgY3VycmVudEluZGV4ID0gbmV3SW5kZXg7XHJcbn07XHJcblxyXG4kKFwiLmhlcm8tc2Nyb2xsLWJ1dHRvblwiKS5vbihcImNsaWNrXCIsIG9uQ2xpY2tIZXJvU2Nyb2xsQnV0dG9uKSIsInZhciBtZW51SXNTaG93aW5nID0gdHJ1ZSxcclxuXHRzaG91bGRTaG93U2lkZWJhciA9IHRydWU7XHJcbnZhciBtZW51RWxlbWVudCA9ICQoXCIjc2lkZS1uYXZcIiksXHJcblx0Y29udGVudEVsZW1lbnQgPSAkKFwiI2NvbnRlbnRcIik7XHJcblxyXG52YXIgU0lERUJBUl9XSURUSCA9IFwiMjByZW1cIjtcclxuLyoqIGRldGVybWluZXMgd2hldGhlciB0byBoaWRlIHRoZSBzaWRlYmFyIGJ5IGRlZmF1bHQgb3Igbm90ICovXHJcbmZ1bmN0aW9uIHNob3VsZFNob3dTaWRlYmFyQnlEZWZhdWx0KCkge1xyXG5cdC8vIHJldHVybiAoICQoZG9jdW1lbnQpLndpZHRoKCkgPiA3NjggKVxyXG5cdHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA+IDEyMDBcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVNpZGViYXIoKSB7XHJcblx0Y29udGVudEVsZW1lbnQuY3NzKFwibWFyZ2luLWxlZnRcIiwgMCk7XHJcblx0bWVudUVsZW1lbnQuaGlkZSgpO1xyXG5cdG1lbnVJc1Nob3dpbmcgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NpZGViYXIoKSB7XHJcblx0Y29udGVudEVsZW1lbnQuY3NzKFwibWFyZ2luLWxlZnRcIiwgU0lERUJBUl9XSURUSCk7XHJcblx0bWVudUVsZW1lbnQuc2hvdygpO1xyXG5cdG1lbnVJc1Nob3dpbmcgPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVTaWRlYmFyKCkge1xyXG5cdGlmIChtZW51SXNTaG93aW5nKSB7XHJcblx0XHRoaWRlU2lkZWJhcigpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdHNob3dTaWRlYmFyKCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWZhdWx0U2lkZWJhckFjdGlvbnMoKSB7XHJcblx0c2hvdWxkU2hvd1NpZGViYXIgPSBzaG91bGRTaG93U2lkZWJhckJ5RGVmYXVsdCgpO1xyXG5cdGlmICghc2hvdWxkU2hvd1NpZGViYXIpe1xyXG5cclxuXHRcdCQoXCIjdG9nZ2xlLW1lbnVcIikuc2hvdygpO1xyXG5cdFx0JChcIiNjbG9zZS1tZW51XCIpLnNob3coKVxyXG5cdFx0aGlkZVNpZGViYXIoKTtcclxuXHJcblx0fSBcclxuXHRlbHNlIHsgXHJcblx0XHQkKFwiI3RvZ2dsZS1tZW51XCIpLmhpZGUoKTtcclxuXHRcdCQoXCIjY2xvc2UtbWVudVwiKS5oaWRlKClcclxuXHRcdHNob3dTaWRlYmFyKClcclxuXHR9XHJcbn1cclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0JCgnI3RvZ2dsZS1tZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHR0b2dnbGVTaWRlYmFyKClcclxuXHR9KVxyXG5cdCQoXCIjY2xvc2UtbWVudVwiKS5vbihcImNsaWNrXCIsIGhpZGVTaWRlYmFyKVxyXG5cdCQod2luZG93KS5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoc2hvdWxkU2hvd1NpZGViYXJCeURlZmF1bHQoKSAhPT0gc2hvdWxkU2hvd1NpZGViYXIpIHtcclxuXHRcdFx0c2hvdWxkU2hvd1NpZGViYXIgPSAhc2hvdWxkU2hvd1NpZGViYXI7XHJcblx0XHRcdGRlZmF1bHRTaWRlYmFyQWN0aW9ucygpO1xyXG5cdFx0fVxyXG5cdH0pIFxyXG5cdGRlZmF1bHRTaWRlYmFyQWN0aW9ucygpO1xyXG59KVxyXG5cclxuXHJcbiJdfQ==

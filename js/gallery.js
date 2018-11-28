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
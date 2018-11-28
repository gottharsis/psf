<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title> Gallery | Johns Creek Public Safety Foundation</title>
	<link rel="stylesheet" href="css/styles.min.css">
	<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
</head>
<body>
    <? include("inc/nav.php"); ?>
    <div id="content">
        <? include("inc/header.php") ?>
        <div class="title">
            <h1>Gallery</h1>
        </div>
        <?
        $photo_ids = array(
            "7mqsZsE6FaU",
            "3mjspmQDM_M",
            "WOPu8kmmEnA",
            "loeqHoa1uWY",
            "QK6Iwzd5MhE"
        );
        $photo_url = "source.unsplash.com";
        $thumbnail_size = "400x400";
        $photo_urls = array(
            "https://images.unsplash.com/photo-1453873531674-2151bcd01707?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=284e4b45d66eda4ddc0516317109eb0a" => "https://images.unsplash.com/photo-1453873531674-2151bcd01707?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=e7b651936885f9593e2ded264ecbe6c4",
            "https://images.unsplash.com/photo-1526666361175-e3595627c376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=368cc6939c9d3d85452c7c74f30ffb13" => "https://images.unsplash.com/photo-1526666361175-e3595627c376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=f7fd01f938dbacdde92b171553985b5a",
            "https://images.unsplash.com/photo-1518904868869-fbb2cdd0429a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=f5f269c417ced5a8c001f45737739c00" => "https://images.unsplash.com/photo-1518904868869-fbb2cdd0429a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=ea853f386cc51b4c2ab0fea284ddf58a"
        );
        ?>
        <div class="gallery">
            <? foreach ($photo_urls as $thumbnail_url => $full_url) : ?>
                <img src="<?php echo $thumbnail_url ?>" class="thumbnail" 
                data-src="<? echo $full_url; ?>"
                data-caption="This is a possible caption">
            <? endforeach; ?>
            <div id="image-viewer">
                <img id="image-viewer-image" src="https://images.unsplash.com/photo-1453873531674-2151bcd01707?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=e7b651936885f9593e2ded264ecbe6c4">
                <button id="image-viewer-close">
                <div id="image-viewer-close-text">Close</div>  
                <div id="image-viewer-close-icon">
                &times;
                </div>
                </button>
                <div id="image-viewer-caption"></div>
            </div>
        </div>
        
        
    </div>
</body>
<script src="dist/source.js"></script>
</html>
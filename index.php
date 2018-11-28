<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Johns Creek Public Safety Foundation</title>
	<link rel="stylesheet" href="css/styles.min.css">
	<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
</head>
<body>
	<?php include("./inc/nav.php"); ?>
	<div id="content">
		<?php include("./inc/header.php"); ?>
		<div class="hero-image-container">
			<?php
			$images = glob("img/hero/*");
			?>
			<? foreach ($images as $image) : ?>
			<!-- <img src="<? echo $image ?>" class="hero-image"> -->
			<div style="background-image: url( '<? echo $image ?>' )" class="hero-image-div"></div>
			<!-- Left and right buttons to scroll through images -->
			<? endforeach; ?>   

			<div class="hero-text-container">
				<div class="hero-text">
					
						Announcements here
					
				</div>
			</div>

			<a href="#" class="hero-scroll-button hero-scroll-button-left"><</a>
			<a href="#" class="hero-scroll-button hero-scroll-button-right">></a> 
		</div>
		<div class="mission-statement">
			<p>
				The Johns Creek Public Safety Foundation is a charity which supports firefighters and police officers. 
			</p>
			<button> Paypal Goes Here </button> 
		</div>
		<div class="card">
			<h3> Test Blog Post </h3>
			<p> This is the text of the blog post. </p>
		</div>
		<div class="card">
			<h3> New Officer of the Quarter! </h3>
			<p> This is his bio: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident vitae tempore maiores reiciendis necessitatibus perspiciatis. Eligendi dignissimos fugit, suscipit, architecto ratione quidem nulla at, labore inventore excepturi ab. Nihil, pariatur?</p>
		</div>
		<!-- <div style="height: 1000px; background-color: yellow;">
			<p><h1>This is where the content goes</h1></p>
		</div> -->
		<?php include("./inc/footer.php"); ?>
	</div>
	<script src="./dist/source.js"></script>
</body>
</html>

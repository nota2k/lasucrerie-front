<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="title-container" style="background-color: black">
	<div class="anim-title">
		<div class="end-anim">
			<h3 class="end-small-title">About</h3>

			<div class="end-text">
				<p>
					<strong>LA SUCRERIE</strong> est un laboratoire de création de contenus dont le territoire
					s’étend de la création vidéo dans toutes ses formes —&nbsp;du clip au brand content et du documentaire
					à la fiction — au podcast et à la photographie. La Sucrerie a à cœur de représenter la société,
					le contemporain et d’explorer de nouvelles histoires et de nouveaux horizons avec un œil neuf
					et une ambition créative. Incarnée par ses talents, La Sucrerie façonne des solutions sur-mesure
					à ses partenaires à qui elle propose des formules conjuguant autant de disciplines qu’il en
					faut pour faire passer l’image et l’histoire de ses partenaires au niveau suivant.
				</p>
			</div>
		</div>
	</div>
</div>
<div id="justified-gallery" class="justified-gallery">
    <div class="image-wrapper">
        <img src="images/bureau-01.jpg" alt="bureau-01"/>
    </div>
    <div class="image-wrapper">
        <img src="images/bureaux-02.jpg" alt="bureau-01"/>
    </div>
    <div class="image-wrapper">
        <img src="images/bureaux-04.jpg" alt="bureau-01"/>
    </div>
    <div class="image-wrapper">
        <img src="images/bureaux-05.jpg" alt="bureau-01"/>
    </div>
    <div class="image-wrapper">
        <img src="images/bureaux-06.jpg" alt="bureau-01"/>
    </div>
</div>

<style>
    .justified-gallery{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding: 0;
    }

    .image-wrapper{
        width: calc(33.33% - 10px);
        flex-grow: 2;
        padding: 5px;
    }

    .image-wrapper img{
        width: 100%;
        height: auto;
    }


</style>

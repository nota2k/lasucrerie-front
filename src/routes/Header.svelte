<script>
	import { page } from '$app/state';
</script>

<header>
	<div class="navbar_without_mosaic sticky-top">
		<a href="/" class="navbar-brand">
			<img
				class="logo-sucrerie"
				src="/images/Logo-sucrerie-horizontal-blanc.png"
				alt="Logo Sucrerie"
			/>
		</a>

		<div class="main-menu">
			<ul class="main-nav" id="js-menu">
				<li class="TV-nav aos-init aos-animate" data-aos="fade-right" data-aos-once="true">
					<a class="nav-links" href="/videos?section=music&amp;view=mosaic">VIDÉO</a>
				</li>
				<li
					class="nav-no-undermenu aos-init aos-animate"
					data-aos="fade-right"
					data-aos-once="true"
				>
					<a class="nav-links" href="/images">PHOTO</a>
				</li>
				<li class="TALENT-nav aos-init aos-animate" data-aos="fade-right" data-aos-once="true">
					<a class="nav-links" href="/talents">TALENTS</a>
				</li>
				<li class="PODCAST-nav aos-init aos-animate" data-aos="fade-right" data-aos-once="true">
					<a class="nav-links" href="/podcasts">PODCASTS</a>
				</li>
				<li
					class="nav-no-undermenu aos-init aos-animate"
					data-aos="fade-right"
					data-aos-once="true"
				>
					<a class="nav-links" href="/about">ABOUT</a>
				</li>
				<li
					class="nav-no-undermenu aos-init aos-animate"
					data-aos="fade-right"
					data-aos-once="true"
				>
					<a class="nav-links" href="/contacts">CONTACT</a>
				</li>
			</ul>
		</div>
		<hr class="line-navbar" color="white" />
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background-color: #000;
	}

	header .logo img {
		max-width: 100px;
	}

	header nav ul {
		list-style: none;
		display: flex;
		gap: 2rem;
	}

	header nav ul li a {
		color: #fff;
		text-decoration: none;
	}

	header nav ul li[aria-current='page'] a {
		font-weight: bold;
	}
</style>

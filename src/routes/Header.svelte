<script>
	import { page } from '$app/state';
</script>

<header>
	<a href="/" class="navbar-brand">
		<img class="logo-sucrerie" src="/images/Logo-sucrerie-horizontal-blanc.png" alt="Logo Sucrerie" />
	</a>
	<div class="menu-desktop-without-mosaic">
		<div class="main-menu">
			<ul class="main-nav">
				<li aria-current={page.url.pathname === '/video' ? 'page' : undefined}>
					<a class="nav-links" href="/">Video</a>
				</li>
				<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
					<a class="nav-links" href="/photo">Photo</a>
				</li>
				<li aria-current={page.url.pathname.startsWith('/talents') ? 'page' : undefined}>
					<a class="nav-links" href="/talents">Talents</a>
				</li>
				<li aria-current={page.url.pathname.startsWith('/podcasts') ? 'page' : undefined}>
					<a class="nav-links" href="/podcasts">Podcasts</a>
				</li>
				<li aria-current={page.url.pathname.startsWith('/about') ? 'page' : undefined}>
					<a class="nav-links" href="/about">About</a>
				</li>
				<li aria-current={page.url.pathname.startsWith('/contact') ? 'page' : undefined}>
					<a class="nav-links" href="/contact">Contact</a>
				</li>
			</ul>
		</div>
	</div>
	<hr class="line-navbar" color="white">
</header>

<style>
</style>

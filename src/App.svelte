<script>
	import { Router, Route, Link } from 'svelte-routing'
	import Header from './components/Header.svelte'
	import Home from './pages/Home.svelte'
	import About from './pages/About.svelte'
	import Console from './pages/Console.svelte'

	export let url = ""
</script>

<Header />
<Router url="{url}">
	<nav>
		<Link to="/">Home</Link>
		<Link to="console">Console</Link>
		<Link to="about">About</Link>
	</nav>
	<div>
		<Route path="/" component="{Home}" />
		<Route path="console" component="{Console}" />
		<Route path="about" component="{About}" />
	</div>
</Router>

<style >

</style>
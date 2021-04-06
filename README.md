# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template-webpack.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template-webpack svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start webpack:

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and the page should reload with your changes.

## Make app SMART on FHIR

### Install fhirclient

```bash
npm install fhirclient
```

### Add routing to enable SMART on FHIR Launch sequence
```bash
npm install svelte-routing
```

Replace content in App.svelte
```svelte
<script>
	import {Router, Route} from "svelte-routing";
	import Home from "./Home.svelte";
	import Launch from "./Launch.svelte";

	export let url = "";
</script>

<Router url={url}>
	<Route path="/">
		<Launch/>
	</Route>
	<Route path="/app">
		<Home/>
	</Route>
</Router>
```

Create empty svelte components for Launch and Home 

Remove 404 error when navigating to /api by adding the following to the webpack.config.js
```js
    devServer: {
		...
		historyApiFallback: true,
		index: 'index.html'
	}
```


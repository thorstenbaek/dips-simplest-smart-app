<script>
    import {oauth2 as Smart} from 'fhirclient';
	import {onMount} from 'svelte';

    onMount(async () => {
		Smart.authorize({
			clientId: 'dips-simplest-smart-app',
			scope: 'launch openid profile patient/*.read user/id user/fhirUser',			
			redirectUri: './app',			
			
			iss:"https://api.dips.no/FHIR",			
		
			launch: "cdp2008909::",	 //Gul Penn
		});
	});
</script>        
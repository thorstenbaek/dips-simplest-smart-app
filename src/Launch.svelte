<script>
    import {oauth2 as Smart} from 'fhirclient';
	import {onMount} from 'svelte';

    onMount(async () => {
		Smart.authorize({
			clientId: 'dips-simplest-smart-app',
			scope: 'launch openid profile patient/*.read user/id user/fhirUser',			
			redirectUri: './app',			

			/*iss:		  'https://launch.smarthealthit.org/v/r3/sim/'
			  			+ 'eyJoIjoiMSIsImIiOiJmMDQ2MjkzNi1lYjRiLTRkYT'
			  			+ 'EtYjQ1YS1mYmQ5NmViZjhjY2IiLCJlIjoic21hcnQt'
			  			+ 'UHJhY3RpdGlvbmVyLTcxNjE0NTAyIn0/fhir',*/

			iss:"https://vt-fi-a-mb.dips.local/DIPS-WebAPI/HL7/fhir-r4",
			//iss:"https://vt-selecta-a.dips.local/DIPS-WebAPI/HL7/fhir-r4",
			//iss:"https://api.dips.no/FHIR",
			
			//iss: "https://kernel.dips.fhir.service.api.dips.no",
			launch: "cdp2008909::",			
		});
	});
</script>        
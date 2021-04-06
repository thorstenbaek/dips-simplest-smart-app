<script>
    import {oauth2 as Smart} from 'fhirclient';
	import {onMount} from 'svelte';

    onMount(async () => {
		Smart.authorize({
			clientId: 'dips-simplest-smart-app',
			scope: 'launch launch/patient patient/DocumentReference.write patient/DocumentReference.read patient/Patient.read patient/encounter patient/resource online_access openid fhirUser',			
			redirectUri: './app',			

			iss:		  'https://launch.smarthealthit.org/v/r3/sim/'
			  			+ 'eyJoIjoiMSIsImIiOiJmMDQ2MjkzNi1lYjRiLTRkYT'
			  			+ 'EtYjQ1YS1mYmQ5NmViZjhjY2IiLCJlIjoic21hcnQt'
			  			+ 'UHJhY3RpdGlvbmVyLTcxNjE0NTAyIn0/fhir',

		});
	});
</script>        
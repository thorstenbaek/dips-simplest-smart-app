import { writable, derived } from "svelte/store";
import { oauth2 as Smart } from 'fhirclient';
import { subscription_key } from './subscription';



export const fhir = writable(null);
export const user = derived(
    fhir, 
    ($fhir, set) => {
        if ($fhir != null && $fhir.client != null && $fhir.client.user.id != null)
        {
            $fhir.client.user.read({
                 headers: {'dips-subscription-key': subscription_key}
            }).then(u => set(u));
        }
   });

export const patient = derived(
    fhir,
    ($fhir, set) => {
        if ($fhir != null && $fhir.client != null)
        {
            $fhir.client.patient.read({
                headers: {'dips-subscription-key': subscription_key}
            }).then(p => set(p));            
        }
    }
);

export const encounter = derived(
    fhir,
    ($fhir, set) => {
        if ($fhir != null && $fhir.client != null && $fhir.client.encounter.id != null)
        {
            $fhir.client.encounter.read({
                headers: {'dips-subscription-key': subscription_key}
            }).then(e => set(e));
        }
    }
)

export const resource = derived(
    fhir, 
    ($fhir, set) => {
        if ($fhir != null && $fhir.client != null && $fhir.client.resource != null)
        {
            var resourceId = $fhir.client.getState("tokenResponse.resource");
            $fhir.client.request(resourceId).then(
                resource => {
                    console.log(resource);
                    set(resource);
                });                       
        }
    }
)

Smart.ready()
    .then(client => {
        console.log(client);
        var newContext = {
            client: client,
            error: null
        };
        fhir.set(newContext);        
        })
        
    .catch(error => {
        var newContext = {
            client: null,
            error: error
        };
        fhir.set(newContext)});

<script>
    import { fhir, user, patient, encounter, resource } from '../SmartOnFhirStore.js';
</script>
    {#if $fhir != null}    
        {#if $user != null}           
            <h3>
                User: 
                {#each $user?.name[0].given as given, i}
                    {given + " "}
                {/each}
                {$user?.name[0].family}    
            </h3>
        {/if}    
        {#if $patient != null}
            <h3>
                Patient: 
                {#each $patient?.name[0].given as given, i}
                    {given}
                {/each}
                {$patient?.name[0].family}    
            </h3>        
        {/if}
        {#if $encounter != null}
            <h3>
                Encounter: 
                {$encounter.id}        
            </h3>            
        {/if}    
        {#if $resource != null}
            <h3>
                Resource: 
                {$resource}        
            </h3>            
        {/if}    
    {:else}
        Loading FHIR data...
    {/if}
    
    

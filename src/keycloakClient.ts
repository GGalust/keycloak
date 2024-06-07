import Keycloak from 'keycloak-js';

const keycloakClient = new Keycloak({
    "url":"http://localhost:9090",
    "realm": "cognaize-realm",
    "clientId": "worktimal-workflow-client"
})

export default keycloakClient;
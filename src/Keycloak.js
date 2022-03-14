import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: "http://labelstudio.keycloak.vgts.xyz/auth/",
 realm: "test",
 clientId: "label-right-test",
 onLoad: 'login-required'
});

export default keycloak;
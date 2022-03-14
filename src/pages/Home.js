import React from 'react';
import { useKeycloak } from "@react-keycloak/web";

const Home = () => {
   const { keycloak, initialized } = useKeycloak();

   return (
      <div>
      <h1>Welcome to the Homepage {!!keycloak.authenticated && keycloak.token}</h1>
      </div>
   );
};

export default Home;
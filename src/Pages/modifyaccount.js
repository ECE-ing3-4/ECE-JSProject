import React from 'react';
import { Route } from 'react-router-dom';
import Form from '../forms/Form.js';

export default function modifyaccount(obj) {
  return (
    <div>
      <Route exact path="/modifyaccount" component={() =>
        <>
          <p>Modify your account page</p>
          <Form inputNames={["prenom","nom","last_4"]} inputTexts={["Prénom","Nom","4 derniers"]} buttonText={"send"} onSend={obj.handleTestForm} />
          {obj.connected() || obj.acceptNotLoginFnc() ?
            "WIP"
            : "Connection requise"}
        </>
      } />
    </div>


  )
}
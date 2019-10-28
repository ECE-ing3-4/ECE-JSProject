import React from 'react';
import { Route } from 'react-router-dom';
import Form from '../Forms/Form.js';

export default function modifyaccount(obj) {
  return (
    <div>
      <Route exact path="/modifyaccount" component={() =>
        <>
          <p>Modify your account page</p>
          {obj.connected() || obj.acceptNotLoginFnc() ?
            <Form inputNames={["oldPassword", "newPassword", "newPasswordConfirmation"]} inputTexts={["Old password", "New password", "New password again"]} buttonText={"Change password"} onSend={obj.handleChangePasswordForm} />
            : "Connection requise"}
        </>
      } />
    </div>


  )
}
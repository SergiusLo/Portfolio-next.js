import * as React from 'react';


export const EmailTemplate = ({
  subject, message,
}) => (

  <div>
    <h1>{subject}</h1>
    <p>{message}</p>
  </div>
);

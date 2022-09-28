import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Google } from 'react-oauth2';

const LoginPage = () => {
  let state = {
    data: {
      id: '',
      name: '',
      email: '',
      gender: '',
      location: { id: '', name: '' },
    },
  };

  const google = (err, res) => {
    if (!err) {
      this.setState({ data: res.profile });
    } else {
      this.setState({ data: 'something happen wrong' });
    }
  };

  return (
    <div>
      *Needs to be setup
      <br />
      <Google
        url={'http://localhost:3000'}
        clientId={
          '938322132286-la25n19h394oqces4fe1vu5r4a216sdv.apps.googleusercontent.com'
        }
        clientSecret={'smOMbXSUpGyTAA9njFoedkAi'}
        redirectUri={'http://localhost:3000'}
        scope={[
          'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/plus.me',
        ]}
        width={300}
        height={300}
        callback={google}
        style={{ color: 'green' }}
      >
        Login With Google;
      </Google>
      <hr />
      {JSON.stringify(state)}
    </div>
  );
};

export default LoginPage;

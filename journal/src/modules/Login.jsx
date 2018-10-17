import React, { Component } from 'react';

import { Authenticator, Greetings } from 'aws-amplify-react';

import { Instagram } from 'a-theme-react';

export default class Login extends Component {
    render() {
        return <Authenticator theme={Instagram} hide={[Greetings]} />
    }
}
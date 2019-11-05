import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


class Login extends Component {

    render() {
        return (
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formGroupUsername">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="userName" placeholder="username" />
                </Form.Group>

                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="Password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="Password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary">login</Button>
            </Form>
        )
    }
}

export default Login;
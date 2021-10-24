import React, { useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

const Button = styled.button`
  color: #ffffff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  background: #FAD34F;
  border: 2px solid #FAD34F;
  border-radius: 3px;
`;
const Form = styled.form`
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 563px;
  height: 575px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Div = styled.form`
  heigth: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Feedback = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const HandleSubmit = (e) => {
        e.preventDefault()
        const feebback = {
            name,
            email,
            message
        };

        Axios.post('http://localhost:3000/api/tasks', feebback)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return <Div>
        <Form action="">
            <div><input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="name" /></div>
            <div><input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="email" /></div>
            <div><input value={message} onChange={e => setMessage(e.target.value)} type="text" placeholder="message" /></div>
            <Button onClick={HandleSubmit} type="submit">Send</Button>
        </Form>
    </Div>
};

export default Feedback;
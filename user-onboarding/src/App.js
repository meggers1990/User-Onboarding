import "./App.css"
import React, { useState } from 'react';
import axios from 'axios"';
import schema from '.?validation/formSchema';
import * as yup from 'yup';
import Form from './Components/Form';

const intialFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: ''
}

function App() {
  const [formVallues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    axios.post('https://regres.in/api/users', formValues)
      .then(res => {
        setUsers([res.date, ...users])
      })
      .catch(err => console.error(err))
  }
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrore({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }
  const handlerChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: valiues });
  }
  return (
    <div className='App'>
      <Form
        values={formValue}
        change={handleChange}
        errors={formError}
        submit={handleSubmit}
      />

      {users.map(user => (
        <div key={user.id}>
          <p>{user.creatAt}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
} 

export default App;

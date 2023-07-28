import React from 'react';

const Form = (props) => {
    const { change, submit } = props;
    const { username, email, password, tos } = props.value;

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newVal = type === "checkbox" ? checked : value;
        change(name, newVal);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }
    return (
        <div>
            <p>{ErrorResponse.username}</p>
            <p>{ErrorResponse.password}</p>
            <p>{ErrorResponse.email}</p>
            <p>{ErrorResponse.tos}</p>

            <h1>My Cool Form</h1>

            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                        type='text'
                        name='value'
                        value={username}
                        onChange={onChange}
                    />
                </label>
                <label>Email:
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={onChange}
                    />
                </label>
                <label>Password:
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Service:
                    <input
                        type='checkbox'
                        name='tos'
                        value={tos}
                        onChange={onChange}
                    />
                </label>
                <input type='submit' value='Create a friend!' />
            </form>
        </div>
    )
}
export default form;
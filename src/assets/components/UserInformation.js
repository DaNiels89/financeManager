import React from 'react';
import { useForm } from 'react-hook-form';

import ErrorMessage from '../js/ErrorMessage';

import '../css/UserInformation.css';

export default function UserInformation() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="user-information">
      <h2>User Information</h2>
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <label>First name</label>
        <input
          name="firstName"
          ref={register({ required: true, minLength: 2, maxLength: 20 })}
        />
        <ErrorMessage error={errors.firstName} />

        <label>Last name</label>
        <input
          name="lastName"
          ref={register({ required: true, minLength: 2, maxLength: 20 })}
        />
        <ErrorMessage error={errors.lastName} />

        <label>Gender</label>
        <select name="gender" ref={register({ required: true })}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <ErrorMessage error={errors.gender} />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

// @ts-nocheck
import React, { useContext } from 'react';
import styles from './App.module.css';
import { AppContext } from './App';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const UserForm = () => {
  const { user } = useContext(AppContext);
  // todo : use regex for validation
  const schema = yup.object().shape({
    firstName: yup.string().required('please give your first name!'),
    lastName: yup.string().required('please give your last name!'),
    email: yup
      .string()
      .email('please give a valid email address!')
      .required('please give your email!'),
    mobile: yup
      .number()
      .positive()
      .integer()
      .required('please give your mobile number!'),
    password: yup
      .string()
      .min(5)
      .max(20)
      .required('please give a password!'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], "passwords don't match!")
      .required('please confirm your password!'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('data: ', data);
  };
  return (
    <>
      <div className={styles.User}>User : {user}</div>
      <div className={styles.UserForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.FormInputDiv}>
            <input
              className={styles.FormInput}
              type="text"
              placeholder="First Name..."
              {...register('firstName')}
            ></input>
            &nbsp;&nbsp;&nbsp;
            <div className={styles.FormError}>
              <p>{errors.firstName?.message}</p>
            </div>
          </div>

          <div className={styles.FormInputDiv}>
            <input
              className={styles.FormInput}
              type="text"
              placeholder="Last Name..."
              {...register('lastName')}
            />
            &nbsp;&nbsp;&nbsp;
            <div className={styles.FormError}>
              <p>{errors.lastName?.message}</p>
            </div>
          </div>

          <div className={styles.FormInputDiv}>
            <input
              className={styles.FormInput}
              type="text"
              placeholder="Email..."
              {...register('email')}
            />
            &nbsp;&nbsp;&nbsp;
            <div className={styles.FormError}>
              <p>{errors.email?.message}</p>
            </div>
          </div>

          <div className={styles.FormInputDiv}>
            <input
              className={styles.FormInput}
              type="number"
              placeholder="Mobile..."
              {...register('mobile')}
            />
            &nbsp;&nbsp;&nbsp;
            <div className={styles.FormError}>
              <p>{errors.mobile?.message}</p>
            </div>
          </div>

          <div className={styles.FormInputDiv}>
            <input
              className={styles.FormInput}
              type="password"
              placeholder="Password..."
              {...register('password')}
            />
            &nbsp;&nbsp;&nbsp;
            <div className={styles.FormError}>
              <p>{errors.password?.message}</p>
            </div>
          </div>

          <div className={styles.FormInputDiv}>
            <input
              className={styles.FormInput}
              type="password"
              placeholder="Confirm Password..."
              {...register('confirmPassword')}
            />
            &nbsp;&nbsp;&nbsp;
            <div className={styles.FormError}>
              <p>{errors.confirmPassword?.message}</p>
            </div>
          </div>
          <input className={styles.FormButton} type="submit" />
        </form>
      </div>
    </>
  );
};

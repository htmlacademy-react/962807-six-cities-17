import React, { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { loginAction } from '../../store/api-actions';

export default function LoginForm(): JSX.Element {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const validateCredentials = () => {
  //   const isEmailValid = /[\w.-_]{3,}@([\w.-_]{3,}\.)+?\w{2,}/.test(
  //     formData.email
  //   );
  //   const isPasswordValid = /([a-z]+?\d+?)+?|(\d+?[a-z]+?)+?/i.test(
  //     formData.password
  //   );
  //   return isEmailValid && isPasswordValid;
  // };

  const handleFieldChange: (evt: ChangeEvent<HTMLInputElement>) => void = (
    evt
  ) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // if (validateCredentials()) {
    dispatch(
      loginAction({
        login: formData.email,
        password: formData.password,
      })
    ).then((response) => {
      if (response.meta.requestStatus === 'fulfilled') {
        navigate(AppRoute.Main);
      }
    });
  };
  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={handleSubmitForm}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleFieldChange}
            value={formData.email}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleFieldChange}
            value={formData.password}
            pattern="^([a-zA-Z]+?\d+?)+?|(\d+?[a-zA-Z]+?)+?$"
            title="Пароль должен содержать как минимум 1 букву и 1 цифру"
          />
        </div>
        <button
          className="login__submit form__submit button"
          type="submit"
          // disabled ={!validateCredentials()}
        >
          Sign in
        </button>
      </form>
    </section>
  );
}

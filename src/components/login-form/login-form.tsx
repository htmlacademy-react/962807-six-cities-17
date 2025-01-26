import React, { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchFavoriteOffers, loginAction } from '../../store/api-actions';
import { toast } from 'react-toastify';

export default function LoginForm(): JSX.Element {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toastIds = React.useRef(['loginToast', 'passwordTost']);

  const handleFieldChange: (evt: ChangeEvent<HTMLInputElement>) => void = (
    evt
  ) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const checkLoginForm = () => {
    const isLoginValid = /^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,4}$/.test(
      formData.email
    );
    if (!isLoginValid) {
      toast.info('Please set a valid email', {
        toastId: toastIds.current[0],
      });
    }
    const isPasswordValid = /^([a-zA-Z]+?\d+?)+?|(\d+?[a-zA-Z]+?)+?$/.test(
      formData.password
    );

    if (!isPasswordValid) {
      toast.info('Password must contain at least 1 letter and 1 digit', {
        toastId: toastIds.current[1],
      });
    }
    return isLoginValid && isPasswordValid;
  };

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!checkLoginForm()) {
      return;
    }
    toast.dismiss();
    dispatch(
      loginAction({
        login: formData.email,
        password: formData.password,
      })
    ).then((response) => {
      if (response.meta.requestStatus === 'fulfilled') {
        dispatch(fetchFavoriteOffers());
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
            name="email"
            placeholder="Email"
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
            onChange={handleFieldChange}
            value={formData.password}
            title="Пароль должен содержать как минимум 1 букву и 1 цифру"
          />
        </div>
        <button className="login__submit form__submit button" type="submit">
          Sign in
        </button>
      </form>
    </section>
  );
}

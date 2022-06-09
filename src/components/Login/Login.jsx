import React from 'react';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useStyles } from './style';
import { useForm } from 'react-hook-form';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const Login = () => {
  const classes = useStyles();
  const { signIn } = UserAuth();
  const [hide, setHide] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [value, setValue] = useState({
    password: '',
    showPassword: false,
  });

  const handleShow = async (e) => {
    setHide(prev => !prev);
    e.preventDefault()
    setValue({ ...value, showPassword: !value.showPassword });
  };
  const handlePasswordChange = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };

  return (
    <>
      <div className={classes.formDiv}>
        <h4>вход в личный кабинет</h4>
        <form
          onSubmit={handleSubmit(async (data) => {
            const { email, password } = data;
            try {
              await signIn(email, password);
            } catch (e) {
              console.log(e.message);
            }
          })}
          className={classes.form}>
          <label>Авторизуйтесь под своим именем *</label>
          <input
            className={classes.formInput}
            type="text"
            placeholder="Ввести пользовательское имя"
            {...register('email', { required: 'Это поле обязателен для заполнение' })}
          />
          <label className={classes.label}>{errors?.email?.message}</label> <br />
          <label>Ввести пароль *</label>
          <div className={classes.confirmInputWrapper}>
            <input
              className={classes.formInput}
              type={value.showPassword ? 'text' : 'password'}
              placeholder="Ввести пароль"
              {...register('password', { required: 'Пароль обязательный для заполнения' , minLength: {value: 6,
                message: 'Пароль должен содержать не менее 6 символов'} })}
              value={value.password}
              onChange={handlePasswordChange('password')}
            />
            <button className={classes.btnShow} onClick={handleShow}>
              {hide ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
            </button>
          </div>
          <label className={classes.label}>
            {errors?.password?.message}
          </label>
          <div className={classes.formForgot}>
            <p>Забыли пароль?</p>
          </div>
          <input type='submit' className={classes.formBtn} value='Войти'/>
        </form>
        <div className={classes.formIcons}>
          <p>Вход через:</p>
        </div>
        <div className={classes.textToreg}>
          <p>Еще не с нами?</p>
          <p>Зарегистрироваться</p>
        </div>
      </div>
    </>
  );
};

export default Login;

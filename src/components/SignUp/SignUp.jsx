import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useForm } from 'react-hook-form';
import { useStyles } from './style';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import  useNavigate from 'react-router-dom';
const SignUp = () => {
  const classes =  useStyles()
  const { createUser } = UserAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [hide, setHide] = useState(false);
  const [value, setValue] = useState({
    password: '',
    showPassword: false,
    showPassword2: false,
  });

  const handleShow = async (e) => {
    setHide((prev) => !prev);
    e.preventDefault();
    setValue({ ...value, showPassword: !value.showPassword });
  };
  const handlePasswordChange = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };

  return (
    <>
      <div className={classes.formDiv}>
        <div className={classes.formDes}>
          <h4>регистрация</h4>
          <p>
            Регистрация на нашем сайте позволит Вам быть его полноценным участником. Вы сможете
            добавлять новости на сайт, оставлять свои комментарии, просматривать скрытый текст и
            многое другое
          </p>
        </div>
        <form
          onSubmit={handleSubmit(async (data) => {
            const { email, password, password2 } = data;
            try {
              await createUser(email, password, password2);
            } catch (e) {
              console.log(e.message);
            }
          })}
          className={classes.form}>
          <input
            className={classes.formInput}
            type="email"
            placeholder="Enter your email"
            {...register('email', { required: 'Это поле обязателен для заполнение' })}
          />
          <label style={{ color: 'red', fontSize: '14px' }}>{errors?.email?.message}</label> <br />
          <div className={classes.confirmInputWrapper}>
            <input
              className={classes.formInput}
              type={value.showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              {...register('password', { required: 'Пароль обязательный для заполнения', minLength: { value: 6, message: 'Пароль должен содержать не менее 6 символов' } })}
              value={value.password}
              onChange={handlePasswordChange('password')}
            />
            <button className={classes.btnShow} onClick={handleShow}>
              {hide ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
            </button>
          </div>
          <label className={classes.formPsw} style={{ color: 'red', fontSize: '14px' }}>
            {errors?.password?.message}
          </label>
          <input
            type={value.showPassword ? 'text' : 'password'}
            className={classes.formInput}
            {...register('password2', {
              required: 'Потвердите пароль',
              minLength: { value: 6, message: 'Пароль должен содержать не менее 6 символов' },
              validate: (value) => {
                const { password } = getValues();
                return password === value || 'Пароли не совпадают';
              },
            })}
            placeholder="Потвердите пароль"
          />
          <label style={{ color: 'red', fontSize: '14px' }}>{errors?.password2?.message}</label>
          <button className={classes.formBtn}>ВОЙТИ</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;


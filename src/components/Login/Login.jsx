import { useCallback, useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { ERROR_MESSAGES, ROUTES, USE_REDUCER_TYPES } from '../../constants';
import { initialState, reducer, init } from '../../helpers/reactReducer';

import { createBody } from '../../helpers/createBody';
import { fetchLogin } from '../../store/user/actions.user';
import { getAuthData } from '../../store/user/user';

import { PageDecorator } from '../../common/Decorator/PageDecorator';
import { Error } from '../../common/Error/Error';
import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';

import './login.scss';

export const Login = () => {
	const dispatchRedux = useDispatch();
	const { isAuth, token, error } = useSelector(getAuthData);
	const navigate = useNavigate();

	const [{ email, password, errorMessage }, dispatch] = useReducer(
		reducer,
		initialState,
		init
	);

	const handleChangeEmail = useCallback((e) => {
		dispatch({ type: USE_REDUCER_TYPES.SET_EMAIL, payload: e.target.value });
	}, []);

	const handleChangePassword = useCallback((e) => {
		dispatch({ type: USE_REDUCER_TYPES.SET_PASSWORD, payload: e.target.value });
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (isAuth) {
			dispatch({
				type: USE_REDUCER_TYPES.SET_ERROR,
				payload: ERROR_MESSAGES.logError,
			});
			return;
		}
		dispatchRedux(fetchLogin(createBody({ email, password })));
	};

	// useEffect(() => {
	// 	if (error) {
	// 		dispatch({
	// 			type: USE_REDUCER_TYPES.SET_ERROR,
	// 			payload: error,
	// 		});
	// 	}
	// }, [error]);

	useEffect(() => {
		if (isAuth) {
			dispatch({ type: USE_REDUCER_TYPES.RESET_FORM });
			navigate(ROUTES.COURSES, { replace: true });
		}
	}, [isAuth, navigate, token]);

	return (
		<PageDecorator>
			<div className='login'>
				<form id='formLogin' className='form' onSubmit={handleSubmit}>
					<div>
						<h1>Login</h1>
					</div>
					<Input
						placeholder='Enter email'
						type='email'
						labelName='Email'
						value={email}
						onChange={handleChangeEmail}
						required
					/>
					<Input
						placeholder='Enter password'
						type='password'
						labelName='Password'
						value={password}
						onChange={handleChangePassword}
						required
					/>
					<Button buttonName='Login' form='formLogin' />
					<div className='redirect-to-login'>
						If you have an account you can{' '}
						<Link className='registrationLink' to={ROUTES.REGISTRATION}>
							Registration
						</Link>
					</div>
					{error && (
						<div className='error'>
							<Error erorDescription={errorMessage} />
						</div>
					)}
				</form>
			</div>
		</PageDecorator>
	);
};

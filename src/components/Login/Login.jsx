import { useCallback, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { initialState, reducer, init } from '../../helpers/reactReducer';
import {
	ENDPOINTS,
	ERROR_MESSAGES,
	REQUEST_METHODS,
	ROUTES,
	USE_REDUCER_TYPES,
} from '../../constants';
import { createBody } from '../../helpers/createBody';
import { Fetch } from '../../helpers/fetch';
import { Auth } from '../../helpers/auth';

import { PageDecorator } from '../../common/Decorator/PageDecorator';
import { Error } from '../../common/Error/Error';
import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';

import './login.scss';

export const Login = () => {
	const [state, dispatch] = useReducer(reducer, initialState, init);
	const { email, password, isError, errorMessage } = state;
	const navigate = useNavigate();

	const handleChangeEmail = useCallback((e) => {
		dispatch({ type: USE_REDUCER_TYPES.SET_EMAIL, payload: e.target.value });
	}, []);

	const handleChangePassword = useCallback((e) => {
		dispatch({ type: USE_REDUCER_TYPES.SET_PASSWORD, payload: e.target.value });
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const isAuth = new Auth().checkAuthorization();
		if (isAuth) {
			dispatch({
				type: USE_REDUCER_TYPES.SET_ERROR,
				payload: ERROR_MESSAGES.logError,
			});
			return;
		}
		const body = createBody({ email, password });
		const response = await Fetch(ENDPOINTS.LOGIN, REQUEST_METHODS.POST, body);
		const result = await response.json();
		if (response.ok) {
			dispatch({ type: USE_REDUCER_TYPES.RESET_FORM });
			Auth.setAuthorization(result);
			navigate(ROUTES.COURSES, { replace: true });
		} else {
			dispatch({
				type: USE_REDUCER_TYPES.SET_ERROR,
				payload: result.result,
			});
		}
	};

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
					{isError && (
						<div className='error'>
							<Error erorDescription={errorMessage} />
						</div>
					)}
				</form>
			</div>
		</PageDecorator>
	);
};

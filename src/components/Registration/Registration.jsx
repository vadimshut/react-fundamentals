import { useCallback, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { initialState, reducer, init } from '../../helpers/reactReducer';
import { ROUTES, USE_REDUCER_TYPES } from '../../constants';
import { createBody } from '../../helpers/createBody';
import { fetchRegistration, getRegistrationData } from '../../store/user/user';

import { PageDecorator } from '../../common/Decorator/PageDecorator';
import { Error } from '../../common/Error/Error';
import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';

import './registration.scss';

export const Registration = () => {
	const dispatchRedux = useDispatch();
	const { registerSuccess, registerError } = useSelector(getRegistrationData);

	const [state, dispatch] = useReducer(reducer, initialState, init);
	const navigate = useNavigate();
	const { name, email, password, isError, errorMessage } = state;

	const handleChangeName = useCallback((e) => {
		dispatch({ type: USE_REDUCER_TYPES.SET_NAME, payload: e.target.value });
	}, []);

	const handleChangeEmail = useCallback((e) => {
		dispatch({ type: USE_REDUCER_TYPES.SET_EMAIL, payload: e.target.value });
	}, []);

	const handleChangePassword = useCallback((e) => {
		dispatch({ type: USE_REDUCER_TYPES.SET_PASSWORD, payload: e.target.value });
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const body = createBody({ name, email, password });
		dispatchRedux(fetchRegistration(body));
	};

	useEffect(() => {
		if (registerError || registerError.length > 0) {
			console.log([...registerError]);
			dispatch({
				type: USE_REDUCER_TYPES.SET_ERROR,
				payload: [...registerError],
			});
		}
	}, [navigate, registerError]);

	useEffect(() => {
		if (registerSuccess) {
			dispatch({ type: USE_REDUCER_TYPES.RESET_FORM });
			navigate(ROUTES.LOGIN, { replace: true });
		}
	}, [navigate, registerSuccess]);

	return (
		<PageDecorator>
			<div className='registration'>
				<form id='formRegistration' className='form' onSubmit={handleSubmit}>
					<div>
						<h1>Registration</h1>
					</div>
					<Input
						placeholder='Enter name'
						labelName='Name'
						value={name}
						onChange={handleChangeName}
						required
					/>

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

					<Button buttonName='Registration' form='formRegistration' />
					<div className='redirect-to-login'>
						If you have an account you can{' '}
						<Link className='loginLink' to={ROUTES.LOGIN}>
							Login
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

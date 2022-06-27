import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { PageDecorator } from '../../common/Decorator/PageDecorator';

import './login.scss';

export const Login = () => {
	return (
		<PageDecorator>
			<div className='login'>
				<form className='form'>
					<div>
						<h1>Login</h1>
					</div>
					<Input
						placeholder='Enter email'
						type='email'
						labelName='Email'
					></Input>
					<Input
						placeholder='Enter password'
						type='password'
						labelName='Password'
					></Input>
					<Button buttonName='Login' />
					<div className='redirect-to-login'>
						If you have an account you can{' '}
						<Link className='registrationLink' to='/registration'>
							Registration
						</Link>
					</div>
				</form>
			</div>
		</PageDecorator>
	);
};

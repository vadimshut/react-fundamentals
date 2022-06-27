import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { PageDecorator } from '../../common/Decorator/PageDecorator';

import './registration.scss';

export const Registration = () => {
	return (
		<PageDecorator>
			<div className='registration'>
				<form className='form'>
					<div>
						<h1>Registration</h1>
					</div>
					<Input placeholder='Enter name' labelName='Name'></Input>
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
					<Button buttonName='Registration' />
					<div className='redirect-to-login'>
						If you have an account you can{' '}
						<Link className='loginLink' to='/login'>
							Login
						</Link>
					</div>
				</form>
			</div>
		</PageDecorator>
	);
};

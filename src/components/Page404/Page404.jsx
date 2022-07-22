import { memo } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

import './page404.scss';

const Page404UI = () => {
	return (
		<div className='notFound'>
			<div className='notFound__wrapper'>
				<div className='notFound__404'>
					<h1>
						4<span>0</span>4
					</h1>
				</div>
				<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
				<Link className='link' to={ROUTES.COURSES}>
					Courses page
				</Link>
			</div>
		</div>
	);
};

export const Page404 = memo(Page404UI);

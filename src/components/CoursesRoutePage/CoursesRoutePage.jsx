import { PageDecorator } from '../../common/Decorator/PageDecorator';
import { Outlet } from 'react-router-dom';

export const CoursesRoutePage = () => {
	return (
		<PageDecorator>
			<Outlet />
		</PageDecorator>
	);
};

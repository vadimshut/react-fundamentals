import PropTypes from 'prop-types';
import { AuthorItem } from '../AuthorItem/AuthorItem';

import './authors.scss';

export const Authors = ({
	authorsList,
	authorsTitle,
	buttonAction,
	onClick,
}) => {
	return (
		<div className='authorsComponent'>
			<div className='title'>{authorsTitle}</div>
			{authorsList.map(({ name, id }) => (
				<AuthorItem
					key={id}
					author={{ name, id }}
					action={buttonAction}
					onClick={onClick}
				/>
			))}
		</div>
	);
};

Authors.propTypes = {
	authorsList: PropTypes.array,
	authorsTitle: PropTypes.string,
	buttonAction: PropTypes.oneOf(['add', 'delete']),
	onClick: PropTypes.func,
};

Authors.defaultProps = {
	authorsList: [],
	authorsTitle: null,
	buttonAction: 'add',
	onClick: null,
};

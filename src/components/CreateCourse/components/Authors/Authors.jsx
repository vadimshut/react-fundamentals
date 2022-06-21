import PropTypes from 'prop-types';
import { AuthorItem } from '../AuthorItem/AuthorItem';

import './authors.scss';

export const Authors = ({ authorsList, authorsTitle, buttonAction }) => {
	return (
		<div className='authorsComponent'>
			<div className='title'>{authorsTitle}</div>
			{authorsList.map(({ name }) => (
				<AuthorItem authorName={name} action={buttonAction} />
			))}
		</div>
	);
};

Authors.propTypes = {
	authorsList: PropTypes.array,
	authorsTitle: PropTypes.string,
	buttonAction: PropTypes.oneOf(['add', 'delete']),
};

Authors.defaultProps = {
	authorsList: [],
	authorsTitle: null,
	buttonAction: 'add',
};

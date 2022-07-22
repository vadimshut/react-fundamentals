import PropTypes from 'prop-types';
import { AuthorItem } from '../AuthorItem/AuthorItem';
import { Error } from '../../../../common/Error/Error';

import './authors.scss';

export const Authors = ({ authorsList, authorsTitle, buttonAction, onClick, isError, errorMessage }) => {
	return (
		<div className='authorsComponent'>
			<div className='title'>{authorsTitle}</div>
			{isError && <Error erorDescription={errorMessage} />}
			{authorsList.map(({ name, id }) => (
				<AuthorItem key={id} author={{ name, id }} action={buttonAction} onClick={onClick} />
			))}
		</div>
	);
};

Authors.propTypes = {
	authorsList: PropTypes.array,
	authorsTitle: PropTypes.string,
	buttonAction: PropTypes.oneOf(['add', 'delete']),
	onClick: PropTypes.func,
	isError: PropTypes.bool,
	errorMessage: PropTypes.string,
};

Authors.defaultProps = {
	authorsList: [],
	authorsTitle: null,
	buttonAction: 'add',
	onClick: null,
	isError: false,
	errorMessage: '',
};

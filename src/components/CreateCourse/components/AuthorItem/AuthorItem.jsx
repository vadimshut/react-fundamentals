import PropTypes from 'prop-types';
import { BUTTON_NAMES } from '../../../../constants';
import { Button } from '../../../../common/Button/Button';

import './author-item.scss';

const BUTTON_NAME = {
	true: BUTTON_NAMES.addAuthor,
	false: BUTTON_NAMES.deleteAuthor,
};
export const AuthorItem = ({ author, action, onClick }) => {
	const handleClick = () => {
		onClick({ ...author, action });
	};
	return (
		<div className='authorItemComponent'>
			<div>{author.name}</div>
			<Button
				buttonName={BUTTON_NAME[action === 'add']}
				onClick={handleClick}
			/>
		</div>
	);
};

AuthorItem.propTypes = {
	author: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
	}),
	id: PropTypes.string,
	action: PropTypes.oneOf(['add', 'delete']),
	onClick: PropTypes.func.isRequired,
};

AuthorItem.defaultProps = {
	author: null,
	id: null,
	action: 'add',
};

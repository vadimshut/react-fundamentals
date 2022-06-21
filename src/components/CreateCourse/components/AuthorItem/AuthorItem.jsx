import PropTypes from 'prop-types';
import { BUTTON_NAMES } from '../../../../constants';
import { Button } from '../../../../common/Button/Button';

import './author-item.scss';

const BUTTON_NAME = {
	true: BUTTON_NAMES.addAuthor,
	false: BUTTON_NAMES.deleteAuthor,
};
export const AuthorItem = ({ authorName, action }) => {
	return (
		<div>
			<div>{authorName}</div>
			<Button buttonName={BUTTON_NAME[action === 'add']} />
		</div>
	);
};

AuthorItem.propTypes = {
	authorName: PropTypes.string,
	action: PropTypes.oneOf(['add', 'delete']),
};

AuthorItem.defaultProps = {
	authorName: null,
	action: 'add',
};

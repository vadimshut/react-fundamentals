import { useState } from 'react';
import PropTypes from 'prop-types';

import { BUTTON_NAMES, PLACEHOLDERS } from '../../../../constants';
import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';

import './search-bar.scss';

export const SearchBar = ({ onClick }) => {
	const [searchCourse, setSearchCourse] = useState('');

	const handleChange = (event) => setSearchCourse(event.target.value);
	const handleClick = () => onClick(searchCourse);

	return (
		<div className='search-bar'>
			<Input placeholder={PLACEHOLDERS.search} onChange={handleChange} />
			<Button buttonName={BUTTON_NAMES.search} onClick={handleClick} />
		</div>
	);
};

SearchBar.propTypes = {
	onClick: PropTypes.func,
};

SearchBar.defaultProps = {
	onClick: null,
};

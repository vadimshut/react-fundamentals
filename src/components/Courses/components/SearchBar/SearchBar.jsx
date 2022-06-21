import { BUTTON_NAMES } from '../../../../constants';
import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';

import './search-bar.scss';

export const SearchBar = () => {
	return (
		<div className='search-bar'>
			<Input placeholder='Enter course name or id...' />
			<Button buttonName={BUTTON_NAMES.search} />
		</div>
	);
};

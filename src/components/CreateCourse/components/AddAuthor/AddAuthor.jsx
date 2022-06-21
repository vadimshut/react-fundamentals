import { BUTTON_NAMES, PLACEHOLDERS } from '../../../../constants';

import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';

import './add-author.scss';

export const AddAuthor = () => {
	return (
		<div>
			<div>Add author</div>
			<Input
				placeholder={PLACEHOLDERS.createAuthorName}
				labelName='Author name: '
			/>
			<Button buttonName={BUTTON_NAMES.createAuthor} />
		</div>
	);
};

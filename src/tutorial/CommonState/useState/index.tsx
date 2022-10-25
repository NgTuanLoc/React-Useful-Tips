import { useState } from 'react';

import { MainLayout } from '../../../layouts/Main';
import { StyledContainer, StyledParagraph } from './style';
import { Button } from '../../../components';

const UseStateComponent = () => {
	const [value, setValue] = useState(0);

	const decreaseValue = () => {
		setValue(value - 1);
	};

	const increaseValue = () => {
		setValue(value + 1);
	};

	return (
		<MainLayout title='useState hook'>
			<StyledContainer>
				<Button onClickHandler={decreaseValue}>-</Button>
				<StyledParagraph>{value}</StyledParagraph>
				<Button onClickHandler={increaseValue}>+</Button>
			</StyledContainer>
		</MainLayout>
	);
};

export default UseStateComponent;

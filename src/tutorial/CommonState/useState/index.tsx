import { useState } from 'react';

import { MainLayout } from '../../../layouts/Main';
import {
	StyledContainer,
	StyledButtonContainer,
	StyledParagraph,
} from './style';
import { Button } from '../../../components';

const UseStateComponent = () => {
	const [value, setValue] = useState(0);

	const decreaseValue = () => {
		setValue(value - 1);
	};

	const increaseValue = () => {
		setValue(value + 1);
	};

	const asyncIncreaseValue = () => {
		setTimeout(() => {
			setValue((value) => value + 1);
		}, 2000);
	};

	return (
		<MainLayout title='useState hook'>
			<StyledContainer>
				<StyledParagraph>{value}</StyledParagraph>
				<StyledButtonContainer>
					<Button onClickHandler={decreaseValue}>Decrease</Button>
					<Button onClickHandler={increaseValue}>Increase</Button>
					<Button onClickHandler={asyncIncreaseValue}>Async Increase</Button>
				</StyledButtonContainer>
			</StyledContainer>
		</MainLayout>
	);
};

export default UseStateComponent;

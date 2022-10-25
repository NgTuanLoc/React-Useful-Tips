import { ReactNode } from 'react';
import { StyledContainer } from './style';

interface IButton {
	children: ReactNode;
	onClickHandler?: any;
}

export const Button = ({ children, onClickHandler }: IButton) => {
	return <StyledContainer onClick={onClickHandler}>{children}</StyledContainer>;
};

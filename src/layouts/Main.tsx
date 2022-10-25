import { ReactNode } from 'react';
import styled from 'styled-components';

interface IMainLayout {
	children: ReactNode;
	title?: string;
}

export const MainLayout = ({ children, title }: IMainLayout) => {
	return (
		<StyledContainer>
			<StyledTitle>{title}</StyledTitle>
			<StyledContent>{children}</StyledContent>
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	width: 100%;
`;

const StyledContent = styled.div`
	align-self: center;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

// Typography
const StyledTitle = styled.h1`
	font-size: 2rem;
	letter-spacing: var(--letterSpacing);
`;

import styled from 'styled-components';

import { UseStateComponent } from './tutorial/CommonState';

function App() {
	return (
		<StyledContainer>
			<StyledCard>
				<UseStateComponent />
			</StyledCard>
		</StyledContainer>
	);
}

const StyledContainer = styled.main`
	background: url('https://images.unsplash.com/photo-1666126452579-f032d653c7f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80');
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;
	width: 100vw;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledCard = styled.section`
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: var(--borderRadius);
	width: 90vw;
	max-width: var(--max-width);
	max-height: 50rem;
	height: 90%;
	padding: 1rem;

	display: flex;
	justify-content: center;
	align-content: center;
`;

export default App;

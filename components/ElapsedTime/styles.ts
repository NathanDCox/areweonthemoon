import styled from 'styled-components';

export const Timer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: auto;
	flex-wrap: wrap;
	h2 {
		width: 100%;
		text-align: center;
	}
`;

export const Number = styled.div`
	margin: 0 0.5rem;	
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 6rem;
	height: 6rem;
	border: 2px solid #fff;
	border-radius: 0.5rem;
	p {
		margin: 0;
	}
	.digits {
		font-size: 2rem;
		font-weight: bold;
	}
	.label {
		font-size: 1rem;
		text-align: center;
	}
`;
import styled from 'styled-components';

const ErrorElement = styled.span`
	width: 100%;
	font-size: 0.75rem;
	color: red;
`;

export const Error = ({ erorDescription }) => {
	return <ErrorElement>{erorDescription}</ErrorElement>;
};

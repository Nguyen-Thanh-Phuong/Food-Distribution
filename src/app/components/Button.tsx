import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from '../styles/styled';

const Button = (props: TouchableOpacityProps & InsideTouch) => {
	const {children, loading} = props;
	return (
		<Container disabled={loading} {...props}>
			{!loading ? (
				typeof children === 'string' ? (
					<TextButton>{children}</TextButton>
				) : (
					children
				)
			) : (
				<Loading size={'small'} color={'#fff'} />
			)}
		</Container>
	);
};
const Loading = styled.ActivityIndicator`
	height: ${(props) => props.theme.scapingElement};
`;
const Container = styled.TouchableOpacity<{disabled: boolean | null | undefined}>`
	padding-vertical: ${(props) => props.theme.scapingElement};
	background-color: ${(props) => props.theme.colors.main};
	border-radius: ${(props) => props.theme.borderRadius};
	align-items: center;
	opacity: ${({disabled}) => (disabled ? 0.7 : 1)};
`;
const TextButton = styled.Text`
	font-style: normal;
	font-weight: ${(props) => props.theme.font.normal};
	font-size: ${(props) => props.theme.font.fontMedium};
	text-align: center;
	color: ${(props) => props.theme.colors.white};
`;

export default Button;

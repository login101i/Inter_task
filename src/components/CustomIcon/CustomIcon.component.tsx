import { FC } from 'react';
import { IconContainer, IconText } from './CustomIcon.component.styles';

type Props = {
	size?: number;
	Icon?: any;
	style?: object;
	color?: string;
	iconText?: string;
	onClick?: () => void;
};

export const CustomIcon: FC<Props> = ({ size = 35, Icon, color = 'black', onClick, style, iconText }) => {
	return (
		<IconContainer onClick={onClick} color={color}>
			<Icon
				style={{
					fontSize: `${size}px`,
					color: `${color}`,
					...style,
				}}
			/>
			<IconText color={color}>{iconText}</IconText>
		</IconContainer>
	);
};

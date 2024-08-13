"use client";
import { classes } from '@/app/helpers';
import styles from '@/app/styles/modules/button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: (e?: React.MouseEvent) => void,
	variant?: 'default' | 'dark'
}

const Button: React.FC<ButtonProps> = ({ children, className, disabled, onClick, variant = 'default', ...props }) => {
	return (
		<button
			className={classes(
				className ? className : '',
				styles.button,
				variant === 'dark' ? styles['button-dark'] : '',
				disabled ? styles.disabled : '',
			)}
			{...(onClick && { onClick })}
			{...props}
		>
			{ children }
		</button>
	)
}

export default Button
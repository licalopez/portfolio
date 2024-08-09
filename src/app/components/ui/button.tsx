"use client";
import { classes } from '@/app/helpers';
import styles from '@/app/styles/modules/button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string,
	onClick?: (e?: React.MouseEvent) => void,
	variant?: 'default' | 'dark'
}

const Button: React.FC<ButtonProps> = ({ children, className, disabled, label, onClick, variant = 'default' }) => {
	return (
		<button
			className={classes(
				className ? className : '',
				styles.button,
				variant === 'dark' ? styles['button-dark'] : '',
				disabled ? styles.disabled : '',
			)}
			{...(onClick && { onClick })}
			{...(label && { 'aria-label': label })}
		>
			{ children }
		</button>
	)
}

export default Button
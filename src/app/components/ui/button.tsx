"use client";
import { classes } from '@/app/helpers';
import styles from '@/app/styles/modules/button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string,
	variant?: 'default' | 'dark'
}

const Button: React.FC<ButtonProps> = ({ children, label, variant = 'default' }) => {
	return (
		<button
			className={classes(styles.button, variant === 'dark' ? styles['button-dark'] : '')}
			{...(label && { 'aria-label': label })}
		>
			{ children }
		</button>
	)
}

export default Button
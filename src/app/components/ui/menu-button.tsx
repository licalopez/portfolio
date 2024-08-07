"use client";
import { motion } from 'framer-motion';
import styles from '@/app/styles/modules/menu.module.scss';
import modalStyles from '@/app/styles/modules/menu-modal.module.scss';
import { classes } from '@/app/helpers';

interface MenuButtonProps {
	isMenuModalOpen: boolean,
	toggleMenuModal: () => void
}

const MenuButton: React.FC<MenuButtonProps> = ({ isMenuModalOpen, toggleMenuModal }) => {
	return (
		<motion.button
			id="menu-icon-button"
			aria-controls="menu-modal"
			aria-label={isMenuModalOpen ? 'Close Menu' : 'Open Menu'}
			className={classes(
				styles['menu-icon-button'],
				isMenuModalOpen ? modalStyles['menu-icon-button'] : ''
			)}
			onClick={toggleMenuModal}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.2, duration: 0.2 }}
		>
			<div
				id="hamburger-icon"
				className={classes(
					styles['hamburger-icon'],
					isMenuModalOpen ? modalStyles['hamburger-icon']: ''
				)}
			>
				<div className={classes(
					styles['hamburger-line'],
					isMenuModalOpen ? modalStyles['hamburger-line'] : '',
					isMenuModalOpen ? modalStyles['first-line'] : ''
				)}></div>

				<div className={classes(
					styles['hamburger-line'],
					isMenuModalOpen ? modalStyles['hamburger-line'] : '',
					isMenuModalOpen ? modalStyles['second-line'] : ''
				)}></div>

				<div className={classes(
					styles['hamburger-line'],
					isMenuModalOpen ? modalStyles['hamburger-line'] : '',
					isMenuModalOpen ? modalStyles['third-line'] : ''
				)}></div>
			</div>
			<span id="menu-text" className={styles['menu-text']}>
				{ isMenuModalOpen ? 'Close' : 'Menu' }
			</span>
		</motion.button>
	);
}

export default MenuButton;
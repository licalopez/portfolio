"use client";
import styles from '@/app/styles/modules/menu.module.scss';
import modalStyles from '@/app/styles/modules/menu-modal.module.scss';
import { classes } from '@/app/helpers';
import { useModalContext } from '@/app/hooks/useModalContext';

const MenuButton = () => {
	const [isMenuModalOpen, setIsMenuModalOpen] = useModalContext();

	return (
		<button
			id="menu-icon-button"
			aria-controls="menu-modal"
			aria-label={isMenuModalOpen ? 'Close Menu' : 'Open Menu'}
			className={classes(
				styles['menu-icon-button'],
				isMenuModalOpen ? modalStyles['menu-icon-button'] : ''
			)}
			onClick={() => setIsMenuModalOpen(prev => !prev)}
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
		</button>
	);
}

export default MenuButton;
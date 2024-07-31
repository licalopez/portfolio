"use client";
import { classes } from '@/app/helpers';
import styles from '@/app/styles/modules/menu.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import SocialIconsList from '../social-icons-list';

interface MenuProps {
	
}

const Menu: React.FC<MenuProps> = () => {
	const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

	return (
		<div className={styles.menu}>
			{/*------------------ B O R D E R S ------------------*/}
			<div id="menu-borders" className={styles.borders}>
				<div 
					className={classes(styles.border, styles['border-left'])} 
					onClick={() => setIsMenuModalOpen(prev => !prev)}
				></div>
				<div className={classes(styles.border, styles['border-top'])}></div>
				<div className={classes(styles.border, styles['border-right'])}></div>
				<div className={classes(styles.border, styles['border-bottom'])}></div>
			</div>

			{/*------------------ B R A N D ------------------*/}
			<div id="brand" className={styles.brand}>
				<Link href="/" className={styles['brand-link']}>
					<span>Angelica Lopez</span>
				</Link>
			</div>

			{/*------------------ M E N U   I C O N ------------------*/}
			<button
				id="menu-icon-button"
				className={styles['menu-icon-button']}
				onClick={() => setIsMenuModalOpen(prev => !prev)}
				aria-controls="menu-modal"
				aria-label={`${isMenuModalOpen ? 'Close Menu' : 'Open Menu'}`}
			>
				<div id="hamburger-icon" className={styles['hamburger-icon']}>
					<div className={styles['hamburger-line']}></div>
					<div className={styles['hamburger-line']}></div>
					<div className={styles['hamburger-line']}></div>
				</div>
				<span id="menu-text" className={styles['menu-text']}>
					{ isMenuModalOpen ? 'Close' : 'Menu' }
				</span>
			</button>

			{/*------------------ S O C I A L S ------------------*/}
			<SocialIconsList />
		</div>
	)
}

export default Menu

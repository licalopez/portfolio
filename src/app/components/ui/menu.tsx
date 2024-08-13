"use client";
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { classes } from '@/app/helpers';
import styles from '@/app/styles/modules/menu.module.scss';
import modalStyles from '@/app/styles/modules/menu-modal.module.scss';

import Link from 'next/link';
import SocialIconsList from '../social-icons-list';
import MenuButton from './menu-button';
import MenuModal from '../modal/menu-modal';
import { useModalContext } from '@/app/hooks/useModalContext';


const Menu = () => {
	const [isMenuModalOpen, setIsMenuModalOpen] = useModalContext();

	// Prevent vertical scrolling when modal is open; revert when closed
	useEffect(() => {
		isMenuModalOpen
			? document.querySelector('html')!.style.overflowY = 'hidden'
			: document.querySelector('html')!.style.overflowY = 'scroll';
	}, [isMenuModalOpen]);

	const toggleMenuModal = () => {
		setIsMenuModalOpen(prev => !prev);
	}

	return (
		<div className={styles.menu}>
			{/*------------------ B O R D E R S ------------------*/}
			<div id="menu-borders" className={styles.borders}>
				<div
					className={classes(styles.border, styles['border-left'])}
					onClick={() => setIsMenuModalOpen(prev => !prev)}
				>

				</div>
				<div className={classes(styles.border, styles['border-top'])}></div>
				<div className={classes(styles.border, styles['border-right'])}></div>
				<div className={classes(styles.border, styles['border-bottom'])}></div>
			</div>

			{/*------------------ B R A N D ------------------*/}
			<div
				id="brand"
				aria-hidden={isMenuModalOpen}
				className={classes(
					styles.brand,
					isMenuModalOpen ? modalStyles.brand : ''
				)}
			>
				<Link href="/" className={styles['brand-link']} tabIndex={isMenuModalOpen ? -1 : 1}>
					<span>Angelica Lopez</span>
				</Link>
			</div>

			{/*------------------ M E N U   I C O N ------------------*/}
			<MenuButton />

			{/*------------------ S O C I A L S ------------------*/}
			<AnimatePresence>
				{isMenuModalOpen ? null : (
					<motion.div
						aria-hidden={isMenuModalOpen}
						className={styles['socials-container']}
						initial={{ opacity: 0, y: '1rem' }}
						whileInView={{ opacity: 1, y: 0, transition: {
							opacity: { delay: 0.2, duration: 0.2 },
							y: { delay: 0.15, duration: 0.2, type: 'spring', damping: 11 }
						} }}
						exit={{
							opacity: 0,
							y: '1rem',
							transition: {
								opacity: { delay: 0.05, duration: 0.2 },
								y: { delay: 0, duration: 0.2, type: 'spring', damping: 11 }
							}
						}}
					>
						<SocialIconsList key="menu-socials" context="menu" />
					</motion.div>
				)}
			</AnimatePresence>

			{/*------------------ M E N U   M O D A L ------------------*/}
			<AnimatePresence>
				{!isMenuModalOpen ? null : <MenuModal />}
			</AnimatePresence>
		</div>
	)
}

export default Menu

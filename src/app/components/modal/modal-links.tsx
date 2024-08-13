"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideUpVariantWithExit } from "@/app/helpers/animation-variants";

import SocialIconsList from "../social-icons-list";
import styles from '@/app/styles/modules/menu-modal.module.scss';
import { useModalContext } from "@/app/hooks/useModalContext";


type Link = { route: string, label: string };

const MENU_LINKS: Link[] = [
	{ route: '/#landing', label: 'Home' },
	{ route: '/#about', label: 'About' },
	{ route: '/#projects', label: 'Projects' },
	{ route: '/#contact', label: 'Contact' }
]


const ModalLinks = () => {
	const [_, setIsMenuModalOpen] = useModalContext();

	const menuListTransition = {
		initial: { opacity: 0 },
		final: { opacity: 1, transition: {
			delayChildren: 0.7,
			staggerChildren: 0.07,
		}},
		exit: { opacity: 0, transition: {
			delayChildren: 0.02,
			staggerChildren: 0.07
		}},
	}

	return (
		<div className={styles.wrapper}>
			<motion.menu
				className={styles['nav-list']}
				variants={menuListTransition}
				initial="initial"
				animate="final"
				exit="exit"
			>
				{MENU_LINKS.map(menuItem => (
					<motion.li
						key={menuItem.route}
						className={styles['nav-item']}
						variants={slideUpVariantWithExit}
					>
						<Link href={menuItem.route} className={styles['nav-link']} onClick={() => setIsMenuModalOpen(false)}>
							{ menuItem.label }
						</Link>
					</motion.li>
				))}
			</motion.menu>

			<motion.div
				className={styles['icons-container-modal']}
				initial={{ opacity: 0, y: '3.5rem' }}
				animate={{ opacity: 1, y: 0 }}
				exit={{
					opacity: 0,
					y: '3.5rem',
					transition: {
						opacity: { delay: 0.1, duration: 0.25 },
						y: { delay: 0, duration: 0.25, type: 'spring', damping: 12 }
					}
				}}
				transition={{
					opacity: { delay: 0.9, duration: 0.25 },
					y: { delay: 0.9, duration: 0.25, type: 'spring', damping: 12 }
				}}
			>
				<SocialIconsList key="modal-socials" context="modal" />
			</motion.div>
		</div>
	)
}

export default ModalLinks
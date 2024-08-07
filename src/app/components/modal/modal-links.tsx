"use client";
import { motion } from "framer-motion";
import styles from '@/app/styles/modules/menu-modal.module.scss';
import Link from "next/link";
import SocialIconsList from "../social-icons-list";
import { slideUpVariant } from "@/app/helpers/animation-variants";

interface ModalLinksProps {
	closeMenuModal: () => void,
	isMenuModalOpen: boolean
}

type Link = { route: string, label: string };

const MENU_LINKS: Link[] = [
	{ route: '/#landing', label: 'Home' },
	{ route: '/#about', label: 'About' },
	{ route: '/#projects', label: 'Projects' },
	{ route: '/#contact', label: 'Contact' }
]


const ModalLinks: React.FC<ModalLinksProps> = ({ closeMenuModal, isMenuModalOpen }) => {
	const menuListTransition = {
		initial: { opacity: 0 },
		final: {
			opacity: 1,
			transition: {
				delayChildren: 0.7,
				staggerChildren: 0.07,
			}
		},
		exit: { opacity: 0 },
	}

	const menuItemTransition = {
		...slideUpVariant,
		exit: { opacity: 0, y: '2.5rem' },
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
						variants={menuItemTransition}
					>
						<Link href={menuItem.route} className={styles['nav-link']} onClick={closeMenuModal}>
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
				<SocialIconsList isMenuModalOpen={isMenuModalOpen} />
			</motion.div>
		</div>
	)
}

export default ModalLinks
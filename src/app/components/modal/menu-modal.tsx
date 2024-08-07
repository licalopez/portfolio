"use client";
import { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import styles from '@/app/styles/modules/menu-modal.module.scss';
import { widthVariant } from "../../helpers/animation-variants";
import ModalIllustrations from "./modal-illustrations";
import ModalLinks from "./modal-links";

interface MenuModalProps {
	closeMenuModal: () => void,
	isMenuModalOpen: boolean,
}

const MenuModal: React.FC<MenuModalProps> = ({ closeMenuModal, isMenuModalOpen }) => {
	const closeOnEscKey = useCallback((event: KeyboardEvent) => {
		if (event.key === 'Escape')
			closeMenuModal();
	}, [closeMenuModal]);

	// Prevent vertical scrolling when modal is open; revert when closed
	useEffect(() => {
		if (isMenuModalOpen)
			document.querySelector('body')!.style.overflowY = 'hidden';

		return () => {
			document.querySelector('body')!.style.overflowY = 'scroll'
		};
	}, [isMenuModalOpen]);

	useEffect(() => {
		document.addEventListener('keydown', closeOnEscKey);
		return () => document.removeEventListener('keydown', closeOnEscKey);
	}, [closeOnEscKey]);

	return (
		<motion.div
			id="modal"
			aria-hidden={!isMenuModalOpen}
			aria-labelledby="menu-icon-button"
			className={styles.modal}
			role="dialog"
			variants={widthVariant}
			initial="zero"
			animate="full"
			exit={{
				...widthVariant.zero,
				transition: { delay: 0.5, duration: 0.5, type: 'spring', damping: 14 },
			}}
			transition={{
				width: { delay: 0.08, duration: 0.5, type: 'spring', damping: 14 }
			}}
		>
			<ModalIllustrations />
			<ModalLinks closeMenuModal={closeMenuModal} isMenuModalOpen={isMenuModalOpen} />
		</motion.div>
	);
}

export default MenuModal
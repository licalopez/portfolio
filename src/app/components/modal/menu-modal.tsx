"use client";
import { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { useModalContext } from "@/app/hooks/useModalContext";
import { widthVariant } from "../../helpers/animation-variants";

import ModalIllustrations from "./modal-illustrations";
import ModalLinks from "./modal-links";
import styles from '@/app/styles/modules/menu-modal.module.scss';


const MenuModal = () => {
	const [isMenuModalOpen, setIsMenuModalOpen] = useModalContext();

	const closeOnEscKey = useCallback((event: KeyboardEvent) => {
		if (event.key === 'Escape')
			setIsMenuModalOpen(false);
	}, []);

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
			<ModalLinks />
		</motion.div>
	);
}

export default MenuModal
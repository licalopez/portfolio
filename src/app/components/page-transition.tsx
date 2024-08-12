"use client";
import { motion } from "framer-motion";
import styles from "@/app/styles/main.module.scss";

interface PageTransitionProps {
	page: string
}

const PageTransition: React.FC<PageTransitionProps> = ({ page }) => {
	const heightVariant = {
		initial: { height: '100%' },
		final: { height: '0%' },
		exit: { height: '100%' },
	}

	return (
		<motion.div
			key={`${page}-page-transition`}
			className={styles['page-transition-container']}
			variants={heightVariant}
			viewport={{ once: true }}
			initial="initial"
			whileInView="final"
			exit="exit"
		></motion.div>
	);
}

export default PageTransition
"use client";
import { motion } from "framer-motion";
import styles from "@/app/styles/modules/contact-success.module.scss";
import Button from "../ui/button";
import { slideUpVariantWithExit } from "@/app/helpers/animation-variants";

interface SuccessMessageProps {
	resetMailStatus: () => void
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ resetMailStatus }) => {
	const containerVariant = {
		initial: { opacity: 0 },
		final: { opacity: 1, transition: {
			delayChildren: 0.05,
			staggerChildren: 0.15,
		}},
		exit: { opacity: 0, transition: {
			opacity: { duration: 0.15 },
			delayChildren: 0.02,
			staggerChildren: 0.1,
		}}
	};

	return (
		<div className={styles['success-container']}>
			<motion.div
				className={styles['success-content']}
				variants={containerVariant}
				viewport={{ once: true }}
				initial="initial"
				whileInView="final"
				exit="exit"
			>
				<motion.h5 className={styles['success-heading']} variants={slideUpVariantWithExit}>
					Thank you for reaching out
				</motion.h5>
				<motion.p className={styles['success-p']} variants={slideUpVariantWithExit}>
					Your message has been delivered and Angelica will reply to you soon.
				</motion.p>
				<motion.div variants={slideUpVariantWithExit}>
					<Button onClick={resetMailStatus}>
						Return to Form
					</Button>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default SuccessMessage
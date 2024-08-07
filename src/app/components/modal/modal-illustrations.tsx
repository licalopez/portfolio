"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideUpVariant } from "@/app/helpers/animation-variants";
import styles from '@/app/styles/modules/menu-modal.module.scss';

import HeadphonesImg from '../../../../public/menu-headphones.svg';
import LaptopImg from '../../../../public/menu-laptop.svg';


const ModalIllustrations = () => {
	return (
		<>
			<motion.div
				id="laptop-container"
				custom="-12rem"
				variants={slideUpVariant}
				initial="initial"
				animate="final"
				exit={{
					...slideUpVariant.initial('-15rem'),
					transition: {
						opacity: { delay: 0.25, duration: 0.2 },
						y: { delay: 0, duration: 0.3, type: 'spring', damping: 13 }
					},
				}}
				transition={{
					opacity: { delay: 0.52, duration: 0.2 },
					y: { delay: 0.5, duration: 0.3, type: 'spring', damping: 16 }
				}}
			>
				<Image
					alt="Illustration of a laptop next to a small plant"
					className={styles.laptop}
					src={LaptopImg}
				/>
			</motion.div>
			<motion.div
				id="headphones-container"
				initial={{ opacity: 0, y: '115vh' }}
				animate={{ opacity: 1, y: '100vh' }}
				exit={{
					opacity: 0, y: '115vh',
					transition: {
						opacity: { delay: 0.3, duration: 0.2 },
						y: { delay: 0.15, duration: 0.2, type: 'spring', damping: 13 },
					},
				}}
				transition={{
					opacity: { delay: 0.6, duration: 0.2 },
					y: { delay: 0.63, duration: 0.2, type: 'spring', damping: 16 },
				}}
			>
				<Image
					alt="Illustration of orange headphones"
					className={styles.headphones}
					src={HeadphonesImg}
				/>
			</motion.div>
		</>
	)
}

export default ModalIllustrations
"use client";
import { motion } from "framer-motion";
import styles from "@/app/styles/modules/project-page/project-gallery-controls.module.scss";
import { slideUpVariant } from "@/app/helpers/animation-variants";

interface ProjectGalleryControlsProps {
	contentDelay: number,
	galleryXPosition: number,
	imageWidthPercentage: number,
	maxXPosition: number,
	onPrevious: () => void,
	onNext: () => void,
}

const ProjectGalleryControls: React.FC<ProjectGalleryControlsProps> = ({ contentDelay, galleryXPosition, imageWidthPercentage, maxXPosition, onPrevious, onNext }) => {
	const slideUpTransition = {
		delay: contentDelay + 0.7,
		y: { delay: contentDelay + 0.45, duration: 0.13, type: 'spring', damping: 12 }
	};

	return (
		<motion.div
			className={styles['gallery-controls']}
			variants={slideUpVariant}
			initial="initial"
			animate="final"
			transition={slideUpTransition}
		>
			<button
				aria-label="Scroll to previous image"
				className={styles['arrow-button']}
				disabled={galleryXPosition === 0}
				onClick={onPrevious}
				style={{ width: '50%'}}
			>
				<div className={styles['arrow-icon-container']}>
					<svg className={styles['arrow-icon']} viewBox="0 0 1024 1024"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"/></svg>
				</div>
			</button>
			<button
				aria-label="Scroll to next image"
				className={styles['arrow-button']}
				disabled={(galleryXPosition + imageWidthPercentage) >= maxXPosition}
				onClick={onNext}
			>
				<div className={styles['arrow-icon-container']}>
					<svg className={styles['arrow-icon']} viewBox="0 0 1024 1024"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"/></svg>
				</div>
			</button>
		</motion.div>
	);
}

export default ProjectGalleryControls
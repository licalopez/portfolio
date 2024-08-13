"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { generateParentOpacityVariant, slideUpVariant } from "@/app/helpers/animation-variants";
import styles from "@/app/styles/modules/project-page/project-page.module.scss";

interface ProjectGalleryProps {
	contentDelay: number,
	galleryXPosition: number,
	images: Project['images'],
	imageWidthPercentage: number,
	projectId: number,
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ contentDelay, galleryXPosition, images, imageWidthPercentage, projectId }) => {
	const galleryContainerVariant = generateParentOpacityVariant({
		delayChildren: contentDelay + 0.8,
		staggerChildren: 0.055
	});

	const slideUpTransition = {
		y: { duration: 0.15, type: 'spring', damping: 13 }
	};

	return (
		<motion.div
			className={styles['gallery-scrollable']}
			style={{ transform: `translateX(-${galleryXPosition}%)` }}
			variants={galleryContainerVariant}
			initial="initial"
			animate="final"
		>
			{images.map((image, index) => (
				<motion.div
					key={image.fileName}
					aria-hidden={
						/**
						 * Visible range will start at galleryXPosition and (galleryXPosition + imageWidthPercentage)
						 * Check if current position (index * imageWidthPercentage) falls between that range
						 * TODO: Will change on different screen sizes
						 */
						(index * imageWidthPercentage) >= galleryXPosition &&
						(index * imageWidthPercentage) <= (galleryXPosition + imageWidthPercentage)
					}
					className={styles['image-container']}
					variants={slideUpVariant}
					transition={slideUpTransition}
				>
					<Image
						alt={image.alt}
						className={styles['image']}
						src={`/projects/project${projectId}/${image.fileName}-sm.png`}
						objectFit="cover"
						height={750}
						width={1000}
					/>
				</motion.div>
			))}
		</motion.div>
	);
}

export default ProjectGallery
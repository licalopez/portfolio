"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { generateParentOpacityVariant, slideUpVariant } from "@/app/helpers/animation-variants";
import styles from "@/app/styles/modules/project-page/project-page.module.scss";

interface ProjectGalleryProps {
	contentDelay: number,
	currentSlideIndex: number,
	galleryXPosition: number,
	images: Project['images'],
	imageWidthPercentage: number,
	imagesPerSlide: number,
	projectId: number,
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ contentDelay, currentSlideIndex, galleryXPosition, images, imageWidthPercentage, imagesPerSlide, projectId }) => {
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
			{images.map((image, index) => {
				const currentImagePosition = index * imageWidthPercentage;
				const firstImageInSlidePosition = currentSlideIndex * imageWidthPercentage;
				const lastImageInSlidePosition = (currentSlideIndex + (imagesPerSlide - 1)) * imageWidthPercentage;

				return (
					<motion.div
						key={`${image.fileName}-${imagesPerSlide}`}
						aria-hidden={
							/**
							 * Visible range will start at firstImageInSlidePosition and end at lastImageInSlidePosition
							 * Check if current position falls between that range
							 */
							currentImagePosition < firstImageInSlidePosition || currentImagePosition > lastImageInSlidePosition
						}
						className={styles['image-container']}
						variants={slideUpVariant}
						transition={slideUpTransition}
					>
						<Image
							alt={image.alt}
							className={styles['image']}
							src={`/projects/project${projectId}/${image.fileName}-sm.png`}
							height={750}
							width={1000}
						/>
					</motion.div>
				)
			})}
		</motion.div>
	);
}

export default ProjectGallery
"use client"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { notFound } from "next/navigation";

import { PROJECTS } from "../data/projects";
import styles from "@/app/styles/modules/project-page/project-page.module.scss";

import ProjectGalleryControls from "../components/project-page/project-gallery-controls";
import ProjectHeader from "../components/project-page/project-header";
import ProjectGallery from "../components/project-page/project-gallery";
import PageTransition from "../components/page-transition";

interface ProjectPageProps {
	params: { projectLabel: string },
}


const ProjectPage: React.FC<ProjectPageProps> = ({ params: { projectLabel } }) => {
	const [project] = PROJECTS.filter(project => project.path === projectLabel);
	if (!project) notFound();

	const { id: projectId, name, description, filters, images, launchedSite, repoLink } = project;

	const [galleryXPosition, setGalleryXPosition] = useState(0);
	// Duration of container animations before text content starts transitioning in
	const contentDelay: number = 0.1;
	const imageWidthPercentage = 50;
	const maxXPosition = (images.length - 1) * imageWidthPercentage;

	const onNext = () => {
		if (galleryXPosition + imageWidthPercentage >= maxXPosition)
			return;
		setGalleryXPosition(prev => prev + imageWidthPercentage)
	}

	const onPrevious = () => {
		if (galleryXPosition === 0)
			return;
		setGalleryXPosition(prev => prev - imageWidthPercentage);
	}

	return (
		<motion.div className={styles['project-body']}>
			<header className={styles['header']}>
				<ProjectHeader
					contentDelay={contentDelay}
					description={description}
					filters={filters}
					launchedSite={launchedSite}
					name={name}
					repoLink={repoLink}
				/>

				<ProjectGalleryControls
					contentDelay={contentDelay}
					galleryXPosition={galleryXPosition}
					imageWidthPercentage={imageWidthPercentage}
					maxXPosition={maxXPosition}
					onPrevious={onPrevious}
					onNext={onNext}
				/>
			</header>

			{/********************* G A L L E R Y  *********************/}
			<div className={styles['gallery-container']}>
				<ProjectGallery
					contentDelay={contentDelay}
					galleryXPosition={galleryXPosition}
					images={images}
					imageWidthPercentage={imageWidthPercentage}
					projectId={projectId}
				/>
			</div>
		</motion.div>
	);
}

export default ProjectPage
"use client"
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";

import { PROJECTS } from "../data/projects";
import styles from "@/app/styles/modules/project-page/project-page.module.scss";

import ProjectGalleryControls from "../components/project-page/project-gallery-controls";
import ProjectHeader from "../components/project-page/project-header";
import ProjectGallery from "../components/project-page/project-gallery";
// import PageTransition from "../components/page-transition";
import { useModalContext } from "../hooks/useModalContext";
import { SCREEN } from "../data/screenSizes";

interface ProjectPageProps {
	params: { projectLabel: string },
}


const ProjectPage: React.FC<ProjectPageProps> = ({ params: { projectLabel } }) => {
	const [project] = PROJECTS.filter(project => project.path === projectLabel);
	if (!project) notFound();

	const { id: projectId, name, description, filters, images, launchedSite, repoLink } = project;
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const [galleryXPosition, setGalleryXPosition] = useState(0);
	const [imagesPerSlide, setImagesPerSlide] = useState(1);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isMenuModalOpen] = useModalContext();

	// Duration of container animations before text content starts transitioning in
	// Decided to omit container animations, but might add them in the future
	const contentDelay: number = 0.1;

	// So that window resize reflects the proper imagesPerSlide and galleryXPosition
	useEffect(() => {
		function captureWindowWidth() {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', captureWindowWidth);
		return () => window.removeEventListener('resize', captureWindowWidth);
	}, []);

	useEffect(() => {
		windowWidth >= SCREEN.at2XLarge ? setImagesPerSlide(3) :
		windowWidth >= SCREEN.atSmall ? setImagesPerSlide(2) :
		setImagesPerSlide(1);
	}, [windowWidth]);

	const maxSlideIndex: number = useMemo(() => {
		return images.length - imagesPerSlide;
	}, [images.length, imagesPerSlide]);

	// Adjust gallery X position when imagesPerSlide changes (i.e. when window resizes)
	useEffect(() => {
		setGalleryXPosition(currentSlideIndex * (100 / imagesPerSlide));
	}, [currentSlideIndex, imagesPerSlide]);

	// If currentIndex is greater than maxSlideIndex (e.g. when screen changes and maxSlideIndex decreases), make currentIndex the last slide
	useEffect(() => {
		if (currentSlideIndex > maxSlideIndex)
			setCurrentSlideIndex(maxSlideIndex);
	}, [currentSlideIndex, maxSlideIndex, imagesPerSlide]);

	const onNext = () => {
		if (currentSlideIndex >= maxSlideIndex)
			return;
		setCurrentSlideIndex(prev => prev + 1);
	}

	const onPrevious = () => {
		if (currentSlideIndex === 0)
			return;
		setCurrentSlideIndex(prev => prev - 1);
	}

	return (
		<motion.div className={styles['project-body']} aria-hidden={isMenuModalOpen}>
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
					currentSlideIndex={currentSlideIndex}
					imageWidthPercentage={100 / imagesPerSlide}
					maxSlideIndex={maxSlideIndex}
					onPrevious={onPrevious}
					onNext={onNext}
				/>
			</header>

			{/********************* G A L L E R Y  *********************/}
			<div className={styles['gallery-container']}>
				<ProjectGallery
					contentDelay={contentDelay}
					currentSlideIndex={currentSlideIndex}
					galleryXPosition={galleryXPosition}
					images={images}
					imageWidthPercentage={100 / imagesPerSlide}
					imagesPerSlide={imagesPerSlide}
					projectId={projectId}
				/>
			</div>
		</motion.div>
	);
}

export default ProjectPage
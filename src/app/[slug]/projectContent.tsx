"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useModalContext } from "../hooks/useModalContext";
import { SCREEN } from "../data/screenSizes";

// import PageTransition from "../components/page-transition";
import ProjectGallery from "../components/project-page/project-gallery";
import ProjectGalleryControls from "../components/project-page/project-gallery-controls";
import ProjectHeader from "../components/project-page/project-header";
import styles from "@/app/styles/modules/project-page/project-page.module.scss";


interface ProjectContentProps {
	project: Project
}

const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const [galleryXPosition, setGalleryXPosition] = useState(0);
	const [imagesPerSlide, setImagesPerSlide] = useState(1);
	const [windowWidth, setWindowWidth] = useState(0);
	const [isMenuModalOpen] = useModalContext();

	// Duration of container animations before text content starts transitioning in
	// Decided to omit container animations, but might add them in the future
	const contentDelay: number = 0.1;

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

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
		return project.images.length - imagesPerSlide;
	}, [project.images.length, imagesPerSlide]);

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
					description={project.description}
					filters={project.filters}
					launchedSite={project.launchedSite}
					name={project.name}
					repoLink={project.repoLink}
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
					images={project.images}
					imageWidthPercentage={100 / imagesPerSlide}
					imagesPerSlide={imagesPerSlide}
					projectId={project.id}
				/>
			</div>
		</motion.div>
	);
}

export default ProjectContent;
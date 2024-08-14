"use client";
import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import styles from '@/app/styles/modules/about.module.scss';

import Image from 'next/image';
import AboutHeader from '../../../../public/about-header.svg';
import AboutMe from './about-me';
import Skillsets from './skillsets';
import BackgroundIllustrations from '../bg-illustrations';

interface AboutProps {}


const About: React.FC<AboutProps> = () => {
	const [bgImgPosition, setBgImgPosition] = useState(0);
	const [headerImgPosition, setHeaderImgPosition] = useState(0);
	const [currentSection, setCurrentSection] = useState<AboutSection>('about');
	const headerImgRef = useRef<HTMLDivElement | null>(null);
	const bgImgRef = useRef<HTMLDivElement | null>(null);

	// Header Image Position
	const { scrollYProgress: headerScrollYProgress } = useScroll({
		target: headerImgRef,
		offset: ['0.3 1', '1 0.9']
		/**
		 * Each set of numbers in `offset` represents the target element (headerImgRef) and container element (browser window)
		 * 0 minimum = top of the element; 1 maximum = bottom of the element
		 * When 30% (`0.3`) of headerImgRef intersects with bottom of the window (100% of container, `1`), start tracking scroll Y progress
		 * When bottom of headerImgRef (100% of headerImgRef, `1`) intersects with just before the bottom of the window (`0.9`), stop tracking scroll Y progress
		 */
	});

	useMotionValueEvent(headerScrollYProgress, 'change', (latest) => {
		setHeaderImgPosition(latest);
	});

	// Background Images Position
	const { scrollYProgress: bgScrollYProgress } = useScroll({
		target: bgImgRef,
		offset: ['0.25 1', '1 1.05']
	});

	useMotionValueEvent(bgScrollYProgress, 'change', (latest) => {
		setBgImgPosition(latest);
	});

	console.log(bgImgPosition);

	return (
		<section id="about" className={styles.about}>
			<motion.div className={styles['header']}>
				<motion.div
					ref={headerImgRef}
					className={styles['header-img-container']}
					style={{ transform: `translateY(-${(headerImgPosition - 0.1) * 35}%)` }}
				>
					<Image
						alt="Illustration of a girl working on a laptop at her desk"
						src={AboutHeader}
						className={styles['header-img']}
					/>
				</motion.div>
			</motion.div>

			{/* `body-container` has a height/max-height that controls BackgroundIllustrations from jumping vertically on the screen between 'about' and 'skills' transitions */}
			<div className={styles['body-container']}>
				<AnimatePresence>
					{currentSection === 'about' ? (
						<AboutMe
							key="about-me"
							currentSection={currentSection}
							setCurrentSection={setCurrentSection}
						/>
					) : (
						<Skillsets
							key="skillsets"
							currentSection={currentSection}
							setCurrentSection={setCurrentSection}
						/>
					)}
				</AnimatePresence>
			</div>

			<BackgroundIllustrations bgImgPosition={bgImgPosition} ref={bgImgRef} />
		</section>
	);
}

export default About
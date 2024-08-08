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
	const [bgPosition, setBgPosition] = useState(0);
	const [currentSection, setCurrentSection] = useState<AboutSection>('about');
	const imgRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: imgRef,
		offset: ['0.3 1', '1 1.1']
		/**
		 * Each set of numbers in `offset` represents the target element (imgRef) and container element (browser window)
		 * 0 minimum = top of the element; 1 maximum = bottom of the element
		 * When 30% (`0.3`) of imgRef intersects with bottom of the window (100% of container, `1`), start tracking scroll Y progress
		 * When bottom of imgRef (100% of imgRef, `1`) intersects with bottom + offset of window (`1.25`), stop tracking scroll Y progress
		 */
	});

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		setBgPosition(latest);
	})

	return (
		<section id="about" className={styles.about}>
			<motion.div className={styles['header']}>
				<motion.div
					ref={imgRef}
					className={styles['header-img-container']}
					style={{
						transform: `translateY(-${(bgPosition - 0.1) * 35}%)`
						// for mobile: bgPosition * 38
					}}
				>
					<Image
						alt="Illustration of a girl working on a laptop at her desk"
						src={AboutHeader}
						className={styles['header-img']}
					/>
				</motion.div>
			</motion.div>

			{/* `body-container` has a max-height that controls BackgroundIllustrations from jumping vertically on the screen between 'about' and 'skills' transitions */}
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

			<BackgroundIllustrations />
		</section>
	);
}

export default About
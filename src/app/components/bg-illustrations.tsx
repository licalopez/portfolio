import { forwardRef, LegacyRef } from "react";
import Image from "next/image";
import styles from '@/app/styles/modules/about.module.scss';
import bgLeft from '../../../public/about-bg-left-md.png';
import bgRight from '../../../public/about-bg-right-md.png';

interface BackgroundIllustrationsProps {
	bgImgPosition: number,
	ref: LegacyRef<HTMLDivElement | null>
}

const BackgroundIllustrations: React.FC<BackgroundIllustrationsProps> = forwardRef(({ bgImgPosition }, ref) => {
	return (
		<div
			aria-hidden="true"
			className={styles.illustrations}
			ref={ref}
			style={{
				opacity: bgImgPosition * 1.55,
				transform: `translateY(${(1 - bgImgPosition) * 70}%)`,
			}}
		>
			<div className={styles['left-container']}>
				<Image
					alt="Illustration of a coffee cup, paint brushes and paint tubes"
					className={styles['left-img']}
					objectFit="contain"
					objectPosition="bottom center"
					src={bgLeft}
					sizes="auto"
					style={{ transform: `translateY(0%)` }}
					quality={100}
				/>
			</div>

			<div className={styles['right-container']}>
				<Image
					alt="Illustration of a camera and a computer keyboard"
					className={styles['right-img']}
					objectFit="contain"
					objectPosition="bottom center"
					src={bgRight}
					sizes="auto"
					style={{ transform: `translateY(0%)` }}
					quality={100}
				/>
			</div>
		</div>
	);
});

BackgroundIllustrations.displayName = 'BackgroundIllustrations';

export default BackgroundIllustrations;
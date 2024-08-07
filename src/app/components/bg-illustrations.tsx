import Image from "next/image";
import styles from '@/app/styles/modules/about.module.scss';
import bgLeft from '../../../public/about-bg-left-md.png';
import bgRight from '../../../public/about-bg-right-md.png';

interface BackgroundIllustrationsProps {

}

const BackgroundIllustrations: React.FC<BackgroundIllustrationsProps> = () => {
	return (
		<div className={styles.illustrations} aria-hidden="true">
			<div className={styles['left-container']}>
				<Image
					alt="Illustration of a coffee cup, paint brushes and paint tubes"
					className={styles['left-img']}
					objectFit="contain"
					objectPosition="bottom center"
					src={bgLeft}
					sizes="auto"
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
					quality={100}
				/>
			</div>
		</div>
	);
}

export default BackgroundIllustrations;
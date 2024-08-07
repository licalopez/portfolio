import styles from '@/app/styles/modules/about-clickable.module.scss';
import { classes } from '../../helpers';

interface AboutClickableProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	currentSection: AboutSection,
	label?: string,
	onClick: () => void,
}

const AboutClickable: React.FC<AboutClickableProps> = ({ currentSection, label, onClick, ...props }) => {
	return (
		<button
			aria-label={label}
			onClick={onClick}
			className={classes(
				styles['content-clickable'],
				currentSection === 'about' ? styles['about-btn'] : styles['skills-btn']
			)}
		>
			{ props.children }
		</button>
	);
}

export default AboutClickable
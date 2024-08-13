import { useModalContext } from '@/app/hooks/useModalContext';
import { classes } from '../../helpers';
import styles from '@/app/styles/modules/about-clickable.module.scss';

interface AboutClickableProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	currentSection: AboutSection,
	label?: string,
	onClick: () => void,
}

const AboutClickable: React.FC<AboutClickableProps> = ({ children, currentSection, label, onClick, ...props }) => {
	const [isMenuModalOpen] = useModalContext();

	return (
		<button
			aria-hidden={isMenuModalOpen}
			aria-label={label}
			onClick={onClick}
			className={classes(
				styles['content-clickable'],
				currentSection === 'about' ? styles['about-btn'] : styles['skills-btn']
			)}
			tabIndex={isMenuModalOpen ? -1 : 1}
			{...props}
		>
			{ children }
		</button>
	);
}

export default AboutClickable;
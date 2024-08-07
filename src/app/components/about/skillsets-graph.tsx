import styles from '@/app/styles/modules/graph.module.scss';
import { classes } from '../../helpers';

interface SkillsetsGraphProps {
	count: number,
	maxCount?: number,
	rowIndex: number,
}

const SkillsetsGraph: React.FC<SkillsetsGraphProps> = ({ count, maxCount = 6, rowIndex }) => {
	let circleClassNames: string[] = [];

	for (let i = 0; i < maxCount; i++) {
		circleClassNames.push(
			i < count
				? classes(styles.circle, styles.full)
				: classes(styles.circle)
		);
	}

	return (
		<div className={styles['circles-container']}>
			{circleClassNames.map((className, i) => (
				<div key={`${rowIndex}-${i}`} className={className}></div>
			))}
		</div>
	);
}

export default SkillsetsGraph
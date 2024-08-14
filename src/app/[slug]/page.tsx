import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "../data/projects";
import ProjectContent from "./projectContent";

interface ProjectPageProps {
	params: { slug: string },
}

export const generateMetadata = ({ params }: ProjectPageProps): Metadata => {
	const slug = params.slug;
	const [project] = PROJECTS.filter(project => project.path === slug);
	if (!project) notFound();

	return {
		title: project.name,
		description: `Angelica Lopez\'s web portfolio - ${project.name}`,
	}
}


const ProjectPage: React.FC<ProjectPageProps> = ({ params: { slug } }) => {
	const [project] = PROJECTS.filter(project => project.path === slug);
	// if (!project) notFound();

	return (
		<ProjectContent project={project} />
	);
}

export default ProjectPage;
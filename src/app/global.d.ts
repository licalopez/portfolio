export declare global {
	type AboutSection = 'about' | 'skills';

	type Project = {
		id: number,
		name: string,
		path: string,
		description: string,
		thumbnail: string,
		filters: string[],
		images: {
			fileName: string,
			alt: string
		}[],
		launchedSite?: string | null,
		repoLink?: string | null
	}
};
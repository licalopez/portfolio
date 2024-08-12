export declare global {
	type AboutSection = 'about' | 'skills';

	// for extending partial types with required keys
	type ExcludeKeys<T, Key extends keyof T> = Pick<T, Exclude<keyof T, Key>>

	type MailStatus = 'success' | 'failed' | null;

	type Project = {
		id: number,
		name: string,
		path: string,
		description: string,
		thumbnail: string,
		filters: string[],
		images: {
			fileName: string,
			alt: string,
		}[],
		launchedSite?: string | null,
		repoLink?: string | null
	}
};
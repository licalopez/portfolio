type Opacity = number;
type Y = string | number;
type Width = string | number;

/******************  V A R I A N T S  ******************/
export const slideUpVariant: {
	initial: (verticalOffset?: Y) => ({ y: Y, opacity: Opacity }),
	final: { y: Y, opacity: Opacity }
} = {
	initial: (verticalOffset?: Y) => ({
		opacity: 0,
		y: verticalOffset || '2.5rem',
	 }),
	final: { opacity: 1, y: 0 },
};

export const slideUpVariantWithExit: typeof slideUpVariant & {
	exit: (verticalOffset?: Y) => ({ y: Y, opacity: Opacity })
} = {
	...slideUpVariant,
	exit: (verticalOffset?: Y) => ({
		opacity: 0,
		y: verticalOffset || '2.5rem'
	})
};

export const widthVariant: {
	zero: { width: Width },
	full: { width: Width }
} = {
	zero: { width: 0 },
	full: { width: '100%' },
};

/**************  C O M P O N E N T   P R O P S  **************/
export const slideUpProps: {
	initial: string, animate: string, variants: typeof slideUpVariant
} = {
	initial: 'initial',
	animate: 'final',
	variants: slideUpVariant
}
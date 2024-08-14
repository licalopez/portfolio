"use client";
import { createContext, useState } from "react";

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [isMenuModalOpen, setIsMenuModalOpen] = useState(true);

	return (
		<ModalContext.Provider value={[isMenuModalOpen, setIsMenuModalOpen]}>
			{ children }
		</ModalContext.Provider>
	);
};

export default ModalProvider;
import { useContext } from "react"
import { ModalContext } from "../contexts/modal-context"

export const useModalContext = (): ModalContextType => {
	const context = useContext(ModalContext);

	if (!context)
		throw Error('useModalContext must be used inside a ModalContext.Provider');
	return context;
}
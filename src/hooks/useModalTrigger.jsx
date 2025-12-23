import React from "react";

export const useModalTrigger = (initialState = {}) => {
	const [data, setData] = React.useState(initialState);

	// Toggles a specific modal's visibility
	const toggleModal = React.useCallback(
		(modalKey, status) => {
			const newState = structuredClone(data);
			if (newState.modals && modalKey in newState.modals) {
				newState.modals[modalKey] = status;
				setData(newState);
			} else {
				console.error(`Modal key "${modalKey}" does not exist in the state.`);
			}
		},
		[data]
	);

	// Closes the current modal and opens a new one
	const switchModal = React.useCallback(
		(currentModalKey, newModalKey) => {
			const newState = structuredClone(data);
			if (newState.modals && currentModalKey in newState.modals && newModalKey in newState.modals) {
				newState.modals[currentModalKey] = false;
				newState.modals[newModalKey] = true;
				setData(newState);
			} else {
				console.error(`One or both modal keys ("${currentModalKey}", "${newModalKey}") do not exist in the state.`);
			}
		},
		[data]
	);

	return { data, toggleModal, switchModal };
};

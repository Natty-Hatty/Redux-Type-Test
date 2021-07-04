import React, { createContext, useReducer } from 'react';

const NavProvider = ({ children }: any) => {
	interface NavContextInterface {
		elementPosition: number;
		showOverlay: boolean;
		openedMenu: string;
	}

	// const [elementPosition, setElementPosition] = useState(-1);

	// const onHover = (value: number) => {
	// 	setElementPosition(value);
	// 	if (elementPosition > 0) {
	// 		// setOverlay(true)
	// 	} else {
	// 		// setOverlay(false)
	// 	}
	// };

	const initialState: NavContextInterface = {
		elementPosition: -1,
		showOverlay: false,
		openedMenu: '',
	};

	const NavContext = createContext<NavContextInterface | React.Dispatch<any>>({
		state: initialState,
		dispatch: () => null,
	});

	// Provider in your app

	// const navContext: NavContextInterface = {
	// 	elementPosition: -1,
	// 	showOverlay: false,
	// 	openedMenu: '',
	// };

	type ACTIONTYPE =
		| { type: 'set_menu'; payload: string }
		| { type: 'set_overlay' }
		| { type: 'set_hover'; payload: string };

	function reducer(state: NavContextInterface, action: ACTIONTYPE) {
		switch (action.type) {
			case 'set_menu':
				return {
					...state,
					openedMenu: action.payload,
				};
			case 'set_overlay':
				return {
					...state,
					showOverlay: state.elementPosition > 0 ? true : false,
				};
			case 'set_hover':
				return {
					...state,
					elementPosition: action.payload,
				};
			default:
				throw new Error();
		}
	}

	const [state, dispatch] = useReducer<any>(reducer, initialState);

	return (
		<NavContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{children}
		</NavContext.Provider>
	);
};

export default NavProvider;

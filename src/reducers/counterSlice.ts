import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
export interface CounterState {
	value: number;
	status: 'idle' | 'loading' | 'failed';
}

let initialState: CounterState = {
	value: 0,
	status: 'idle',
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmountSpecified: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
});

export const selectCount = (state: RootState) => state.counter.value;

export const { increment, decrement, incrementByAmountSpecified } =
	counterSlice.actions;

export default counterSlice.reducer;

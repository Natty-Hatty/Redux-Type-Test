import React, { useState } from 'react';
import { decrement, increment, selectCount } from '../reducers/counterSlice';
import { useAppDispatch, useAppSelector } from '../reducers/store';
import styles from './Counter.module.css';

export function Counter() {
	const count = useAppSelector(selectCount);
	const dispatch = useAppDispatch();
	const [incrementAmounts, setIncrementAmounts] = useState('2');

	// A mock function to mimic making an async request for data
	function fetchCount(amount = 1) {
		return new Promise<{ data: number }>((resolve) =>
			setTimeout(() => resolve({ data: amount }), 500)
		);
	}

	const incrementValue = Number(incrementAmounts) || 0;

	return (
		<div>
			<h2>Increment and Decremente</h2>
			<div className={styles.row}>
				<button
					name="decrement btn"
					className={styles.button}
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					-
				</button>
				<span className={styles.value}>{count}</span>
				<button
					name="increment btn"
					className={styles.button}
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					+
				</button>
			</div>
		</div>
	);
}

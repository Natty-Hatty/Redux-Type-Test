import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../reducers/store';
import styles from './Counter.module.css';
import { decrement, increment, selectCount } from '../reducers/counterSlice';

export function Counter() {
	const count = useAppSelector(selectCount);
	const dispatch = useAppDispatch();
	const [incrementAmount, setIncrementAmount] = useState('2');

  // A mock function to mimic making an async request for data
 function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}


	const incrementValue = Number(incrementAmount) || 0;

	return (
		<div>
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					-
				</button>
				<span className={styles.value}>{count}</span>
				<button
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

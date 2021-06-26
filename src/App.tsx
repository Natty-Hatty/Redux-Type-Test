import React from 'react';
import './App.css';
import { Counter } from './counter/Counter';
import GitTestFile from './counter/GitTestFile';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Counter />
				<GitTestFile />
			</header>
		</div>
	);
}

export default App;

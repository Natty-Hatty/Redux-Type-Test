import React, { useState } from 'react';
import './App.css';
import { Counter as CounterOne } from './counter/Counter';
import GitTestFile from './counter/GitTestFile';
import Info from './information/Info';

function App() {
	const [name, setName] = useState('Aditya');
	return (
		<div className="App">
			<header className="App-header">
				<div className="one_two_ka_four">
					<CounterOne  />
				</div>
				<GitTestFile name={name} />
			</header>
			<section className="one_two_ka_four">
				<Info />
			</section>
		</div>
	);
}

export default App;

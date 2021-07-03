import { createGlobalStyle } from 'styled-components';
import './App.css';
import NavBar from './NavBar';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
	font-family: 'Poppins', sans-serif;
  }
`;

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<NavBar />
			{/* <Card /> */}
		</div>
	);
}

export default App;

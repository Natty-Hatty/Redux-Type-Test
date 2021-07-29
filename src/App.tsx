import { createGlobalStyle } from 'styled-components';
import './App.css';
import CheckoutPage from './components/CheckoutPage';
import MaterialLayout from './components/Layout/MaterialLayout';
// import VerticalLinearStepper from './components/MultiStep';
// import Card from './Card';
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
			<MaterialLayout>
				<CheckoutPage />
				{/* <VerticalLinearStepper /> */}
			</MaterialLayout>
			{/* <MultiDimensionalForm /> */}
			{/* <Card /> */}
		</div>
	);
}

export default App;

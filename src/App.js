import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FAQs from './Components/FAQs/FAQs';
import Privacy from './Components/Privacy/Privacy';
import Terms from './Components/Terms/Terms';
import Header from './Components/Home/Header/Header';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/faqs" element={<FAQs />} />
					<Route path="/privacy" element={<Privacy />} />
					<Route path="/terms" element={<Terms />} />
				</Routes>
				
			</BrowserRouter>
		</div>
	);
}

export default App;

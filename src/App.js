import './App.css';
import 'animate.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import ContactPage from './pages/contact';
import PrivacyPage from './pages/privacy';
import ProjectPage from './pages/projects';
import AboutPage from './pages/about';
import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/contact" component={ContactPage} exact />
				<Route path="/privacy-policy" component={PrivacyPage} exact />
				<Route path="/projects" component={ProjectPage} exact />
				<Route path="/about" component={AboutPage} exact />
			</Switch>
		</Router>
	);
}

export default App;

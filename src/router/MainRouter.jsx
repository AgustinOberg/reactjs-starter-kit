import HomePage from '@/pages/HomePage/index';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

const MainRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='about' element={<About />} />
				<Route path='dashboard' element={<Dashboard />} />
				<Route path='*' element={<NoMatch />} />
			</Route>
		</Routes>
	);
};
const Layout = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/dashboard'>Dashboard</Link>
					</li>
					<li>
						<Link to='/nothing-here'>Nothing Here</Link>
					</li>
				</ul>
			</nav>

			<hr />

			{/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
			<Outlet />
		</div>
	);
};

const About = () => {
	return (
		<div>
			<h2>About</h2>
		</div>
	);
};

const Dashboard = () => {
	return (
		<div>
			<h2>Dashboard</h2>
		</div>
	);
};

const NoMatch = () => {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<Link to='/'>Go to the home page</Link>
			</p>
		</div>
	);
};

export default MainRouter;

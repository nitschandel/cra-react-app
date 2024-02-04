import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


//Components
import Login from './pages/login';
import Home from './pages/home';
import AuthApp from './pages/auth-app';



const routes = (
	<Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/" element={<AuthApp />}>
			<Route exact path="/" element={<Home />} />
		</Route>
	</Routes>
);


export default function configureRoutes() {
	return <BrowserRouter>{routes}</BrowserRouter>;
}

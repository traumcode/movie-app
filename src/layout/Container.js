import React from "react";
import Filter from "./Filter";
import Search from "./Search";
import Header from "./Header";
import MoviesList from "../components/MoviesList";


const Container = () => {
	return (
		<div className="container">
			<Search/>
			<Filter/>
			<Header/>
			<MoviesList/>
		</div>
	);
};

export default Container;

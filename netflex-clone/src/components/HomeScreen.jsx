import React from 'react';
import requests from '../requests';
import '../styles/HomeScreen.css'
import Banner from './Banner';
import Row from './Row';
import Nav from './Nav';
const HomeScreen = () => {
    return ( 
        <div className="homeScreen">
            {/* nav */}
            <Nav />
            {/* banner */}
            <Banner />
            {/* row */}
            <Row title="NETFLIX ORIGINAL"
            fetchUrl = {requests.fetchNetflixOriginals}
            isLargeRow/>
            {/* <Row title="TOP RATED"
            fetchUrl = {requests.fetchTopRated}
            isLargeRow/> */}
            <Row title="Trending Now"
            fetchUrl = {requests.fetchTrending}
            />
            <Row title="Romance Movies"
            fetchUrl = {requests.fetchComedyMovies}
            />
            <Row title="Comedy Movies"
            fetchUrl = {requests.fetchComedyMovies}
            />
            <Row title="Documentatries "
            fetchUrl = {requests.fetchDocumentaries}
            />
            <Row title="Comedy Movies"
            fetchUrl = {requests.fetchComedyMovies}
            />
        </div>
     );
}
 
export default HomeScreen;
import React from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './Common/Header';
import Footer from './Common/Footer';
import Landing from './Common/Landing';

import Home from './Pages/Home';
import About from './Pages/About';
import Initiatives from './Pages/Initiatives/Initiatives'
import People from './Pages/People';
import ProjectHome from './Pages/Projects/ProjectHome';
import Calendar from './Pages/Calendar';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import Hackathons from './Pages/Initiatives/Hackathons';
import PaperDiscussions from './Pages/Initiatives/paperDiscussions';
import Alumni from './Pages/Initiatives/alumni';
import InterIIT from './Pages/Initiatives/interIIT';
import MLRW from './Pages/MLRW';
import Course_week_1 from './Pages/Course_week_1';
import Course_week_2 from './Pages/Course_week_2';
import Course_week_3 from './Pages/Course_week_3';
import Course_week_4 from './Pages/Course_week_4';
import Course_week_5 from './Pages/Course_week_5';
import Course_week_6 from './Pages/Course_week_6';
import Course_week_7 from './Pages/Course_week_7';
import Publications from './Pages/Publications';
import Hackathon_results from './Pages/hackathon_results';

function NotFound() {
	  return (
		      <Landing message = "404 - Page Not Found" />
		    )
}

export default function MainPage() {
  return (
      <div className="super_container">
        <Header />
        <Switch>
          	<Route exact
				path = "/"
				component = {Home} 
			/>
			
        	<Route exact 
				path = "/about" 
				component = {About}
			/>
          	
			<Route exact
				path = "/projects"
				component = {ProjectHome}
			/>
			
          	<Route exact 
				path = "/initiatives"
				component = {Initiatives}
			/>
          	
			<Route exact 
				path = "/people"
				component = {People}
			/>
          	
			<Route exact
				path = "/calendar"
				component = {Calendar} 
			/>
			
			<Route exact
				path = "/contact" 
				component = {Contact} 
			/>
			
			<Route exact 
				path = "/hackathons"
				component = {Hackathons}
			/>
			
			<Route exact
				path = "/alumni" 
				component = {Alumni} 
			/>
			
			<Route exact 
				path = "/paperdiscussions" 
				component = {PaperDiscussions} 
			/>

			<Route exact 
				path = "/publications" 
				component = {Publications}
			/> 
			
			<Route exact 
				path = "/interIIT"
				component = {InterIIT}
			/>
			
			<Route exact 
				path = "/blogs"
				component = {Blogs}
			/>
          	
			<Route exact 
				path = "/course/week1"
				component = {Course_week_1}
			/>
			
			<Route exact 
				path = "/course/week2"
				component = {Course_week_2}
			/>	

			<Route exact 
				path = "/course/week3"
				component = {Course_week_3}
			/>

			<Route exact 
				path = "/course/week4"
				component = {Course_week_4}
			/>

			<Route exact 
				path = "/course/week5"
				component = {Course_week_5}
			/>			

			<Route exact 
				path = "/course/week6"
				component = {Course_week_6}
			/>			

			<Route exact 
				path = "/course/week7"
				component = {Course_week_7}
			/>

			<Route exact
				path = "/MLRW"
				component = {MLRW}
			/>

			<Route exact
				path = "/hackathon_results"
				component = {Hackathon_results}
			/>			
			
			<Route exact
				path = "**" 
				component = {NotFound} 
			/>
        
		  </Switch>
       
		  
		  <Footer />
      </div>
  );
}



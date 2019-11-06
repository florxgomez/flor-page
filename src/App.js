import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import home from "./pages/home";
import aboutme from "./pages/aboutme";
import projects from "./pages/projects";
import skills from "./pages/skills";
import contact from "./pages/contact";

const App = () => (

    <Router>
     <Header />
     <div className="content">
     <div class="content-section">
     <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/aboutme" component={aboutme} />
      <Route exact path="/projects" component={projects} />
      <Route exact path="/skills" component={skills} />
      <Route exact path="/contact" component={contact} />
     </Switch>
     </div>
     </div>
     <Footer />
     </Router>

  );

export default App;
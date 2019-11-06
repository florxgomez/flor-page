import React from 'react';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import home from "./pages/home";
import aboutme from "./pages/aboutme";
import projects from "./pages/projects";
import skills from "./pages/skills";
import contact from "./pages/contact";

const App = () => (

    <Router>
     <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/aboutme" component={aboutme} />
      <Route exact path="/projects" component={projects} />
      <Route exact path="/skills" component={skills} />
      <Route exact path="/contact" component={contact} />
     </Switch>
     <Footer />
     </Router>

  );

export default App;
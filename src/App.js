import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Articles from './components/Articles/Articles';
import NotFound from './components/NotFound/NotFound';
import CourseDetail from './components/CourseDetail/CourseDetail';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/courses'>
            <Courses></Courses>
          </Route>
          <Route exact path='/course/:courseId'>
            <CourseDetail></CourseDetail>
          </Route>
          <Route exact path='/articles'>
            <Articles></Articles>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route path='*'>
          <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;


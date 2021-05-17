import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IngredientTable from './components/IngredientTable'
import TableToReadList from './components/TableToReadList'
import TableToRenderList from './components/TableToRenderList'
import ComponentToReadNDisplayList from './components/ComponentToReadNDisplayList'
// import TopNavbar from './nav/top-navbar.component';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


ReactDOM.render(
  <div>
    <h1>Pick Up Area Widgets</h1>
    <TableToReadList keyword='startup' />
    <h1>Enabled Widgets</h1>
    <TableToReadList keyword='netflix' />
    <h1>Recent Deployments</h1>
    <IngredientTable rows={rows} />
    <h1>Widgets</h1>
    <ComponentToReadNDisplayList />
    <h1>Route</h1>
    {/* <Router>
      <Switch>
      <Link to="/contact">Contact</Link>{' '}
      <Link to="/">Home2</Link>{' '}
      <Link to={{pathname: '/about'}}>About</Link>{' '}
        <Route path="/" exact component={ComponentToReadNDisplayList} />
        <Route path="/contact" component={TableToReadList} />
        <Route path="/products" exact component={FetchApproach} />
        <Route path="/products/:id?" component={FetchApproach} />
      </Switch>      
    </Router> */}
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

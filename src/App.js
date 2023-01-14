import './App.css';
import Produits from './Installed'
import Clients from './Wishlist'
import FormulaireClient from './AddtoWhishlist'
import UpdateClient from './Modify';

import "bootstrap/dist/css/bootstrap.min.css";

import {Route,Routes,Link,BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
<div className="container">

<Router>
 <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
 <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
 <li className="nav-item"> <Link className="nav-link" to="/listeprod">Installed</Link> </li>
 <li className="nav-item"> <Link className="nav-link" to="/listeclt">Whishlist</Link></li>
 <li className="nav-item"> <Link className="nav-link" to="/ajoutclt">Add to Whishlist </Link></li>
 
</ul>
	</nav>
<Routes>
<Route path="/listeprod" element={<Produits />} />
<Route path="/listeclt" element={<Clients />} />
<Route path="/ajoutclt" element={<FormulaireClient />} />
<Route path="/updateclt/:id" element={<UpdateClient />} />
</Routes>
</Router>
 </div>
  );
}

export default App;

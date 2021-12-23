import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import Logo from '../logo.svg'
import { routes } from './Routes'
import { Suspense } from 'react'

export default function Navigation() {
  return (
    <Suspense fallback={ <span>Loading...</span> }>
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={Logo} alt="React logo" />
                    <ul>
                        {
                            routes.map((r) => (
                                <li key={r.path}>
                                    <NavLink to={r.path} activeClassName="nav-active">{r.name}</NavLink>
                                </li>
                            ))
                        }
                </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    {
                        routes.map((r) => (
                            <Route path={r.path} key={r.path}>
                                <r.Component/>
                            </Route>
                        ))
                    }
                    <Route path="/*">
                        <Redirect to={routes[0].path}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </Suspense>
  );
}

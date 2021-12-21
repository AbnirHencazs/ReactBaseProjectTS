import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"
import { routes } from './Routes'
import logo from '../logo.svg'

export const Navigation = () => {
    return(
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React logo" />
                    <ul>
                        {
                            routes.map((r) => (
                                <li key={r.to}>
                                    <NavLink to={r.to} className={({isActive}) => isActive ? 'nav-active' : ''} >{r.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Routes>
                    {
                        routes.map((r) => (
                            <Route key={r.path} path={r.path} element={ <r.Component/> }/>
                        ))
                    }
                    <Route path="/*" element={ <Navigate to="/lazy1" replace/> }/>
                </Routes>
            </div>

        </BrowserRouter>
    )
}
import { lazy, LazyExoticComponent } from "react";
import NoLazy from '../01-lazyload/pages/NoLazy'
type JSXComponent = () => JSX.Element
interface Route{
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

//lazy method needs for the returned Component to have a default export
const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/ '../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No lazy'
    }
]
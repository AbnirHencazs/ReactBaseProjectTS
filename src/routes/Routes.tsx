import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'

type JSXComponent = () => JSX.Element

interface Route{
    path: string;
    Component: JSXComponent
    name: string
    children?: Route[]
}

export const routes: Route[] = [
    {
        path: '/lazy1',
        Component: LazyPage1,
        name: 'Lazy Page 1'
    },
    {
        path: '/lazy2',
        Component: LazyPage2,
        name: 'Lazy Page 2'
    },
    {
        path: '/lazy3',
        Component: LazyPage3,
        name: 'Lazy Page 3'
    }
] 
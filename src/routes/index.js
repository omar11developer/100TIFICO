import Header from '../template/header';
import Home from '../pages/home';
import Characters from '../pages/Characters';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

// rutas del sitio
const routes = {
    '/':Home,
    '/:id': Characters,
    '/Contact': 'Contact',
}

const router = async()=>{
    const header = null || document.getElementById('Header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();

    let hash = getHash();
    let route = await resolveRoutes(hash);

    let render = routes[route] ? routes[route] : Error404;

    content.innerHTML = await render();

}

export default router;
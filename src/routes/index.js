import Header from '../template/header';
import Home from '../pages/home';
import Characters from '../pages/Characters';
import Error404 from '../pages/Error404';

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
}

export default router;
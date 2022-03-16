const resolveRoutes = (route) => {
    //resivimos un valor en la fuction 
    // tenemos que aplicar la logica que si route == / o == id si no es un error
    if(route.length <= 3){
        // en el proyecto solo tenemos tres niveles en el routes que son "/", "/:id", cont

        let validRoute = route === '/'? route : '/:id';
        // logica si el route es igual '/' o 'id' entonces me retornara la variable
        return validRoute;
    }
    return `/${route}`;// retorna /about
}   // si no retorna un '/' o 'id' entonces retorna about

export default resolveRoutes;
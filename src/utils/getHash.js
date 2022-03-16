const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
//location = elemnto del navegador
//hash = obtener el hash valor /#/1/ queremos obtener solo el id
//slice(1) = permite eliminar el primer elemento en este caso el "#"
//toLocaleLowerCase() = Si el usuario cambio a mayusculas el contenido regese siempre el valor en minuscula
// split('/') = del string que tenemos lo convertimos en un arreglo y elimina los "/" 
// en el navegadr el arreglo seria ['','1',''] por eso accedemos al elemneto necesitamos el id
//[1] por eso colocamos la posicion a la cual queremos acxeder 
    export default getHash;
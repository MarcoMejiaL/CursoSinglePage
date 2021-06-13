const getHash =()=>/* si slo se retorna un elemento no es necesarios utilizar {} */
location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';


export default getHash;
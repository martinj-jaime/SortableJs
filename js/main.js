const lista = document.getElementById('lista');

Sortable.create(lista, {
    animation: 100,
    chosenClass: "seleccionado",

    onEnd: () => {
    },
    group: 'lista-personas', 

    store: {
        // Guardamos el orden de la lista
        set: (sortable) => {
            const orden = sortable.toArray();
            // console.log(orden);
            localStorage.setItem(sortable.options.group.name, orden.join(','));
        },
        // Obtenemos el orden de la lista
        get: (sortable) => {
            const orden = localStorage.getItem(sortable.options.group.name);
            return orden ? orden.split(',') : [];
        }
    }

});
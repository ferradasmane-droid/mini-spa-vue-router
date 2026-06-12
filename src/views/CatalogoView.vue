        <script setup>
        const productos = [
            {id: 1, nombre: 'Producto 1'},
            {id: 2, nombre: 'Producto 2'},
            {id: 3, nombre: 'Producto 3'},
        ]
        </script>

<template>
    <section>
        <h2>Catálogo</h2>
        <p>Lista de productos disponibles:</p>

        <ul class="lista-productos">
            <li v-for="producto in productos" :key="producto.id">
                <span>{{ producto.nombre }}</span>

                <RouterLink :to="`/product/${producto.id}`">
                    Ver detalle
                </RouterLink>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.lista-productos {
    list-style: none;
    padding: 0;
}

.lista-productos li {
    background-color: #b2f6fa;
    padding: 15px;
    margin-bottom: 12px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

a {
    color: #0d6efd;
    font-weight: bold;
    text-decoration: none;
}
</style>




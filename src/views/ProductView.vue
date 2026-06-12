<script setup>
defineProps({
    id: {
        type: String,
        required: true,
    },
}) 
</script>

<template>
    <section>
        <h2>Detalle del producto</h2>

        <p>
            El id recibido por la ruta es:
            <strong>{{ id }}</strong>
        </p>

        <RouterLink to="/catalog">
            Volver al catálogo
        </RouterLink>
    </section>
</template>

<style scoped>

strong{
    color: #198754;
    font-size: 30px;
}

a {
    display: inline-block;
    margin-top: 15px;
    color: #0d6efd;
    font-weight: bold;
    text-decoration: none;
}
</style>
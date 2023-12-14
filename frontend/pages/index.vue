<script setup lang="ts">
    const { findOne } = useStrapi()
    const msg = ref('Hello')

</script>
<template>
    <div>
        {{ msg }}
        <hr>
        <pre>
            {{ findOne }} hola qtal
        </pre>
    </div>
</template>
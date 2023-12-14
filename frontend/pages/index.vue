<script setup lang="ts">
    const { findOne } = useStrapi()
    const msg = ref('Hello')

</script>
<template>
    <div>
        {{ msg }}
        <hr>
        <pre>
            {{ findOne }}
        </pre>
    </div>
</template>
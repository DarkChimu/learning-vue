<template>
    <div>
        <h1>Gallery: </h1>
        <router-link :to="{ name: 'Photos', params: { id: photo }}" 
        v-for="(photo, index) of photosArray" :key="index">
            <b-button pill variant="outline-primary" size="sm"
            class="mr-1">Photo: {{photo}}</b-button>
        </router-link>
        <Photography/>

        <b-button pill
        variant="outline-success" class="mr-1"
        @click="siguiente">Siguiente</b-button>
        <b-button pill
        variant="outline-primary" class="mr-1"
        @click="home">Home</b-button>
        <b-button pill
        variant="outline-success"
        @click="anterior">Anterior</b-button>
    </div>
</template>

<script>

import Photography from '@/components/Photography.vue'

export default {
    components: {
        Photography
    },
    data() {
        return {
            photosArray: [1, 2, 3]
        }
    },
    methods: {
        home() {
            this.$router.push('/')
        },
        anterior() {
            this.$router.go(-1)
        },
        siguiente() {
            this.$router.go(1)
        }
    }
}
</script>

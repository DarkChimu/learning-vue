<template>
    <div class="mt-5">
        <h1>Formularios</h1>

        <b-form @keyup="comprobarData">
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="example@example.com"
                :state="form.valids[0]"
                required
                @change="comprobarData"
                ></b-form-input>
            </b-form-group>
            
            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Example: Daniel"
                :state="form.valids[1]"
                required
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="Gender:" label-for="input-3">
                <b-form-select
                v-model="form.selected"
                :options="form.options"
                />
            </b-form-group>
            <b-form-group id="input-group-4" label="You Like:" label-for="radio-group-1">
                <b-form-radio-group 
                id="radio-group-1"
                v-model="radio.selected"
                :options="radio.options"
                
                />
            </b-form-group>
            <b-form-group id="checkbox-group-1" label="Interest">
                <b-form-checkbox-group
                id="checkbox-group-1"
                v-model="checkbox.selected"
                :options="checkbox.options"
                />
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'Forms',
    data() {
        return {
            checkbox: {
                selected: [],
                options: [
                    { text: 'Music', value: 'music' },
                    { text: 'VideoGames', value: 'videogames' },
                    { text: 'Kuromi', value: 'kuromi' }
                ]
            },
            radio: {
                selected: null,
                options: [
                    'Perro',
                    'Gato',
                    'Kuromi'
                ]
            },
            form: {
                email: '',
                name: '',
                selected: null,
                options: [
                    { text: 'Seleccione...', value: null },
                    'Hombre',
                    'Mujer',
                    'Kuromi'
                ],
                valids: [
                    false,
                    false,
                    false
                    ]
            }
        }
    },
    computed: {
    },
    methods: {
        comprobarData() {
            // eslint-disable-next-line no-useless-escape
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            const pRe = /^[A-Za-z]\w{4,7}$/
            this.form.valids[0] = re.test(this.form.email)
            this.form.valids[2] = pRe.test(this.form.password)

            // eslint-disable-next-line no-unused-expressions
            this.form.name.length > 3 ? this.form.valids[1] = true : this.form.valids[1] = false
            
            return true
        },
        debug(item) {
            console.log(item)
        }
    }
}
</script>

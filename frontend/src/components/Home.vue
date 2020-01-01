<template>
    <b-row>
        <b-col sm="6" xs="12" offset-sm="3" offset-xs="0">
            <br /><br />
            <b-card>
                <h4>Upload Image to find Text</h4>
                <hr />
                <b-form @submit.prevent="onSubmit" enctype="multipart/form-data">
                    <input type="file" ref="file" @change="onSelect"/>
                    <br /><br />
                    <b-button>Generate Text</b-button>
                </b-form>    
            </b-card>
            
        </b-col>

    </b-row>
</template>

<script>

import axios from 'axios'
import router from '../router'
import baseUrl from '../config/urls'

export default {
    name: 'Home',
    data () {
        return {
            file:""
        }
    },
    mounted() {
        console.log(baseUrl)
    },  
    computed: {

    },
    methods: {
        onSelect() {
            const file = this.$refs.file.files[0]
            this.file = file
        },
        async onSubmit(){
            const formData = new FormData()
            formData.append('file', this.file)
            try {
                await axios.post(baseUrl + '/upload-image')
            }
            catch(err) {
                console.log(err)
            }
        }
    }
}
</script>

<style>


</style>
<template>
    <b-row>
        <b-col sm="6" xs="12" offset-sm="3" offset-xs="0">
            <br />
            <b-card>
                <h5>Upload Image to find Text</h5>
                <hr />
                <b-form @submit="onSubmit" enctype="multipart/form-data">
                    <input type="file" ref="file" @change="onSelect"/>
                    <br /><br />
                    <p style="color:red;">{{message}}</p>
                    <br />
                    <b-row class="result-container" v-show="loader === false">
                        <b-col sm="6" xs="12" class="result-container">
                            <b-img v-bind:src="imageUrl" fluid v-show="imageUrl !== ''"></b-img>
                            <p v-show="imageUrl === ''">Choose an Image and click generate</p>
                        </b-col>
                        <b-col sm="6" xs="12" >
                            <b-form-textarea
                            class="result-container"
                            v-model="text"
                            ></b-form-textarea>
                        </b-col>
                    </b-row>
                    <div class="result-container text-center" v-show="loader === true">
                        <br /><br />
                        <b-spinner class="ml-auto" variant="primary" type="grow" style="width: 3rem; height: 3rem;" label="Spinning"></b-spinner>
                    </div>
                    <br />
                    <span v-show="loader === true"><b>Processing ...</b></span>
                    <span style="color:red;" v-show="text === '' && imageUrl !== ''"><b>Sorry there was no text detected in the image, pick a different one !</b></span>
                    <br /><br />
                    <b-button v-bind:disabled="valid == false" @click="onSubmit">Generate Text</b-button>
                </b-form>    
            </b-card>
            <br /><br /><br /><br />
        </b-col>

    </b-row>
</template>

<script>

import axios from 'axios'
import baseUrl from '../config/urls'

export default {
    name: 'Home',
    data () {
        return {
            file:"",
            message:"",
            valid: false,
            text:"",
            imageUrl:"",
            loader: false
        }
    },
    mounted() {
    },  
    computed: {

    },
    methods: {
        onSelect() {
            this.text = ""
            this.imageUrl = ""
            const file = this.$refs.file.files[0]
            const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"]
            this.file = file
            if(!allowedFileTypes.includes(file.type)){
                this.valid = false
                this.message = "Only images are supported!"
            }
                
            else if(file.size > 5000000){
                this.valid = false
                this.message = "Too large, max size is 5 MB"
            }
                
            else {
                this.valid = true
                this.message = ""
            }
                
        },
        onSubmit(){
            let that = this
            this.loader = true
            const formData = new FormData()
            formData.append('file', this.file)
            this.valid = false
            axios.post(baseUrl + 'images/add', formData)
                .then(res => {
                   that.text = res.data.result.text
                   that.imageUrl= res.data.result.imageUrl
                   this.file = ""
                   this.message = ""
                   this.loader = false
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style>

.result-container{
    min-height: 300px;
}

</style>
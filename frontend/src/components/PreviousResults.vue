<template>
    <b-row>
		<b-col sm="6" xs="12" offset-sm="3" offset-xs="0">
            <br /><br />
            <b-card>
                <h5>Results</h5>
                <hr />
				<b-pagination
				v-model="page"
				:total-rows="totalPages"
				:per-page="limit"
				align="center"
				></b-pagination>
				<b	r />
				<b-row class="result-container" v-show="loader === false" v-for="result in paginate" v-bind:key="result.imageUrl">
					<b-col sm="6" xs="12" class="result-container">
						<b-img v-bind:src="result.imageUrl" fluid></b-img>
					</b-col>
					<b-col sm="6" xs="12" >
						<b-form-textarea
						class="result-container"
						v-model="result.text" 
						></b-form-textarea>
					</b-col>
				</b-row>
				<div class="result-container text-center" v-show="loader === true">
					<br /><br />
					<b-spinner class="ml-auto" variant="primary" type="grow" style="width: 3rem; height: 3rem;" label="Spinning"></b-spinner>
					<br /><br />
				</div>
            </b-card>
            
        </b-col>
    </b-row>
</template>

<script>

import axios from 'axios'
import router from '../router'
import baseUrl from '../config/urls'

export default {
    name: 'PreviousResults',
    data () {
        return {
            loader: true,
			results : [],
			page: 1,
			limit: 1,
			pages: [],
			total: 0
        }
    },
    mounted() {
        this.fetchResults(1,1)
    },
    computed: {
		totalPages: function() {
          	return Math.ceil(this.total/ this.limit)
        },
		paginate: function() {
            if (!this.results) {
                return
            }
            if (this.page >= this.totalPages && this.page != 1) {
              this.page = this.totalPages
            }
			let index = this.page * this.limit - this.limit
			console.log(this.results.slice(index, index + this.limit), this.page)
            return this.results.slice(index, index + this.limit)
        }
	},
	watch: {
		page() {
			this.fetchResults(this.page, this.limit)
		}
	},
    methods: {
        fetchResults(page, limit) {
			let that = this
			this.loader = true
			axios.get(baseUrl + 'results/all', {params: {page: page, limit: 1}})
                .then(res => {
				   that.results = res.data.results
				   that.total = res.data.length
				   that.loader = false
				   console.log(that.loader)
                })
                .catch(err => {
                    console.log(err)
                })
		}
    }
}
</script>

<style>

</style>
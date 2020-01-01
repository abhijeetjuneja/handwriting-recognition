<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#"><b>HandWriting Recognition</b></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

            <b-navbar-nav>
                <b-nav-item href="/">Home</b-nav-item>
                <b-nav-item href="/previous-results">Previous Results</b-nav-item>
            </b-navbar-nav>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>

</template>

<script>

import axios from 'axios'
import router from '../router'

export default {
  name: 'Navigation',
  data () {
    return {

    }
  },
  mounted() {
    
  },
  computed: {

  },
  methods: {
  }
}
</script>

<style>

</style>
<template>
  <div>
    <transition appear
        mode="out-in"
        appear-class="invisible"
        appear-to-class="animated bounceIn"
        enter-active-class="animated bounceIn"
        leave-active-class="animated bounceOut"
    >
        <b-row>
            <b-col sm="6" xs="12" offset-sm="3" offset-xs="0">
                <br /><br />
                <b-card class="text-center" style="background: rgba(0,0,0,0.1)!important;color:white;">
                    <br /><br /><br /><br /><br /><br />
                    <h4>404 Not Found</h4>
                    <br /><br /><br /><br /><br /><br />
                </b-card>
            </b-col>
        </b-row>   
    </transition>
</div>

</template>

<script>

import axios from 'axios'

export default {
    name: 'NotFound',
    data () {
        return {
        }
    }
}
</script>

<style>

</style>
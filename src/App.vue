<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div>
    <hero/>
    <navigation/>
    <router-view/>
    <tfooter/>
  </div>
</template>

<script>
import 'bootstrap';

import navigation from "@/components/navigation"
import hero from "@/components/hero"
import tfooter from "@/components/tfooter"

import Vue from 'vue'
import VueMeta from 'vue-meta'


export default {
  components: {navigation, hero, tfooter},
}

</script>

<style>

</style>

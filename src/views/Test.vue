<template>
  <div class="test">
    <button @click="showWhich = 'Testone'">Show Component One</button>
    <button @click="showWhich = 'Testtwo'">Show Component Two</button>

    <component :is="showWhich"></component>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Testone from "../components/Testone.vue";
import Testtwo from "../components/Testtwo.vue";

@Component({
  components: { Testone, Testtwo }
})
export default class Test extends Vue {
  showWhich: string = "Testone";
}
</script>

<style lang="scss" scoped>
</style>
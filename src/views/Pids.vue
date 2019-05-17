<template>
    <div class="pids">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Pids extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped>

</style>
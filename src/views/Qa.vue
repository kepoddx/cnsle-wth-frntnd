<template>
    <div class="qa">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Qa extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped>

</style>
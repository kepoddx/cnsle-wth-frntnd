<template>
    <div class="icon-wrapper">
        <svg class="icon" :width="width" :height="height">
            <use v-bind="{'xlink:href':'/octicons-sprite.svg#'+name}"/>
        </svg>
    </div>
</template>

<script>
    export default {
        props: {
            name:String,
            width: {
                type: [Number, String],
                default: 48
            },
            height: {
                type: [Number, String],
                default: 48
            }
        }
    }
</script>

<style lang="scss" scoped>
.icon-wrapper {
    display: inline-flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.4);
    font-size: 1rem;
    font-weight: 600;
}
.icon {
    stroke-linecap: round;
    stroke-linejoin: round;
    margin-right: 6px;
}
</style>
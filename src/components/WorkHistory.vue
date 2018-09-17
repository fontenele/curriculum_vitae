<template>
    <v-container fluid>
        <timeline theme="brown">
            <template v-for="(item, index) in workHistory">
                <timeline-title :key="index" bg-color="#795548">{{item.date}}</timeline-title>
                <timeline-item :key="item.date" :hollow="false" bg-color="orange">
                    {{item.company}}
                    <br/>
                    <v-chip :key="indexChip" v-for="(tag, indexChip) in item.tags" small color="brown"
                            v-html="tag" class="px-2 py-2"></v-chip>
                </timeline-item>
            </template>
        </timeline>
    </v-container>
</template>

<script>
    import {Timeline, TimelineItem, TimelineTitle} from 'vue-cute-timeline'

    export default {
        name: "WorkHistory",
        components: {
            Timeline,
            TimelineItem,
            TimelineTitle
        },
        data() {
            let dataDefault = require('./../locale/en_US');
            return {
                workHistory: dataDefault.messages.profile.workHistory
            }
        }
    }
</script>

<style scoped>
    .timeline * {
        color: #fff !important;
    }
</style>
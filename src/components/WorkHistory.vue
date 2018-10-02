<template>
    <v-container fluid>
        <timeline theme="brown">
            <template v-for="(item) in workHistory" track-by="index">
                <timeline-title :key="item.for" bg-color="indigo"><h3>{{item.from}} - {{item.to ? item.to : $t('actual')}}</h3></timeline-title>
                <timeline-item :key="item.to" bg-color="#2196f3">
                    <h4 class="pb-2">{{item.company}}</h4>
                    <div class="pb-2">{{$t('client')}}: <a :href="item.url" target="_blank">{{item.client}}</a></div>
                    <div class="pb-2">{{$t('role')}}: {{item.role}}</div>
                    <div class="pb-2">{{$t('techInfo')}}:
                        <v-chip :key="indexChip" v-for="(tag, indexChip) in item.tags" small color="blue white--text"
                                v-html="tag" class="px-2 py-2"></v-chip>
                    </div>
                </timeline-item>
            </template>
        </timeline>
    </v-container>
</template>

<script>
    import {Timeline, TimelineItem, TimelineTitle} from 'vue-cute-timeline'
    import {curriculum} from './../info'

    export default {
        name: "WorkHistory",
        components: {
            Timeline,
            TimelineItem,
            TimelineTitle
        },
        data() {
            return {
                workHistory: curriculum.workHistory
            }
        }
    }
</script>

<style scoped>
    .timeline * {
        /*color:  !important;*/
    }
</style>
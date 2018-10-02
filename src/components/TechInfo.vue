<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <v-card>
                    <v-toolbar color="blue">
                        <v-toolbar-title v-html="$t('techInfo')" class="white--text"></v-toolbar-title>
                    </v-toolbar>
                    <v-list dense>
                        <v-list-tile
                                v-for="(item, i) in techInfo"
                                :key="i"
                                avatar
                                @click="click()">
                            <v-list-tile-content>
                                <v-list-tile-title v-text="item.name"></v-list-tile-title>
                            </v-list-tile-content>

                            <v-list-tile-avatar>
                                <v-progress-circular :rotate="-90" color="indigo" :value="item.percent">{{item.percent}}
                                </v-progress-circular>
                            </v-list-tile-avatar>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>

            <v-flex xs12 sm6>
                <v-card>
                    <v-toolbar color="blue">
                        <v-toolbar-title v-html="$t('languagesLastYear')" class="white--text"></v-toolbar-title>
                    </v-toolbar>
                    <figure>
                        <embed src="https://wakatime.com/share/@fontenele/33a86de1-71eb-4cac-8326-b76f459f3d56.svg"/>
                    </figure>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {curriculum} from './../info'

    export default {
        name: "TechInfo",
        click() {

        },
        data() {
            return {
                techInfo: curriculum.techInfo
            }
        }
    }
</script>

<style scoped>
    .v-progress-circular {
        font-size: 8pt !important;
    }
</style>
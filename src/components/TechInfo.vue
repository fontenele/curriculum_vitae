<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <v-card class="mb-2">
                    <v-toolbar color="brown">
                        <v-toolbar-title v-html="$t('languages')" class="white--text"></v-toolbar-title>
                    </v-toolbar>
                    <v-list>
                        <v-list-tile
                                v-for="item in languages"
                                :key="item.label"
                                avatar
                                @click="click()">
                            <v-list-tile-content>
                                <v-list-tile-title v-text="$t(item.label)"></v-list-tile-title>
                            </v-list-tile-content>

                            <v-list-tile-avatar>
                                <v-progress-circular :rotate="-90" color="orange" :value="item.value">{{item.value}}
                                </v-progress-circular>
                            </v-list-tile-avatar>
                        </v-list-tile>
                    </v-list>
                </v-card>

                <v-card>
                    <v-toolbar color="brown">
                        <v-toolbar-title v-html="$t('languagesLastYear')" class="white--text"></v-toolbar-title>
                    </v-toolbar>
                    <figure>
                        <embed src="https://wakatime.com/share/@fontenele/899318eb-23bb-4793-be16-80dcc213493b.svg"/>
                    </figure>
                </v-card>
            </v-flex>

            <v-flex xs12 sm6>
                <v-card>
                    <v-toolbar color="brown">
                        <v-toolbar-title v-html="$t('techInfo')" class="white--text"></v-toolbar-title>
                    </v-toolbar>
                    <v-list dense>
                        <v-list-tile
                                v-for="item in techInfo"
                                :key="item.label"
                                avatar
                                @click="click()">
                            <v-list-tile-content>
                                <v-list-tile-title v-text="item.label"></v-list-tile-title>
                            </v-list-tile-content>

                            <v-list-tile-avatar>
                                <v-progress-circular :rotate="-90" color="orange" :value="item.value">{{item.value}}
                                </v-progress-circular>
                            </v-list-tile-avatar>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "TechInfo",
        click() {

        },
        data() {
            let dataDefault = require('./../locale/en_US');
            return {
                techInfo: dataDefault.messages.profile.techInfo,
                languages: dataDefault.messages.profile.languages
            }
        }
    }
</script>

<style scoped>
    .v-progress-circular {
        font-size: 8pt !important;
    }
</style>
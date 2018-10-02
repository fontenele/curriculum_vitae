<template>
    <v-app>
        <v-navigation-drawer
                v-model="drawer"
                enable-resize-watcher
                enable-route-watcher
                permanent
                hide-overlay
                persistent
                clipped
                fixed
                width="240"
                app>
            <div class="text-xs-center pt-4">
                <v-avatar size="100px" class="align-center mb-2">
                    <img :src="profile.avatar">
                </v-avatar>
                <h4>{{profile.name}}</h4>
            </div>
            <v-list>
                <v-divider></v-divider>
                <template v-for="(item, i) in items">
                    <v-tooltip bottom :key="i">
                        <v-list-tile :to="'/' + item.route" :append="true" ripple  :exact-active-class="'blue white--text'" slot="activator" :active-class="'white--text'">
                            <v-list-tile-action>
                                <v-icon v-html="item.icon"></v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title v-html="$t(item.title)"></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <span v-html="$t(item.title)"></span>
                    </v-tooltip>
                    <v-divider v-if="i + 1 < items.length" :key="`divider-${i}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar app clipped-left color="blue white--text">
            <v-toolbar-title v-text="profile.name + ' :: ' + $t('profile.role')"></v-toolbar-title>
        </v-toolbar>

        <v-content app>
            <router-view></router-view>
        </v-content>

        <v-footer fixed app color="blue white--text">
            <v-layout align-center justify-center row>
                <v-flex xs10 offset-xs1 text-xs-center>
                    &copy; FonteSolutions - <a target="_blank" href="https://www.fontesolutions.com.br/">www.fontesolutions.com.br</a>
                </v-flex>
                <v-flex xs1 text-xs-right>
                    <v-select flat v-model="$i18n.locale" :items="langs" label="" item-value="lang" item-text="img" class="select-lang">
                        <template slot="selection" slot-scope="data">
                            <v-avatar>
                                <img :src="data.item.img">
                            </v-avatar>
                        </template>
                        <template slot="item" slot-scope="data">
                            <v-avatar>
                                <img :src="data.item.img">
                            </v-avatar>
                        </template>
                    </v-select>
                </v-flex>
            </v-layout>
        </v-footer>
    </v-app>
</template>

<script>
    import {curriculum} from './info'

    export default {
        name: 'App',
        components: {},

        data() {
            return {
                drawer: true,
                profile: curriculum.profile,
                items: [
                    {
                        icon: 'info',
                        route: 'about-me',
                        title: 'aboutMe'
                    },
                    {
                        icon: 'insert_chart',
                        route: 'tech-info',
                        title: 'techInfo'
                    },
                    {
                        icon: 'timeline',
                        route: 'work-history',
                        title: 'workHistory'
                    }
                ],
                langs: [
                    {lang: 'pt_BR', img: require('./assets/pt.png')},
                    {lang: 'en_US', img: require('./assets/en.png')}
                ]
            }
        }
    }
</script>

<style scoped>
    .select-lang {
        width: 43px;
        margin-left: auto;
    }

    .item-avatar, .item-avatar a {
        height: 190px !important;
        background-color: indigo;
    }

    .v-footer .v-avatar img, .v-select-list .v-avatar img {
        width: 24px !important;
        height: 24px !important;
    }

    a {
        color: indigo !important;
        text-decoration: none;
    }
</style>

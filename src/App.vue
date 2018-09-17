<template>
    <v-app>
        <v-navigation-drawer
                v-model="drawer"
                :mini-variant="miniVariant"
                disable-resize-watcher
                disable-route-watcher
                permanent
                hide-overlay
                persistent
                clipped
                fixed
                app>
            <v-list dense>
                <v-tooltip bottom>
                    <v-list-tile avatar @click="goToAnchor({route: 'about-me'})" slot="activator">
                        <v-list-tile-avatar>
                            <img :src="avatar">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title><h4>{{$t('profile.name')}}</h4></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <span v-html="$t('aboutMe')"></span>
                </v-tooltip>
                <v-divider></v-divider>
                <template v-for="(item, i) in items">
                    <v-tooltip bottom :key="i">
                        <v-list-tile ripple @click="goToAnchor(item)" slot="activator">
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

        <v-toolbar app clipped-left>
            <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
            <v-toolbar-title v-text="$t('profile.name') + ' :: ' + $t('profile.role')"></v-toolbar-title>
        </v-toolbar>

        <v-content app>
            <router-view></router-view>
        </v-content>

        <v-footer fixed app>
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
    import router from './plugins/router'

    export default {
        name: 'App',
        components: {},

        methods: {
            goToAnchor: function (item) {
                router.push({path: item.route})
            }
        },
        data() {
            let dataDefault = require('./locale/en_US');
            return {
                drawer: true,
                miniVariant: true,
                avatar: dataDefault.messages.profile.avatarLocal ? require(`${dataDefault.messages.profile.avatar}`) : dataDefault.messages.profile.avatar,
                items: [
                    {
                        icon: 'insert_chart',
                        route: 'tech-info',
                        title: 'techInfo'
                    },
                    {
                        icon: 'language',
                        route: 'languages',
                        title: 'languages'
                    },
                    {
                        icon: 'info',
                        route: 'resume',
                        title: 'resume'
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

    .v-avatar img {
        width: 22px !important;
        height: 22px !important;
    }
</style>

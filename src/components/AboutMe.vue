<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column>
                <h3 class="pt-4">{{$t('aboutMe')}}</h3>
                <p class="pa-4 text-xs-justify">{{$t('profile.description')}}</p>
                <h3 class="pt">{{$t('objectives')}}</h3>
                <p class="pa-4 text-xs-justify">{{$t('profile.objectives')}}</p>
                <h3 class="pt">{{$t('contact')}}</h3>
                <p class="pa-4 text-xs-justify">
                    <v-icon small class="mr-2">mail</v-icon>
                    <a target="_blank" :href="'mailto:' + profile.email">{{profile.email}}</a><br/>
                    <v-icon small class="mr-2">phone</v-icon>
                    <a target="_blank" :href="'tel:' + profile.phone">{{profile.phone}}</a><br/>
                    <v-icon small class="mr-2">web</v-icon>
                    <a target="_blank" :href="profile.site">{{profile.site}}</a><br/>
                    <v-icon small class="mr-2">web</v-icon>
                    <a target="_blank" :href="profile.github">GitHub</a><br/>
                    <v-icon small class="mr-2">web</v-icon>
                    <a target="_blank" :href="profile.linkedin">Linkedin</a>
                </p>
                <h3 class="pt">{{$t('certification')}}</h3>
                <p class="pa-4">
                    <span :key="i" v-for="(item, i) of certification">
                        <a :href="item.url" target="_blank">{{item.name}}</a>
                    </span>
                </p>
                <h3 class="pt">{{$t('education')}}</h3>
                <template v-for="(item, i) in education">
                    <p :key="i" class="pa-4">
                        {{$t(item.title)}}<br/>
                        {{item.school}},
                        {{$t(item.degree)}} - {{item.year}}
                    </p>
                </template>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import {curriculum} from './../info'

    export default {
        name: 'AboutMe',
        props: {
            msg: String
        },
        data() {
            return {
                certification: curriculum.certificates,
                education: curriculum.education,
                profile: curriculum.profile
            }
        }
    }
</script>

<style scoped>
    a {
        color: indigo !important;
        text-decoration: none;
    }
</style>
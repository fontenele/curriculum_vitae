<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column>
                <h3 class="pt-4">{{$t('aboutMe')}}</h3>
                <p class="pa-4 text-xs-justify">{{$t('profile.description')}}</p>
                <h3 class="pt">{{$t('contact')}}</h3>
                <p class="pa-4 text-xs-justify">
                    <v-icon small class="mr-2">mail</v-icon>
                    <a target="_blank" :href="'mailto:' + contact.email">{{contact.email}}</a><br/>
                    <v-icon small class="mr-2">phone</v-icon>
                    <a target="_blank" :href="'tel:' + contact.phone">{{contact.phone}}</a><br/>
                    <v-icon small class="mr-2">web</v-icon>
                    <a target="_blank" :href="contact.site">{{contact.site}}</a><br/>
                    <v-icon small class="mr-2">web</v-icon>
                    <a target="_blank" :href="contact.github">GitHub</a><br/>
                    <v-icon small class="mr-2">web</v-icon>
                    <a target="_blank" :href="contact.linkedin">Linkedin</a>
                </p>
                <h3 class="pt">{{$t('objectives')}}</h3>
                <p class="pa-4 text-xs-justify">{{$t('profile.objectives')}}</p>
                <h3 class="pt">{{$t('certification')}}</h3>
                <p class="pa-4">
                    <span :key="i" v-for="(item, i) of certification">
                        <a :href="item.url" target="_blank">{{item.name}}</a>
                    </span>
                </p>
                <h3 class="pt">{{$t('education')}}</h3>
                <p class="pa-4">
                    {{$t('profile.education.title')}}<br/>
                    {{$t('profile.education.school')}},
                    {{$t('profile.education.degree')}} - {{$t('profile.education.year')}}
                </p>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    export default {
        name: 'AboutMe',
        props: {
            msg: String
        },
        data() {
            let dataDefault = require('./../locale/en_US');
            return {
                avatar: dataDefault.messages.profile.avatarLocal ? require(`${dataDefault.messages.profile.avatar}`) : dataDefault.messages.profile.avatar,
                certification: dataDefault.messages.profile.certification,
                contact: {
                    email: dataDefault.messages.profile.email,
                    phone: dataDefault.messages.profile.phone,
                    site: dataDefault.messages.profile.site,
                    github: dataDefault.messages.profile.github,
                    linkedin: dataDefault.messages.profile.linkedin,
                },
            }
        }
    }
</script>

<style scoped>
    a {
        color: orange !important;
        text-decoration: none;
    }
</style>
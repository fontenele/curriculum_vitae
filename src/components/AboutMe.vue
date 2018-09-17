<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column>
                <h3 class="pt-4">{{$t('aboutMe')}}</h3>
                <p class="pa-4 text-xs-justify">{{$t('profile.description')}}</p>
                <h3 class="pt">{{$t('contact')}}</h3>
                <p class="pa-4 text-xs-justify">
                    <v-icon>mail</v-icon> <a target="_blank" :href="'mailto:' + contact.email">{{contact.email}}</a><br />
                    <v-icon>mail</v-icon> <a target="_blank" :href="'tel:' + contact.phone">{{contact.phone}}</a><br />
                    <v-icon>mail</v-icon> <a target="_blank" :href="contact.site">{{contact.site}}</a><br />
                    <v-icon>mail</v-icon> <a target="_blank" :href="contact.github">{{contact.github}}</a>
                </p>
                <h3 class="pt">{{$t('objectives')}}</h3>
                <p class="pa-4 text-xs-justify">{{$t('profile.objectives')}}</p>
                <h3 class="pt">{{$t('education')}}</h3>
                <p class="pa-4">{{$t('profile.education.title')}}<br />{{$t('profile.education.school')}}, {{$t('profile.education.degree')}} - {{$t('profile.education.year')}}</p>
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
                avatar: dataDefault.messages.profile.avatarLocal ? require(dataDefault.messages.profile.avatar) : dataDefault.messages.profile.avatar,
                contact: {
                    email: dataDefault.messages.profile.email,
                    phone: dataDefault.messages.profile.phone,
                    site: dataDefault.messages.profile.site,
                    github: dataDefault.messages.profile.github,
                }
            }
        }
    }
</script>

<style scoped>
</style>
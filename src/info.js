import {Curriculum, TechInfo, Education, Certificate, Profile, WorkHistory} from './utils';

export const curriculum = new Curriculum(
    new Profile({
        name: 'Guilherme Fontenele',
        role: 'Senior Developer',
        site: 'https://guilherme.fontenele.net',
        github: 'https://github.com/fontenele',
        linkedin: 'https://www.linkedin.com/in/guilherme-fontenele',
        email: 'guilherme@fontenele.net',
        phone: '+55 (61) 99621-2011',
        avatar: 'https://avatars2.githubusercontent.com/u/906710?s=460&v=4',
        description: 'Brazilian, native of Brasilia/DF, I am a back-end, front-end, mobile and desktop developer' +
        ' with more than 10 years of experience in web, mobile and desktop development.\n' +
        'I greatly appreciate the UX (User Experience), along with its performance. A well-written and simple' +
        ' source code to understand and maintain.\n' +
        'I have been a Zend Certified PHP Engineer (ZCE) since 2008, I have experience with a technical leader' +
        ' and senior architect, always innovating with new technologies that appear every day in the market to' +
        ' improve the projects and adding and sharing my knowledge with the team.',
        objectives: 'My goals in the area are to participate in innovative projects, with architect profile' +
        ' or technical leader for development of back-end, front-end, mobile and desktop systems.',
    }),
    [new Education('Game Development', 'College degree', 'UDF', '2012')],
    [new Certificate('Zend Certified Engineer PHP 5', 'http://www.zend.com/en/yellow-pages/ZEND007838')],
    [
        // Langs
        new TechInfo('PHP', 90),
        new TechInfo('TypeScript', 85),
        new TechInfo('ObjectiveC', 85),
        new TechInfo('NodeJs', 45),
        new TechInfo('RequireJS', 45),
        new TechInfo('Swift', 20),
        new TechInfo('Python', 25),
        new TechInfo('ActionScript 2/3', 60),
        // Platforms
        new TechInfo('ReactNative', 55),
        new TechInfo('Electron', 70),
        new TechInfo('Cordova/Phonegap', 70),
        new TechInfo('Docker', 80),
        new TechInfo('DockerCompose', 80),
        new TechInfo('Redis', 50),
        new TechInfo('ElasticSearch', 30),
        new TechInfo('Linux', 90),
        // Frameworks
        new TechInfo('Laravel', 90),
        new TechInfo('Lumen', 80),
        new TechInfo('Slim Framework 2/3', 70),
        new TechInfo('ZendFramework 1/2', 80),
        new TechInfo('Symfony 2/3', 70),
        new TechInfo('Angular 1/2/6', 90),
        new TechInfo('Ionic 1/2/3', 80),
        new TechInfo('Express.js', 40),
        // Views
        new TechInfo('jQuery', 90),
        new TechInfo('Vue.js', 50),
        new TechInfo('Twig', 70),
        new TechInfo('Blade', 80),
        new TechInfo('Bootstrap 3/4', 90),
        new TechInfo('Materialize', 90),
        new TechInfo('Vuetify', 50),
        // Databases
        new TechInfo('PostgreSQL', 90),
        new TechInfo('Oracle', 90),
        new TechInfo('MySQL', 90),
        new TechInfo('SqLite', 90),
        new TechInfo('BRS/Search', 90),
        // Social
        new TechInfo('Google API', 70),
        new TechInfo('Telegram BOT API', 70),
        new TechInfo('Facebook/Instagram API', 70),
        new TechInfo('Firebase API', 70),
        new TechInfo('Azure API', 30),
        // Webservers
        new TechInfo('Apache', 90),
        new TechInfo('Nginx', 90),
        // VCS
        new TechInfo('GIT', 85),
        new TechInfo('SVN', 90),
    ],
    [new WorkHistory()]
);


// export default class Info {
//     constructor() {
//         this.profile = new Profile({
//             name: 'Guilherme Fontenele',
//             role: 'Senior Developer',
//             site: 'https://guilherme.fontenele.net',
//             github: 'https://github.com/fontenele',
//             linkedin: 'https://www.linkedin.com/in/guilherme-fontenele',
//             email: 'guilherme@fontenele.net',
//             phone: '+55 (61) 99621-2011',
//             avatar: '',
//             description: 'Brazilian, native of Brasilia/DF, I am a back-end, front-end, mobile and desktop developer' +
//             ' with more than 10 years of experience in web, mobile and desktop development.\n' +
//             'I greatly appreciate the UX (User Experience), along with its performance. A well-written and simple' +
//             ' source code to understand and maintain.\n' +
//             'I have been a Zend Certified PHP Engineer (ZCE) since 2008, I have experience with a technical leader' +
//             ' and senior architect, always innovating with new technologies that appear every day in the market to' +
//             ' improve the projects and adding and sharing my knowledge with the team.',
//             objectives: 'My goals in the area are to participate in innovative projects, with architect profile' +
//             ' or technical leader for development of back-end, front-end, mobile and desktop systems.',
//         });
//         this.profile.setAvatar('https://avatars2.githubusercontent.com/u/906710?s=460&v=4');
//         this.education = [
//             new Education('Game Development', 'College degree', 'UDF', '2012')
//         ];
//         this.certificates = [
//             new Certificate('Zend Certified Engineer PHP 5', 'http://www.zend.com/en/yellow-pages/ZEND007838')
//         ];
//         this.techInfo = [
//             // Langs
//             new TechInfo('PHP', 90),
//             new TechInfo('TypeScript', 85),
//             new TechInfo('ObjectiveC', 85),
//             new TechInfo('NodeJs', 45),
//             new TechInfo('RequireJS', 45),
//             new TechInfo('Swift', 20),
//             new TechInfo('Python', 25),
//             new TechInfo('ActionScript 2/3', 60),
//             // Platforms
//             new TechInfo('ReactNative', 55),
//             new TechInfo('Electron', 70),
//             new TechInfo('Cordova/Phonegap', 70),
//             new TechInfo('Docker', 80),
//             new TechInfo('DockerCompose', 80),
//             new TechInfo('Redis', 50),
//             new TechInfo('ElasticSearch', 30),
//             new TechInfo('Linux', 90),
//             // Frameworks
//             new TechInfo('Laravel', 90),
//             new TechInfo('Lumen', 80),
//             new TechInfo('Slim Framework 2/3', 70),
//             new TechInfo('ZendFramework 1/2', 80),
//             new TechInfo('Symfony 2/3', 70),
//             new TechInfo('Angular 1/2/6', 90),
//             new TechInfo('Ionic 1/2/3', 80),
//             new TechInfo('Express.js', 40),
//             // Views
//             new TechInfo('jQuery', 90),
//             new TechInfo('Vue.js', 50),
//             new TechInfo('Twig', 70),
//             new TechInfo('Blade', 80),
//             new TechInfo('Bootstrap 3/4', 90),
//             new TechInfo('Materialize', 90),
//             new TechInfo('Vuetify', 50),
//             // Databases
//             new TechInfo('PostgreSQL', 90),
//             new TechInfo('Oracle', 90),
//             new TechInfo('MySQL', 90),
//             new TechInfo('SqLite', 90),
//             new TechInfo('BRS/Search', 90),
//             // Social
//             new TechInfo('Google API', 70),
//             new TechInfo('Telegram BOT API', 70),
//             new TechInfo('Facebook/Instagram API', 70),
//             new TechInfo('Firebase API', 70),
//             new TechInfo('Azure API', 30),
//             // Webservers
//             new TechInfo('Apache', 90),
//             new TechInfo('Nginx', 90),
//             // VCS
//             new TechInfo('GIT', 85),
//             new TechInfo('SVN', 90),
//         ];
//     }
// }

export class Curriculum {
    constructor(profile, education, certificates, techInfo, workHistory) {
        this.profile = profile;
        this.education = education;
        this.certificates = certificates;
        this.techInfo = techInfo;
        this.workHistory = workHistory;
    }
}

export class Profile {
    constructor(data) {
        this.name = data.name;
        this.email = data.email;
        this.phone = data.phone;
        this.role = data.role;
        this.site = data.site;
        this.github = data.github;
        this.linkedin = data.linkedin;
        this.description = data.description;
        this.objectives = data.objectives;
        this.avatar = this.setAvatar(data.avatar);
    }

    setAvatar(image, isLocal) {
        if (isLocal) {
            this.avatar = image;
        } else {
            this.avatar = image;
        }
    }
}

export class Education {
    constructor(_title, _degree, _school, _year) {
        this.title = _title;
        this.degree = _degree;
        this.school = _school;
        this.year = _year;
    }
}

export class Certificate {
    constructor(_name, _url) {
        this.name = _name;
        this.url = _url;
    }
}

export class TechInfo {
    constructor(_name, _percent) {
        this.name = _name;
        this.percent = _percent;
    }
}

export class WorkHistory {
    constructor() {

    }
}
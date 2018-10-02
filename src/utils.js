export class Curriculum {
    constructor(profile, education, certificates, techInfo, workHistory) {
        this.profile = profile || {};
        this.education = education || {};
        this.certificates = certificates || {};
        this.techInfo = techInfo || {};
        this.workHistory = workHistory || {};
    }
}

export class Profile {
    constructor(data) {
        this.name = data.name || '';
        this.email = data.email || '';
        this.phone = data.phone || '';
        this.role = data.role || '';
        this.site = data.site || '';
        this.github = data.github || '';
        this.linkedin = data.linkedin || '';
        this.description = data.description || '';
        this.objectives = data.objectives || '';
        this.avatar = data.avatar;
    }
}

export class Education {
    constructor(title, degree, school, year) {
        this.title = title;
        this.degree = degree;
        this.school = school;
        this.year = year;
    }
}

export class Certificate {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}

export class TechInfo {
    constructor(name, percent) {
        this.name = name;
        this.percent = percent;
    }
}

export class WorkHistory {
    constructor(company, client, role, from, to, tags, url) {
        this.company = company;
        this.client = client;
        this.role = role;
        this.from = from;
        this.to = to;
        this.tags = tags;
        this.url = url;
    }
}
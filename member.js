function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['js', 'html', 'css'],
        salary: 2000,
        bonus: 100,
        getSalary: function () {
            return this.salary + this.bonus;
        },
        setSalary: function (value) {
            this.salary = value;
        },
        getSkills: function () {
            return this.skills;
        },
        addSkill: function (skill) {
            this.skills.push(skill);
        },
        removeSkill: function (skill) {
            this.skills.splice(this.skills.indexOf(skill), 1);
        }
    };
    return member;
}
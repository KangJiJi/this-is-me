class User {
  constructor({
    avatarImage = "",
    name = "",
    nickName = "",
    greeting = "",
    educationList = [],
    contactList = [],
    skillList = [],
    license = [],
  }) {
    this._avatarImage = avatarImage;
    this._name = name;
    this._nickName = nickName;
    this._greeting = greeting;
    this._educationList = educationList;
    this._contactList = contactList;
    this._skillList = skillList;
    this._license = license;
  }

  getAvatarImage() {
    return this._avatarImage;
  }

  getName() {
    return this._name;
  }

  getNickName() {
    return this._nickName;
  }

  getGreeting() {
    return this._greeting;
  }

  getEducation() {
    return this._educationList;
  }

  getContactList() {
    return this._contactList;
  }

  getSkillList() {
    return this._skillList;
  }

  getLicense() {
    return this._license;
  }
}

export default User;

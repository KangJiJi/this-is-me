import User from "./index";

class UserBuilder {
  avatarImage(newAvatarImage) {
    this._avatarImage = newAvatarImage;
    return this;
  }

  name(newName) {
    this._name = newName;
    return this;
  }

  nickName(newNickName) {
    this._nickName = newNickName;
    return this;
  }

  greeting(newGreeting) {
    this._greeting = newGreeting;
    return this;
  }

  educationList(newEducation) {
    this._education = newEducation;
    return this;
  }

  contactList(newContactList) {
    this._contactList = newContactList;
    return this;
  }

  skillList(newSkillList) {
    this._skillList = newSkillList;
    return this;
  }

  license(newLicense) {
    this._license = newLicense;
    return this;
  }

  build() {
    return new User({
      avatarImage: this._avatarImage,
      name: this._name,
      nickName: this._nickName,
      greeting: this._greeting,
      educationList: this._education,
      contactList: this._contactList,
      skillList: this._skillList,
      license: this._license,
    });
  }
}

export default UserBuilder;

export default class PswValidator {
  constructor(psw) {
    this.psw = psw;
  }

  hasValidLength() {
    return this.psw.length >= 8;
  }

  hasUpperCase() {
    return /[A-Z]/.test(this.psw);
  }

  hasLowerCase() {
    return /[a-z]/.test(this.psw);
  }

  hasNumber() {
    return /[0-9]/.test(this.psw);
  }

  hasSpecialChar() {
    return this.psw.match(/[^a-zA-Z0-9]/g);
  }
}

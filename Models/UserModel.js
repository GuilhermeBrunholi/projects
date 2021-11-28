const uuidv4 = require('uuid').v4;
const dayjs = require('dayjs');

class UserModel {
    constructor(Id = null, Name, BirthDate, Email, Password, Active = true, CreatedAt = null, DisabledAt = null) {
        this.Id = Id == null ? uuidv4() : Id;
        this.Name = Name.toUpperCase();
        this.BirthDate = dayjs(BirthDate).format(`YYYY-MM-DD`);
        this.Email = Email;
        this.Password = Password;
        this.Active = Active;
        this.CreatedAt = CreatedAt == null ? dayjs().format(`YYYY-MM-DD HH:mm:ss`) : CreatedAt;
        this.DisabledAt = Active ? DisabledAt : dayjs().format(`YYYY-MM-DD HH:mm:ss`);
    }
}

module.exports = UserModel;
function toSaveUser(user) {
    user.Id = `'${user.Id}'`;
    user.Name = `'${user.Name}'`;
    user.BirthDate = `'${user.BirthDate}'`;
    user.Email = `'${user.Email}'`;
    user.Password = `'${user.Password}'`;
    user.Active = user.Active.toString().toUpperCase() == "TRUE" ? 1 : 0;
    user.CreatedAt = `'${user.CreatedAt}'`;
    user.DisabledAt = `${user.DisabledAt}`;

    return user;
}

module.exports = { toSaveUser };
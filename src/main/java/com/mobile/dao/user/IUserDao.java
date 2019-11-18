package com.mobile.dao.user;

import com.mobile.model.user.User;

public interface IUserDao {
    User selectUser(long id);

    User selectUserByName(String uname);

    int insertUser(User user);
}

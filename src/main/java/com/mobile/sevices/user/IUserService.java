package com.mobile.sevices.user;

import com.mobile.model.user.User;

public interface IUserService {

    public User selectUser(long userId);

    public User selectUserByName(String uname);

    public int insertUser(User user);

}

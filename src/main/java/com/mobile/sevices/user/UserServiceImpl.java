package com.mobile.sevices.user;

import com.mobile.dao.user.IUserDao;
import com.mobile.model.user.User;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("userService")
public class UserServiceImpl implements IUserService {

    @Resource
    private IUserDao userDao;

    @Override
    public int insertUser(User user) {
        return userDao.insertUser(user);
    }

    public User selectUser(long userId) {
        return userDao.selectUser(userId);
    }

    @Override
    public User selectUserByName(String uname) {
        return userDao.selectUserByName(uname);
    }
}

package com.mobile.controller.user;

import com.mobile.base.BaseController;
import com.mobile.model.user.User;
import com.mobile.sevices.user.IUserService;
import com.mobile.utils.Constant;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


@RestController
@RequestMapping("/user")
public class UserController extends BaseController {
    Logger logger = Logger.getLogger(UserController.class);

    @Autowired
    private IUserService userService;

    /**
     * 登陆
     *
     * @param modle
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/login", method = {RequestMethod.POST}, produces = "application/json;charset=utf-8")
    public String Login(User modle) throws Exception {
        if (modle == null) {
            return retContent(Constant.BadRequest);
        } else {
            User user = userService.selectUserByName(modle.getUname());
            if (user == null) {
                return retContent(Constant.USER_NOT_EXIT);
            } else {
                if (user.getPassword().equals(modle.getPassword())) {
                    return retContent(Constant.Success, user);
                } else {
                    return retContent(Constant.ERROR_USER_PASSWORD);
                }
            }
        }
    }

    /**
     * 前后端交互 页面跳转刚在后端 个人觉得不太好，耦合度太高
     *
     * @param user
     * @return
     */
    @RequestMapping(value = "/toRegister")
    public ModelAndView toRegister(User user) {
        return new ModelAndView("/front/regist");
    }

    /**
     * 注册
     *
     * @param user
     * @return
     */
    @RequestMapping(value = "/register", method = {RequestMethod.POST}, produces = "application/json;charset=utf-8")
    public String register(User user) {
        if (user == null) {
            return retContent(Constant.BadRequest);
        } else {
//            user.setPassword(MD5Utils.encode(user.getPassword()));
            User user1 = userService.selectUserByName(user.getUname());
            if (user1 == null) {
                userService.insertUser(user);
            }
            return retContent(Constant.Success, user);
        }
    }

    @RequestMapping(value = "/toIndex")
    public ModelAndView toIndex(User user) {
        return new ModelAndView("/front/index");
    }

    @RequestMapping("/select")
    public ModelAndView selectUser() throws Exception {
        ModelAndView mv = new ModelAndView();
        User user = userService.selectUser(1);
        mv.addObject("user", user);
        mv.setViewName("user");
        return mv;
    }

}

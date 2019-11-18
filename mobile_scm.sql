SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for book
-- ----------------------------
CREATE DATABASE /*!32312 IF NOT EXISTS*/`mobile_scm` /*!40100 DEFAULT CHARACTER SET utf8 */;
use `mobile_scm`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
                      `uid` int(11) NOT NULL AUTO_INCREMENT,
                      `job_id` int(11) NOT NULL ,
                      `uname` varchar(255) DEFAULT NULL,
                      `password` varchar(255) DEFAULT NULL,
                      `gender` varchar(255) DEFAULT NULL,
                      `technical` varchar(255) DEFAULT NULL,
                      `role` int(11) DEFAULT NULL,
                      `phone` varchar(255) DEFAULT NULL,
                      `email` varchar(255) DEFAULT NULL,
                      `adress` varchar(255) DEFAULT NULL,
                      PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
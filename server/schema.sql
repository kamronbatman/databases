CREATE DATABASE chat;

USE chat;

CREATE TABLE `messages` (
  `messageid` INT NOT NULL AUTO_INCREMENT,
  `userid` INT NOT NULL,
  `roomid` INT NOT NULL,
  `text` varchar(280),
  `createdAt` TIMESTAMP NOT NULL,
  `modifiedAt` TIMESTAMP NOT NULL,
  PRIMARY KEY (`messageid`)
);

CREATE TABLE `users` (
  `userid` INT NOT NULL AUTO_INCREMENT,
  `username` varchar(26) NOT NULL UNIQUE,
  PRIMARY KEY (`userid`)
);

CREATE TABLE `rooms` (
  `roomid` INT NOT NULL AUTO_INCREMENT,
  `roomname` varchar(26) NOT NULL UNIQUE,
  PRIMARY KEY (`roomid`)
);
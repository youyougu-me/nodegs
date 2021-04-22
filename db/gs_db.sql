/*
 Navicat Premium Data Transfer

 Source Server         : gstest
 Source Server Type    : MongoDB
 Source Server Version : 40201
 Source Host           : localhost:27017
 Source Schema         : gs_db

 Target Server Type    : MongoDB
 Target Server Version : 40201
 File Encoding         : 65001

 Date: 22/04/2021 08:55:44
*/


// ----------------------------
// Collection structure for allcompanys
// ----------------------------
db.getCollection("allcompanys").drop();
db.createCollection("allcompanys");
db.getCollection("allcompanys").createIndex({
    company: NumberInt("1")
}, {
    name: "company"
});

// ----------------------------
// Documents of allcompanys
// ----------------------------
db.getCollection("allcompanys").insert([ {
    _id: ObjectId("605993e335d5633554006f47"),
    companyname: "重庆蓝账有限公司"
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");
db.getCollection("users").createIndex({
    email: NumberInt("1")
}, {
    name: "email_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("6059afbb7e52d73d2ca24983"),
    date: ISODate("2021-03-23T09:04:49.997Z"),
    email: "945029149@qq.com",
    username: "谷双",
    password: "123456",
    companyname: "重庆蓝账有限公司",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("605da45e529f28f1a8b714cf"),
    date: ISODate("2021-03-26T08:34:33.315Z"),
    email: "945029148@qq.com",
    username: "张三丰",
    password: "123456",
    companyname: "重庆蓝账有限公司",
    __v: NumberInt("0")
} ]);

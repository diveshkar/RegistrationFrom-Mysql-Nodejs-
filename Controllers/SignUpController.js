const express = require('express');
const bcrypt = require('bcryptjs');
const { hashPassword } = require('../helper');
const User = require('../Model/SignUpModel');

const router = express.Router();

router.post('/Signup', async (req, res) => {
  try {
    console.log(req.body);
    const existUser = await User.findOne({ where: { UserEmail: req.body.uemail } });

    if (existUser) {
      return res.status(400).json('Email already exists');
    }

    const hashPwd = await hashPassword(req.body.upass);
    const userData = {
      UserName: req.body.uname,
      UserEmail: req.body.uemail,
      UserPassword: hashPwd,
      UserType: req.body.utype,
    };

    const user = await User.create(userData);

    if (user) {
      return res.status(200).json('Registered successfully');
    }
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json('Email or UserType already exists');
    }
    return res.status(400).json(err);
  }
});

module.exports = router;

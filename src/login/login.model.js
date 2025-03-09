'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const errorBuilder = require('../commons/error-builder');

const userModel = require('../user/user.model');
const { KEY } = require('../config/global');

const COURSE = "Nodejs Feb 2025";
const UNAUTHORIZED = 'unauthorized';

async function validate(data) {
  try {
    const { username, password } = data;
    const users = await userModel.findByUserName(username);
    const isValid = await bcrypt.compare(password, users[0].password);
    
    if(isValid) {
      const token = createToken();
      return token;
    }
    throw errorBuilder.build(
      UNAUTHORIZED,
      {
        name: UNAUTHORIZED,
        message: `The ${username} or ${password} was wrong!!`
      }
    ) 
  } catch(err) {
    throw err;
  }
}

function createToken(){
  const token = jwt.sign(
    { course: COURSE },
    'nodejs2025',
    { expiresIn: 60*5 }
  );
  return token
}

module.exports = {
  validate
}
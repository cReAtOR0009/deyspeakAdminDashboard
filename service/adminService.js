const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../database/models/userModel");
const { formatMongoData, checkObjectId } =  require("../utils/formatMongoData");
const constantResponses = require("../constants/index");


module.exports.loginAdmin = async ({email, password}) => {
    try {
        const user = await User.findOne({email});

        if (!user || user.role !== 2) {
            throw new Error(constantResponses.adminMessage.ADMIN_UNAUTHORIZED);
        }

        const validatePassword =await bcrypt.compare(password, user.password);

        if(!validatePassword) {
            throw new Error(constantResponses.adminMessage.ADMIN_WRONG_PASSWORD);
        }; 

        const token = jwt.sign(
            {id: user.id, role: user.role},
            process.env.SECRET_KEY || "my-secret",
            {expiresIn: "2d"}
        );
        
        return {token, userData: formatMongoData(user)};

    } catch (error) {
      console.log("something went wrong with AdminService: loginAdmin"); 
      throw new Error(error);
    }
}
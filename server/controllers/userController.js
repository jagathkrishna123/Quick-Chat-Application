import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/util.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";


//Signup a new user
export const signup = async (req, res) => {
    const { fullName, email, password, bio } = req.body;

    try {
        if (!fullName || !email || !password || !bio) {
            return res.json({ success: false, message: "Missing Details" })
        }
        const user = await User.findOne({ email })

        if (user) {
            return res.json({ success: false, message: "Account alredy exists" })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            fullName, email, password: hashedPassword, bio
        })

        const token = generateToken(newUser._id)
        res.json({ success: true, userData: newUser, token, message: "Account created Successfully" })
    } catch (error) {
        console.error("Detailed Error in updatedProfile:", error);
        if (error.http_code) {
           console.error("Cloudinary Error Code:", error.http_code);
        }

        res.json({ success: false, message: error.message })
    }
}



// Controller to login a user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await User.findOne({ email })

        const isPasswordCorrect = await bcrypt.compare(password, userData.password);

        if (!isPasswordCorrect) {
            return res.json({ success: false, message: "Invalid credentails" })
        }

        const token = generateToken(userData._id)
        res.json({ success: true, userData, token, message: "Login Successfull" })

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}





// Controller to check if the user is authenticated 
export const checkAuth = (req, res) => {
    res.json({ sucess: true, user: req.user });
}

// Controller to update user profile details
export const updatedProfile = async (req, res) => {
    try {
        const { profilePic, bio, fullName } = req.body;
        const userId = req.user._id;
        let updatedUser;

        if (!profilePic) {
            console.log("No profilePic provided, updating bio/fullName only");
            updatedUser = await User.findByIdAndUpdate(userId, { bio, fullName }, { new: true })
        } else {
            console.log("Uploading profilePic to Cloudinary...");
            console.log("profilePic preview:", profilePic.slice(0, 50) + "...");
          const upload = await cloudinary.uploader.upload(
  "https://res.cloudinary.com/demo/image/upload/sample.jpg"
);

console.log(upload);
            console.log("Cloudinary upload successful:", upload.secure_url);

            updatedUser = await User.findByIdAndUpdate(userId, { profilePic: upload.secure_url, bio, fullName }, { new: true })
        }
        res.json({ success: true, user: updatedUser })
    } catch (error) {
    // ✅ PUT IT HERE (replace your old catch)
    console.log("FULL ERROR:", error);
    console.log("Cloudinary response:", error?.response?.data);

    res.json({ success: false, message: error.message });
  }
}
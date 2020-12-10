import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
},
{
    timstamps: true,
});

export default mongoose.model("User", userSchema)
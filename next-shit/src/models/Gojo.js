import mongoose from "mongoose";

const gojoSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    father: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
})

const Gojo = mongoose.models.Gojo || mongoose.model('Gojo', gojoSchema)
export default Gojo
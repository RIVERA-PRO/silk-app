import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    publicacion_id: { type: mongoose.Types.ObjectId, ref: 'publicacion' },
    user_id: { type: mongoose.Types.ObjectId, required: true, ref: 'users' },
    like: { type: Number, required: true },
}, { timestamps: true });

const Like = mongoose.model('like', likeSchema); // Cambiar 'comment' a 'like'

export default Like;

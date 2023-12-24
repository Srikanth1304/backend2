import mongoose from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';
const videoSchema=new mongoose.Schema({
    videofile:{
        type:String,
        requried:true,
    },
    thumbnail:{
        type:String,
        requried:true,
    },
    title:{
        type:String,
        requried:true,
    },
    description:{
        type:String,
        requried:true,
    },
    duration:{
        type:Number,
        requried:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owener:{
        type:Schema.Type.ObjectId,
        ref:'User'
    }
},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video=mongoose.model('Video',videoSchema);
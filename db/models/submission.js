import { Mongoose } from 'mongoose'

const submissionSchema = new Mongoose.Schema({
  course_name: {
    type: String,
    required: true
  },
  course_id: {
    type: Number,
    required: true,
    default: 0
  },
  std_name: {
    type: String,
    required: true
  },
  std_id: {
    type: Number,
    required: true,
    default: 0
  },
  address: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  author_id: {
    type: String,
    required: true,
    default: 0
  },
  submission_time:{
    type:Number,
    required:true,
    default:1
  },
  transaction_hash:{
    type:String,
    required:true
  },
  content:{
    type:Buffer,
    required:true,
  },
  marks:{
      type:Number,
      required:true,
      default:0
  }

})

export default Mongoose.model('Submission', submissionSchema)
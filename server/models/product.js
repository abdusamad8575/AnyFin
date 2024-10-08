const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    subheading: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Category"
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String
    },
    tags: {
        type: String,
        enum: ["featured", "popular", "limited_time_deal", "most_loved"]
    },
    price: {
        type: Number,
    },
    type1: {
        type: Number
    },
    type2: {
        type: Number
    },
    type3: {
        type: Number
    },
    stock: {
        type: Number,
    },
    discount: {
        type: Number,
    },
    sale_rate: {
        type: Number,
    },
    image: {
        type: Array,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    rating: {
        type: Number,
        default: 0
    },
    reviews: {
        type: Array
    }
},
    {
        timestamps: true
    })
module.exports = mongoose.model('Product', productSchema)
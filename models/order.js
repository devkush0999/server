const ItemSchema = new Schema({
    product:{
        type: mongoose.Schema.Type.ObjectId,
        ref: 'Product',
        required:true,
    },
    quantity:{ type:Number,required:true},
});

const OrderSchema = new Schema({
    user: {
        type: mongoose.Schema.Type.ObjectId,
        ref: 'User',
        required:true,
    },
    deliveryDate: {type:Date, required: true},
    address:{type:String},
    items:{type:[ItemSchema], required: true},
    status:{type:String, enum:[
        "Order Placed",
        "Shipping",
        "Delivered",
        "Cancelled",
        "Out for Delivery"
    ], default: "Order Placed", required: true},
    createdAt:{type:Date, default: Date.now},
    updatedAt:{type:Date, default: Date.now},
});
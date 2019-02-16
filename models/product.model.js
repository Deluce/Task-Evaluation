const mongoose = require('mongoose');
	  Schema = mongoose.Schema;

//customer validators for numbers
function isPositive (val) {
	return val > 0;
}

//validators for strings
function isOption (str) {
	optionList = ['Pending List', 'Available', 'Item Sold',
	 			  'Pending Payment', 'Seller Payout Completed'];
	return optionList.indexOf(str) >= 0; 
}

function isCondition (str) {
	conditionList = ['New', 'Old'];
	return conditionList.indexOf(str) >= 0;
}

function isPayMethod (str) {
	paymethodList = ['Wiretransfer', 'Cash', 'Paypal', 'Cheque', 'Credit Card'];
	return paymethodList.indexOf(str) >= 0;
}

//declaraion of schema
let ProductSchema = new Schema({
    status: {
        type: String,
        required: true,
        validate: {
            validator: isOption,
            message: 'Invalid Status'
        }
    },
    SKU: {
        type: Number,
        required: true,
        length: 6
    },
    condition: {
        type: String,
        required: true,
        validate: {
            validator: isCondition,
            message: 'Invalid Condition'
        }
    },
    client_code: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model_num: {
        type: String,
        required: true
    },
    dimensions: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            validator: isPositive,
            message: 'Invalid Weight'
        }
    },
    quantity: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            validator: isPositive,
            message: 'Invalid Quantity'
        }
    },
    title: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 64
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: 10
    },
    images: {
        data: Buffer,
        contentType: String,
        /*max: 10*/
    }, // not yet able to limit images
    listed_price: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            validator: isPositive,
            message: 'Invalid Listed Price'
        }
    },
    selling_price: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            validator: isPositive,
            message: 'Invalid Selling Price'
        }
    },
    reserve: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            validator: isPositive,
            message: 'Invalid Reservation Number'
        }
    },
    location: {
        type: String,
        required: true
    },
    payment_method: {
        type: String,
        required: true,
        validate: {
            validator: isPayMethod,
            message: 'Invalid Payment Method'
        }
    },
    transaction_details: {
        type: String,
        required: true
    },
    amount_received: {
        type: String,
        required: true
    },
});
//Export the model
module.exports = mongoose.model('Product', ProductSchema);
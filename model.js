var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// (Tim) I believe we need to export the model this way: 
//module.exports = {
//     key: value,
//     key: value
// };

var dbSchema = new Schema({
    isTeacher: {
        type: Boolean,
        default: false,
        required: true
    },

    teacherIs: {
        type: String,
        trim: true,
       //required: true
        //dropdown
    },

    firstName: {
        type: String,
        trim: true,
        required: true
    },

    lastName: {
        type: String,
        trim: true,
        required: true
    },

    class:

        [
            {
                className: {
                    type: String
                },

                time: {
                    type: Date
                }
            }
        ],

    isRegistered: {
        type: Boolean,
        default: false
    },

    tuition: {
        type: Number,
        trim: true
    },

    tuitionOwed: {
        type: Number,
        //calculated
    },

    // schedule: {
    //     type: Date,
    // },
    // date: {
    //     type: Date,
    //     default: Date.now
    // },

    // time: {
    //     type: Number
    // },


    emailid: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: true
    },

    password: {
        type: Schema.Types.Mixed,
        trim: true,
        validate: [
            function (input) {
                return input.length >= 6;
            },
            // Error Message
            "Password should be at least 6 characters in length."
        ]
    }
});

// This creates our model from the above schema, using mongoose's model method
var model = mongoose.model("Example", dbSchema);

// Export the Example model
module.exports = model;


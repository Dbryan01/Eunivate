import mongoose from 'mongoose';

const QuotationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    company: {
        type: String, 
        
    },
    service: {
        type: String,
        required: true
    },

    serviceDescription: {
        type: String,
    },

    budget: {
        type:  String,
        required: true
    },
    additionalInfo: {
        type: String,
    },
    verified:{
        type:Boolean,
        default: false
    },
}, {
    timestamps: true, 
});


const Quotation = mongoose.model('Quotation', QuotationSchema);

export default Quotation;

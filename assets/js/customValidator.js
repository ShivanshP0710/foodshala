$(document).ready(function(){
//customer_register
    $(".customer_register").validate({
        rules: {
            eName: {
                required: true
            },
            eEmail: {
                required: true,
                email: true
            },
            ePassword: {
                minlength: 7,
                required: true
            },
            ePhoneNo: {
                minlength: 10,
                maxlength: 10,
                required: true
            },
            eAddress: {
                required: true
            },
        },
        success: function(element){
            element
            .text('OK!').addClass('valid');
        }
    });
// restaurant_register
    $(".restaurant_register").validate({
        rules: {
            eName: {
                required: true
            },
            eOName: {
                required: true
            },
            eEmail: {
                required: true,
                email: true
            },
            ePassword: {
                minlength: 7,
                required: true
            },
            ePhoneNo: {
                minlength: 10,
                maxlength: 10,
                required: true
            },
            eOpenTime: {
                required: true
            },
            eCertifiedBy: {
                required: true
            },
            eCertificationNo: {
                minlength: 14,
                maxlength: 14,
                required: true
            },
            eGSTNo: {
                minlength: 15,
                maxlength: 15,
                required: true
            },
            eAddress: {
                required: true
            },
            eEML: {
                required: true
            },
        },
        success: function(element){
            element
            .text('OK!').addClass('valid');
        }
    });
});
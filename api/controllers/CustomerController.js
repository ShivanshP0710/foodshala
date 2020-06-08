/**
 * CustomerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    customerRegister:function(req,res)
    {
        res.view('pages/customerRegister');   
    },

    cCreate:function(req,res)
    {
            let name = req.body.eName;
            let prt = req.body.ePRT;
            let email = req.body.eEmail;
            let password = req.body.ePassword;
            let phoneNo = req.body.ePhoneNo;
            let address = req.body.eAddress;
            console.log("in cCreate");
            Customer.create({Customer_Name:name,Prefered_Restaurant_Type:prt,Customer_Email:email,Customer_Password:password,Customer_PhoneNo:phoneNo,Customer_Address:address}).exec(function(err){
                if(err)
                {
                    //res.send(500,'Database Error');
                    console.log(err);
                    req.session.flash={
                        err:"Customer Already Registered with the Entered Email Id"
                    }
                    res.redirect('/pages/customerRegister');
                } 
                else
                {
                    console.log("Added");
                    req.session.flash={
                        err:"Customer Added Successfully"
                    }
                    res.redirect('/pages/customerRegister');
                }
            });
    },

    customerLogin:function(req,res)
    {
        res.view('pages/customerLogin');   
    },

    cLoginCheck:function(req,res){
        let lEmail = req.body.eLEmail;
        console.log(lEmail);        
        let lPassword = req.body.eLPassword;
        console.log(lPassword);
        Customer.findOne({Customer_Email:lEmail, Customer_Password:lPassword }).exec(function(err,cLCheck){
            if(err || !cLCheck){
                req.session.flash={
                    err:"Invalid Email Id / Password"
                }
                console.log('in if');
                res.redirect('/pages/customerLogin');
            }
            else{
                // var oldDateObj = new Date();
                // var newDateObj = new Date(oldDateObj.getTime() + 60000);
                // req.session.cookie.expires = newDateObj;
                //req.session.authenticated=true;
                req.session.loggedCustomer=true;
                req.session.customer=cLCheck.Customer_Name;
                req.session.customerDetails=cLCheck;
                console.log(req.session.customerDetails);
                console.log(req.session);
                res.view('pages/index', {cLCheck:cLCheck});
            }
        });
    },

};


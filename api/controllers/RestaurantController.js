/**
 * RestaurantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    restaurantRegister:function(req,res)
    {
        res.view('pages/restaurantRegister');   
    },

    rCreate:function(req,res)
    {
            let name = req.body.eName;
            let oname = req.body.eOName;
            let prt = req.body.ePRT;
            let email = req.body.eEmail;
            let password = req.body.ePassword;
            let phoneNo = req.body.ePhoneNo;
            let openTime = req.body.eOpenTime;
            let certifiedBy = req.body.eCertifiedBy;
            let certificationNo = req.body.eCertificationNo;
            let gstNo = req.body.eGSTNo;
            let address = req.body.eAddress;
            let eml = req.body.eEML;
            let facebook = req.body.eFacebook;
            let twitter = req.body.eTwitter;
            let linkedIn = req.body.eLinkedIn;
            let instagram = req.body.eInstagram;
            console.log("in rCreate");
            Restaurant.create({Restaurant_Name:name,Owner_Name:oname,Prefered_Restaurant_Type:prt,Restaurant_Email:email,Restaurant_Password:password,Restaurant_PhoneNo:phoneNo,Open_Time:openTime,Certified_By:certifiedBy,Certitied_Licence_No:certificationNo,GSTNo:gstNo,Restaurant_Address:address,Embedded_Map_Link:eml,Facebook:facebook,Twitter:twitter,LinkedIn:linkedIn,Instagram:instagram}).exec(function(err){
                if(err)
                {
                    //res.send(500,'Database Error');
                    console.log(err);
                    req.session.flash={
                        err:"Restaurant Already Registered with the Entered Email Id or Name"
                    }
                    res.redirect('/pages/restaurantRegister');
                } 
                else
                {
                    console.log("Added");
                    req.session.flash={
                        err:"Restaurant Added Successfully"
                    }
                    res.redirect('/pages/restaurantRegister');
                }
            });
    },

    restaurantLogin:function(req,res)
    {
        res.view('pages/restaurantLogin');   
    },

    rLoginCheck:function(req,res){
        let lEmail = req.body.eLEmail;
        console.log(lEmail);        
        let lPassword = req.body.eLPassword;
        console.log(lPassword);
        Restaurant.findOne({Restaurant_Email:lEmail, Restaurant_Password:lPassword }).exec(function(err,rLCheck){
            if(err || !rLCheck){
                req.session.flash={
                    err:"Invalid Email Id / Password"
                }
                console.log('in if');
                res.redirect('/pages/restaurantLogin');
            }
            else{
                // var oldDateObj = new Date();
                // var newDateObj = new Date(oldDateObj.getTime() + 60000);
                // req.session.cookie.expires = newDateObj;
                //req.session.authenticated=true;
                req.session.loggedRestaurant=true;
                req.session.restaurantDetails=rLCheck;
                req.session.restaurantName=rLCheck.Restaurant_Name;
                console.log(req.session);
                res.view('pages/index', {rLCheck:rLCheck});
            }
        });
    },
};


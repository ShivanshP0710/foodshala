/**
 * CartController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const crypto = require('crypto');
module.exports = {
    
    shoppingCart:function(req,res)
    {
        if(req.session.loggedCustomer==true){
            let cname = req.session.customer;
            console.log(cname);
            console.log("in shoppingCart");
            Cart.find({Customer_Name:cname}).exec(function(err,fCData){
                console.log(fCData);
                if(err || !fCData)
                {
                    console.log("in if");
                    res.send(500, 'Database Error');
                }
                else{
                    console.log("in else"); 
                    res.view('pages/shopping-cart', {fCData:fCData});
                }  
            });          
        }
        else{
            res.redirect('/pages/customerLogin');
        }   
    },

    iAddToCart:function(req,res)
    {
        if(req.session.loggedCustomer==true){
            let cname = req.session.customer;
            console.log(cname);
            console.log("in iAddToCart");
            Items.findOne({id:req.params.id}).exec(function(err,fIData){
                console.log(fIData);
                if(err || !fIData)
                {
                    console.log("in if");
                    res.send(500, 'Database Error');
                }
                else{
                    console.log("in else");
                    let cname = req.session.customer;
                    console.log(cname);
                    let uID = crypto.randomBytes(2).toString('hex');            
                    console.log(uID);
                    Cart.create({CWIId:uID,Customer_Name:cname,Restaurant_Name:fIData.Restaurant_Name,Item_Name:fIData.Item_Name,Price:fIData.Price}).exec(function(err){
                        if(err)
                        {
                            res.send(500,'Item Already in Cart');
                            console.log(err);
                        } 
                        else
                        {           
                            console.log("Added");
                            res.redirect('/');
                        }
                    });
                }
            });
        }
        else{
            res.redirect('/pages/customerLogin');
        }
    },

    iDelete:function(req,res)
    {
        if(req.session.loggedCustomer==true){
            Cart.destroy({id:req.params.id}).exec(function(err){
                if(err){
                    res.send(500,'Database Error');
                }
                else
                { 
                    res.redirect('/pages/shopping-cart');
                }
            });
            return false;
        }
        else{
            res.redirect('/pages/customerLogin');
        }
    },

};


/**
 * OrdersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    checkOut:function(req,res)
    {
        if(req.session.loggedCustomer==true){
            console.log("in checkOut");
            let cDetails = req.session.customerDetails;
            console.log(cDetails);
            Cart.find({Customer_Name:req.params.custName}).exec(function(err,coData){
                console.log(coData);
                if(err || !coData)
                {
                    console.log("in if");
                    res.send(500, 'Database Error');
                }
                else{
                    console.log("in else");
                    res.view('pages/checkOut', {coData:coData});
                }
            });
        }
        else{
            res.redirect('/pages/customerLogin');
        }
    },

    createOrder:function(req,res)
    {
        if(req.session.loggedCustomer==true){
            let iDetails = req.body.eIDetails;
            console.log(iDetails);
            let rName = req.body.eRName;
            console.log(rName);
            let cName = req.body.eCName;
            console.log(cName);
            let cPhoneNo = req.body.eCPhoneNo;
            console.log(cPhoneNo);
            let cAddress = req.body.eCAddress;
            console.log(cAddress);
            let orderTotal = req.body.orderTotal;
            console.log("in createOrder");
            Orders.create({Items_with_Price:iDetails,Restaurant_Name:rName,Customer_Name:cName,Customer_PhoneNo:cPhoneNo,Customer_Address:cAddress,Order_Total:orderTotal}).exec(function(err){
                if(err)
                {
                    console.log(err);
                    res.send(500,'Database Error');
                } 
                else
                {
                    console.log("Added");
                    res.redirect('/');
                }
            });
        }
        else{
            res.redirect('/pages/customerLogin');
        }
    },

    viewOrders:function(req,res)
    {
        if(req.session.loggedRestaurant==true){
            console.log("in viewOrders");
            let rName = req.session.restaurantName;
            console.log(rName);
            Orders.find({Restaurant_Name:rName}).exec(function(err,voData){
                console.log(voData);
                if(err || !voData)
                {
                    console.log("in if");
                    res.send(500, 'Database Error');
                }
                else{
                    console.log("in else");
                    res.view('pages/viewOrders', {voData:voData});
                }
            });
        }
        else{
            res.redirect('/pages/restaurantLogin');
        }
    },

    oDelivered:function(req,res)
    {
        if(req.session.loggedRestaurant==true){
            Orders.destroy({id:req.params.id}).exec(function(err){
                if(err){
                    res.send(500,'Database Error');
                }
                else
                { 
                    res.redirect('/pages/viewOrders');
                }
            });
            return false;
        }
        else{
            res.redirect('/pages/restaurantLogin');
        }
    },

};


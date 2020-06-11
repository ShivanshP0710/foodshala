/**
 * OrdersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const crypto = require('crypto');
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
            Cart.find({Customer_Name:req.params.custName}).exec(function(err,cData){
                console.log(cData);
                if(err || !cData)
                {
                    console.log("in if");
                    res.send(500, 'Database Error');
                }
                else{
                    console.log("in else");
                    let RestaurantName =  "";
                    let all =  "";
                    var oTotal = 0;
                    cData.forEach(function(dbItemData){ 
                        RestaurantName =  dbItemData.Restaurant_Name; 
                        let data =  dbItemData.Item_Name + ":- Rs." + dbItemData.Price + ", " ;
                        all=all + data;
                        oTotal=parseInt(oTotal) + parseInt(dbItemData.Price);
                    });
                    let oID = crypto.randomBytes(2).toString('hex');            
                    console.log(oID);
                    let dateObj = new Date();
                    let dateTimeObj = new Date(dateObj.getTime());
                    console.log(dateTimeObj);
                    let iDetails = all;
                    console.log(iDetails);
                    let rName = RestaurantName;
                    console.log(rName);
                    let cName = req.session.customerDetails.Customer_Name;
                    console.log(cName);
                    let cPhoneNo = req.body.eCPhoneNo;
                    console.log(cPhoneNo);
                    let cAddress = req.body.eCAddress;
                    console.log(cAddress);
                    let orderTotal = oTotal;
                    console.log(orderTotal);
                    console.log("in createOrder");
                    Orders.create({Order_Id:oID,Date_Time:dateTimeObj,Items_with_Price:iDetails,Restaurant_Name:rName,Customer_Name:cName,Customer_PhoneNo:cPhoneNo,Customer_Address:cAddress,Order_Total:orderTotal}).exec(function(err){
                        if(err)
                        {
                            console.log(err);
                            res.send(500,'Database Error');
                        } 
                        else
                        {
                            console.log("Added");
                            Cart.destroy({Customer_Name:req.params.custName}).exec(function(err){
                                if(err){
                                    res.send(500,'Database Error');
                                }
                                else
                                {
                                    res.redirect('/pages/orderPlaced');
                                }
                            });
                            return false;
                        }
                    });
                }
            });
        }
        else{
            res.redirect('/pages/customerLogin');
        }
    },

    rViewOrders:function(req,res)
    {
        if(req.session.loggedRestaurant==true){
            console.log("in rViewOrders");
            Orders.find({Restaurant_Name:req.session.restaurantName}).exec(function(err,rVOData){
                console.log(rVOData);
                if(err || !rVOData)
                {
                    console.log("in if");
                    res.send(500, 'Database Error');
                }
                else{
                    console.log("in else");
                    res.view('pages/viewOrders', {rVOData:rVOData});
                }
            });
        }
        else{
            res.redirect('/pages/restaurantLogin');
        }
    },

    cViewOrders:function(req,res)
    {
        if(req.session.loggedCustomer==true){
            console.log("in cViewOrders");
            Orders.find({Customer_Name:req.session.customer}).exec(function(err,cVOData){
                console.log(cVOData);
                if(err || !cVOData)
                {
                    console.log("in if");
                    res.send(500, 'Database Error');
                }
                else{
                    console.log("in else");
                    res.view('pages/viewOrders', {cVOData:cVOData});
                }
            });
        }
        else{
            res.redirect('/pages/customerLogin');
        }
    },
    
    oChange:function(req,res)
    {
        if(req.session.loggedRestaurant==true || req.session.loggedCustomer==true){
            Orders.destroy({id:req.params.id}).exec(function(err){
                if(err){
                    res.send(500,'Database Error');
                }
                else
                { 
                    if(req.session.loggedRestaurant==true)
                    {
                        res.redirect('/pages/rViewOrders');
                    }
                    if(req.session.loggedCustomer==true)
                    {
                        res.redirect('/pages/cViewOrders');
                    }
                }
            });
            return false;
        }
        else{
            res.redirect('/');
        }
    },

    orderPlaced:function(req,res)
    {
        if(req.session.loggedCustomer==true)
        {
            res.view('pages/orderPlaced');
        }
        else
        {
            res.redirect('/pages/customerLogin');
        }   
    },

};


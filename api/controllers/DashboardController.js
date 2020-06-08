/**
 * DashboardController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    vegRestaurants:function(req,res)
    {
        Restaurant.find({Prefered_Restaurant_Type:'veg'}).exec(function(err,fetchedVegRestaurant){
        //Model (here we put query)         the data will be fetched in this 
            if(err || !fetchedVegRestaurant)
            {
                res.send(500, 'Database Error');
            }
            else
            {
                res.view('pages/vegRestaurants', {fetchedVegRestaurant:fetchedVegRestaurant});
            }
        });
    },

    nonVegRestaurants:function(req,res)
    {
        Restaurant.find({Prefered_Restaurant_Type:'non-veg'}).exec(function(err,fetchedNonVegRestaurant){
        //Model (here we put query)         the data will be fetched in this 
            if(err || !fetchedNonVegRestaurant)
            {
                res.send(500, 'Database Error');
            }
            else
            {
                res.view('pages/nonvegRestaurants', {fetchedNonVegRestaurant:fetchedNonVegRestaurant});
            }
        });
    },

    restaurantDetails:function(req,res)
    {
        console.log("in restaurantDetails");
        Restaurant.findOne({Restaurant_Name:req.params.rName}).exec(function(err,fData){
            console.log(fData);
            if(err || !fData)
            {
                console.log("in if");
                res.send(500, 'Database Error');
            }
            else{
                console.log("in else");
                res.view('pages/restaurantDetails', {fData:fData});
            }
        });
    },

    availableItems:function(req,res)
    {
        console.log("in availableItems");
        Items.find({Restaurant_Name:req.params.rName}).exec(function(err,iData){
            console.log(iData);
            if(err || !iData)
            {
                console.log("in if");
                res.send(500, 'Database Error');
            }
            else{
                console.log("in else");
                res.view('pages/availableItems', {iData:iData});
            }
        });
    },

    logout:function(req,res)
    {
        console.log("in logout");
        if(req.session.loggedRestaurant==true || req.session.loggedCustomer==true)
        {
            console.log("in logout");
            req.session.destroy();
            res.redirect('/');
        }
    }
};
/**
 * ItemsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    addItems:function(req,res)
    {
        if(req.session.loggedRestaurant==true){
            res.view('pages/addItems');
        }
        else{
            res.redirect('/pages/restaurantLogin');
        }   
    },

    iAdd:function(req,res)
    {
        if(req.session.loggedRestaurant==true){
            let rname = req.body.eRName;
            let iname = req.body.eIName;
            let price = req.body.ePrice;
            console.log("in iAdd");
            Items.create({Restaurant_Name:rname,Item_Name:iname,Price:price}).exec(function(err){
                if(err)
                {
                    //res.send(500,'Database Error');
                    console.log(err);
                    req.session.flash={
                        err:"Item Already Exists in the Restaurant List"
                    }
                    res.redirect('/pages/addItems');
                } 
                else
                {
                    console.log("Added");
                    req.session.flash={
                        err:"Item Added Successfully"
                    }
                    res.redirect('/pages/addItems');
                }
            });
        }
        else{
            res.send(404, 'Page Not Found');
        }
    },

    aiDelete:function(req,res)
    {
        if(req.session.loggedRestaurant==true){
            Items.destroy({id:req.params.id}).exec(function(err){
                if(err){
                    res.send(500,'Database Error');
                }
                else
                { 
                    res.redirect('/');
                }
            });
            return false;
        }
        else{
            res.send(404, 'Page Not Found');
        }
    },

};


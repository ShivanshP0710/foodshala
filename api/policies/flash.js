module.exports = function(req,res,next){
    res.locals.flash = {};
    // first we create a blank object

    if(!req.session.flash) return next();
    // if req.session.flash does not exist
    
    res.locals.flash = _.clone(req.session.flash);
    // if req.session.flash exist we will generate a copy of it and assign it to res.locals.flash using _.clone(----//----);
    
    req.session.flash = {};
    // Now we are going to clear req.session.flash by assigning a blank object to it.

    next();
    // Now again we are giving the control to next();
}
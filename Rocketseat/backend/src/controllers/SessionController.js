const User =require('../models/User')
//index(listagem de sessoes), show(uma unica), store(criar uma sessao), update, destroy

module.exports ={
    async store(req,res){
        
        const {email} =req.body;

        let user = await User.findOne({email});

        if(!user){
            user = await User.create({email})
        }

        return res.json(user);
    },
    async show(req,res){
        const {user_id}= req.params
        const users = await User.findOne({id :user_id});
        return res.json(users)
    }
};
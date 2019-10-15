const User =require('../models/User')
//index(listagem de sessoes), show(uma unica), store(criar uma sessao), update, destroy

module.exports ={
    async store(req,res){
        // return res.json({ message :'Hello World'})
        const {email} =req.body;

        let user = await User.findOne({email});

        if(!user){
            user = await User.create({email})
        }

        // const user = await User.create({email})
        return res.json(user);
    }
};
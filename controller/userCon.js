const User = require('../model/user')


const getData = async(req,res)=>{
    let live;
    try{
        live = await User.find()
    }
    catch(err){
        console.log(err)
    }
    if(!live){
        return res.status(404).json({message:'data not fund'})
    }
    return res.status(200).json({live})
}
const postData = async(req,res) => {
               
    const {name,email} = req.body;
    let livewire;
    try{
        livewire = new User({
            name,
            email
        })
        await livewire.save()
    }
    catch(err){
        console.log(err)
    }
    if(!livewire){
        return res.status(500).json({message:'not insert'})
    }
    return res.status(201).json({livewire})
}
exports.getData = getData;
exports.postData = postData;
const mongoose= require('mongoose')

try{mongoose.connect('mongodb+srv://rohan:xTdUls8uu2VIfFYx@cluster0.qjvy7b4.mongodb.net/HELLSHOP?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
).then(()=>{
    console.warn('database connected')
})}
catch(e){
    console.error(e)
}
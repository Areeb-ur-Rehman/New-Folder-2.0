// block start
const exprees=require('express')

// block end


const express=require('express')
const loadvariable=require('./configration/loadvariable')


// BLOCK START INITLIZATION
const app=exprees()
app.use(express.urlencoded ({extended:true}))
const PORT=process.env.PORT

// //Start Block Setting th Headers for your Application
app.all('*', (req,res, next)=>{
    console.log(req.body)
    // protect api
    res.header('Access-Control-Allow-Origin','*')
}
)

// port messag
app.listen(PORT,()=>{
    console.log('your port is ${PORT}' )
    console.log(process.env)
})
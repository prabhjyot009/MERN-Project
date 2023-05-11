const app=require("./app")
const dotenv=require("dotenv")

//providing path:
dotenv.config({path:"backend/config/config.env"})
//adding listen server
app.listen(process.env.PORT,()=>{
    console.log(`Server is working on"http://localhost:$(process.env.PORT)"`)                  
})
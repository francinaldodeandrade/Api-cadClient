import {sendWhatsappMessage} from "../models/twilioSchema.js"
 
 app.post(`${route_post_twilio}`, async(req, res) =>{
     const {to, body} = req.body
     try {
         
         await sendWhatsappMessage(to, body)
         res.status(200).json({success:true})
        
         
 
     }catch (error){
         res.status(500).json({success:false, error})
     }
 })
 
 app.post(`${route_get_localHost}`, async (req, res) => {
     const twilioRequestBody = req.body
     const messageBody = twilioRequestBody.Body
     const to = twilioRequestBody.From
 
     try {
         //const complitionChaBot = await getOpenAICompletion(messageBody)
 
         await sendWhatsappMessage(to, messageBody)
         res.status(200).json({success: true, messageBody
         })
     } catch (error) {
         res.status(500).json({success: false, error})
     }
 })

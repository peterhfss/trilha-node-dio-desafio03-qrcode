import prompt from 'prompt';
import qr from 'qrcode-terminal';

export async function createQRCode(){

    let link:string;

    const schemaPromptQRCode = {
        name:'url',
        message:'Please enter your link to generate a QR code',
    }

    prompt.start();
    
    prompt.get(schemaPromptQRCode, (err, result)=>{
        if(err){
            console.log('error on application');
            return;
        }

        link = result.url as string;
        qr.generate(link,{small:true}, (qrcode)=>{
            console.log('QR Code generated with success:')
            console.log(qrcode)
        })
        
    });
    
    
}

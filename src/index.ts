import { createQRCode } from "./services/create-qrcode";
import prompt from 'prompt';

const mainPrompt = {
    name:'option',
    message:'Choose an option on the menu: \n 1 - Create a QR Code \n 2 - Quit ',
}

prompt.get(mainPrompt, (err, choose)=>{
    if (choose.option as number == 1) createQRCode();
    if (choose.option as number == 2) process.exit(0);
});

prompt.start();


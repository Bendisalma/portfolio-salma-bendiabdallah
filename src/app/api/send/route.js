import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend('re_WUntUR31_3LodQB6gMGQyH1PMS18j5uNu');



export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    console.log('Extracted data:', { email, subject, message }); 
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'bendi.salma@gmail.com',
      subject: `Sujet: ${subject}`,
      html: `${email} <br/><br/>${message}`

    });
    
   

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur lors de l'envoi de l'email." });
  }
}

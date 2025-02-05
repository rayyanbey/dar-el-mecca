import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const {
        firstName,
        lastName,
        email,
        telephone,
        address,
        city,
        package: selectedPackage,
        occupancy,
        message,
    } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'darelmecca94@gmail.com',
        subject: `New Booking Request from ${firstName} ${lastName}`,
        html: `
            <h2>New Booking Details</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telephone:</strong> ${telephone}</p>
            <p><strong>Address:</strong> ${address}, ${city}</p>
            <p><strong>Package:</strong> ${selectedPackage}</p>
            <p><strong>Occupancy:</strong> ${occupancy.join(', ')}</p>
            <p><strong>Message:</strong> ${message}</p>
        `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return NextResponse.json({
         message: 'Booking request sent successfully!',
         status:"success",
         data:info
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ 
        message: 'Failed to send email',
         status: 500 
        });
    }
}

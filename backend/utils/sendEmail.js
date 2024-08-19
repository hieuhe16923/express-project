import express from 'express';
import nodemailer from 'nodemailer';

const sendConfirmationEmail = async (booking) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'hieupche163923@fpt.edu.vn',
            pass: 'epeptaudzrdbovfa',
        },
    });

    const mailOptions = {
        from: 'hieupche163923@fpt.edu.vn',
        to: booking.userEmail,
        subject: 'Booking Confirmation',
        text: `Dear ${booking.fullName},\n\nYour booking for the tour "${booking.tourName}" has been confirmed.\n\nThank you for booking with us!\n\nBest regards,\nYour Company`,
    };

    await transporter.sendMail(mailOptions);
};

export default sendConfirmationEmail;

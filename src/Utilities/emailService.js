// emailService.js
import emailjs from '@emailjs/browser';

emailjs.init('wP1jjNoQdt6LiT4ZT');

export const sendEmail = (templateParams) => {
  return emailjs
    .send('default_service', 'template_ndvse', templateParams)
    .then((response) => {
      console.log('Mail Sent!', response.status, response.text);
      return response;
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      throw error;
    });
};

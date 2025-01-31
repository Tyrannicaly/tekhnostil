const nodemailer = require('nodemailer');

// Создание транспортера для отправки писем
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_email_password'
    }
});

// Функция для отправки письма
function sendMail(data) {
    let mailOptions = {
        from: 'your_email@gmail.com',
        to: 'recipient_email@example.com',
        subject: 'Новая форма отправлена',
        text: `Данные с формы: ${JSON.stringify(data)}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

// Пример данных для отправки на почту
let formData = {
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    message: 'Привет, это тестовое сообщение'
};

// Запуск функции отправки почты с данными формы
sendMail(formData);

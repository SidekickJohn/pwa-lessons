const webpush = require('web-push');

const options = {
    vapidDetails: {
        subject: 'http://127.0.0.1:8080',
        publicKey: 'BBc7Bb5f5CRJp7cx19kPHz5d9S5jFSzogxEj2V1C44WuhTwd78tnXLPzOxGe0bUmKJUTAMemSKFzyQjSBN_-XyE',
        privateKey: 'tBoppvhj9A9NO0ZrFsPiH_CoAZ84TagjxiKyGjR4V8w'
    },
    TTL: 5000
}

const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/f1NYB3zUshg:APA91bE2TTZSBzpzqnP9hC_xQpKIh49p9fsQ9SYmKGEi8tun0ByDC1NfyHM36mI7NXRuVXcp3mpq2UBEtTuAYPWchUS3h9kg6WMzzGH6IUwlo6LfOCr1YycK_ztF-zq5HeGi-Ih7StQ0","expirationTime":null,"keys":{"p256dh":"BI4QR6s8BIo0qJ1OIhOp7GT5P_98_FI4VwbzEXMPT3vb7O_ypHj7P1cJwDDCbxVuvUUaqFtpDdJDAC08OFg03ok","auth":"Gh9PIYO4yRuCGcPPms4BNA"}};

const payload = JSON.stringify({
    notification: {
        title: 'Your Gate Changed',
        body: 'Your Gate is now G62',
        icon: './assets/bed.png',
        data: 'additional data'
    }
});

webpush.sendNotification(
    pushSubscription,
    payload,
    options
);
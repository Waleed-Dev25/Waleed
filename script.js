// ! Scroll Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.7 });

document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
});



// ! particles BackGround
particlesJS('particles', {
    particles: {
        number: { value: 100 },
        color: { value: '#fff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' }
        }
    }
});



// ! mousemove        
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});






// ! Menu Script 

let btnMenu = document.querySelector(".bx-menu");
let menu = document.querySelector(".menu");

btnMenu.addEventListener("click", function () {
if (menu.style.width === "220px") {
    menu.style.width = "0px";
    menu.style.border = " 0px whitesmoke solid";
} else {
    menu.style.width = "220px";
    menu.style.border = " 3px whitesmoke solid";
}
});


// ! support

let x = document.querySelector(".bx-x");
let windowSupport = document.querySelector(".window-support");
let btnSupport = document.querySelector(".bx-support");
x.addEventListener("click",function(){
windowSupport.style.display = "none";
});

btnSupport.addEventListener("click",function(){
if (windowSupport.style.display === "flex") {
    windowSupport.style.display = "none";
} else {
    windowSupport.style.display = "flex";
}
});


// & Script Send in room discord from webhock

const WEBHOOK_URL = 'https://discord.com/api/webhooks/1350070902989258793/3-uZUzk4_vtuYFusKmZfKDjoZXM5TpIzAe5h-6qvdODq7FODyoGGcqv2g7cj0iNQZAHW';

document.getElementById('messageForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const notification = document.getElementById('notification');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        notification.className = 'notification error';
        notification.textContent = 'الرجاء ملء جميع الحقول المطلوبة!';
        return;
    }

    const embed = {
        title: "رسالة جديدة من الموقع",
        color: 5814783,
        fields: [
            { name: "👤 الاسم", value: name, inline: true },
            { name: "📧 البريد", value: email, inline: true },
            { name: "💬 الرسالة", value: message }
        ],
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ embeds: [embed] })
        });

        if (response.ok) {
            notification.className = 'notification success';
            notification.textContent = 'تم إرسال الرسالة بنجاح!';
            document.getElementById('messageForm').reset();
        } else {
            notification.className = 'notification error';
            notification.textContent = 'فشل الإرسال! تأكد من صحة الويب هوك';
        }
    } catch (error) {
        notification.className = 'notification error';
        notification.textContent = 'حدث خطأ في الاتصال!';
    }
});
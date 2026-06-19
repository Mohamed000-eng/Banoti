// تاريخ البداية (١٥ يونيو ٢٠٢٥ الساعة ٠٠:٠٠:٠٠)
const startDate = new Date("June 15, 2025 00:00:00").getTime();

function updateCounter() {
    const now = new Date().getTime();
    // حساب الفرق بالملي ثانية
    const diff = now - startDate;

    // معادلات حساب الأوقات وتحويلها
    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;
    const msInMonth = msInDay * 30.44; // متوسط طول الشهر

    // حساب الشهور المكتملة، الأيام المتبقية، الساعات، الدقائق والثواني
    const months = Math.floor(diff / msInMonth);
    const days = Math.floor((diff % msInMonth) / msInDay);
    const hours = Math.floor((diff % msInDay) / msInHour);
    const minutes = Math.floor((diff % msInHour) / msInMinute);
    const seconds = Math.floor((diff % msInMinute) / msInSecond);

    // حقن الأرقام جوه الـ HTML وتنسيقها لتظهر برقمين (مثل 05 بدل 5)
    document.getElementById("months").innerText = months.toString().padStart(2, '0');
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

// تشغيل الدالة فوراً ثم تحديثها كل ثانية (1000 مللي ثانية)
updateCounter();
setInterval(updateCounter, 1000);

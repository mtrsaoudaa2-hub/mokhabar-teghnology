// هذا الكود يمسح أي محتوى سابق في ملف JS ويستبدله بالكود الجديد
// يمكنك وضع الكود الجديد بين علامات ````

const newCode = `
// ضع هنا كود JS الذي أرسلته لك مسبقًا
console.log("مرحبًا! هذا الكود الجديد في script.js");
`;

fetch('script.js')
  .then(response => response.text())
  .then(oldCode => {
    // لا نحذف الملف، فقط نستبدل محتواه
    const blob = new Blob([newCode], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);

    // إنشاء رابط تحميل لتحديث الملف محليًا
    const a = document.createElement('a');
    a.href = url;
    a.download = 'script.js';
    a.click();

    console.log("تم إنشاء نسخة جديدة من script.js بالكود الجديد");
  })
  .catch(err => console.error("خطأ في استبدال الكود:", err));

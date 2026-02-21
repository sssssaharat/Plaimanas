document.addEventListener("DOMContentLoaded", () => {
    // 1. ระบบจัดการ Tabs
    const faqTabs = document.querySelectorAll('.faq-tab');
    const faqContents = document.querySelectorAll('.faq-content');

    faqTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // ลบ active ออกจากทุก tab และเนื้อหา
            faqTabs.forEach(t => t.classList.remove('active'));
            faqContents.forEach(c => c.classList.remove('active'));

            // เพิ่ม active ให้กับ tab ที่กด
            tab.classList.add('active');

            // แสดงเนื้อหาที่ตรงกับ data-target ของ tab นั้น
            const targetId = tab.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // 2. ระบบจัดการ Accordion (เปิด/ปิดคำถาม)
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentItem = question.parentElement;
            
            // ออปชันเสริม: ถ้าอยากให้เปิดได้แค่ทีละ 1 คำถาม (บรรทัดนี้คือการปิดคำถามอื่นทั้งหมดก่อน)
            // document.querySelectorAll('.faq-item').forEach(item => {
            //     if (item !== currentItem) item.classList.remove('active');
            // });

            // สลับสถานะเปิด-ปิด
            currentItem.classList.toggle('active');
        });
    });
});
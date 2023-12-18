    // กด + และ - เพื่อเพิ่มและลดทีละ 1
    // ตัวเลขสุดที่ 0 และห้ามติดลบ
    // กด C จะ reset เลขเป็น 0

    const counter = document.querySelector(".counter");
    const number = document.querySelector(".number");
    const btnInc = document.querySelector(".btn-inc");
    const btnDec = document.querySelector(".btn-dec");
    const btnClr = document.querySelector(".btn-clr");
    
    let count = 0;
    
    btnInc.addEventListener("click", () => {
      count++;
      if (count >= 0) {
        number.textContent = count;
      }
    });
    
    btnDec.addEventListener("click", () => {
      count--;
      if (count >= 0) {
        number.textContent = count;
      } else {
        count = 0;
      }
    });
    
    btnClr.addEventListener("click", () => {
      count = 0;
      number.textContent = count;
    });

// const selectBtn = document.querySelector(".select-btn"),
//       items = document.querySelectorAll(".item");

// selectBtn.addEventListener("click", () => {
//     selectBtn.classList.toggle("open");
// })

// items.forEach(item => {
//     item.addEventListener("click", () => {
//         item.classList.toggle("checked");

//         let checked = document.querySelectorAll(".checked"),
//             btnText = document.querySelector(".btn-text");

//             if(checked && checked.length > 0){
//                 btnText.innerHTML = `${checked.length} Selecionado`
//             } else{
//                 btnText.innerHTML = "Selecione"
//             }
//     })
// })

// const selectBtn = document.querySelector(".select-btn");
// const items = document.querySelectorAll(".item");
// let selectedItem = null;

// selectBtn.addEventListener("click", () => {
//   selectBtn.classList.toggle("open");
// });

// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     if (selectedItem === item) {
//       item.classList.remove("checked");
//       selectedItem = null;
//     } else {
//       items.forEach((otherItem) => {
//         otherItem.classList.remove("checked");
//       });
//       item.classList.add("checked");
//       selectedItem = item;
//     }

//     let checked = document.querySelectorAll(".checked");
//     let btnText = document.querySelector(".btn-text");

//     if (checked.length > 0) {
//       btnText.innerHTML = `${checked.length} Selecionado`;
//     } else {
//       btnText.innerHTML = "Selecione";
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
    const selectBtns = document.querySelectorAll(".select-btn");
    const selectBtnArq = document.querySelectorAll(".select-btn-arq");
    const items = document.querySelectorAll(".item");
    let selectedItem = null;

    selectBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const currentItem = this;
        const allSelectBtns = document.querySelectorAll(".select-btn");

        allSelectBtns.forEach(function (btn) {
          if (btn !== currentItem) {
            btn.classList.remove("open");
          }
        });

        this.classList.toggle("open");
      });
    });

    selectBtnArq.forEach(function (btn) {
        btn.addEventListener("click", function () {
          const currentItem = this;
          const SelectBtnArq = document.querySelectorAll(".select-btn-arq");
  
          SelectBtnArq.forEach(function (btn) {
            if (btn !== currentItem) {
              btn.classList.remove("open");
            }
          });
  
          this.classList.toggle("open");
        });
      });

    items.forEach((item) => {
      item.addEventListener("click", () => {
        if (selectedItem === item) {
          item.classList.remove("checked");
          selectedItem = null;
        } else {
          items.forEach((otherItem) => {
            otherItem.classList.remove("checked");
          });
          item.classList.add("checked");
          selectedItem = item;
        }

        let checked = document.querySelectorAll(".checked");
        let btnText = item.closest(".containerForm").querySelector(".btn-text");

        if (checked.length > 0) {
          btnText.textContent = `${selectedItem.textContent}`;
        } else {
            btnText.textContent = "Selecione";
        }
      });
    });
  });
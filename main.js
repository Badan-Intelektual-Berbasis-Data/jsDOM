const saham = document.querySelector("#saham");

data.forEach(d => {
    // console.log(d.nama_emiten)
    saham.innerHTML += `<div class="w-[200px] border-2 border-red-500 flex-1">
            <img src="" alt="ini gambar" class="w-full bg-slate-500 h-[200px]">
            <p>${d.nama_emiten}</p>
            <h4 class="font-bold">Rp${d.jumlah_saham}</h4>
            <p class="mt-[10px]">${d.kategori}</p>
        </div>`
})




// const data = [
//     {
//         "nama": "Wahyudi Romadhoni",
//         "no": "09284192194"
//     },
//     {
//         "nama": "Nurul istiqmala",
//         "no": "041242284192194"
//     },
//     {
//         "nama": "nirmala",
//         "no": "0123284192194"
//     },
// ]


// // data.map(d => {
// //     // console.log(d)
// //     list.innerHTML += `<li>${d.nama}</>`
// // })

// // const tombol = document.querySelectorAll("#tekan");
// // tombol.addEventListener("click", function(){
// //     alert("Halo gaes")
// // })

// const tombol = document.querySelectorAll("#tekan")
// tombol.forEach(t => {
//     t.addEventListener("click", function() {
//         var chat = t.dataset.chat;
//         alert(chat);
//     })
// });

// const tombolPindah = document.querySelectorAll

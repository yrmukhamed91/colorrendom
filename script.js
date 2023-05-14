// $(".red").on("click", function() {
//    $("body").css("background", "red")
//    $(".info").text("red")
// })
// $(".green").on("click", function() {
    // $("body").css("background", "green")
    // $(".info").text("green")
// })
// $(".gray").on("click", function() {
    // $("body").css("background", "gray")
    // $(".info").text("gray")
// })
// $(".black").on("click", function() {
    // $("body").css("background", "black")
    // $(".info").text("black")
// })

$("button").on("click", function(e) {
    let color = e.target.className
    $("body").css("background", color)
    $("h1").text(color)
})

$(".img").on("click", function() {
    $("body").css({
        "background" : "url(./img/img-1.jpg)"
    })
    $(".info").text("Картинка")
})
let colors = ["red", "green", "gray", "black"]
console.log(Math.floor(Math.random() * 4))

$(".random").on("click", function() {
    $("body").css("background", colors[Math.floor(Math.random() * 4)])
})




$(".random").on("click", function () {

    let random = [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256)
    ]   

    $("body").css({
        "background" : `rgb(${random})`
    })
    $(".rgb").text(`rgb(${random})`)
})
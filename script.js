function order(dish) {

    alert(
        "🍽 Ви обрали: " + dish +
        "\n\nДякуємо за замовлення!"
    );

}


function booking() {

    let name =
        document.getElementById("name").value;

    let phone =
        document.getElementById("phone").value;

    let people =
        document.getElementById("people").value;


    if (
        name === "" ||
        phone === "" ||
        people === ""
    ) {

        alert(
            "⚠️ Будь ласка, заповніть усі поля."
        );

        return;
    }


    if (people <= 0) {

        alert(
            "⚠️ Кількість гостей повинна бути більше 0."
        );

        return;
    }


    alert(
        "✅ Дякуємо, " + name +
        "!\n\n" +
        "Ваш столик на " +
        people +
        " гостей заброньовано." +
        "\n\n" +
        "Ми зв'яжемося з вами за номером " +
        phone + "."
    );

}

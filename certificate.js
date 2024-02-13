var pathname = window.location.pathname;


// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))

    }

    // optionally update when fields update
    // tbd
    document.getElementById('name').addEventListener('change', function (eventData) {

        // name input
        let nameOutput = document.getElementById('nameOutput');
        // console.log(eventData);
        nameOutput.innerText = eventData.target.value;
        let certificate1 = document.getElementById('type');

        changeCert(certificate1.value);
    });

    document.getElementById('type').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        // console.log(eventData);
        let info = document.getElementById('info');
        changeCert(eventData.target.value);
    });

    document.getElementById("print").addEventListener("click", function(eventData) {
        window.print();
    });

    // process form Data
    document.getElementById("myForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); //stop page reload when form is submitted
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        //update certificate information when form is submitted:
        let nameOutput = document.getElementById('nameOutput');
        let info = document.getElementById('info');
        nameOutput.innerText = formData.name;

        let certificate1 = document.getElementById('type');

        changeCert(certificate1.value);

    });
    // Log readiness to console
    console.log("Ready");

    // let info = document.getElementById('info');
    // info.classList.add('test');



    // certificate.classList.add('number1');

    function changeCert(value) {
        let certificate = document.getElementById('type');

        let name = document.getElementById('nameOutput').innerText;
        let desc = [`, thank you for being the awesomest person ever and stuff. Hopefully, this award will motivate you to improve your awesomeness in the future`, `, your performance was extremely mediocre, I wanted to be nice and give you an award so that you can feel good about yourself and not feel left out compared to the general population of above medicore people.`, `, Not sure how you got this award, literally nobody reads documentation. Reading documentation is super duper boring. Why read documentation when you could spend hours debugging?`];


        let title = ['Awesomeness', 'Mediocrity', 'Reading Documentation'];

        let signature1 = ["Keanu Reeves", "Corvo Attano"];
        let signature2 = ["Taylor Swift", "Yeat"];
        let signature3 = ["Jeff Atwood", "Joel Spolsky"];



        console.log(certificate.value);


        switch (value) {
            case 'A':
                desc[0] = name + desc[0];
                break;
            case 'B':
                desc[0] = name + desc[1];
                title[0] = title[1];
                signature1[0] = signature2[0];
                signature1[1] = signature2[1];
                break;
            case 'C':
                desc[0] = name + desc[2];
                title[0] = title[2]
                signature1[0] = signature3[0];
                signature1[1] = signature3[1];
                break;
        }

        certDescText.innerText = desc[0];
        certtitle.innerText = title[0];
        sig1.innerText = signature1[0];
        sig2.innerText = signature1[1];
    }
});







function processForm(form) {

}
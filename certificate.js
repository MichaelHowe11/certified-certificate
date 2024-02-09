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
    });

    document.getElementById('type').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        // console.log(eventData);
        let info = document.getElementById('info');
        changeCert(eventData.target.value);
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
        let desc = `, thank you for being the awesomest person ever and stuff. Hopefully, this award will motivate you to improve your awesomeness in the future`;

        let desc2 = `, your performance was extremely mediocre, I wanted to be nice and give you an award so that you can feel good about yourself and not feel left out compared to the general population of above medicore people.`;

        let desc3 = `, Not sure how you got this award, literally nobody reads documentation. Reading documentation is super duper boring. Why read documentation when you could spend hours debugging?`

        console.log(certificate.value);


        switch (value) {
            case 'A':
                desc = name + desc;
                break;
            case 'B':
                desc = name + desc2

                break;
            case 'C':
                desc = name + desc3;
                break;
            case 'D':

                break;
        }

        certDescText.innerText = desc;
    }
});







function processForm(form) {

}
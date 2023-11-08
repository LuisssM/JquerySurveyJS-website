const surveyJson = {
    elements: [{
        name: "FirstName",
        title: "Enter your first name:",
        type: "text"
    }, {
        name: "LastName",
        title: "Enter your last name:",
        type: "text"
    }]
};

const survey = new Survey.Model(surveyJson);
survey.focusFirstQuestionAutomatic = false;

function alertResults (sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
}

survey.onComplete.add(alertResults);

$(function() {
    $("#surveyCont").Survey({ model: survey });
});

/* Caso queira guardar num server --->

const SURVEY_ID = 1;

function surveyComplete (sender) {
    saveSurveyResults(
        "https://your-web-service.com/" + SURVEY_ID,
        sender.data
    )
}

function saveSurveyResults(url, json) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(json)
    })
    .then(response => {
        if (response.ok) {
            // Handle success
        } else {
            // Handle error
        }
    })
    .catch(error => {
        // Handle error
    });
}

const survey = new Survey.Model(surveyJson);

survey.onComplete.add(surveyComplete);
*/
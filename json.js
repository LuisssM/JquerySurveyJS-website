const json = {
    "title": "Job Application",
    "description": "Please complete the form below to apply for a position with us.",
    "logo": "https://api.surveyjs.io/private/Surveys/files?name=44db7685-26ae-43a8-919e-8cabfc14adc4",
    "logoPosition": "right",
    "pages": [
     {
      "name": "General Info",
      "elements": [
       {
        "type": "text",
        "name": "question1",
        "title": "First Name",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "question2",
        "startWithNewLine": false,
        "title": "Last Name",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "question3",
        "title": "Current Address",
        "description": "Street Address",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "question12",
        "title": "2nd Address",
        "description": "Street Address Line 2",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "question13",
        "title": "City",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "question14",
        "startWithNewLine": false,
        "title": "State/Province",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "question15",
        "title": "Email Address",
        "isRequired": true,
        "inputType": "email"
       },
       {
        "type": "text",
        "name": "question4",
        "startWithNewLine": false,
        "title": "Phone Number",
        "isRequired": true,
        "inputType": "tel"
       },
       {
        "type": "text",
        "name": "question5",
        "title": "Date of Birth",
        "isRequired": true,
        "inputType": "date"
       },
       {
        "type": "text",
        "name": "question6",
        "startWithNewLine": false,
        "title": "Social Security Number",
        "isRequired": true,
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "question16",
        "title": "Linkedin",
        "inputType": "url"
       }
      ],
      "title": "Personal Information"
     },
     {
      "name": "page1",
      "elements": [
       {
        "type": "dropdown",
        "name": "question7",
        "title": "Desired Job Title",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Marketing Specialist"
         },
         {
          "value": "Item 2",
          "text": "Developer"
         },
         {
          "value": "Item 3",
          "text": "Sales Manager"
         },
         {
          "value": "Item 4",
          "text": "Product Lead"
         }
        ]
       },
       {
        "type": "dropdown",
        "name": "question17",
        "startWithNewLine": false,
        "title": "How did you hear about us",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Linkedin"
         },
         {
          "value": "Item 2",
          "text": "Event"
         },
         {
          "value": "Item 3",
          "text": "Social Media"
         },
         {
          "value": "Item 4",
          "text": "Company Website"
         },
         {
          "value": "Item 5",
          "text": "Family/Friend"
         },
         {
          "value": "Item 6",
          "text": "Other"
         }
        ]
       },
       {
        "type": "text",
        "name": "question8",
        "title": "Desired Salary",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "question10",
        "title": "Willingness to Relocate",
        "isRequired": true,
        "labelTrue": "No",
        "labelFalse": "Yes"
       },
       {
        "type": "boolean",
        "name": "question11",
        "startWithNewLine": false,
        "title": "Authorized to Work in Country",
        "isRequired": true,
        "labelTrue": "No",
        "labelFalse": "Yes"
       },
       {
        "type": "text",
        "name": "question9",
        "title": "Available Start Date",
        "inputType": "date"
       },
       {
        "type": "text",
        "name": "question18",
        "title": "If you had a super power, what would it be?",
        "isRequired": true
       },
       {
        "type": "imagepicker",
        "name": "question21",
        "title": "What animal do you think that represents you professionally?",
        "isRequired": true,
        "choices": [
         {
          "value": "Image 1",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
         },
         {
          "value": "Image 2",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
         },
         {
          "value": "Image 3",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
         },
         {
          "value": "Image 4",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
         },
         {
          "value": "Image 5",
          "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0bd56c02-4266-4ccc-9dbf-8282ab2a8c46"
         }
        ],
        "imageFit": "cover"
       }
      ],
      "title": "Employment Information"
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "file",
        "name": "question19",
        "title": "Upload your Resume"
       },
       {
        "type": "file",
        "name": "question22",
        "startWithNewLine": false,
        "title": "Photo"
       },
       {
        "type": "comment",
        "name": "question20",
        "title": "Cover Letter"
       },
       {
        "type": "signaturepad",
        "name": "question23",
        "title": "Signature"
       }
      ],
      "title": "Documents"
     }
    ],
    "showProgressBar": "top",
    "showPreviewBeforeComplete": "showAllQuestions"
   }




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
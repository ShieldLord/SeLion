var textField = document.createElement('input');
textField.id="fieldXId";
textField.value = 'Congratulations, You have found fieldX';
document.body.appendChild(textField);

var submitButton = document.createElement('input');
submitButton.id = "submit.x";
submitButton.value = 'Continue';
submitButton.type = 'submit'
document.body.appendChild(submitButton);

var hiddenButton = document.createElement('input');
hiddenButton.id = "hidden.x";
hiddenButton.value = 'Hidden';
hiddenButton.type = 'submit';
hiddenButton.style.display = 'none';
document.body.appendChild(hiddenButton);

var containerOne = document.createElement('div');
containerOne.className = 'container';

var containerOneButton = document.createElement('input');
containerOneButton.id = "containerButtonOne.x";
containerOneButton.value = 'Button 1';
containerOneButton.type = 'submit';

containerOne.appendChild(containerOneButton);
document.body.appendChild(containerOne);

var containerTwo = document.createElement('div');
containerTwo.className = 'container';

var containerTwoButton = document.createElement('input');
containerTwoButton.id = "containerButtonOne.x";
containerTwoButton.value = 'Button 2';
containerTwoButton.type = 'submit';

containerTwo.appendChild(containerTwoButton);
document.body.appendChild(containerTwo);

document.title = "TestPage Generated By JavaScript";



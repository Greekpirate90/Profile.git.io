import cmdData from './command.json' assert {type: 'json'};

let inputList = document.querySelector('.input-list');
let word = '';
let inputArr = [];
let inputChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' ', '-'];

const createInputList = () => {
    let container = document.createElement('div');
    container.className = 'container';
    let header = document.createElement('div');
    header.className = 'header';
    let text = document.createElement('div');
    text.className = 'text';
    let result = document.createElement('div');
    result.className = 'result';

    header.innerHTML = '[admin ~]:$';

    container.appendChild(header);
    container.appendChild(text);
    inputList.appendChild(container);
    inputList.appendChild(result);
};

const onPageLoad = () => {
    createInputList();
}

document.addEventListener("load", onPageLoad());

const executeCommand = (command) => {
    if(command == '--help' || command == '-h') {
        var newTable = "<table width='100%'>";
        var newRow = "<tr>";
        for(let j = 0; j <= cmdData["help"].length; j++) {
            if(j == 0){
                newRow += "<th align='center'> COMMAND </th>";
                newRow += "<th align='center'> HELP TEXT </th>";
                newRow += "</tr>";
            } else {
                newRow += "<td align='center'>" + cmdData["help"][j-1]["command"] + "</td>";
                newRow += "<td align='center'>" + cmdData["help"][j-1]["helpText"] + "</td>";
                newRow += "</tr>";
            }
        }
        newTable += newRow + "</table>";
        let inputResult = document.querySelector('.result');
        inputResult.innerHTML = newTable;
    } else if(command == 'education') {
        let inputResult = document.querySelector('.result');
        var newTable = "<table width='100%'>";
        var newRow = "<tr>";
        for(let j = 1; j <= cmdData["education"].length; j++) {
            newRow += "<tr><td align='left'>" + "Organisation: " + "</td>"
            newRow += "<td align='left'>" + `<span style="color: white; font-weight: bold;">${cmdData["education"][j-1]["orgName"]}</span>` + "</td> </tr>";
            newRow += "<tr><td align='left'>" + "Course: " + "</td>"
            newRow += "<td align='left'>" + `<span style="color: white; font-weight: bold;">${cmdData["education"][j-1]["course"]}</span>` + "</td> </tr>";
            newRow += "<tr><td align='left'>" + "Tenure: " + "</td>"
            newRow += "<td align='left'>" + `<span style="color: white; font-weight: bold;">${cmdData["education"][j-1]["tenure"]}</span>` + "</td> </tr>";
            newRow += "<tr><td align='left'>" + "Marks: " + "</td>"
            newRow += "<td align='left'>" + `<span style="color: white; font-weight: bold;">${cmdData["education"][j-1]["marks"]}</span>` + "</td> </tr>";
            newRow += "<tr><td><br></td></tr>"
            newRow += "</tr>";
        }
        newTable += newRow + "</table>";
        inputResult.innerHTML = newTable;
    } else if(command == 'experience') {
        let inputResult = document.querySelector('.result');
        var newTable = "<table width='100%'>";
        var newRow = "<tr>";
        for(let j = 1; j <= cmdData["experience"].length; j++) {
            newRow += "<tr><td align='left'>" + "Organisation: " + "</td>"
            newRow += "<td align='left'>" + `<span style="color: white; font-weight: bold;">${cmdData["experience"][j-1]["orgName"]}</span>` + "</td> </tr>";
            newRow += "<tr><td align='left'>" + "Position: " + "</td>"
            newRow += "<td align='left'>" + `<span style="color: white; font-weight: bold;">${cmdData["experience"][j-1]["position"]}</span>` + "</td> </tr>";
            newRow += "<tr><td align='left'>" + "Tenure: " + "</td>"
            newRow += "<td align='left'>" + `<span style="color: white; font-weight: bold;">${cmdData["experience"][j-1]["tenure"]}</span>` + "</td> </tr>";
            newRow += "<tr><td align='left'>" + "Remarks: " + "</td>"
            newRow += "<td align='left'>" + `<span style="color: white; font-weight: bold;">${cmdData["experience"][j-1]["remarks"]}</span>` + "</td> </tr>";
            newRow += "<tr><td><br></td></tr>"
            newRow += "</tr>";
        }
        newTable += newRow + "</table>";
        inputResult.innerHTML = newTable;
    } else if(command == 'projects') {
        let inputResult = document.querySelector('.result');
        var newTable = "<table width='100%'>";
        var newRow = "<tr>";
        for(let j = 1; j <= cmdData["projects"].length; j++) {
            newRow += "<tr><td align='left'>" + "Title: " + "</td>"
            newRow += "<td align='left'>" + `<span style="color: white; font-weight: bold;">${cmdData["projects"][j-1]["title"]}</span>` + "</td> </tr>";
            newRow += "<tr><td align='left'>" + "Description: " + "</td>"
            newRow += "<td align='left'>" + `<span style="color: white; font-weight: bold;">${cmdData["projects"][j-1]["description"]}</span>` + "</td> </tr>";
            newRow += "<tr><td align='left'>" + "Link: " + "</td>"
            newRow += "<td align='left'>" + `<span style="color: white; font-weight: bold;">${cmdData["projects"][j-1]["link"]}</span>` + "</td> </tr>";
            newRow += "<tr><td><br></td></tr>"
            newRow += "</tr>";
        }
        newTable += newRow + "</table>";
        inputResult.innerHTML = newTable;
    } else if(command == 'certifications') {
        let inputResult = document.querySelector('.result');
        var newTable = "<table width='100%'>";
        var newRow = "<tr>";
        for(let j = 1; j <= cmdData["certifications"].length; j++) {
            newRow += "<tr><td align='left'>" + "Title: " + "</td>"
            newRow += "<td align='left'>" + `<span style="color: white; font-weight: bold;">${cmdData["certifications"][j-1]["title"]}</span>` + "</td> </tr>";
            newRow += "<tr><td align='left'>" + "Status: " + "</td>"
            newRow += "<td align='left'>" + `<span style="color: white; font-weight: bold;">${cmdData["certifications"][j-1]["status"]}</span>` + "</td> </tr>";
            newRow += "<tr><td align='left'>" + "Platform: " + "</td>"
            newRow += "<td align='left'>" + `<span style="color: white; font-weight: bold;">${cmdData["certifications"][j-1]["platform"]}</span>` + "</td> </tr>";
            newRow += "<tr><td align='left'>" + "Link: " + "</td>"
            newRow += "<td align='left'>" + `<span style="color: white; font-weight: bold;">${cmdData["certifications"][j-1]["link"]}</span>` + "</td> </tr>";
            newRow += "<tr><td><br></td></tr>"
            newRow += "</tr>";
        }
        newTable += newRow + "</table>";
        inputResult.innerHTML = newTable;
    } else if(command == 'languages') {
        let inputResult = document.querySelector('.result');
        var newTable = "<table width='100%'>";
        var newRow = "<tr>";
        for(let j = 1; j <= cmdData["languages"].length; j++) {
            newRow += "<tr><td align='left'>" + "Languages: " + "</td>"
            newRow += "<td align='left'>" + `<span style="color: white; font-weight: bold;">${cmdData["languages"][j-1]["lang"]}</span>` + "</td> </tr>";
            newRow += "<tr><td align='left'>" + "Frameworks and libraries: " + "</td>"
            newRow += "<td align='left'>" + `<span style="color: white; font-weight: bold;">${cmdData["languages"][j-1]["frameworks"]}</span>` + "</td> </tr>";
            newRow += "<tr><td><br></td></tr>"
            newRow += "</tr>";
        }
        newTable += newRow + "</table>";
        inputResult.innerHTML = newTable;
    } else if(command == 'theme') {
        let theme = window.prompt('this will change the color of the console. \n The followings are the themes :- \n dark \n light \n metrix \n blue \n midnight \n default \n custom');
        changeTheme(theme);
    } else if(command == 'clear') {
        clearCmd();
        onPageLoad();
    } else {
        let inputResult = document.querySelector('.result');
        inputResult.innerHTML = 'Please input a valid command.';
    }
}

const changeTheme = (theme) => {
    let body = document.querySelector('body');
    if(theme == 'dark') {
        body.style.backgroundColor = '#000000';
        body.style.color = '#FFFFFF';
    } else if(theme == 'metrix') {
        body.style.backgroundColor = '#000000';
        body.style.color = '#s03A062';
    } else if(theme == 'blue') {
        body.style.backgroundColor = '#0000FF';
        body.style.color = '#FFFFFF';
    } else if(theme == 'midnight') {
        body.style.backgroundColor = '#0D1926';
        body.style.color = '#79F8F7';
    } else if(theme == 'light') {
        body.style.backgroundColor = '#F7F7F7';
        body.style.color = '#090300';
    } else if(theme == 'default') {
        body.style.backgroundColor = '#111';
        body.style.color = '#16C60C';
    } else if(theme == 'custom') {
        let bg = window.prompt('Please Enter Background Colour \n {Enter valid Hex Value Or rgb()}');
        let color = window.prompt('Please Enter Font Colour \n {Enter valid Hex Value Or rgb()}');

        body.style.backgroundColor = bg;
        body.style.color = color;
    } else {
        let inputResult = document.querySelector('.result');
        inputResult.innerHTML = "Please enter valid theme.";
    }
}

const clearCmd = () => {
    let inputList = document.querySelector('.input-list');
    inputList.innerHTML = '';
}

const clearTextField = (command) => {
    if(!(!command || command == undefined || command == "" || command.length == 0)) {
        let inputText = document.querySelector('.text');
        word = "";
        inputArr = [];
        inputText.innerHTML = word;
    }
}

const changeclassname = (command) => {
    let inputContainer = document.querySelector('.container');
    let inputHeader = document.querySelector('.header');
    let inputText = document.querySelector('.text');
    let inputResult = document.querySelector('.result');
    
    inputContainer.className = 'old-container';
    inputHeader.className = 'old-header';
    inputText.className = 'old-text';
    inputText.innerHTML = command;
    inputResult.className = 'old-result';
    
}

const onPressEnter = (command) => {
    if (command == 'clear') {
        executeCommand(word);
        clearTextField(word);
    } else if(!(!command || command == undefined || command == "" || command.length == 0)) {
        executeCommand(word);
        changeclassname(word);
        createInputList();
        clearTextField(word);
    }
};


document.addEventListener('keydown', function (e) {
    if(e.key == 'Enter') {
        onPressEnter(word)
    } else if(e.key == 'Backspace') {
        inputArr.pop()
        word = inputArr.join('');
        let inputText = document.querySelector('.text');
        inputText.innerHTML = word;
    } else if (inputChar.includes(e.key)) {
        inputArr.push(e.key)
        word = inputArr.join('');
        let inputText = document.querySelector('.text');
        inputText.innerHTML = word;
    }
}, false);



/*
Thanks to Danny Guo
https://www.dannyguo.com/blog/how-to-add-copy-to-clipboard-buttons-to-code-blocks-in-hugo/
*/
function addCopyButtons(clipboard) {
    document.querySelectorAll('pre > code').forEach(function (codeBlock) {
        var button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = 'Copy';
        button.addEventListener('click', function () {
            clipboard.writeText(codeBlock.innerText).then(function () {
                /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
                button.blur();
                button.innerText = 'Copied!';
                setTimeout(function () {
                    button.innerText = 'Copy';
                }, 2000);
            }, function (error) {
                button.innerText = 'Error';
            });
        });
        var pre = codeBlock.parentNode;
        if (pre.parentNode.classList.contains('highlight')) {
            var highlight = pre.parentNode;
            highlight.parentNode.insertBefore(button, highlight.nextSibling);
        } else {
            pre.parentNode.insertBefore(button, pre.nextSibling);
        }
    });
}

if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
} else {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';
    script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';
    script.crossOrigin = 'anonymous';
    script.onload = function () {
        addCopyButtons(clipboard);
    };
    document.body.appendChild(script);
}
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip({
        html: true
    });
});

function createCommandCell(timestamp, name, apdu_c) {
    var cmdCell = document.createElement("p");
    var node = document.createTextNode(name);
    cmdCell.appendChild(node);
    return cmdCell;
}

function createCommandRow(table, step, se, timestamp, name, apdu_c) {
    var commandRow = table.insertRow(table.rows.length);
    commandRow.style.backgroundColor = se == 'PO' ? 'lavender' : 'oldlace';
    // Insert the step cell in the row at index 0
    var stepCell = commandRow.insertCell(0);
    // Append step
    stepCell.appendChild(document.createTextNode(step));
    // Insert the target cell in the row at index 1
    var targetCell = commandRow.insertCell(1);
    // Append target
    targetCell.appendChild(document.createTextNode(se));
    // Insert the command cell in the row at index 2
    var commandCell = commandRow.insertCell(2);
    var timestampP = document.createElement("p");
    var node = document.createTextNode('★ COMMAND               [timestamp: ' + timestamp + ' ms]');
    timestampP.appendChild(node);
    // Append timestamp
    commandCell.appendChild(timestampP);
    var commandP = document.createElement("p");
    node = document.createTextNode(name);
    commandP.appendChild(node);
    // Append command name
    commandCell.appendChild(commandP);
    var apduPRE = document.createElement("pre");
    node = document.createTextNode(apdu_c);
    apduPRE.appendChild(node);
    // Append command name
    commandCell.appendChild(apduPRE);
}

function createResponseRow(table, status, apdu_r, timestamp) {
    var responseRow = table.insertRow(table.rows.length);
    responseRow.style.backgroundColor = se == 'PO' ? 'lavender' : 'oldlace';
    // Insert empty cells at index 0 & 1
    responseRow.insertCell(0);
    responseRow.insertCell(1);
    // Insert the response cell in the row at index 2
    var responseCell = responseRow.insertCell(2);
    var timestampP = document.createElement("p");
    var node = document.createTextNode('★ RESPONSE               [timestamp: ' + timestamp + ' ms]');
    timestampP.appendChild(node);
    // Append timestamp
    responseCell.appendChild(timestampP);
    var commandP = document.createElement("p");
    node = document.createTextNode(name);
    commandP.appendChild(node);
    // Append command name
    responseCell.appendChild(commandP);
    var apduPRE = document.createElement("pre");
    node = document.createTextNode(apdu_r);
    apduPRE.appendChild(node);
    // Append command name
    responseCell.appendChild(apduPRE);
}

var cmdRgx = /.*AbstractLocalReader.*\[(.*)\].*NAME = \"(.*)\", RAWDATA = ([0-9a-fA-F]*),.*elapsed\s([0-9\.]*)\sms/g;
var rspRgx = /.*ApduResponse:\s([a-zA-Z]*), RAWDATA = ([0-9a-fA-F]*),.*elapsed\s([0-9\.]*)\sms/g;
var READER = 1;
var CMD_NAME = 2;
var APDU_C = 3;
var TIMESTAMP_C = 4;
var STATUS = 1;
var APDU_R = 2;
var TIMESTAMP_R = 3;

function processLogLine(table, logLine) {
    var groups = cmdRgx.exec(logLine);
    if (groups != null && groups.length === 5) {
        var cla = groups[APDU_C].substr(0, 2), se;
        if (cla === "80") {
            se = "SAM";
        } else {
            se = "PO";
        }
        createCommandRow(table, 1, se, groups[TIMESTAMP_C], groups[CMD_NAME], groups[APDU_C]);
    } else {
        groups = rspRgx.exec(logLine);
        if (groups != null && groups.length === 4) {
            createResponseRow(table, groups[STATUS], groups[APDU_R], groups[TIMESTAMP_R]);
        }
    }
}

if (document.getElementById('parse') !== null) {
    document.getElementById('parse').onclick = function () {
        var tableRef = document.getElementById('parser-commands').getElementsByTagName('tbody')[0];
        var lines = document.getElementById('keyple-log-data').value.split('\n');
        for (var i = 0; i < lines.length; i++) {
            processLogLine(tableRef, lines[i]);
        }
        createCommandRow(tableRef, 1, "PO", "20", "COMMAND 1", "00C0000000");
        createCommandRow(tableRef, 2, "SAM", "5", "COMMAND 2", "00C0000000");
        return false;
    }
}
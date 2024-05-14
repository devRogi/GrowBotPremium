/** 

 */
var iterationizations = 0;

function waitForSharedData() {
    iterationizations++;
    if (window._sharedData) {
        localStorage.setItem('winvars', JSON.stringify(window._sharedData));
        //console.log('iterationizations: ' + iterationizations);
    } else {
        setTimeout(waitForSharedData, 1);
    }

}

waitForSharedData();
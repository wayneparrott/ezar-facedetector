
var MAX_FACES = 5;
var faceEls = [];
var enableFaceUpdate = false;
var snapping = false;
document.addEventListener('deviceready',init, false);
        
function init() {        
    for (var i=0; i < MAX_FACES; i++) {
        faceEls.push(document.getElementById('face'+i));
    }

    var snap = document.getElementById('camera');
    snap.addEventListener('click',snapshot,false);  
        
    var rev = document.getElementById('revcamera');
    rev.addEventListener('click',reverseCamera,false);

    ezar.initializeVideoOverlay(
        function() {
            ezar.getBackCamera().start(
                setTimeout(
                    function() {
                        ezar.watchFaces(onFaces,err);
                        enableFaceUpdate = true;
                    }, 1500),
                err);
        }, err);    
}

function onFaces(faces) {
    var faceCnt, face, faceEl;

    if (snapping) return;

    if (!enableFaceUpdate || !faces || faces.length == 0) {
        faceCnt = 0;
    } else {
        faceCnt = Math.min(faces.length,MAX_FACES);
    }
        
    for (var i=0; i < faceCnt; i++) {
        face = faces[i];
        faceEl = faceEls[i];
       
        faceEl.style.width = (face.right - face.left) + "px";
        faceEl.style.height = (face.bottom - face.top) + "px";
        faceEl.style.left = face.left + "px";
        faceEl.style.top = face.top + "px";
        faceEl.style.display = "block";
    }

    for (var i=faceCnt; i < MAX_FACES; i++) {
        var faceEl = faceEls[i];
        faceEl.style.display = "none";
    }
}

function err(msg) {
    //wrap alert in timeout to make it a macro task
    //android: https://www.chromestatus.com/features/5647113010544640 
    setTimeout(
        function() {
            alert("Error: " + msg);
        },0);
}

function orientationChange() {
    enableFaceUpdate = false;
    for (var i=0; i < MAX_FACES; i++) {
        faceEls[i].style.display = "none";
    }
    setTimeout(
        function() { enableFaceUpdate = true;},
        2000);
}


function snapshot() {
    console.log('snapshot');
    
    snapping = true;

    showControls(false);
    
    setTimeout( function() {
        ezar.snapshot(
            function() {
                showControls(true);
                snapping = false;
            },
            function(err) {
                showControls(true);
                snapping = false;
            },
            {"saveToPhotoAlbum": true});
        },10);
}

function showControls(aBool) {
    var style = aBool ? 'block' : 'none';
    setTimeout(
        function() {
            document.getElementById('controls').style.display = style;  
        }, 10);
}
 
function reverseCamera() {
    console.log('reverse camera');
    var newCamera =
        ezar.getActiveCamera().getPosition() == 'BACK' ? 
        ezar.getFrontCamera() : ezar.getBackCamera();
    newCamera.start();
}


window.addEventListener('orientationchange',orientationChange);



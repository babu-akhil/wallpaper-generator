let step;
let pattern = []
let n  = 40;
let cnv;
function setup() {
    cnv = createCanvas(windowHeight/2,windowHeight/2);
    ellipseMode(CORNER)
}

function draw() {
    noStroke();
    background('#bae8e8');
    step_x = 0.5*windowHeight/n;
    step_y = 0.5*windowHeight/n;
    let x_index = 0;

    let y_index = 0;
    for(let x =0; x< 0.49*windowHeight; x+= step_x){
        for(let y=0; y< 0.49*windowHeight; y+= step_y){
            drawSquare(x,y,step_x, x_index, y_index);
            y_index++;
        }
        y_index =0;
        x_index++;
    }
}

function drawSquare(x,y,width,x_index, y_index){
    // console.log(pattern)
    // console.log(x_index)
    // console.log(y_index)
    fill(pattern[x_index][y_index])
    square(x,y,width);
}

// Init Pattern
for(let i=0; i<n;i++){
    pattern[i] = [0,0,0,0,0,0,0,0]
}
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        pattern[i][j] = '#bae8e8';
    }
}

// Initialize to random pattern
function randomizePattern(){
    for(let i=0; i<n;i++){
        pattern[i] = [0,0,0,0,0,0,0,0]
    }    // console.log(pattern)
    // console.log(x_index)
    // console.log(y_index)
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            pattern[i][j] = '#bae8e8';
        }
    }

    for(let i=0; i<n/2; i++){
        for(let j=0; j<n/2; j++){
            if(Math.random()*(i+j)>20){
            pattern[i][j] = '#2c698d';
            }
        }
    }

    // Symmetry

    for(let i=n/2;i<n;i++){
        for(let j=0;j<n/2;j++){
            pattern[i][j] = pattern[n-1-i][j]
        }
    }

    for(let i=n/2;i<n;i++){
        for(let j=n/2;j<n;j++){
            pattern[i][j] = pattern[n-1-i][n-1-j]
        }
    }

    for(let i=0;i<n/2;i++){
        for(let j=n/2;j<n;j++){
            pattern[i][j] = pattern[i][n-1-j]
        }
    }
    setTimeout(() => {document.body.style.background = "url(" + cnv.canvas.toDataURL() + ")";
                    document.body.style.backgroundPosition = 'center'},
    1000)
}

function save(){
    saveCanvas(cnv, Math.random().toString(36).substring(7), 'png')
}


let saveBtn = document.getElementById('save')
console.log(saveBtn)
saveBtn.addEventListener('click', save)

let generateBtn = document.getElementById('generate')
generateBtn.addEventListener('click', randomizePattern)

randomizePattern();

setTimeout(() => {document.body.style.background = "url(" + cnv.canvas.toDataURL() + ")";
                    document.body.style.backgroundPosition = 'center'},
1000)

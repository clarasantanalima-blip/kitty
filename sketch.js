let animationType = 'bow';
let t = 0;
let kittyX, kittyY;

function setup() {
    const container = document.getElementById('p5-container');
    let width = container.offsetWidth;
    let height = container.offsetHeight;

    let canvas = createCanvas(width, height - 40);
    canvas.parent('p5-container');

    kittyX = width / 2;
    kittyY = height / 2;
}

function draw() {
    background(240, 220, 230, 20);

    // Fundo gradiente suave
    for (let i = 0; i < height; i++) {
        let inter = map(i, 0, height, 0, 1);
        let c = lerpColor(color(255, 182, 217), color(255, 240, 245), inter);
        stroke(c);
        line(0, i, width, i);
    }
    noStroke();

    // Interatividade com mouse
    kittyX = lerp(kittyX, mouseX, 0.05);
    kittyY = lerp(kittyY, mouseY, 0.05);

    // Desenhar de acordo com o tipo de animação
    switch (animationType) {
        case 'bow':
            drawKittyWithBow();
            break;
        case 'waving':
            drawKittyWaving();
            break;
        case 'dancing':
            drawKittyDancing();
            break;
    }

    t += 0.02;
}

function drawKittyWithBow() {
    push();
    translate(kittyX, kittyY);

    // Cabeça
    fill(255, 255, 255);
    circle(0, 0, 120);

    // Olhos
    fill(0);
    circle(-30, -20, 18);
    circle(30, -20, 18);

    // Brilho nos olhos
    fill(255);
    circle(-26, -22, 6);
    circle(34, -22, 6);

    // Nariz
    fill(255, 160, 200);
    triangle(-5, 0, 5, 0, 0, 12);

    // Boca
    stroke(0);
    strokeWeight(2);
    noFill();
    arc(0, 15, 20, 15, 0, PI);

    // Bigodes
    noFill();
    stroke(0);
    strokeWeight(1.5);
    line(-35, 5, -50, 5);
    line(-35, 10, -55, 10);
    line(35, 5, 50, 5);
    line(35, 10, 55, 10);

    // Laço vermelho (característico)
    push();
    translate(-50, -35);
    rotate(-0.3 + sin(t) * 0.1);
    fill(255, 0, 0);
    circle(-15, 0, 25);
    circle(15, 0, 25);
    fill(255, 100, 100);
    circle(0, 0, 15);
    pop();

    // Orelhas
    fill(255);
    circle(-40, -55, 35);
    circle(40, -55, 35);

    // Detalhes das orelhas
    fill(255, 200, 220);
    circle(-40, -55, 20);
    circle(40, -55, 20);

    // Corpo
    fill(255);
    rect(-40, 60, 80, 100, 0, 0, 20, 20);

    // Braços
    fill(255);
    circle(-60, 90, 30);
    circle(60, 90, 30);

    // Pernas
    fill(255);
    rect(-35, 155, 20, 50, 10);
    rect(15, 155, 20, 50, 10);

    // Sapatos
    fill(255, 0, 0);
    circle(-25, 210, 20);
    circle(25, 210, 20);

    pop();
}

function drawKittyWaving() {
    push();
    translate(kittyX, kittyY);

    // Cabeça
    fill(255, 255, 255);
    circle(0, 0, 120);

    // Olhos (com expressão amigável)
    fill(0);
    circle(-30, -20, 18);
    circle(30, -20, 18);

    fill(255);
    circle(-26, -22, 6);
    circle(34, -22, 6);

    // Nariz
    fill(255, 160, 200);
    triangle(-5, 0, 5, 0, 0, 12);

    // Boca sorrindo
    stroke(0);
    strokeWeight(2);
    noFill();
    arc(0, 15, 20, 15, 0, PI);

    // Bigodes
    noFill();
    stroke(0);
    strokeWeight(1.5);
    line(-35, 5, -50, 5);
    line(-35, 10, -55, 10);
    line(35, 5, 50, 5);
    line(35, 10, 55, 10);

    // Laço
    push();
    translate(-50, -35);
    fill(255, 0, 0);
    circle(-15, 0, 25);
    circle(15, 0, 25);
    fill(255, 100, 100);
    circle(0, 0, 15);
    pop();

    // Orelhas
    fill(255);
    circle(-40, -55, 35);
    circle(40, -55, 35);

    fill(255, 200, 220);
    circle(-40, -55, 20);
    circle(40, -55, 20);

    // Corpo
    fill(255);
    rect(-40, 60, 80, 100, 0, 0, 20, 20);

    // Braço esquerdo (parado)
    fill(255);
    circle(-60, 90, 30);

    // Braço direito (acenando)
    push();
    translate(60, 80);
    rotate(sin(t) * 0.5 - 0.3);
    circle(0, 0, 30);
    pop();

    // Pernas
    fill(255);
    rect(-35, 155, 20, 50, 10);
    rect(15, 155, 20, 50, 10);

    // Sapatos
    fill(255, 0, 0);
    circle(-25, 210, 20);
    circle(25, 210, 20);

    pop();
}

function drawKittyDancing() {
    push();
    translate(kittyX, kittyY);

    // Movimento de dança
    let danceOffset = sin(t * 2) * 20;

    // Cabeça
    fill(255, 255, 255);
    circle(danceOffset, -20, 120);

    // Olhos
    fill(0);
    circle(danceOffset - 30, -40, 18);
    circle(danceOffset + 30, -40, 18);

    fill(255);
    circle(danceOffset - 26, -42, 6);
    circle(danceOffset + 34, -42, 6);

    // Nariz
    fill(255, 160, 200);
    triangle(danceOffset - 5, -20, danceOffset + 5, -20, danceOffset, -8);

    // Boca dançante
    stroke(0);
    strokeWeight(2);
    noFill();
    arc(danceOffset, -5, 20, 15, 0, PI);

    // Bigodes
    noFill();
    stroke(0);
    strokeWeight(1.5);
    line(danceOffset - 35, -15, danceOffset - 50, -15);
    line(danceOffset - 35, -10, danceOffset - 55, -10);
    line(danceOffset + 35, -15, danceOffset + 50, -15);
    line(danceOffset + 35, -10, danceOffset + 55, -10);

    // Laço animado
    push();
    translate(danceOffset - 50, -55);
    rotate(cos(t) * 0.3);
    fill(255, 0, 0);
    circle(-15, 0, 25);
    circle(15, 0, 25);
    fill(255, 100, 100);
    circle(0, 0, 15);
    pop();

    // Orelhas
    fill(255);
    circle(danceOffset - 40, -75, 35);
    circle(danceOffset + 40, -75, 35);

    fill(255, 200, 220);
    circle(danceOffset - 40, -75, 20);
    circle(danceOffset + 40, -75, 20);

    // Corpo
    fill(255);
    rect(danceOffset - 40, 40, 80, 100, 0, 0, 20, 20);

    // Braços dançantes
    push();
    translate(danceOffset - 60, 70);
    rotate(sin(t * 1.5) * 0.7);
    fill(255);
    circle(0, 0, 30);
    pop();

    push();
    translate(danceOffset + 60, 70);
    rotate(cos(t * 1.5) * 0.7);
    fill(255);
    circle(0, 0, 30);
    pop();

    // Pernas dançantes
    fill(255);
    push();
    translate(danceOffset - 35, 135);
    rotate(sin(t) * 0.2);
    rect(-10, 20, 20, 50, 10);
    pop();

    push();
    translate(danceOffset + 35, 135);
    rotate(cos(t) * 0.2);
    rect(-10, 20, 20, 50, 10);
    pop();

    // Sapatos
    fill(255, 0, 0);
    circle(danceOffset - 25, 210, 20);
    circle(danceOffset + 25, 210, 20);

    pop();
}

function toggleAnimation() {
    const animations = ['bow', 'waving', 'dancing'];
    const currentIndex = animations.indexOf(animationType);
    animationType = animations[(currentIndex + 1) % animations.length];
    t = 0;
}

function windowResized() {
    const container = document.getElementById('p5-container');
    if (container) {
        let width = container.offsetWidth;
        let height = container.offsetHeight;
        resizeCanvas(width, height - 40);
    }
}

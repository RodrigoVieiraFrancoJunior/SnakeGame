window.onload = function () {

    var tela = document.getElementById('tela')

    var ctx = tela.getContext('2d')

    document.addEventListener('keydown', pressionartecla)

    setInterval(jogo, 120)

    var vel = 1

    var vx = 0

    var vy = 0

    var tp = 15

    var qp = 20

    var px = Math.floor(Math.random() * qp)

    var py = Math.floor(Math.random() * qp)

    var ax = Math.floor(Math.random() * qp)

    var ay = Math.floor(Math.random() * qp)

    var trilha = []

    var corpo = 4

    function jogo() {

        px += vx

        py += vy

        if ((px < -1) || (px > qp) || (py < -1) || (py > qp)) {
            corpo = 4
            trilha = []
            vx = vy = 0
            px = py = Math.floor(Math.random() * qp)

        }

        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, tela.width, tela.height)

        ctx.fillStyle = "red"
        ctx.fillRect(ax * tp, ay * tp, tp, tp)

        ctx.fillStyle = "green"

        for (var i = 0; i < trilha.length; i++) {
            ctx.fillRect(trilha[i].x * tp, trilha[i].y * tp, tp - 0.5, tp - 0.5)

            if (corpo > 4) {
                if (trilha[i].x == px && trilha[i].y == py) {
                    corpo = 4
                    trilha = []
                    vx = vy = 0
                    px = py = Math.floor(Math.random() * qp)
                }
            }
        }

        trilha.push({ x: px, y: py })
        while (trilha.length > corpo) {
            trilha.shift()

        }

        if (ax == px && ay == py) {
            corpo++
            document.getElementById("pontuação").innerText = `Pontuação  ${corpo - 4}`
            ax = Math.floor(Math.random() * qp)
            ay = Math.floor(Math.random() * qp)
        }


    }


    function pressionartecla(event) {
        switch (event.keyCode) {
            case 37: // esquerda
                if (vx != vel) {
                    vx = -vel;
                    vy = 0;
                }
                break;



            case 38: // cima
                if (vy != vel) {
                    vx = 0;
                    vy = -vel;
                }
                break;


            case 39: // direita
                if (vx != -vel) {
                    vx = vel;
                    vy = 0;
                }

                break;


            case 40: // baixo
                if (vy != -vel) {
                    vx = 0;
                    vy = vel;
                }
                break;

            default:
                break;
        }
    }
}
function Palpite({
    palpite, setPalpite, verificarPalpite, jogoFinalizado
}) {

    function alterarPalpite(event) {
        const valor = event.target.value;
        if (valor === '') {
            setPalpite('')
            return
        }

        const numero = Number(valor)
        
        if (numero >= 1 && numero <= 100) {
            setPalpite(valor)
        }
    }

    return (
        <div className="entrada">
            <input
                type="number"
                value={palpite}
                onChange={alterarPalpite}
                disabled={jogoFinalizado}
                min= "1"
                max= "100"
                placeholder="Digite um número entre 1 e 100"
            />

            <button
                className="botao-tentar"
                onClick={verificarPalpite}
                disabled={jogoFinalizado}
            >
                Tentar
            </button>
        </div>
    )
}

export default Palpite
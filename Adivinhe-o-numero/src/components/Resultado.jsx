function Resultado({
    mensagem,
    tentativas,
    jogoFinalizado,
    tipoMensagem
}) {
    if (mensagem === '') {
        return (
            <div className="resultado vazio">
                <p>Faça seu primeiro palpite!</p>
            </div>
        )
    }

    return (
        <div className={`resultado ${tipoMensagem}`}>
            <p>{mensagem}</p>

            <span>
                Tentativas: <strong>{tentativas}</strong>
            </span>
        </div>
    )
}

export default Resultado
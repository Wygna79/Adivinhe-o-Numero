function Resultado({
    mensagem, tentativas, jogoFinalizado
}) {
    if (mensagem === '') {
        return (
            <div className="resultado vazio">
                <p>Faça seu primeiro palpite!</p>
            </div>
        )
    }
    
    return (
        <div className={`resultado ${jogoFinalizado ? 'acerto' : ''}`}>
            <p>{mensagem}</p>
            <span>Tentativas: <strong>{tentativas}</strong></span>
        </div>
    )
}

export default Resultado
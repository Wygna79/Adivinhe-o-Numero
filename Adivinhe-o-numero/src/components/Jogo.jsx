import { useState } from 'react'
import Palpite from './Palpite'
import Resultado from './Resultado'

function Jogo({ minimo, maximo }) {
    const [numeroSecreto, setNumeroSecreto] = useState(
        Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
    )
    const [palpite, setPalpite] = useState('')
    const [tentativas, setTentativas] = useState(0)
    const [mensagem, setMensagem] = useState('')
    const [jogoFinalizado, setJogoFinalizado] = useState(false)
    const [menor, setMenor] = useState(minimo)
    const [maior, setMaior] = useState(maximo)
    const [tipoMensagem, setTipoMensagem] = useState('')

    function verificarPalpite() {
        if (palpite === '') {
            setMensagem('Digite um número entre 1 e 100.')
            setTipoMensagem('')
            return
        }

        const numero = Number(palpite)

        setTentativas(tentativas + 1)

        if (numero === numeroSecreto) {
            setMensagem(
                `Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas + 1} tentativas.`
            )
            setTipoMensagem('acerto')
            setJogoFinalizado(true)

        } else if (numero < numeroSecreto) {
            setMensagem('O número secreto é maior. Tente novamente!')
            setTipoMensagem('maior')
            setMenor(numero + 1)

        } else {
            setMensagem('O número secreto é menor. Tente novamente!')
            setTipoMensagem('menor')
            setMaior(numero - 1)
        }
        setPalpite('')
    }

    function novoJogo() {
        const novoNumero =
            Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
        setNumeroSecreto(novoNumero)
        setPalpite('')
        setTentativas(0)
        setMensagem('')
        setTipoMensagem('')
        setJogoFinalizado(false)
        setMenor(minimo)
        setMaior(maximo)
    }

    const larguraFaixa =
        ((maior - menor) / (maximo - minimo)) * 100
    const inicioFaixa =
        ((menor - minimo) / (maximo - minimo)) * 100

    return (
        <div className="jogo">
            <div className="cabecalho">
                <div>
                    <h1>Adivinhe o Número</h1>
                    <p>
                        Pensei em um número entre {minimo} e {maximo}.
                        Tente adivinhar!
                    </p>
                </div>

                <div className="tentativas">
                    <span>{tentativas}</span>
                    <small>Tentativas</small>
                </div>
            </div>


            <div className="faixa-container">
                <div className="faixa-titulo">
                    <span>FAIXA POSSÍVEL</span>
                    <strong>
                        {menor} — {maior}
                    </strong>
                </div>


                <div className="faixa">
                    <div
                        className="faixa-preenchida"
                        style={{
                            width: `${larguraFaixa}%`,
                            left: `${inicioFaixa}%`
                        }}
                    ></div>
                </div>


                <div className="faixa-numeros">
                    <span>{minimo}</span>
                    <span>50</span>
                    <span>{maximo}</span>
                </div>
            </div>

            <Palpite
                palpite={palpite}
                setPalpite={setPalpite}
                verificarPalpite={verificarPalpite}
                jogoFinalizado={jogoFinalizado}
            />

            <Resultado
                mensagem={mensagem}
                tentativas={tentativas}
                jogoFinalizado={jogoFinalizado}
                tipoMensagem={tipoMensagem}
            />

            <button
                className="botao-novo"
                onClick={novoJogo}
            >
                Novo Jogo
            </button>
        </div>
    )
}

export default Jogo
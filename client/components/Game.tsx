import { useState } from 'react'

function Game() {
  const [balance, setBalance] = useState(2500)
  const [spin, setSpin] = useState([] as number[])
  const [bets, setBets] = useState(0)

  const initArr = [
    { number: 1, value: 0 },
    { number: 2, value: 0 },
    { number: 3, value: 0 },
    { number: 4, value: 0 },
    { number: 5, value: 0 },
    { number: 6, value: 0 },
    { number: 7, value: 0 },
    { number: 8, value: 0 },
    { number: 9, value: 0 },
    { number: 10, value: 0 },
    { number: 11, value: 0 },
    { number: 12, value: 0 },
    { number: 13, value: 0 },
    { number: 14, value: 0 },
    { number: 15, value: 0 },
    { number: 16, value: 0 },
    { number: 17, value: 0 },
    { number: 18, value: 0 },
    { number: 19, value: 0 },
    { number: 20, value: 0 },
    { number: 21, value: 0 },
    { number: 22, value: 0 },
    { number: 23, value: 0 },
    { number: 24, value: 0 },
    { number: 25, value: 0 },
    { number: 26, value: 0 },
    { number: 27, value: 0 },
    { number: 28, value: 0 },
    { number: 29, value: 0 },
    { number: 30, value: 0 },
    { number: 31, value: 0 },
    { number: 32, value: 0 },
    { number: 33, value: 0 },
    { number: 34, value: 0 },
    { number: 35, value: 0 },
    { number: 36, value: 0 },
  ]

  const [cells, setCells] = useState(initArr)

  function handleSpin() {
    const dealer = Math.floor(Math.random() * 36) + 1
    const winValue = cells.find((cell) => cell.number === dealer)
      ?.value as number

    function win() {
      return (
        balance -
        cells.reduce(
          (accumulator, currentValue) => accumulator + currentValue.value,
          0,
        ) +
        37 * winValue
      )
    }
    function lose() {
      return (
        balance -
        cells.reduce(
          (accumulator, currentValue) => accumulator + currentValue.value,
          0,
        )
      )
    }

    if (winValue !== 0) {
      setBalance(win())
      console.log('you win')
      alert('You win')
    } else {
      setBalance(lose())
      console.log('you lose')
      alert('You lose')
    }

    setCells(initArr)
    setSpin([...spin, dealer])
    setBets(0)
  }

  return (
    <>
      <p>This is game page</p>
      <h2>Balance: {balance}</h2>
      <div className='cellsContainer'>
        {cells
          .sort(function (a, b) {
            return a.number - b.number
          })
          ?.map((cell) => (
            <label key={cell.number}>
              {cell.number}:{' '}
              <input
                value={cell.value}
                onChange={(e) => {
                  setCells((prevCells) => {
                    const updatedCells = [
                      ...prevCells.filter((i) => i.number !== cell.number),
                      { number: cell.number, value: Number(e.target.value) },
                    ]

                    setBets(
                      updatedCells.reduce(
                        (accumulator, currentValue) =>
                          accumulator + currentValue.value,
                        0,
                      ),
                    )

                    return updatedCells
                  })
                }}
              />
            </label>
          ))}
        <br />
        
      </div>
      <h2>Bets: {bets}</h2>
      <button onClick={handleSpin}>Spin</button>
      <h2>Spin history:</h2>
      {spin?.map((s) => `${s}/`)}
    </>
  )
}

export default Game

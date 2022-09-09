import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isLoading, pokemon } from '../store/pokedex/pokedexSlice'

export function Pokedex() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Is the pokemon loading?"
          onClick={() => dispatch(isLoading())}
        >
          Loading
        </button>
        <span>{count}</span>
        <button
          aria-label="Pokemon"
          onClick={() => dispatch(pokemon({id:2, name:"pikachu"}))}
        >
          Pokemon
        </button>
      </div>
    </div>
  )
}
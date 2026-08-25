import React, { ChangeEvent, SyntheticEvent, useState } from 'react'

type Props = {
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: SyntheticEvent) => void;
}

const Search: React.FC<Props> = ({ search, handleChange, onClick }: Props) => {
  return (
    <div>
        <input value={search} onChange={(e) => handleChange(e)}></input>
        <button onClick={(e) => onClick(e)}>Click</button>
    </div>
  )
}

export default Search
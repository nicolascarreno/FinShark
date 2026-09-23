import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Search as SearchIcon} from 'lucide-react';

type Props = {
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: SyntheticEvent) => void;
}

const Search: React.FC<Props> = ({ search, handleChange, onClick }: Props) => {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div
          className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
        >
          <input
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleChange}
          ></input>
          <button onClick={(e) => onClick(e)}><SearchIcon /></button>
        </div>
      </div>
    </section>
  )
}

export default Search
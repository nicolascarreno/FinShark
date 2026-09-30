import React from 'react'
import { ClipLoader } from 'react-spinners';
import "./Spinner.css";

type Props = {
    isLoading?: boolean;
  inline?: boolean;
}

const Spinner = ({ isLoading = true, inline = false }: Props) => {
  return (
    <>
    <div id="loading-spinner" className={inline ? 'loading-spinner-inline' : undefined}>
            <ClipLoader color="#36d7b7" loading={isLoading} size={35} aria-label="Loading Spinner" data-testid="loader"/>
        </div>
    </>
  )
}

export default Spinner
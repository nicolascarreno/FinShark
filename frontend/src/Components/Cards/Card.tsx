import "./Card.css";

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card = ({ companyName, ticker, price }: Props) => {
  return (
    <div className='card'>
        <img
            src="logo512.png"
            alt="Image"
        />
        <div className='details'>
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste ea omnis dolorum est accusantium at assumenda, vel eius facilis sint, amet cum veritatis aperiam quos sapiente, eos excepturi soluta aspernatur!</p>
    </div>
  )
}



export default Card
export default function WorkBox({card1, card2, card3}) {
  return (
    <div className="work-box">
        {card1}
        <div className="work-box-mobile">
          {card2}
        </div>
        {card3}
    </div>
  )
}

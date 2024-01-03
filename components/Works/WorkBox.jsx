/**
 * It contains four card slots
 * card1 -> flex
 * card2 -> flex-row
 * card3 -> flex-row
 * card4 -> flex
 * 
 * @param {card1,card2,card3,card4} 
 * @returns
 */

export default function WorkBox({ card1, card2, card3, card4 }) {
  return (
    <div className="work-box">
      {card1}
      <div className="work-box-mobile">
      {card2}
      {card3}
      </div>
      {card4}
    </div>
  )
}

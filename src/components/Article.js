import React from 'react'

const Article = ({title, date="January 1, 1970", preview, minutes}) => {

  const coffeeCups = minutes < 30 ? Math.ceil(minutes / 5) : 0;
  const bentoBoxes = minutes >= 30 ? Math.ceil(minutes / 10) : 0;

  const minuteDisplay = `${"☕️".repeat(coffeeCups)}${"🍱".repeat(bentoBoxes)} ${minutes} min read`;

  return (
    <div>
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{minuteDisplay}</p>
            <p>{preview}</p>
        </article>
    </div>
  )
}

export default Article
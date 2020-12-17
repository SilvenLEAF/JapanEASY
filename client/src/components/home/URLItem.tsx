import React from 'react'
import URLDataInterface from '../../interfaces/URLDataInterface'


interface propsInterface {
  item: URLDataInterface
}


function URLItem(props: propsInterface) {
  const { item } = props;

  return (
    <li>
    <div className="myUserProfileIcon" style={{background: `url("/Logo.png") center/cover` }}></div>
    <div>
      <div className="myUserName blue-text">
        {item.short}
      </div>

      <p className="grey-text">
        {item.full}
      </p>
    </div>

    <div className="fa fa-eye">
      { item.clicks }
    </div>

  </li>
  )
}

export default URLItem

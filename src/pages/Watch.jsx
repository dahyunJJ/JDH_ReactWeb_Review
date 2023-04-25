import { Link } from 'react-router-dom';

function Watch({ recentItems }) { 
  
  return (
    <div className='watch'>
      <ul className='list'>
        {
          recentItems ? recentItems.map((item, i) => (
            <li key={i}>
              <Link to={`/Detail/${item}`} >
                <img src={`${process.env.PUBLIC_URL}/img/image${item}.jpg`} alt="상품명" />
                </Link>
            </li>
          ))
          : <li hidden></li>
        }

      </ul>
    </div>
  )
}
export default Watch;
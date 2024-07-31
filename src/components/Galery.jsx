
import Button  from './Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Galery = () => {
  return (
    <>
      <div className="galery">
        <ImageList 
          sx={{ width: '70%', height: 'auto' }}
          className='gallery-img'
          variant="quilted"
          cols={4}
          rowHeight={140}
        >
          {itemData.map((item) => (
            <ImageListItem
              className='img-galery'
              key={item.img} 
              cols={item.cols || 1} 
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="foot-galery">
        <Button />
      </div>
    </>
  );
}


export default Galery

const itemData = [
  {
    img: '/img/galery/1.jpg',
    rows: 3,
    cols: 2,
  },
  {
    img: '/img/galery/2.jpg',
    rows: 1,
    cols: 2,
  },
  {
    img: '/img/galery/3.jpg',
    rows: 1,
    cols: 1,
  },
  {
    img: '/img/galery/6.jpg',
    rows: 1,
    cols: 1,
  },
  {
    img: '/img/galery/4.jpg',
    cols: 2,
    rows: 2,
  },
  {
    img: '/img/galery/5.jpg',
    cols: 2,
    rows: 1
  },
];

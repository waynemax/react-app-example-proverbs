import React from 'react';

export default function MoreButton({loadingStatus, onClick}) {
  let button;
  if (loadingStatus === true) {
    button = <div className="Pagination__moreButton">
      <span>Загрузка</span>
    </div>;
  } else {
    button = <div className="Pagination__moreButton">
      <span>Больше</span>
    </div>;
  }

  return (
    <div onClick={onClick||(() => {})}>
      {button}
    </div>
  )
}
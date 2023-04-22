import React from 'react';
import Btn from './Btn';

const CardsSet = props => {
    const {image, title, description, code_link, live_site, key} = props.data;
    return (            
    <div className="col-md-3 col-lg-3">
      <div className="card h-100">
    <img src={image} className="card-img-top" alt="..." />
    <div className="card-body text-center p-4">
      <h5 className="card-title fw-bold h2">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
    {
    props.hell? <div className="card-footer border-0">
         <div className="d-flex justify-content-center gap-5">
            <a href={code_link}>
                <Btn text="<Code/>" classes="btn btn-outline-primary p-1 px-2 fw-semibold" />
            </a>
            <a href={live_site}>
                <Btn text="Live Site" classes="btn btn-outline-success p-1 px-2 fw-semibold" />
            </a>
    </div> 
    </div> : null
}
</div>
  </div>
    );
};

export default CardsSet;
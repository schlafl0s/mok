import { useState } from 'react';
import s from '/styles/Home.module.scss';

export default function Prices({ servicePageInfo }) {
  const pricesInfo = servicePageInfo?.prices || {};
  const header = pricesInfo.header || '';
  const services = pricesInfo.servicesAndPrices || {};

  const serviceList = Object.values(services).filter(
    service => service?.headerService && service?.priceService
  );

  return (
    <section className={s.prices}>
      <div className={s.pricesBackground}></div>
      <div className={s.pricesInfo}>
        <h1 className={s.Header}>{header}</h1>
        <div className={s.pricesContainer}>
          {serviceList.map((service, index) => (
            <Price
              key={index}
              header={service.headerService}
              price={service.priceService}
              dopPrices={Object.values(service.dopServices).filter(
                dop => dop?.dopServiceHeader && dop?.DopServicePrice
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Price({ header, price, dopPrices }) {
  const [hidden, setHidden] = useState(false);

  return (
    <button onClick={() => setHidden(!hidden)} className={s.price}>
      <div className={s.upSidePrice}>
        <h2 className={`${s.priceHeader} ${hidden ? s.priceHeaderBlue : ''}`}>{header}</h2>
        <div className={s.priceRight}>
          <span className={s.pricePrice}>{price} ₽</span>
          <div className={`${s.priceOpen} ${hidden ? s.priceOpenBlue : ''}`}>
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className={hidden ? s.linePrice : s.unactiveLinePrice} d="M8.7041 0.870117V18.1757" stroke="#5BE146" strokeWidth="1.73056" />
              <path className={hidden ? s.line2Price : s.unactiveLine2Price} d="M0.0512695 9.52246L17.3568 9.52246" stroke="#5BE146" strokeWidth="1.73056" />
            </svg>
          </div>
        </div>
      </div>
      <div className={hidden ? s.dopPrices : s.dopPricesUnactive}>
        {dopPrices.map((dopItem, index) => (
          <div key={index} className={hidden ? s.dopPrice : s.dopPriceUnactive}>
            <h3 className={hidden ? s.dopPriceHeader : s.dopPriceHeaderUnactive}>{dopItem.dopServiceHeader}</h3>
            <span className={hidden ? s.pricePrice : s.pricePriceUnactive}>{dopItem.DopServicePrice} ₽</span>
          </div>
        ))}
      </div>
    </button>
  );
}

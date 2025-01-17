import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function Trust () {
    return (
        <section className={s.trust}>
            <h1 className={s.Header}>Нам доверяют</h1>
            <div className={s.trustContainer}>
                <TrustItem img={'/trust1.png'} />
                <TrustItem img={'/trust2.png'} />
                <TrustItem img={'/trust3.png'} />
                <TrustItem img={'/trust4.png'} />
                <TrustItem img={'/trust5.png'} />
                <TrustItem img={'/trust6.png'} />
                <TrustItem img={'/trust7.png'} />
                <TrustItem img={'/trust8.png'} />
                <TrustItem img={'/trust9.png'} />
                <TrustItem img={'/trust10.png'} />
                <TrustItem img={'/trust11.png'} />
                <TrustItem img={'/trust12.png'} />
                <TrustItem img={'/trust13.png'} />
                <TrustItem img={'/trust14.png'} />
                <TrustItem img={'/trust15.png'} />
                <TrustItem img={'/trust16.png'} />
                <TrustItem img={'/trust17.png'} />
                <TrustItem img={'/trust18.png'} />
            </div>
        </section>
    )
}

function TrustItem ({img}) {
    return (
      <div className={s.trustItem}>
          <Image
          className={s.trustImg}
          src={img}
          width={250}
          height={250}
          />
      </div>
    )
}
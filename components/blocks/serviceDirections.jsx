import s from '/styles/Home.module.scss'
import Image from 'next/image'

export default function ServiceDirections ({ setPopupOpen, servicePageInfo }) {
    const { direction1, direction2, direction3, direction4, direction5 } = servicePageInfo.directions
    return (
        <section className={s.serviceDirections}>
            <h1 className={s.Header}>Наши направления</h1>
            <div className={s.serviceDirectionsContainer}>
                <div className={s.serviceDirection}>
                    <div className={s.serviceDirectionInfo}>
                        <div className={s.serviceDirectionInfoText}>
                            <svg className={s.serviceDirectionMiniImg} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_816_32863)">
                                <rect width="60" height="60" rx="30" fill="white"/>
                                <g clip-path="url(#clip1_816_32863)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.7692 58.1585H11.46C9.71218 58.1585 8.28955 59.5807 8.28955 61.3295V64.5H46.9411V61.3295C46.9411 59.5808 45.518 58.1585 43.7692 58.1585ZM37.6463 16.877L41.2457 20.4768L42.5044 19.2172C42.6066 19.1149 42.6217 18.9934 42.6217 18.9302C42.6217 18.867 42.6066 18.7455 42.5044 18.6433L39.48 15.6173C39.3777 15.5155 39.2561 15.5 39.193 15.5C39.1293 15.5 39.0082 15.5155 38.9059 15.6173L37.6463 16.877ZM34.5706 51.7671C34.5706 51.1182 34.0428 50.589 33.3934 50.589C32.7441 50.589 32.2158 51.1182 32.2158 51.7671C32.2158 52.4156 32.7441 52.9442 33.3934 52.9442C34.0428 52.9442 34.5706 52.4155 34.5706 51.7671ZM38.6741 30.2248C42.2207 31.1126 44.8432 34.1587 45.1513 37.8532C45.4793 41.7824 43.1047 45.4227 39.3768 46.7059L37.907 47.212L41.4827 51.8245C47.4294 49.6243 51.1908 43.7385 50.6611 37.3928C50.2506 32.4773 47.2879 28.1216 42.8936 25.9256C42.7794 26.0922 42.6502 26.2481 42.5076 26.3912L38.6741 30.2248ZM22.4031 27.2527L32.8854 16.77C33.5314 16.1239 34.5828 16.1239 35.2289 16.77L41.3517 22.8928C41.9983 23.5389 41.9983 24.5906 41.3517 25.2367L30.8699 35.72L22.4031 27.2527ZM18.0055 29.902L28.2201 40.1166C28.241 40.1365 28.2688 40.1476 28.2976 40.1476C28.3265 40.1476 28.3543 40.1365 28.3751 40.1166L30.5881 37.9031C30.614 37.8767 30.6202 37.8471 30.6202 37.8258C30.6202 37.8042 30.614 37.7736 30.5881 37.7481L20.374 27.5335C20.3638 27.5236 20.3518 27.5158 20.3387 27.5105C20.3255 27.5053 20.3114 27.5027 20.2972 27.5029C20.276 27.5029 20.2454 27.5081 20.2199 27.5335L18.0056 29.7479C17.9646 29.789 17.9646 29.861 18.0055 29.902ZM12.7045 52.3203H26.7121L28.0617 49.015H14.3571C13.4453 49.015 12.7045 49.7572 12.7045 50.6677V52.3203ZM26.7593 56.5252L29.8318 49.0029C30.3718 47.6786 31.4948 46.8083 32.9118 46.6141C34.3287 46.4214 35.6435 46.9582 36.5205 48.0882L42.4515 55.7392C42.6401 55.9826 42.8011 56.2463 42.9313 56.5252H26.7593ZM33.3933 54.5776C31.8439 54.5776 30.5824 53.317 30.5824 51.7671C30.5824 50.2167 31.8439 48.9557 33.3933 48.9557C34.9433 48.9557 36.2039 50.2168 36.2039 51.7671C36.2039 53.317 34.9433 54.5776 33.3933 54.5776Z" 
                                fill="#391FCF"/>
                                </g>
                                </g>
                                <defs>
                                <clipPath id="clip0_816_32863">
                                <rect width="60" height="60" rx="30" fill="white"/>
                                </clipPath>
                                <clipPath id="clip1_816_32863">
                                <rect width="49" height="49" fill="white" transform="translate(5 15.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <h2 className={s.serviceDirectionHeader}>{direction1.header}</h2>
                            <p className={s.serviceDirectionText}>{direction1.text}</p>
                        </div>
                        <button onClick={() => setPopupOpen(true)} className={`${s.button9} ${s.buttonMat9} ${s.btn9}`}>{direction1.btn}</button>
                    </div>
                    <Image
                    className={s.serviceDirectionImg}
                    src={'/serviceDirectionBackground1.png'}
                    width={1000}
                    height={1000}
                    />
                </div>
                <div className={s.serviceDirection}>
                    <div className={s.serviceDirectionInfo}>
                        <div className={s.serviceDirectionInfoText}>
                            <svg className={s.serviceDirectionMiniImg} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_816_32863)">
                                <rect width="60" height="60" rx="30" fill="white"/>
                                <g clip-path="url(#clip1_816_32863)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.7692 58.1585H11.46C9.71218 58.1585 8.28955 59.5807 8.28955 61.3295V64.5H46.9411V61.3295C46.9411 59.5808 45.518 58.1585 43.7692 58.1585ZM37.6463 16.877L41.2457 20.4768L42.5044 19.2172C42.6066 19.1149 42.6217 18.9934 42.6217 18.9302C42.6217 18.867 42.6066 18.7455 42.5044 18.6433L39.48 15.6173C39.3777 15.5155 39.2561 15.5 39.193 15.5C39.1293 15.5 39.0082 15.5155 38.9059 15.6173L37.6463 16.877ZM34.5706 51.7671C34.5706 51.1182 34.0428 50.589 33.3934 50.589C32.7441 50.589 32.2158 51.1182 32.2158 51.7671C32.2158 52.4156 32.7441 52.9442 33.3934 52.9442C34.0428 52.9442 34.5706 52.4155 34.5706 51.7671ZM38.6741 30.2248C42.2207 31.1126 44.8432 34.1587 45.1513 37.8532C45.4793 41.7824 43.1047 45.4227 39.3768 46.7059L37.907 47.212L41.4827 51.8245C47.4294 49.6243 51.1908 43.7385 50.6611 37.3928C50.2506 32.4773 47.2879 28.1216 42.8936 25.9256C42.7794 26.0922 42.6502 26.2481 42.5076 26.3912L38.6741 30.2248ZM22.4031 27.2527L32.8854 16.77C33.5314 16.1239 34.5828 16.1239 35.2289 16.77L41.3517 22.8928C41.9983 23.5389 41.9983 24.5906 41.3517 25.2367L30.8699 35.72L22.4031 27.2527ZM18.0055 29.902L28.2201 40.1166C28.241 40.1365 28.2688 40.1476 28.2976 40.1476C28.3265 40.1476 28.3543 40.1365 28.3751 40.1166L30.5881 37.9031C30.614 37.8767 30.6202 37.8471 30.6202 37.8258C30.6202 37.8042 30.614 37.7736 30.5881 37.7481L20.374 27.5335C20.3638 27.5236 20.3518 27.5158 20.3387 27.5105C20.3255 27.5053 20.3114 27.5027 20.2972 27.5029C20.276 27.5029 20.2454 27.5081 20.2199 27.5335L18.0056 29.7479C17.9646 29.789 17.9646 29.861 18.0055 29.902ZM12.7045 52.3203H26.7121L28.0617 49.015H14.3571C13.4453 49.015 12.7045 49.7572 12.7045 50.6677V52.3203ZM26.7593 56.5252L29.8318 49.0029C30.3718 47.6786 31.4948 46.8083 32.9118 46.6141C34.3287 46.4214 35.6435 46.9582 36.5205 48.0882L42.4515 55.7392C42.6401 55.9826 42.8011 56.2463 42.9313 56.5252H26.7593ZM33.3933 54.5776C31.8439 54.5776 30.5824 53.317 30.5824 51.7671C30.5824 50.2167 31.8439 48.9557 33.3933 48.9557C34.9433 48.9557 36.2039 50.2168 36.2039 51.7671C36.2039 53.317 34.9433 54.5776 33.3933 54.5776Z" 
                                fill="#5BE146"/>
                                </g>
                                </g>
                                <defs>
                                <clipPath id="clip0_816_32863">
                                <rect width="60" height="60" rx="30" fill="white"/>
                                </clipPath>
                                <clipPath id="clip1_816_32863">
                                <rect width="49" height="49" fill="white" transform="translate(5 15.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <h2 className={s.serviceDirectionHeader}>{direction2.header}</h2>
                            <p className={s.serviceDirectionText}>{direction2.text}</p>
                        </div>
                        <button onClick={() => setPopupOpen(true)} className={`${s.button10} ${s.buttonMat10} ${s.btn10}`}>{direction2.btn}</button>
                    </div>
                    <Image
                    className={s.serviceDirectionImg}
                    src={'/serviceDirectionBackground2.png'}
                    width={1000}
                    height={1000}
                    />
                </div>
                <div className={s.serviceDirection}>
                    <div className={s.serviceDirectionInfo}>
                        <div className={s.serviceDirectionInfoText}>
                            <svg className={s.serviceDirectionMiniImg} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_816_32863)">
                                <rect width="60" height="60" rx="30" fill="white"/>
                                <g clip-path="url(#clip1_816_32863)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.7692 58.1585H11.46C9.71218 58.1585 8.28955 59.5807 8.28955 61.3295V64.5H46.9411V61.3295C46.9411 59.5808 45.518 58.1585 43.7692 58.1585ZM37.6463 16.877L41.2457 20.4768L42.5044 19.2172C42.6066 19.1149 42.6217 18.9934 42.6217 18.9302C42.6217 18.867 42.6066 18.7455 42.5044 18.6433L39.48 15.6173C39.3777 15.5155 39.2561 15.5 39.193 15.5C39.1293 15.5 39.0082 15.5155 38.9059 15.6173L37.6463 16.877ZM34.5706 51.7671C34.5706 51.1182 34.0428 50.589 33.3934 50.589C32.7441 50.589 32.2158 51.1182 32.2158 51.7671C32.2158 52.4156 32.7441 52.9442 33.3934 52.9442C34.0428 52.9442 34.5706 52.4155 34.5706 51.7671ZM38.6741 30.2248C42.2207 31.1126 44.8432 34.1587 45.1513 37.8532C45.4793 41.7824 43.1047 45.4227 39.3768 46.7059L37.907 47.212L41.4827 51.8245C47.4294 49.6243 51.1908 43.7385 50.6611 37.3928C50.2506 32.4773 47.2879 28.1216 42.8936 25.9256C42.7794 26.0922 42.6502 26.2481 42.5076 26.3912L38.6741 30.2248ZM22.4031 27.2527L32.8854 16.77C33.5314 16.1239 34.5828 16.1239 35.2289 16.77L41.3517 22.8928C41.9983 23.5389 41.9983 24.5906 41.3517 25.2367L30.8699 35.72L22.4031 27.2527ZM18.0055 29.902L28.2201 40.1166C28.241 40.1365 28.2688 40.1476 28.2976 40.1476C28.3265 40.1476 28.3543 40.1365 28.3751 40.1166L30.5881 37.9031C30.614 37.8767 30.6202 37.8471 30.6202 37.8258C30.6202 37.8042 30.614 37.7736 30.5881 37.7481L20.374 27.5335C20.3638 27.5236 20.3518 27.5158 20.3387 27.5105C20.3255 27.5053 20.3114 27.5027 20.2972 27.5029C20.276 27.5029 20.2454 27.5081 20.2199 27.5335L18.0056 29.7479C17.9646 29.789 17.9646 29.861 18.0055 29.902ZM12.7045 52.3203H26.7121L28.0617 49.015H14.3571C13.4453 49.015 12.7045 49.7572 12.7045 50.6677V52.3203ZM26.7593 56.5252L29.8318 49.0029C30.3718 47.6786 31.4948 46.8083 32.9118 46.6141C34.3287 46.4214 35.6435 46.9582 36.5205 48.0882L42.4515 55.7392C42.6401 55.9826 42.8011 56.2463 42.9313 56.5252H26.7593ZM33.3933 54.5776C31.8439 54.5776 30.5824 53.317 30.5824 51.7671C30.5824 50.2167 31.8439 48.9557 33.3933 48.9557C34.9433 48.9557 36.2039 50.2168 36.2039 51.7671C36.2039 53.317 34.9433 54.5776 33.3933 54.5776Z" 
                                fill="#FEDF43"/>
                                </g>
                                </g>
                                <defs>
                                <clipPath id="clip0_816_32863">
                                <rect width="60" height="60" rx="30" fill="white"/>
                                </clipPath>
                                <clipPath id="clip1_816_32863">
                                <rect width="49" height="49" fill="white" transform="translate(5 15.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <h2 className={s.serviceDirectionHeader}>{direction3.header}</h2>
                            <p className={s.serviceDirectionText}>{direction3.text}</p>
                        </div>
                        <button onClick={() => setPopupOpen(true)} className={`${s.button11} ${s.buttonMat11} ${s.btn11}`}>{direction3.btn}</button>
                    </div>
                    <Image
                    className={s.serviceDirectionImg}
                    src={'/serviceDirectionBackground3.png'}
                    width={1000}
                    height={1000}
                    />
                </div>
                <div className={s.serviceDirection}>
                    <div className={s.serviceDirectionInfo}>
                        <div className={s.serviceDirectionInfoText}>
                            <svg className={s.serviceDirectionMiniImg} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_816_32863)">
                            <rect width="60" height="60" rx="30" fill="white"/>
                            <g clip-path="url(#clip1_816_32863)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M43.7692 58.1585H11.46C9.71218 58.1585 8.28955 59.5807 8.28955 61.3295V64.5H46.9411V61.3295C46.9411 59.5808 45.518 58.1585 43.7692 58.1585ZM37.6463 16.877L41.2457 20.4768L42.5044 19.2172C42.6066 19.1149 42.6217 18.9934 42.6217 18.9302C42.6217 18.867 42.6066 18.7455 42.5044 18.6433L39.48 15.6173C39.3777 15.5155 39.2561 15.5 39.193 15.5C39.1293 15.5 39.0082 15.5155 38.9059 15.6173L37.6463 16.877ZM34.5706 51.7671C34.5706 51.1182 34.0428 50.589 33.3934 50.589C32.7441 50.589 32.2158 51.1182 32.2158 51.7671C32.2158 52.4156 32.7441 52.9442 33.3934 52.9442C34.0428 52.9442 34.5706 52.4155 34.5706 51.7671ZM38.6741 30.2248C42.2207 31.1126 44.8432 34.1587 45.1513 37.8532C45.4793 41.7824 43.1047 45.4227 39.3768 46.7059L37.907 47.212L41.4827 51.8245C47.4294 49.6243 51.1908 43.7385 50.6611 37.3928C50.2506 32.4773 47.2879 28.1216 42.8936 25.9256C42.7794 26.0922 42.6502 26.2481 42.5076 26.3912L38.6741 30.2248ZM22.4031 27.2527L32.8854 16.77C33.5314 16.1239 34.5828 16.1239 35.2289 16.77L41.3517 22.8928C41.9983 23.5389 41.9983 24.5906 41.3517 25.2367L30.8699 35.72L22.4031 27.2527ZM18.0055 29.902L28.2201 40.1166C28.241 40.1365 28.2688 40.1476 28.2976 40.1476C28.3265 40.1476 28.3543 40.1365 28.3751 40.1166L30.5881 37.9031C30.614 37.8767 30.6202 37.8471 30.6202 37.8258C30.6202 37.8042 30.614 37.7736 30.5881 37.7481L20.374 27.5335C20.3638 27.5236 20.3518 27.5158 20.3387 27.5105C20.3255 27.5053 20.3114 27.5027 20.2972 27.5029C20.276 27.5029 20.2454 27.5081 20.2199 27.5335L18.0056 29.7479C17.9646 29.789 17.9646 29.861 18.0055 29.902ZM12.7045 52.3203H26.7121L28.0617 49.015H14.3571C13.4453 49.015 12.7045 49.7572 12.7045 50.6677V52.3203ZM26.7593 56.5252L29.8318 49.0029C30.3718 47.6786 31.4948 46.8083 32.9118 46.6141C34.3287 46.4214 35.6435 46.9582 36.5205 48.0882L42.4515 55.7392C42.6401 55.9826 42.8011 56.2463 42.9313 56.5252H26.7593ZM33.3933 54.5776C31.8439 54.5776 30.5824 53.317 30.5824 51.7671C30.5824 50.2167 31.8439 48.9557 33.3933 48.9557C34.9433 48.9557 36.2039 50.2168 36.2039 51.7671C36.2039 53.317 34.9433 54.5776 33.3933 54.5776Z" 
                            fill="#5BE146"/>
                            </g>
                            </g>
                            <defs>
                            <clipPath id="clip0_816_32863">
                            <rect width="60" height="60" rx="30" fill="white"/>
                            </clipPath>
                            <clipPath id="clip1_816_32863">
                            <rect width="49" height="49" fill="white" transform="translate(5 15.5)"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <h2 className={s.serviceDirectionHeader}>{direction4.header}</h2>
                            <p className={s.serviceDirectionText}>{direction4.text}</p>
                        </div>
                        <button onClick={() => setPopupOpen(true)} className={`${s.button10} ${s.buttonMat10} ${s.btn10}`}>{direction4.btn}</button>
                    </div>
                    <Image
                    className={s.serviceDirectionImg}
                    src={'/serviceDirectionBackground4.png'}
                    width={1000}
                    height={1000}
                    />
                </div>
                <div className={s.serviceDirection}>
                    <div className={s.serviceDirectionInfo}>
                        <div className={s.serviceDirectionInfoText}>
                            <svg className={s.serviceDirectionMiniImg} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_816_32863)">
                                <rect width="60" height="60" rx="30" fill="white"/>
                                <g clip-path="url(#clip1_816_32863)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.7692 58.1585H11.46C9.71218 58.1585 8.28955 59.5807 8.28955 61.3295V64.5H46.9411V61.3295C46.9411 59.5808 45.518 58.1585 43.7692 58.1585ZM37.6463 16.877L41.2457 20.4768L42.5044 19.2172C42.6066 19.1149 42.6217 18.9934 42.6217 18.9302C42.6217 18.867 42.6066 18.7455 42.5044 18.6433L39.48 15.6173C39.3777 15.5155 39.2561 15.5 39.193 15.5C39.1293 15.5 39.0082 15.5155 38.9059 15.6173L37.6463 16.877ZM34.5706 51.7671C34.5706 51.1182 34.0428 50.589 33.3934 50.589C32.7441 50.589 32.2158 51.1182 32.2158 51.7671C32.2158 52.4156 32.7441 52.9442 33.3934 52.9442C34.0428 52.9442 34.5706 52.4155 34.5706 51.7671ZM38.6741 30.2248C42.2207 31.1126 44.8432 34.1587 45.1513 37.8532C45.4793 41.7824 43.1047 45.4227 39.3768 46.7059L37.907 47.212L41.4827 51.8245C47.4294 49.6243 51.1908 43.7385 50.6611 37.3928C50.2506 32.4773 47.2879 28.1216 42.8936 25.9256C42.7794 26.0922 42.6502 26.2481 42.5076 26.3912L38.6741 30.2248ZM22.4031 27.2527L32.8854 16.77C33.5314 16.1239 34.5828 16.1239 35.2289 16.77L41.3517 22.8928C41.9983 23.5389 41.9983 24.5906 41.3517 25.2367L30.8699 35.72L22.4031 27.2527ZM18.0055 29.902L28.2201 40.1166C28.241 40.1365 28.2688 40.1476 28.2976 40.1476C28.3265 40.1476 28.3543 40.1365 28.3751 40.1166L30.5881 37.9031C30.614 37.8767 30.6202 37.8471 30.6202 37.8258C30.6202 37.8042 30.614 37.7736 30.5881 37.7481L20.374 27.5335C20.3638 27.5236 20.3518 27.5158 20.3387 27.5105C20.3255 27.5053 20.3114 27.5027 20.2972 27.5029C20.276 27.5029 20.2454 27.5081 20.2199 27.5335L18.0056 29.7479C17.9646 29.789 17.9646 29.861 18.0055 29.902ZM12.7045 52.3203H26.7121L28.0617 49.015H14.3571C13.4453 49.015 12.7045 49.7572 12.7045 50.6677V52.3203ZM26.7593 56.5252L29.8318 49.0029C30.3718 47.6786 31.4948 46.8083 32.9118 46.6141C34.3287 46.4214 35.6435 46.9582 36.5205 48.0882L42.4515 55.7392C42.6401 55.9826 42.8011 56.2463 42.9313 56.5252H26.7593ZM33.3933 54.5776C31.8439 54.5776 30.5824 53.317 30.5824 51.7671C30.5824 50.2167 31.8439 48.9557 33.3933 48.9557C34.9433 48.9557 36.2039 50.2168 36.2039 51.7671C36.2039 53.317 34.9433 54.5776 33.3933 54.5776Z" 
                                fill="#391FCF"/>
                                </g>
                                </g>
                                <defs>
                                <clipPath id="clip0_816_32863">
                                <rect width="60" height="60" rx="30" fill="white"/>
                                </clipPath>
                                <clipPath id="clip1_816_32863">
                                <rect width="49" height="49" fill="white" transform="translate(5 15.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <h2 className={s.serviceDirectionHeader}>{direction5.header}</h2>
                            <p className={s.serviceDirectionText}>{direction5.text}</p>
                        </div>
                        <button onClick={() => setPopupOpen(true)} className={`${s.button9} ${s.buttonMat9} ${s.btn9}`}>{direction5.btn}</button>
                    </div>
                    <Image
                    className={s.serviceDirectionImg}
                    src={'/serviceDirectionBackground1.png'}
                    width={1000}
                    height={1000}
                    />
                </div>
            </div>
        </section>
    )
}
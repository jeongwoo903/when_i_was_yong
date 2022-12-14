import React from "react";
import { ResultDiv } from "../styledComponents";
import { getResult } from "../result_list";
import { useNavigate } from "react-router-dom";
import KakaoShare from "../share";

const Result = () => {
  const addr = window.location.href;
  const id = addr[addr.length - 1];

  const result = getResult(id);

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <ResultDiv>
      <div className="resultBox">
        <div className="re_bgColor">
          <div className="comment">
            <h3>테스트결과</h3>
            <h2>‘그때 그 시절의 나는..’</h2>
          </div>
          <img src={result.img} alt="result" />
          <div className="nameBox" style={{ backgroundColor: result.bg_color }}>
            <h1 className="name">{result.name}</h1>
          </div>
        </div>
        <div className="dscBox">
          <div className="dscWrapper" style={{ backgroundColor: result.dsc_color }}>
            <div className="dsc">
              {result.dsc.split("\n").map((line) => {
                return (
                  <span>
                    {line}
                    <br />
                  </span>
                );
              })}
            </div>
          </div>
          <div className="another">
            <div className="ano">
              <h3>나랑 궁합이 좋은</h3>
              <img src={result.good_img} alt="good_img" />
              <div style={{ backgroundColor: result.good_color }} className="txt">
                <p>{result.good_txt}</p>
              </div>
            </div>
            <div className="ano">
              <h3>나랑 거리가 있는</h3>
              <img src={result.bad_img} alt="bad_img" />
              <div style={{ backgroundColor: result.bad_color }} className="txt">
                <p>{result.bad_txt}</p>
              </div>
            </div>
          </div>
          <button onClick={goHome} type="button" className="same">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_57_165)">
                <path
                  d="M0.75 3V7.5H5.25"
                  stroke="#111111"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.6325 11.25C3.1188 12.6303 4.0405 13.8151 5.25874 14.626C6.47698 15.4369 7.92576 15.8299 9.38679 15.7459C10.8478 15.6618 12.2419 15.1051 13.3591 14.1598C14.4763 13.2145 15.2559 11.9317 15.5807 10.5048C15.9054 9.07781 15.7576 7.58397 15.1595 6.24832C14.5614 4.91268 13.5454 3.8076 12.2646 3.09957C10.9839 2.39155 9.50768 2.11895 8.05851 2.32284C6.60934 2.52673 5.26568 3.19607 4.23 4.23L0.75 7.5"
                  stroke="#111111"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_57_165">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>테스트 다시하기</p>
          </button>
          <button type="button" className="same share">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.4375 0H1.5625C0.699167 0 0 0.7 0 1.5625V18.4375C0 19.3008 0.7 20 1.5625 20H18.4375C19.3008 20 20 19.3 20 18.4375V1.5625C20 0.699167 19.3 0 18.4375 0ZM10 15.625C9.5075 15.625 9.025 15.5908 8.55667 15.525C8.08833 15.855 5.37917 17.7575 5.12333 17.7933C5.12333 17.7933 5.01917 17.8342 4.93 17.7817C4.84083 17.7292 4.85667 17.5908 4.85667 17.5908C4.88333 17.4075 5.55917 15.0758 5.68333 14.6467C3.39583 13.5133 1.875 11.5058 1.875 9.21917C1.875 5.68083 5.5125 2.8125 10 2.8125C14.4875 2.8125 18.125 5.68083 18.125 9.21917C18.125 12.7567 14.4875 15.625 10 15.625ZM6.70833 8.2225H5.97667V11.0075C5.97667 11.2542 5.76667 11.455 5.5075 11.455C5.24833 11.455 5.03917 11.255 5.03917 11.0075V8.2225H4.3075C4.19168 8.21394 4.08339 8.1619 4.00435 8.07681C3.92531 7.99172 3.88139 7.87988 3.88139 7.76375C3.88139 7.64762 3.92531 7.53578 4.00435 7.45069C4.08339 7.3656 4.19168 7.31356 4.3075 7.305H6.7075C6.82332 7.31356 6.93161 7.3656 7.01065 7.45069C7.08968 7.53578 7.13361 7.64762 7.13361 7.76375C7.13361 7.87988 7.08968 7.99172 7.01065 8.07681C6.93161 8.1619 6.82332 8.21394 6.7075 8.2225H6.70833ZM15.8642 10.6867C15.9016 10.7357 15.9289 10.7916 15.9445 10.8513C15.9601 10.911 15.9637 10.9731 15.955 11.0342C15.9464 11.0951 15.9259 11.1537 15.8946 11.2066C15.8633 11.2595 15.8218 11.3057 15.7725 11.3425C15.6916 11.4042 15.5926 11.4376 15.4908 11.4375C15.4181 11.4379 15.3463 11.4212 15.2811 11.3888C15.216 11.3564 15.1594 11.3091 15.1158 11.2508L14.0167 9.795L13.8542 9.9575V10.98C13.8539 11.1042 13.8046 11.2233 13.7168 11.3112C13.629 11.3991 13.5101 11.4487 13.3858 11.4492C13.2614 11.4492 13.1421 11.3997 13.0541 11.3118C12.9661 11.2238 12.9167 11.1044 12.9167 10.98V7.77333C12.9218 7.65243 12.9734 7.53818 13.0607 7.45443C13.1481 7.37069 13.2644 7.32393 13.3854 7.32393C13.5064 7.32393 13.6228 7.37069 13.7101 7.45443C13.7975 7.53818 13.8491 7.65243 13.8542 7.77333V8.78167L15.1625 7.47333C15.1966 7.43962 15.2371 7.41299 15.2816 7.39497C15.3261 7.37695 15.3737 7.3679 15.4217 7.36833C15.5383 7.36833 15.6567 7.41917 15.745 7.5075C15.8254 7.58635 15.8743 7.69183 15.8825 7.80417C15.8868 7.85644 15.8798 7.90903 15.862 7.95835C15.8442 8.00768 15.8159 8.05258 15.7792 8.09L14.7108 9.1575L15.865 10.6867H15.8642ZM8.90583 7.76833C8.82667 7.54333 8.58667 7.31167 8.28083 7.305C7.97583 7.31167 7.73583 7.54333 7.65667 7.7675L6.53583 10.7183C6.39333 11.16 6.5175 11.325 6.64667 11.385C6.74007 11.4275 6.84154 11.4494 6.94417 11.4492C7.14 11.4492 7.28917 11.37 7.33417 11.2425L7.56667 10.6342H8.99583L9.22833 11.2425C9.27333 11.37 9.4225 11.4492 9.61833 11.4492C9.72101 11.4491 9.82247 11.4269 9.91583 11.3842C10.045 11.325 10.1692 11.1608 10.0267 10.7175L8.90583 7.7675V7.76833ZM7.81333 9.80417L8.28167 8.47417L8.74917 9.80417H7.81333ZM12.7342 10.9567C12.7315 11.0732 12.6828 11.184 12.5986 11.2646C12.5143 11.3452 12.4016 11.3891 12.285 11.3867H10.7817C10.7239 11.388 10.6664 11.3779 10.6125 11.357C10.5586 11.3361 10.5094 11.3048 10.4676 11.2649C10.4258 11.225 10.3923 11.1772 10.369 11.1243C10.3456 11.0714 10.333 11.0145 10.3317 10.9567V7.77333C10.3317 7.515 10.5467 7.305 10.8108 7.305C11.075 7.305 11.2892 7.515 11.2892 7.77333V10.5275H12.285C12.5325 10.5275 12.735 10.72 12.735 10.9567H12.7342Z"
                fill="black"
              />
            </svg>
            <KakaoShare></KakaoShare>
          </button>
        </div>
      </div>
    </ResultDiv>
  );
};

export default Result;

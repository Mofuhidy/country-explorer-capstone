import { BiChevronLeft, BiMicrophone } from 'react-icons/bi/';
import { AiFillSetting } from 'react-icons/ai/';

import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import asia from '../assets/images/filled/asia.svg';
import africa from '../assets/images/filled/africa.svg';
import europe from '../assets/images/filled/europe.svg';
import northAmerica from '../assets/images/filled/northAmerica.svg';
import ociania from '../assets/images/filled/ociania.svg';
import southAmerica from '../assets/images/filled/southAmerica.svg';

function CountryDetails() {
  const { loading, countries, error } = useSelector((state) => state.countries);

  const nav = useNavigate();
  const { countryId } = useParams();

  const countryData = countries.filter(
    (country) => country.countryId === countryId,
  );

  if (loading === 'pending') {
    return (
      <div className=" h-screen w-full flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (error) {
    <div className="container">{error}</div>;
  }

  return (
    <div data-testid="detailsPage">
      <div className=" bg-main w-full h-16 flex items-center justify-around">
        <button type="button" onClick={() => nav('/')}>
          <BiChevronLeft className=" text-3xl" />
        </button>
        <p className=" font-bold">Information and Stats</p>
        <div className="flex">
          <BiMicrophone className=" text-lg mr-2" />
          <AiFillSetting className=" text-lg" />
        </div>
      </div>
      <div className="contianer">
        <div className="general flex flex-row justify-around items-center min-h-48 bg-sec">
          {(() => {
            switch (countryData[0].continents[0]) {
              case 'Oceania':
                return (
                  <div className="continet flex flex-col-reverse items-center justify-around  h-40 relative mb-6">
                    <p className=" absolute top-36 font-bold uppercase">
                      Oceania
                    </p>
                    <div className=" w-24 ">
                      <img src={ociania} alt="Ociania continent" />
                    </div>
                  </div>
                );

              case 'Africa':
                return (
                  <div className="continet flex flex-col-reverse items-center justify-around  h-40 relative mb-6">
                    <p className=" absolute top-36 font-bold uppercase">
                      Africa
                    </p>
                    <div className=" w-24 ">
                      <img src={africa} alt="Africa continent" />
                    </div>
                  </div>
                );

              case 'Asia':
                return (
                  <div className="continet flex flex-col-reverse items-center justify-around  h-40 relative mb-6">
                    <p className=" absolute top-36 font-bold uppercase">Asia</p>
                    <div className=" w-24 ">
                      <img src={asia} alt="Asia continent" />
                    </div>
                  </div>
                );
              case 'Europe':
                return (
                  <div className="continet flex flex-col-reverse items-center justify-around  h-40 relative mb-6">
                    <p className=" absolute top-36 font-bold uppercase">
                      Europe
                    </p>
                    <div className=" w-24 ">
                      <img src={europe} alt="Europe continent" />
                    </div>
                  </div>
                );
              case 'North America':
                return (
                  <div className="continet flex flex-col-reverse items-center justify-around  h-40 relative mb-6">
                    <p className=" absolute top-36 font-bold uppercase">
                      North America
                    </p>
                    <div className=" w-24 ">
                      <img src={northAmerica} alt="North America continent" />
                    </div>
                  </div>
                );
              case 'South America':
                return (
                  <div className="continet flex flex-col-reverse items-center justify-around  h-40 relative mb-6">
                    <p className=" absolute top-36 font-bold uppercase">
                      South America
                    </p>
                    <div className=" w-24 ">
                      <img src={southAmerica} alt="South America continent" />
                    </div>
                  </div>
                );
              default:
                return (
                  <div className="continet flex flex-col-reverse items-center justify-around  h-40 relative mb-6">
                    <p className=" absolute top-36 font-bold uppercase">
                      Antarctica
                    </p>
                    <div className=" w-24 ">
                      <img src={europe} alt="Antarctica continent" />
                    </div>
                  </div>
                );
            }
          })()}
          <div className="country flex flex-col-reverse items-center justify-around h-40 relative mb-6">
            <p className=" absolute top-36 font-bold uppercase">
              {countryData[0].name}
            </p>
            <div className=" w-28">
              <img src={countryData[0].flag} alt={countryData[0].alt} />
            </div>
          </div>
        </div>
        <div className="details  h-auto flex justify-center">
          <ul className=" flex flex-col justify-center overflow-y-auto w-full h-96">
            <li className="flex justify-between px-8 h-16 items-center">
              <span className=" font-semibold text-base">Logo:</span>
              <span className=" w-5">
                <img src={countryData[0].coatOfArms} alt="Coat of arms" />
              </span>
            </li>
            <li className="flex justify-between px-8 h-16 items-center">
              <span className=" font-semibold text-base">Area:</span>
              <span className=" font-medium text-sm">
                {`${countryData[0].area} sq km`}
              </span>
            </li>
            <li className="flex justify-between px-8 h-16 items-center">
              <span className=" font-semibold text-base">Capital:</span>
              <span className=" font-medium text-sm">
                {countryData[0].capital}
              </span>
            </li>

            <li className="flex justify-between px-8 h-16 items-center">
              <span className=" font-semibold text-base">Region:</span>
              <span className=" font-medium text-sm">
                {countryData[0].region}
              </span>
            </li>

            <li className="flex justify-between px-8 h-16 items-center">
              <span className=" font-semibold text-base">Time Zone:</span>
              <span className=" font-medium text-sm">
                {countryData[0].timezones.join(', ')}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default CountryDetails;

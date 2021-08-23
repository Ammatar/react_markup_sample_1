import exploring from './img/undraw_exploring.png';
import tourist_map from './img/undraw_tourist_map.png';
import destignation from './img/undraw_destination.png';
import manager_1 from './img/manager_1.png';
import manager_2 from './img/manager_2.png';
import manager_3 from './img/manager_3.png';
import icon_1 from './img/icon_1.png';
import icon_2 from './img/icon_2.png';
import icon_3 from './img/icon_3.png';
import icon_4 from './img/icon_4.png';
import icon_5 from './img/icon_5.png';
import icon_6 from './img/icon_6.png';
import icon_7 from './img/icon_7.png';
import ManagerCard from './ManagerCard';
import BodyCard from './BodyCard';
import PriorityCard from './PriorityCard';
import AdventagesCard from './AdventagesCard';

const Body = () => {
  return (
    <>
      <div className="body_container">
        <div className="body_flex between">
          <BodyCard
            img={exploring}
            header={'Promoting your territory towards foreign tourists'}
            text={
              'EasyCamper wants to promote the excellence of Italian food and wine, art, culture and the economy.'
            }
            link={
              'Discover the places linked to your area that you can link to your structure'
            }
          />
          <BodyCard
            img={tourist_map}
            header={'Additional services designed for the needs of campers'}
            text={
              'Travelling often means that you dont have time to organise excursions along your route. EasyCamper takes care of that!'
            }
            link={
              'Discover the Guided Tours and additional services that you can link to your structure'
            }
          />
          <BodyCard
            img={destignation}
            header={'Free online showcase with promotion in Italy and abroad'}
            text={
              'Forget about the time and money spent on creating your own website or e-commerce system for bookings.'
            }
            link={
              'Easycamper creates your showcase. Discover the terms and conditions for joining the Network'
            }
          />
        </div>
        <div className="mar200">
          <h2>Making your facility known is our priority</h2>
          <div className="body_flex between mar100">
            <PriorityCard
              icon={icon_1}
              title={'Choose the type of stop'}
              text={
                'Select the type of stopover you are ordering from Equipped Area, Camping and Agricamping'
              }
              link={'Show me more'}
            />
            <PriorityCard
              icon={icon_2}
              title={'Describe your structure'}
              text={'Describe thee property, location and nearby attractions'}
              link={'Show me more'}
            />
            <PriorityCard
              icon={icon_3}
              title={'Build your showcase'}
              text={
                'Add photos, videos and descriptions Define the price of each type of that make your propety truly'
              }
              link={'Show me more'}
            />
            <PriorityCard
              icon={icon_4}
              title={'Prices and Availability'}
              text={'itch and configure the availablity calendar.'}
              link={'Show me more'}
            />
          </div>
        </div>
        <div className="body_flex between mar200">
          <div className="mwidth20p">
            <h2>Join the community campervan sites managers.</h2>
            <p>
              Discover all the equibbed areas in Italy. Find the shop with all
              the services for you and your camper.
            </p>
            <button className="orange_button ">Start</button>
          </div>
          <div className="body_flex between marmobile">
            <ManagerCard manager={manager_1} name={'Lucciano'} city={'Rome'} />
            <ManagerCard
              manager={manager_2}
              name={'Cremonesi'}
              city={'Florence'}
            />
            <ManagerCard
              manager={manager_3}
              name={'Beneventi'}
              city={'Venice'}
            />
          </div>
        </div>
        <div className="mar200">
          <h2>Our Advantages</h2>
          <div className="body_flex between mar100">
            <AdventagesCard
              icon={icon_5}
              title={'Convenience and Transparency'}
              text={
                'You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5'
              }
            />
            <AdventagesCard
              icon={icon_6}
              title={'Digital marketing and editorial support'}
              text={
                'You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5'
              }
            />
            <AdventagesCard
              icon={icon_7}
              title={'Community of services dedicated to campers'}
              text={
                'You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5'
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;

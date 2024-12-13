import React from 'react';
import s from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <section>
      <div className="container">
        {/* Left Section: Details Rental */}
        <div className={s.detailsRental}>
          <div className={s.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.6553417343125!2d69.27198708779711!3d41.2946049973415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bb0d9e36a43%3A0xb769fa17fbfeddd9!2sBYD%20CENTRAL%20ASIA!5e0!3m2!1sru!2s!4v1734023844569!5m2!1sru!2s"
              width="100%" // Make it responsive
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className={s.carDetails}>
            <div className={s.carHeader}>
              <img
                src="/public/Look.png" // Update with actual path
                alt="Nissan GT-R"
                className={s.carImage}
              />
              <div>
                <h2>Nissan GT-R</h2>
                <p>Sport Car</p>
              </div>
            </div>

            <div className={s.rentalInfo}>
              <div className={s.infoRow}>
                <h2>Pick-Up</h2>
                <div className={s.com}>
                  <h3>Location</h3>
                  <div>
                    {' '}
                    <p>Kota Semarang</p>
                    <img src="/public/angle-small-down.png" alt="" />
                  </div>
                </div>
                <div className={s.line}></div>
                <div className={s.com}>
                  <h3>Date</h3>
                  <div>
                    <p>20 July 2022</p>
                    <img src="/public/angle-small-down.png" alt="" />
                  </div>
                </div>
                <div className={s.line}></div>
                <div className={s.com}>
                  <h3>Time</h3>

                  <div>
                    {' '}
                    <p>07.00</p>
                    <img src="/public/angle-small-down.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className={s.totalPrice}>$80.00</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

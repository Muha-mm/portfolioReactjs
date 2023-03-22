const Contacts = () => {
  return (
    <div>

      <main className="section">
        <div className="container">
          <div className="contactsPage">
            <h1 className="section__title">Contacts</h1>

            <ul className="contacts">
              <li className="contacts__item">
                Location
                <p className="contacts__item__details">Moscow, Russia</p>
              </li>

              <li className="contacts__item">
                Telegram / WhatsApp
                <p className="contacts__item__details">
                  <a href="tel:+79166310060">+7 (916) 631-00-60</a>
                </p>
              </li>

              <li className="contacts__item">
                Email
                <p className="contacts__item__details">
                  <a href="mailto:malaevmm3@gmail.com">malaevmm3@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Contacts;

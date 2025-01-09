import React from 'react';
import '../styles/Values.css';

function Values() {
  return (
    <div className="values">
      {/* Encabezado */}
      <div className="values-header">
        <img
          src="https://via.placeholder.com/150"
          alt="Logo Innova"
          className="values-logo"
        />
        <img
          src="https://via.placeholder.com/800x200"
          alt="Ciudad nocturna"
          className="values-header-bg"
        />
      </div>

      {/* Contenido principal */}
      <div className="values-content">
        <div className="values-title">
          <h2>OUR VALUES</h2>
        </div>

        {/* Bloques de valores */}
        <div className="values-blocks">
          {/* Bloque 1 */}
          <div className="value-block">
            <div className="value-image">
              <img src="https://via.placeholder.com/100" alt="Training" />
            </div>
            <div className="value-text">
              <h3>TRAINING</h3>
              <p>
                We value our people and gladly invest in their training. Through this
                practice, we assure the client that the assigned personnel are trained to
                carry out the tasks and functions related to the position for which they are
                hired to perform.
              </p>
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="value-block">
            <div className="value-image">
              <img src="https://via.placeholder.com/100" alt="Growing United" />
            </div>
            <div className="value-text">
              <h3>GROWING UNITED</h3>
              <p>
                We partner with our people to grow our business and extend the benefits with
                them and every person they refer.
              </p>
            </div>
          </div>

          {/* Bloque 3 */}
          <div className="value-block">
            <div className="value-image">
              <img src="https://via.placeholder.com/100" alt="Diversity" />
            </div>
            <div className="value-text">
              <h3>DIVERSITY</h3>
              <p>
                Innova supports the diversity of our workforce and believes that all people
                should be treated equally and with respect. We value people.
              </p>
            </div>
          </div>

          {/* Bloque 4 */}
          <div className="value-block">
            <div className="value-image">
              <img src="https://via.placeholder.com/100" alt="Recognition" />
            </div>
            <div className="value-text">
              <h3>RECOGNITION</h3>
              <p>
                We take pride in people who provide quality customer service, and we recognize
                and celebrate the success of each of our heroes so they feel appreciated and
                valued.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
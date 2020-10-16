import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DonateModal = ({ visible, setVisible }) => (
  <>
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={visible}
      onHide={() => setVisible(false)}
    >
      <Modal.Body>
        <div className="row">
          <div className="box">
            <div className="col-lg-12">
              <hr />
              <h2 className="intro-text text-center">
                Donating is easy
                <strong> make a difference today</strong>
              </h2>
              <hr />
              <p>
                PayPay or checks made payable to Perryman & Keglovits Foundation are accepted for
                donations. We are happy to accept contributions of any amount. Call us with
                questions:
                {' '}
                <a href="tel:570- 460-5156">(570) 460-5156</a>
                .
              </p>
              <p>
                If you would like to donate, you can donate via a Paypal account or
                major credit card by clicking the Donate button to go to a secure site to make your
                donation.
              </p>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="76FEZSCQWNMQC" />
                <input type="image" src="https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
              {' '}
              <br />
              <p>
                Or, please send a check payable to
                {' '}
                <strong>Perryman & Keglovits Foundation</strong>
                {' '}
                at the following address:
              </p>
              <p>
                Perryman &amp; Keglovits Foundation
                <br />
                PO Box 274
                <br />
                East Stroudsburg, PA 18301
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setVisible(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  </>
);

DonateModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default DonateModal;

import React from "react";
const CallAction = () => {
  return (
    <div className="call-to-action-wrapper call-to-action text-white-wrapper  pt--120 pb--140">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-8">
            <div className="inner text-center">
              <span>Purpose Roundtable Series</span>
              <h2>Join the Purpose Roundtable</h2>
              <div className="contact-form--1">
              <form
                method="POST"
                action="https://goodup.activehosted.com/proc.php"
                id="_form_4_"
                class="_form _form_4 _inline-form  _dark"
                novalidate
              >
                <input type="hidden" name="u" value="4" />
                <input type="hidden" name="f" value="4" />
                <input type="hidden" name="s" />
                <input type="hidden" name="c" value="0" />
                <input type="hidden" name="m" value="0" />
                <input type="hidden" name="act" value="sub" />
                <input type="hidden" name="v" value="2" />
                <div class="_form-content">
                  <div>
                    <div className="pb--20 contact-form--1">
                      <input
                        type="text"
                        name="fullname"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="pb--20">
                      <input
                        type="text"
                        name="email"
                        placeholder="Your work email address"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <button id="_form_4_submit" className="rn-button-style--2" type="submit">
                      Save your seat
                    </button>
                  </div>
                  <div></div>
                </div>
                <div></div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallAction;

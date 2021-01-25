import React from "react";
const CallAction = () => {
  return (
    <div className="call-to-action-wrapper call-to-action text-white-wrapper  pt--40 pb--40">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-8">
            <div className="inner text-center">
              <span>Purpose Roundtable Series</span>
              <h3 className="title pb--20">Join the Purpose Roundtable</h3>
              <div className="contact-form--1">
                <form
                  method="POST"
                  action="https://goodup.activehosted.com/proc.php"
                  id="_form_4_"
                  class="_form _form_4 _inline-form  "
                  novalidate
                >
                  <input type="hidden" name="u" value="4" />
                  <input type="hidden" name="f" value="4" />
                  <input type="hidden" name="s" />
                  <input type="hidden" name="c" value="0" />
                  <input type="hidden" name="m" value="0" />
                  <input type="hidden" name="act" value="sub" />
                  <input type="hidden" name="v" value="2" />
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
                    <div className="pb--40">
                      <label style={{
                          fontSize: "15px",
                          color: "rgba(255,255,255,0.5)",
                          marginBottom: "16px",
                        }}>On which date would you like to join?</label>

                      <select
                        name="field[77]"
                        style={{
                          border: "2px solid rgba(255,255,255,0.2)",
                          borderRadius: "4px",
                          height: "50px",
                          fontSize: "15px",
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        <option value="February, 11th - 14:00-16:30 CET">
                          February, 11th - 14:00-16:30 CET
                        </option>
                        <option value="March, 18th - 14:00-16:30 CET">
                          March, 18th - 14:00-16:30 CET
                        </option>
                        <option value="April, 15th - 14:00-16:30 CET">
                          April, 15th - 14:00-16:30 CET
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <button
                      id="_form_4_submit"
                      className="rn-button-style--2"
                      type="submit"
                    >
                      Save your seat
                    </button>
                  </div>
                  <div></div>

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

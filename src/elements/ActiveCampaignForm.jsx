
import React from 'react'

const ActiveCampaignForm = () => (
<div>
<form method="POST" action="https://goodup.activehosted.com/proc.php" id="_form_4_" class="_form _form_4 _inline-form  _dark" novalidate>
  <input type="hidden" name="u" value="4" />
  <input type="hidden" name="f" value="4" />
  <input type="hidden" name="s" />
  <input type="hidden" name="c" value="0" />
  <input type="hidden" name="m" value="0" />
  <input type="hidden" name="act" value="sub" />
  <input type="hidden" name="v" value="2" />
  <div class="_form-content">
    <div>
      <div>
        Subscribe for Email Updates
      </div>
    </div>
    <div>
      <div>
        <p>
          Add a descriptive message telling what your visitor is signing up for here.
        </p>
      </div>
    </div>
    <div >
      <label >
        Full Name
      </label>
      <div>
        <input type="text" name="fullname" placeholder="Type your name" />
      </div>
    </div>
    <div >
      <label >
        Email*
      </label>
      <div>
        <input type="text" name="email" placeholder="Type your email" required/>
      </div>
    </div>
    <div>
      <button id="_form_4_submit" class="_submit" type="submit">
        Submit
      </button>
    </div>
    <div>
    </div>
  </div>
  <div >
  </div>
</form>
</div>
)

export default ActiveCampaignForm

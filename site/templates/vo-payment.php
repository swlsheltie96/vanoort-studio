<?php 

?>

<?php snippet('vo-header') ?>

  <form class="checkout-form grid" action="<?= url('pay') ?>" method="post">

  <div class="checkout-form_inner">
    <h2>Shipping Address</h2>
    <div class="forminput firstname">
      <label>
        <p>First Name</p>
      </label>
      <input type="text" autocomplete="name" name="firstname" required>
    </div>
    <div class="forminput lastname">
      <label>
        <p>Last Name</p>
      </label>
      <input type="text" autocomplete="name" name="lastname" required>
    </div>
    <div class="forminput address1">
      <label>
        <p>Address 1</p>
      </label>
      <input type="text" autocomplete="address" name="address1" required>
    </div>
    <div class="forminput address2">
      <label>
        <p>Address 2</p>
      </label>
      <input type="text" autocomplete="address" name="address2">
    </div>
    <div class="forminput state">
      <label>
        <p>State</p>
      </label>
      <?php snippet('vo-state-selector') ?>

    </div>
    <div class="forminput city">
      <label>
        <p>City</p>
      </label><input type="text" autocomplete="city" name="city" required>
    </div>
    <div class="forminput zip">
      <label>
        <p>Zip Code</p>
      </label><input type="text" autocomplete="zipcode" name="zipcode" required>
    </div>
    <div class="forminput phone">
      <label>
        <p>Phone</p>
      </label><input type="text" autocomplete="phone" name="phone" required>
    </div>
    <div class="forminput email">
      <label>
        <p>Email</p>
      </label><input type="text" autocomplete="email" name="email" required>
    </div>
    <div class="paymentmethods">
      <h3>Payment Methods</h3>
      <p style="margin-top: 0">Billing address will be specified through preferred payment method</p>
      <p>
        <label>
          <input type="radio" name="paymentMethod" value="credit-card-sca" required>
          Credit Card
        </label>
      </p>
      <p>
        <label>
          <input type="radio" name="paymentMethod" value="paypal">
          PayPal
        </label>
      </p>
      <p>

        <button>CHECKOUT</button>
      </p>
    </div>
    </div>
  </form>

  


  <?php snippet('vo-footer') ?>
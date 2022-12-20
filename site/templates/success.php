
<?php snippet('vo-header') ?>

<div class="payment-complete grid">

  <div class="message">
    <h2>
      Receipt<br>
      Thank you for shopping with Van Oort.
    </h2>
  <?php 
try {
    $orderPage = merx()->completePayment(
        [
            'token' => get('token'),
            'PayerID' => get('PayerID')
        ]
    );
    echo 'Payment completed.';
  } catch (Exception $ex) {
    echo $ex->getMessage();
  }
?>
  <div class="receipt">
  <?= $site->image('dog.png')?>
</div>
  </div>

</div>

<?php snippet('vo-footer') ?>
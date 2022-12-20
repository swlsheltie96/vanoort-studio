<?php snippet('vo-header') ?>

<div class="checkout grid">
<div class="back" onclick="history.back()">
← Back
</div>
  <?php snippet('vo-cart', ['cart' => merx()->cart()]) ?>
  
  <div class="button-container">
  <a href="<?= url('vo-payment')?>">
  <button>
      Payment
    </button>
  </a>
  </div>
 
</div>

<?php snippet('vo-footer') ?>
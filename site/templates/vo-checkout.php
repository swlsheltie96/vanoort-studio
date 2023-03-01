<?php snippet('vo-header') ?>

<div class="checkout grid">

  <?php snippet('vo-cart', ['cart' => merx()->cart()]) ?>
  
  <div class="button-container">
  <a href="<?= url('vo-payment')?>">
  <button>
      Payment
    </button>
  </a>
  </div>
  <div class="illustration">
  <?php snippet('vo-illustration') ?>

  </div>
</div>

<?php snippet('vo-footer') ?>
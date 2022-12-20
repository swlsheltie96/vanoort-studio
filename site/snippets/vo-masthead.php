<div class="header">
  <div class="nav-top grid">
    <div class="nav-cart">

      <a href="<?= url('vo-checkout') ?>"><p>Cart (<?=merx()->cart()->count()?>)</p></a>
    </div>
    <div class="nav-scroll">
      <p>Scroll ↓</p>
    </div>
    <div class="nav-logo"> <a class="logo" href="<?= $site->url() ?>">
        <?= $site->top_logo()->toFile() ?>
      </a></div>
  </div>
  <!-- <div class="nav-bar grid">

    <div class="nav-button">
      <p>Tops</p>
    </div>
    <div class="nav-button">
      <p>Bottoms</p>
    </div>
    <div class="nav-button">
      <p>Accessories and Home</p>
    </div>
    <div class="nav-button">
      <p>History</p>
    </div>
  </div> -->



</div>


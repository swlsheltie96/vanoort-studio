<?php $i = -1 ?>

<div class="all-products grid">
  <?php foreach (page('vo-products')->children() as $project) : ?>
    <?php $i++ ?>
    <div class="product-image product-<?= $i ?> " id="productlink-<?= $project->uid() ?>">
      <a href="<?= $project->url() ?>">
        <div class="mobile-label ">
        <p class="mobile-product-title"><?= $project->title()->html() ?></p>
                        <p class="mobile-product-price"><?= $project->price()->html() ?></p>
        </div>
        <figure>
          <?= ($cover = $project->cover()->toFile()) ?>


        </figure>
      </a>
    </div>
  <?php endforeach ?>

  <div class="all-labels">


  </div>
</div>

<div class="empty">
  
</div>
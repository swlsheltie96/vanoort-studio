<?php snippet('vo-header') ?>
<div class="img-sequence">




  <div class="img-sequence-container">

    <div class="container-inner">
    <?php if ($page->videotoggle()->toBool() === true) {
      $video = $page->videos()->first()
      ?>
      <figure class="video topperimg">
          <video autoplay muted loop>
            <source src="<?= $video->url() ?>" type="<?= $video->mime() ?>">
          </video>
        </figure>
    <?php }?>


      <?php foreach ($page->imgs()->toBlocks() as $imgblock) : ?>
        <figure class="img topperimg">
          <?= $imgblock ?>
        </figure>
      <?php endforeach ?>
    </div>

  </div>

  <div class="cover grid">
  <div class="back" onclick="history.back()">
← Back
</div>
    <?php snippet('vo-detail-text') ?>
  </div>
</div>





</div>

<?php snippet('vo-footer') ?>
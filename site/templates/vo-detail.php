<?php snippet('vo-header') ?>
<div class="img-sequence">




  <div class="img-sequence-container">

    <div class="container-inner">

      <div class="mobile-scroll-down">
        <div class="">
          <a href="#detail">
            <p>Details and sizing ↓</p>
          </a>

        </div>

      </div>
      <?php if ($page->videotoggle()->toBool() === true) {
        $video = $page->videos()->first()
      ?>
        <figure class="video topperimg">
          <video autoplay muted loop>
            <source src="<?= $video->url() ?>" type="<?= $video->mime() ?>">
          </video>
        </figure>
      <?php } ?>


      <?php foreach ($page->imgs()->toBlocks() as $imgblock) : ?>
        <figure class="img topperimg">
          <?= $imgblock ?>
        </figure>
      <?php endforeach ?>
    </div>
  </div>

  <div class="cover grid" id="detail">

    <?php snippet('vo-detail-text') ?>
  </div>


</div>
<?php
$related = $page->related()->toPages();
if ($related->count() > 0) :
?>
  <div class="related-container">
    <?php foreach ($related as $article) : ?>
      <div>
        <a href="<?= $article->url() ?>">
          <?= $article->cover()->toFile() ?>
        </a>
      </div>
    <?php endforeach ?>
  </div>
<?php endif ?>




</div>

<?php snippet('vo-footer') ?>
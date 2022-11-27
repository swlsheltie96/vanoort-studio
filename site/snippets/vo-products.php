<div class="all-products grid">
    <?php foreach (page('vo-products')->children() as $project) : ?>
      <div class="product-image" id="productlink-<?=$project->uid()?>">
        <a href="<?= $project->url() ?>">
          <figure>
            <?= ($cover = $project->cover()->toFile()) ?>

          
          </figure>
        </a>
      </div>
    <?php endforeach ?>
</div>
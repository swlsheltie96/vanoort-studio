
<?php
// phpinfo();
//echo page(option('ww.merx.ordersPage', 'orders'));
//echo $page->id();
?>
<?php snippet('vo-header') ?>
<div class="interactive-cover">
    <div class="cover-slider">
        <div class="slider-start">

        </div>
        <input type="range" min="0" max="255" value="1" class="slider" id="cover-slider">

        <div class="slider-end">

</div>
    </div>
      
      <canvas class="interactive-cover-canvas"></canvas>
    </div>
<div class="interactive-cover-images">
    <?php foreach ($site->images()->filterBy('filename', '^=', 'cover') as $img) : ?>
        <img class="interactive-image" src="<?= $img->url() ?>"></img>
    <?php endforeach ?>
</div>

<?php snippet('vo-mainmenu') ?>
<?php snippet('vo-products') ?>
<div class="thumbnail" id="thumbnail">
    <?php foreach (page('vo-products')->children() as $product) : ?>
        <?php if($image = ($product->image('thumbnail.jpeg') ?? $product->image('thumbnail.jpg')) ): ?>
            <img id="thumbnail-<?=$product->uid()?>" class="thumbnail-image" src="<?= $image->url()?>"></img>
        <?php endif ?> 
    <?php endforeach ?>
</div>


<?php snippet('vo-footer') ?>
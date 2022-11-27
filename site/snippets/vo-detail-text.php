

<div class="detail-text">
    <?= snippet('product/add') ?>
   

    <div class="size-classes">
        XS S M L XL
    </div>
    
    <h2>
        <?=$page->headline()?>
   </h2>
        <?=$page->text()->toBlocks() ?>
        <?= snippet('cart/checkoutsummary') ?>
</div>


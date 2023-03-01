<?php snippet('vo-header') ?>
<div class="about grid ">

    <div class="about-image ">

        <img src="<?= $page->image()->url() ?>">

        
    </div>

    <div class="about-content ">

        <?php foreach ($page->about()->toBlocks() as $block) : ?>
            <div class="about-block">
            <?= $block ?>
            </div>
    
        <?php endforeach ?>

    </div>
    <div class="small-illo">
        <?php snippet('vo-illustration') ?>
        </div>
    <div class="history-content ">
    <?php foreach ($page->history()->toBlocks() as $block) : ?>
            <div class="history-block">
            <?= $block ?>
            </div>
    
        <?php endforeach ?>
    </div>
      

</div>

<?php snippet('vo-footer') ?>
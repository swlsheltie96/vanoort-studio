
<?php snippet('vo-header') ?>
<div class="zine">
<div class="zine-pages grid">
    <?php foreach (page('vo-zine')->zine()->toFiles() as $img) : ?>
        <img class="zine-image" src="<?= $img->url() ?>"></img>
    <?php endforeach ?>
</div>

<?php snippet('vo-footer') ?>

<?php snippet('vo-header') ?>
<?php snippet('vo-mainmenu') ?>
    <div class="img-sequence">


       
    
      <div class="img-sequence-container">

      <div class="container-inner">
      <?php foreach ($page->images()->filterBy('filename', '^=', 'start') as $img): ?>
          <figure class="img topperimg">
            <?= $img ?>
          </figure>
        <?php endforeach ?>
        <?php foreach ($page->images()->filterBy('filename', '^=', 'scroll') as $img): ?>
          <figure class="img topperimg">
            <?= $img ?>
          </figure>
        <?php endforeach ?>
      </div>

      </div>
    
      <div class="cover">
        <?php snippet ('vo-detail-text')?>
      </div>
    </div>
    
    
  

    
</div>

<?php snippet('vo-footer') ?>


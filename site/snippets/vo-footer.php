<?php

?>
  </main>

  <footer class="footer">
    <div class="grid">
     
      <div class="footer-logo" >
         <?= $site->footer_logo()->toFile() ?>
      </div>

     
        <div class="footer-links link">About</div>
        <div class="footer-links link">Contact</div>
        <div class="footer-links link">Instagram</div>
        <div class="footer-links link">Join our newsletter</div>
    </div>
  </footer>

  <?= js([
    'assets/js/prism.js',
    'assets/js/lightbox.js',
    'assets/js/matter.js',
    'assets/js/index.js',

    '@auto'
  ]) ?>
<!-- custom javascript -->
<?php if($page->isChildOf('vo-products')): ?>
  <?= js([
    'assets/js/detail.js',
  ]) ?>
<?php endif ?>


<?= js($page->files()->filterBy('extension', 'js')->pluck('url')) ?>
<?= snippet('cart/init') ?>
</body>
</html>

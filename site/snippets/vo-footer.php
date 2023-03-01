<?php

?>
  </main>




  <script src="https://www.paypal.com/sdk/js?client-id=AZdjdUz9aoA0U_45h32NYjJwXXFyzxgpsUNTpD8-9x-3q7bE4TrFQTvG9jPVgQXe6KcX6jc8hdfrJo9f&components=buttons"></script>

  <?= js([
    'assets/js/prism.js',
    'assets/js/lightbox.js',
    // 'assets/js/matter.js',
    // 'assets/js/cart.js',
    'assets/js/index.js',

    '@auto'
  ]) ?>
<!-- custom javascript -->
<?php if($page->isChildOf('vo-products')): ?>
  <?= js([
    'assets/js/vo-products.js',
  ]) ?>
<?php endif ?>


<?= js($page->files()->filterBy('extension', 'js')->pluck('url')) ?>

<?= snippet('cart/init') ?>
</body>
</html>

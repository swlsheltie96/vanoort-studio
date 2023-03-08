<?php $favicon = page('vo-home')->favicon()->toFile()->url() ?>
<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <?php
  /*
    In the title tag we show the title of our
    site and the title of the current page
  */
  ?>
  <title><?= $site->title() ?> | <?= $page->title() ?></title>

  <?php
  /*
    Stylesheets can be included using the `css()` helper.
    Kirby also provides the `js()` helper to include script file.
    More Kirby helpers: https://getkirby.com/docs/reference/templates/helpers
  */
  ?>
  <?= css([
    'assets/css/prism.css',
    'assets/css/reset.css',

    'assets/css/templates/vo-index.css',
    'assets/css/templates/vo-masthead.css',
    'assets/css/templates/vo-cover.css',
    'assets/css/templates/vo-footer.css',
    '@auto'
  ]) ?>
<?= css($page->files()->filterBy('extension', 'css')->pluck('url')) ?>

  <link rel="shortcut icon" type="image/x-icon" href="<?= $favicon?>">
</head>
<body>



<?php snippet('vo-kicker') ?>
  <main class="main">

  <div class="masthead-container">
      <?php snippet('vo-masthead') ?>
      
    </div>

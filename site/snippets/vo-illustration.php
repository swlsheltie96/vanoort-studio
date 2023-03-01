<?php

$files = $site->files();
$illustrations = page('vo-home')->illustrations()->toFiles();
$rand = rand(0,$illustrations->count()-1);
$illustration = $illustrations->nth($rand);

?>

<img src = "<?=$illustration->url()?>">

<div class="menu-precontainer grid">
    <div class="menu-precontainer inner">
        <?php $i = 1;
            $cur_tag='';
        ?>
        <?php foreach (page('vo-products')->children() as $key => $project) :
            $i++;
            $tag = $project->tags();
            
            $str_tag = strtolower((str_replace(' ', '', $tag)));
            if ($cur_tag != $str_tag) {
                $cur_tag = $str_tag;
                $i =1;
            }
        ?>
        <?php if ($i ==1 ) : ?>
<div class="">
    <div class="mobile-menu-hed">
        <h6>
            <?=$tag?>
        </h6>
    </div>
</div>
        <?php endif ?>
            <div class="product tag-<?=$str_tag?> <?=$tag?>" id="menuitem-<?=$project->uid() ?>">
                <a href="<?= $project->url() ?>">
                    <div class="product-number">
                        <p><?= $i ?>/<?= (page('vo-products')->children()->filterBy('tags', $tag)->count()) ?></p>
                    </div>
                    <div class="product-hed">
                        <p class="product-title"><?= $project->title()->html() ?></p>
                        <p class="product-price"><?= $project->price()->html() ?></p>
                        
                    </div>
                
                <div class="product-summary"><?= $project->summary() ?></div>
                </a>
            </div>
        <?php endforeach ?>
    </div>
</div>

<div class="menu-main grid">

    <div class="menu-section col">
            <div class="menu-hed"><h6>Tops</h6></div>
    </div>
    <div class="menu-section col">

    </div>
    <div class="menu-section col">

    </div>
    <div class="menu-section col">

    </div>
    <div class="menu-section col">

    </div>
    <div class="menu-section col">
        

    </div>



</div>
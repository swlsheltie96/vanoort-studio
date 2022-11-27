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
            <div class="product tag-<?=$str_tag?>" id="menuitem-<?=$project->uid() ?>">
                <a href="<?= $project->url() ?>">
                    <div class="product-number">
                        <p><?= $i ?>/<?= (page('vo-products')->children()->filterBy('tags', $tag)->count()) ?></p>
                    </div>
                    <div class="product-hed">
                        <p class="product-title"><?= $project->title()->html() ?></p>
                        <p class="product-price"><?= $project->price()->html() ?></p>
                        
                    </div>
                </a>
                <div class="product-summary"><?= $project->summary() ?></div>
            </div>
        <?php endforeach ?>
    </div>
</div>

<div class="menu-main grid">

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
    <div class="menu-section col">
        <div class="history">
            <p>the Vanoort’s history in design and retail starts 4 generations ago. The family owned a tobacco store during the 2nd world war and decided to switch to furniture in the 1950’s during the economic recovery in Holland after the war. the store did well creating high end furniture and interior decoration.

                The store was located at 8 Hugo de Grootplein in Amsterdam. The purple-burgundy-orange color scheme and the store became widely recognized and won prizes for their designs. The biggest selling furniture item they ever had was a red leather couch that came from a manufacturer in Germany – they sold dozens of these and made a small fortune with it. The van Oort family lived in the apartments above the store. Due to the success of the store, They continued to live there until 1972</p>
        </div>

    </div>



</div>
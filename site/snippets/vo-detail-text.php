
<div class="detail-text">
<?php if (!$page->soldout()->toBool()) :?> 
    <form action="<?= url('add') ?>" method="post">
        <button class="add-to-cart">add to cart</button>
        <?php if (!$page->onesize()->toBool()) :?> 
            <div class="size-classes">
            <div class="size-radio">
                <input type="radio" name="size" class="size" value="xs" required>
                    <p>XS</p>
                </input>

            </div>
           
            <div class="size-radio">
                <input type="radio" name="size" class="size" value="s" required>
                    <p>S</p>
                </input>

            </div>
            <div class="size-radio">
                <input type="radio" name="size" class="size" value="m" required>
                    <p>M</p>
                </input>

            </div>

            <div class="size-radio">
                <input type="radio" name="size" class="size" value="l" required>
                    <p>L</p>
                </input>

            </div>

            <div class="size-radio">
                <input type="radio" name="size" class="size" value="xl" required>
                    <p>XL</p>
                </input>

            </div>
          
       
        </div>
           
            <?php else: ?>
                <input type="hidden" name="size" class="size" value="OS">
                   
                </input>
            <?php endif?>
        <div class="product-hed">
        <h3><?= $page->title() ?></h3>
        <h4> <?= $page->price()->toFloat() ?> </h4>
        </div>
       

       
        <!-- Tax: <?= formatPrice(calculateTax($page->price()->toFloat(), $page->tax()->toFloat())) ?><br> -->
        <input type="hidden" name="id" value="<?= $page->id()?>">
        <input type="hidden" name="uid" value="<?= $page->uid() ?>">
        <input type="number" name="quantity" value="1" min="1">

    </form>
    <?php else: ?>
        <div class="sold-out-sign">
       <?= page('vo-home')->soldout()->toFile() ?>
       </div>
       <div class="product-hed">
      
        <h3><?= $page->title() ?></h3>
        <h4> <?= $page->price()->toFloat() ?> </h4>
        </div>
<?php endif ?>

    
    <?= $page->summary()->toBlocks() ?>
        <?= $page->text()->toBlocks() ?>
        
        <div class="illustration">
        <?php snippet('vo-illustration') ?>
        </div>
       
</div>
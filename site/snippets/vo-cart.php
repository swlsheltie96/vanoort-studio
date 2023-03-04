<div class="cart-container">
  <div class="cart-header">
    <h2>Cart Summary</h2>
  </div>



  <form action="<?= url('delete') ?>" method="post"> 
         
          <button>
              <p>delete</p>
            </button>
          </form>


  <?php foreach ($cart as $item) : ?>
    <div class="cart-item">
      <div class="item image">
        <?php $image = page('vo-products/' . $item['uid'])->images()->filterBy('filename', '^=', 'thumbnail') ?>
        <img src=" <?= $image ?> ">

      </div>
      <div class="item-info">
        <div class="item title">
          <div class="item-title"> <?= $item['key'] ?>
          </div>
          <div class="item-price"> <?= formatPrice($item['price']) ?>
          </div>

        </div>
        <div class="item size">
          <div class="item-size-header">
            <p>Size: </p>
          </div>
          <div class="item-size"> <?= $item['size'] ?>
          </div>

        </div>
        <div class="item quantity">
          <div class="item-quantity-header">
            <p>Quantity: </p>
          </div>
          <div class="item-quantity"> <?= $item['quantity'] ?> </div>

        </div>
        
        <div class="item remove">
          <form action="<?= url('remove') ?>" method="post"> 
          <input type="hidden" name="id" value="<?= $item['id'] ?>">
          <button class="unstyled">
              <p>Remove</p>
            </button>
          </form>
        </div>

      </div>



      <!-- <?= formatPrice($item['tax']) ?> -->
      <!-- 
      <?= formatPrice($item['sumTax']) ?>
      <?= formatPrice($item['sum']) ?> -->
    </div>


  <?php endforeach; ?>
  <div class="cart-total">
    <h2>Total</h2>
    <div class="total tax">
      <p>Tax: </p>
      <p> <?= formatPrice($cart->getTax()) ?></p>

    </div>



    <div class="total shipping">
      <p>
        Shipping:
      </p>
      <p> <?= formatPrice($cart->getTax()) ?></p>
    </div>


    <div class="total amounnt">
      <p>
        total:
      </p>
      <p><?= formatPrice($cart->getSum()) ?>
      </p>
    </div>
  </div>




</div>
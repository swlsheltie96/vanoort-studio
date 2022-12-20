<?php

/**
 * The config file is optional. It accepts a return array with config options
 * Note: Never include more than one return statement, all options go within this single return array
 * In this example, we set debugging to true, so that errors are displayed onscreen. 
 * This setting must be set to false in production.
 * All config options: https://getkirby.com/docs/reference/system/options
 */
return [
    'debug' => true,
    'home' => 'vo-home',

        /**
     * You MUST add sandbox/test keys to make the shop work with Stripe and/or PayPal.
     * For production mode (to make real payments) you have to add the live keys,
     * set production to true and add the Merx license.
     *
     * You can add custom keys for specific domains. The Starterkit demo has a custom
     * config file (config.starterkit.merx.wagnerwagner.de.php) the its secret keys.
     * More information: https://getkirby.com/docs/guide/configuration#multi-environment-setup
     */
    'ww.merx.stripe.test.publishable_key' => 'pk_test_51M8uTfKz61P9YDPpvL29ZaHTUSkppI8DPJ8OPXjjhYXf6NKI6wqtWAZstiJJNDBEjO9wMaKeICbuHGVg1YqEMkTE00NAPitXzF',
    'ww.merx.stripe.test.secret_key' => 'sk_test_51M8uTfKz61P9YDPpSmEjEVgKzvJTW76gbdYcLbeJmuYT8FLpabin1oxGKPMezau9uAm8A7Cz7MmFhd7fd07ylpH900eGDV8ZZd',
    'ww.merx.paypal.sandbox.clientID' => 'AZdjdUz9aoA0U_45h32NYjJwXXFyzxgpsUNTpD8-9x-3q7bE4TrFQTvG9jPVgQXe6KcX6jc8hdfrJo9f',
    'ww.merx.paypal.sandbox.secret' => 'EMqk3qk6xdmYxAXuxcu3b54n41Jf71XtgsG4120Ha7OrcZzMXkuv9oDtdLpiA5138SmXNG0IHKLNYOIX',

    'ww.merx.stripe.live.publishable_key' => '',
    'ww.merx.stripe.live.secret_key' => '',
    'ww.merx.paypal.live.clientID' => '',
    'ww.merx.paypal.live.secret' => '',

    'ww.merx.production' => false,
    'ww.merx.license' => 'MERX-XXXXXXXX-XXXXXXXX',

    'routes' => [
        [
          'pattern' => 'add',
          'method' => 'post',
          'action'  => function () {
            $id = get('id');
            $uid = get('uid');
            $size = get('size');
            $quantity = get('quantity');
            try {
              cart()->add([
                'id' => $id,
                'uid'=>$uid,
                'size' => $size,
                'quantity' => $quantity,
              ]);
              go('/'.$id);
            } catch (Exception $ex) {
              return $ex->getMessage();
            }
          },
        ],
       
        [
          'pattern' => 'pay',
          'method' => 'post',
          'action'  => function () {
            $data = [
              'paymentMethod' => 'paypal',
              'firstname' =>  get('firstname'),
              'lastname' =>  get('lastname'),
              'address1' =>  get('address1'),
              'address2' =>  get('address2'),
              'state' =>  get('state'),
              'city' =>  get('city'),
              'zipcode' =>  get('zipcode'),
              'phone' =>  get('phone'),
              'email' =>  get('email'),
            ];
            try {
              $redirect = merx()->initializePayment($data);
              go($redirect);
            } catch (Exception $ex) {
              echo $ex->getMessage();
            }
          },
        ],
       
      ],
];

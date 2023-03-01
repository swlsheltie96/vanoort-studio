<?php

$files = $site->files();
$illustrations = page('vo-home')->footerimages()->toFiles();
$rand = rand(0,$illustrations->count()-1);
$illustration = $illustrations->nth($rand);

?>

<footer class="footer" style="background-image: url(<?=$illustration->url()?>)">
<div class="grid">
 
  <div class="footer-logo" >
     <?= page('vo-home')->footer()->toFile() ?>
  </div>

 
    <div class="footer-links link"><a href="https://us21.list-manage.com/contact-form?u=ceb897a515968e8d6d978c202&form_id=37cad8b815cdb8f2155989eefec4adcf" target="_blank">Contact</a></div>
    <div class="footer-links link"><a href="https://www.instagram.com/van_oort_/" target="_blank">Instagram</a></div>
    <!-- <div class="footer-links link"></div> -->

    <!-- Begin Mailchimp Signup Form -->
<div id="mc_embed_signup">
<form action="https://gmail.us21.list-manage.com/subscribe/post?u=ceb897a515968e8d6d978c202&amp;id=f714a16e53&amp;f_id=00d4cfe1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
    <div id="mc_embed_signup_scroll">
 
    <!-- <div class="indicates-required"><span class="asterisk">*</span> indicates required</div> -->
<div class="mc-field-group">
<label for="mce-EMAIL"><span class="asterisk"></span>
</label>
<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Email address*" required>
<span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
</div>
<div id="mce-responses" class="clear foot">
    <div class="response" id="mce-error-response" style="display:none"></div>
    <div class="response" id="mce-success-response" style="display:none"></div>
</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ceb897a515968e8d6d978c202_f714a16e53" tabindex="-1" value=""></div>
    <div class="optionalParent">
        <div class="clear foot">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
            <p class="brandingLogo"><a href="http://eepurl.com/ihDjK1" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
        </div>
    </div>
</div>
</form>
</div>

<!--End mc_embed_signup-->
</div>
</footer>

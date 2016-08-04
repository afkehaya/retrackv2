// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
//
//= require jquery/jquery-2.1.1.js
//= require bootstrap-sprockets
//= require metisMenu/jquery.metisMenu.js
//= require pace/pace.min.js
//= require peity/jquery.peity.min.js
//= require slimscroll/jquery.slimscroll.min.js
//= require inspinia.js

$(document).ready(function(){
  $('#calculator').on('click', 'button', function(){
    var price = +$('.propertyprice').val();
    var annual_rental_income = +$('.annual_rental_income').val();
    var vacancy = +$('.vacancy').val();
    var advertising = +$('.advertising').val();
    var auto_travel = +$('.auto').val();
    var cleaning_maintenance = +$('.cleaning').val();
    var commissions = +$('.commissions').val();
    var insurance = +$('.insurance').val();
    var professional = +$('.professional');
    var managment = +$('.managment').val();
    var mortgage = +$('.mortgage').val();
    var other_interest = +$('.other-interest').val();
    var repairs = +$('.repairs').val();
    var supplies = +$('.supplies').val();
    var utilitites = +$('.utilities').val();
    var other = +$('.other')
    var depreciation = +$('.depreciation').val();
    var depreciation_percent = +$('.depreciation-percent').val();
    var tax_rate = +$('.tax-rate').val();
    var principal = +$('.principal').val();


    $('.cash').text(price * annual_rental_income).slideIn(300);

  });
});

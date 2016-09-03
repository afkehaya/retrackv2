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
    var expenses = +$('.expenses').val();
    var income = +$('.income').val();
    var depreciation_percent = 27.5;
    var depreciation = price / depreciation_percent;
    var net_income_or_loss = annual_rental_income - (depreciation + expenses);
    var taxes = income - net_income_or_loss;
    var tax_percent = .4;
    var taxes_total = taxes * tax_percent;
    var adjusted_income = income - net_income_or_loss;
    var taxes_no_pcf = income - 25000;
    var taxes_no_pcf_total = taxes_no_pcf * tax_percent;
    var adjusted_incom_no_pcf = income - 25000;
    var cash_in_hand = adjusted_income - taxes_total;
    var cash_in_hand_no_pcf = adjusted_incom_no_pcf - taxes_no_pcf_total;

    $('.depreciation').text(price / depreciation_percent);
    $('.net_income_loss').text(annual_rental_income - (depreciation + expenses));
    $('.adjusted_income').text(income - net_income_or_loss);
    $('.taxes').text(taxes * tax_percent);
    $('.cash-in-hand').text(adjusted_income - taxes_total);
    $('.adjusted_income_no_pcf').text(income - 25000);
    $('.taxes_no_pcf').text(taxes_no_pcf * tax_percent);
    $('.cash-in-hand-no-pcf').text(adjusted_incom_no_pcf - taxes_no_pcf_total);
    $('.cash').text(cash_in_hand - cash_in_hand_no_pcf);


  });
});

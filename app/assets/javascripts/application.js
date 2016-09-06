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
    var price = +$('.propertyprice').val().replace(",","");
    var annual_rental_income = +$('.annual_rental_income').val().replace(",","");
    var expenses = +$('.expenses').val().replace(",","");
    var income = +$('.income').val().replace(",","");
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


    var depreciation_value = price / depreciation_percent;
    var net_income_loss_value = annual_rental_income - (depreciation + expenses);
    var adjusted_income_value = income - net_income_or_loss;
    var taxes_value = taxes * tax_percent;
    var cash_in_hand_value = adjusted_income - taxes_total;
    var adjusted_income_no_pcf_value = income - 25000
    var taxes_no_pcf_vlaue = taxes_no_pcf * tax_percent;
    var cash_in_hand_no_pcf_value = adjusted_incom_no_pcf - taxes_no_pcf_total;
    var cash_value = cash_in_hand - cash_in_hand_no_pcf;

    $('.depreciation').text(depreciation_value.toFixed(2));
    $('.net_income_loss').text(net_income_loss_value.toFixed(2));
    $('.adjusted_income').text(adjusted_income_value.toFixed(2));
    $('.taxes').text(taxes_value.toFixed(2));
    $('.cash-in-hand').text(cash_in_hand_value.toFixed(2));
    $('.adjusted_income_no_pcf').text(adjusted_income_no_pcf_value.toFixed(2));
    $('.taxes_no_pcf').text(taxes_no_pcf_vlaue.toFixed(2));
    $('.cash-in-hand-no-pcf').text(cash_in_hand_no_pcf_value.toFixed(2));
    $('.cash').text(cash_value.toFixed(2));
    $('.hiden-copy').fadeIn("slow")



  });
});

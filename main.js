

const $display = document.
querySelector('input[type="text"]');

 const $buttons = document.
 querySelectorAll('input[type="button"]');

 $buttons.forEach(($button) => {
  $button.addEventListener ('click',

 () => {

  const value = $button.value;
  if (value === 'CR') {
    $display.value = '';

    return;

 }
 if (value === '=') {

  // not rec0mended though!!

  const express = $display.
  value.replace(/x/g, '*');
  $display.value = eval(express);

  return;
 }
 $display.value += value;
}
 );
 });
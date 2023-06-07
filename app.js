// Local storage
'use strict';

localStorage.setItem('token', 'some_token');
localStorage.setItem('token1', 'some_token_1');
console.log(localStorage.getItem('token'));
console.log(localStorage.getItem('token1'));
localStorage.removeItem('token1');
localStorage.clear();


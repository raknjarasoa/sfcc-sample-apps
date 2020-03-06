Feature('home');

Scenario('Load a product starting from the home page', (I) => {
    I.amOnPage('/');
    I.see('Summer Look');
    I.see('Popular Catalogs');
    I.click('Dresses');
    I.see('Floral Dress');
    I.click('Floral Dress');
    I.amOnPage('/product/25592581M');
    I.see('Floral Dress');
});
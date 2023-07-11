class locatorsPage {

    // <------------------------------------------------------------------->
    // <----------------------- Verify the Privathaftpflicht calculator ------------------------------->
    // <------------------------------------------------------------------->

    versicherungen = "//label[@for='973d68a7-31be-4ff8-a1ef-2f3cecd4255b']"
    privathaftpflicht = "//a[@data-page-url='/privathaftpflicht/']"
    my_age = "//input[@type='tel']"
    jetztvergleichen_btn = "//button[normalize-space()='Jetzt vergleichen']"
    birthdate = "//input[@placeholder='TT.MM.JJJJ']"
    zip = "//input[@id='prestep_postcode']"

    /* Assertion: Verify that - at least 5 tariffs are shown */
    verifyProductCount() {
        cy.get('filtered-products-hint > :nth-child(1)', { timeout: 60000 }).invoke('text').then((exp_onsale_text) => {
            let sort = parseInt(exp_onsale_text);
            if (sort >= 5) {
                cy.log('Search Tarife count is ' + sort)
            }
            else {
                cy.log('Search Tarife count is below 5')
            }
        })
    }


    // <------------------------------------------------------------------->
    // <----------------------- Load multiple tariff result pages ------------------------------->
    // <------------------------------------------------------------------->

    result_page = "//product-list[@class='product-list comparison-footer-is-open']"
    load_more_button = "//a[@class='button load-more-button']"
    product = "//product"
    all_load_btn = "//a[normalize-space()='Alle Tarife laden']"

    /*Assertion: Verify that  the total number of tariffs displayed matches the total listed number of tariffs above result list*/
    verifySearchResultWithProductCount() {
        cy.get('filtered-products-hint > :nth-child(1)', { timeout: 30000 }).invoke('text').then((search_product_result) => {
            let sort = parseInt(search_product_result);
            cy.xpath('//product').should('have.length', sort);
        })
    }


    // <------------------------------------------------------------------->
    // <----------------------- Verify offer details for a selected tariff ------------------------------->
    // <------------------------------------------------------------------->

    first_product_price = "(//div[@class='price'])[1]"
    tarifdetails = "(//button[contains(text(),'Tarifdetails')])[1]"
    tarif_details_section = "(//ul[@class='navigation'])//li"
    zum_online_btn = "(//button[contains(text(),'Zum Online-Antrag')])[1]"

    verifyTarifDetailsSection(section1, section2, section3) {
        cy.xpath("(//ul[@class='navigation'])//li", { timeout: 30000 }).each(($el, index, $list) => {

            if ($el.text() === section1) {
                cy.log($el.text())
            }
            else if ($el.text() === section2) {
                cy.log($el.text())
            }
            else if ($el.text() === section3) {
                cy.log($el.text())
            }
        });
    }

    verifyTarifDetailsSection2(section4, section5) {
        cy.xpath("(//ul[@class='navigation'])//li", { timeout: 30000 }).each(($el, index, $list) => {

            if ($el.text() === section4) {
                cy.log($el.text())
            }
            else if ($el.text() === section5) {
                cy.log($el.text())
            }
        });
    }
}

export default locatorsPage;

require('chromedriver');
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
const cucumber = require("@cucumber/cucumber");

class CustomWorld {
    constructor() {
        this.thrown = false;
    }

    hasThrown() {
        return this.thrown;
    }

    itThrew() {
        this.thrown = true; 
    }
}

class Browser {
    constructor() {
        this.headless = null;
    }
    browserBuild() {
        const options = new chrome.Options()
            .addArguments('--log-level=1')
            .headless()
            .setAcceptInsecureCerts(true)
            .windowSize({width: 1920, height: 1200});

        this.headless = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
    }
    browserBuilt() {
        return (this.headless != null) ? true : false;
    }
    async browserExit() {
        await this.headless.quit();
        this.headless = null;
    }

    async browserNavigate(url) {
        await this.headless.get(url);
    }

    async elementClick(id) {
        const element = await this.getElement(id);
        element.click();
    }

    async elementColor(id) {
        const element = await this.getElement(id);
        return await element.getCssValue('color');
    }

    async elementHover(id) {
        const element = await this.getElement(id);
        const actions = this.headless.actions({async: true});
        await actions.move({origin: element}).perform();
    }

    async getElement(id) {
        const selector = webdriver.By.id(id);
        return await this.headless.findElement(selector);
    }

    async getElementByCss(css) {
        const selector = webdriver.By.css(css);
        return await this.headless.findElement(selector);
    }

    async waitForElementByCss(css, timeout) {
        const selector = webdriver.By.css(css);
        await this.headless.wait(webdriver.until.elementLocated(selector), timeout, 2000);
    }
}

module.exports = Browser;
cucumber.setWorldConstructor(CustomWorld);
const scope = require('../features/hooks/scope');

const navigateToURL = async (url) => {
  await scope.context.currentPage.goto(url, {
    waitUntil: 'networkidle2' // https://stackoverflow.com/questions/46948489/puppeteer-wait-page-load-after-form-submit
  });
};

const getCurrentURL = async () => {
  const {
    currentPage
  } = scope.context;
  const currentURL = await currentPage.url();
  return currentURL;
};

const waitForVisibilityOfElementSelector = async (selector) => {
  const timeout = scope.TIMEOUT_SECONDS;
  const options = {
    timeout: timeout * 1000
  };
  const {
    currentPage
  } = scope.context;
  await currentPage.waitForSelector(selector, {
    visible: true
  }, options);
};

const waitForVisibilityOfElementXpath = async (selector) => {
  const timeout = scope.TIMEOUT_SECONDS;
  const options = {
    timeout: timeout * 1000
  };
  const {
    currentPage
  } = scope.context;
  await currentPage.waitForXPath(selector, {
    visible: true
  }, options);
};

const clickElement = async (selector, focusElement) => {
  const {
    currentPage
  } = scope.context;
  if (focusElement) { await currentPage.focus(selector[1]); }
  if (selector[0] === 'CSS_SELECTOR') {
    await waitForVisibilityOfElementSelector(selector[1]);
    await currentPage.click(selector[1]);
  } else if (selector[0] === 'XPATH') {
    await waitForVisibilityOfElementXpath(selector[1]);
    const element = await currentPage.$x(selector[1]);
    await element[0].click();
  }
};

const hoverElement = async (selector, focusElement) => {
  const {
    currentPage
  } = scope.context;
  if (focusElement) { await currentPage.focus(selector[1]); }
  if (selector[0] === 'CSS_SELECTOR') {
    await waitForVisibilityOfElementSelector(selector[1]);
    await currentPage.hover(selector[1]);
  } else if (selector[0] === 'XPATH') {
    await waitForVisibilityOfElementXpath(selector[1]);
    const element = await currentPage.$x(selector[1]);
    await element[0].hover();
  }
};

const typeText = async function (selector, value) {
  const {
    currentPage
  } = scope.context;
  if (selector[0] === 'CSS_SELECTOR') {
    await waitForVisibilityOfElementSelector(selector[1]);
    await currentPage.type(selector[1], value, { delay: 1 });
  } else if (selector[0] === 'XPATH') {
    await waitForVisibilityOfElementXpath(selector[1]);
    const element = await currentPage.$x(selector[1]);
    await element[0].type(value);
  }
};

const clearAndType = async (selector, value, focusElement) => {
  const {
    currentPage
  } = scope.context;
  if (focusElement) { currentPage.focus(selector); }
  if (selector[0] === 'CSS_SELECTOR') {
    await waitForVisibilityOfElementSelector(selector[1]);
    await currentPage.click(selector[1], { clickCount: 3 });
    await currentPage.type(selector[1], '   ' + value, {
      delay: 1
    });
  } else if (selector[0] === 'XPATH') {
    await waitForVisibilityOfElementXpath(selector[1]);
    currentPage.click(selector[1], {
      clickCount: 3
    });
    const element = await currentPage.$x(selector[1]);
    await element[0].type('   ' + value);
  }
};

const delay = duration => new Promise(resolve => setTimeout(resolve, duration));

const wait = async timeInSeconds => {
  const time = parseInt(timeInSeconds) * 1000;
  await delay(time);
};

const getTextElement = async (selector) => {
  const {
    currentPage
  } = scope.context;
  if (selector[0] === 'CSS_SELECTOR') {
    await waitForVisibilityOfElementSelector(selector[1]);
    const options = await currentPage.$(selector[1]);
    const textElement = await currentPage.evaluate(options => options.textContent, options);
    return textElement;
  } else if (selector[0] === 'XPATH') {
    await waitForVisibilityOfElementXpath(selector[1]);
    const xpathData = await currentPage.$x(selector[1]);
    const xpathContent = await xpathData[0].getProperty('textContent');
    return xpathContent.jsonValue();
  }
};

const getTextElements = async (selector) => {
  const {
    currentPage
  } = scope.context;
  if (selector[0] === 'CSS_SELECTOR') {
    await waitForVisibilityOfElementSelector(selector[1]);
    const options = await currentPage.$$(selector[1]);
    const elements = [];
    for (let i = 0; i < options.length; i++) {
      const option = await (await options[i].getProperty('innerText')).jsonValue();
      elements.push(option);
    }
    return elements;
  } else if (selector[0] === 'XPATH') {
    await waitForVisibilityOfElementXpath(selector[1]);
    const xpathDatas = await currentPage.$x(selector[1]);
    const elements = [];
    for (let i = 0; i < xpathDatas.length; i++) {
      const xpathData = await (await xpathDatas[i].getProperty('innerText')).jsonValue();
      elements.push(xpathData);
    }
    return elements;
  }
};

const getAttributeOfElement = async (selector, attribute) => {
  const {
    currentPage
  } = scope.context;
  if (selector[0] === 'XPATH') {
    await waitForVisibilityOfElementXpath(selector[1]);
    const xpathDatas = await currentPage.$x(selector[1]);
    const propertyHandle = await xpathDatas.getProperty(attribute);
    const propertyValue = await propertyHandle.jsonValue();
    return propertyValue;
  }
};

const evaluate  = async (A = any) => {
  const {
    currentPage
  } = scope.context;
  return currentPage.evaluate(A);
};

module.exports = {
  clickElement,
  hoverElement,
  typeText,
  clearAndType,
  navigateToURL,
  wait,
  getTextElement,
  getTextElements,
  getCurrentURL,
  getAttributeOfElement,
  waitForVisibilityOfElementSelector,
  evaluate,
};

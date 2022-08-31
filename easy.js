//easy js library
//created by mobin bordbari
//component settings
const component = {
  createComponent: (el) => {
    let element;
    if (el.indexOf('<') === -1) {
      element = document.querySelector(el).outerHTML;
    } else {
      element = el;
    }
    //if element haven't id this part start
    if (element === null || element === undefined || element === '') {
      console.error('Elemnet Name Error : undefined name! \n check the Element tag name , class or id.');
      return false;
    }
    return element;
  },
  appendComponent: (componentName, parentElement) => {
    parentElement = document.querySelector(parentElement);
    let parentInner = parentElement.innerHTML;
    parentInner = parentInner.split(' ');
    let scriptIndex = parentInner.indexOf('<script');
    if (scriptIndex >= 0) {
      parentInner[scriptIndex - 1] += `\n${componentName}`;
      parentInner = parentInner.join(' ');
    } else {
      parentInner[parentInner.length - 1] += `\n${componentName}`;
      parentInner = parentInner.join(' ');
    }
    parentElement.innerHTML = parentInner;
  },
  deleteComponent: (component) => {
    document.querySelector(component).remove();
  }
};
//css style
const styleSheet = (el, styleName, styleValue) => {
  let indexOfMinus = styleName.indexOf('-');
  if (indexOfMinus != -1) {
    styleName.replace('-', '');
    styleName[indexOfMinus] = styleName[indexOfMinus].toUpperCase();
  }
  document.querySelector(el).style[styleName] = styleValue;
};
//event listener
const evListener = (el, event, listener) => {
  document.querySelector(el).addEventListener(`${event}`, listener);
};
// this object is for better seo in html file

const SEO = {
  createMeta: {
    title: (content) => { `<meta name="title" contnet="${content}" />` },
    description: (content) => { `<meta name="description" content="${content}" />` },
    robots: (content) => { `<meta name="robots" content="${content}" />` },
    language: (content) => { `<meta name="language" content="${content}" />` },
    author: (content) => { document.head.innerHTML += `<meta name="author" content="${content}" />` },
    keyWords: (content) => { document.head.innerHTML += `<meta name="keywords" content="${content}" />` }
  },
  img_alt_all: () => {
    document.querySelectorAll('img').setAttribute('alt', '');
  },
  changeH1: () => {
    const h1 = document.querySelectorAll('h1');
    for (i = 1; i < h1.length; i++) {
      h1[i].outerHTML = h1[i].outerHTML.replace('h1', 'h2');
    };
  },
  changeBtag: () => {
    const bTags = document.querySelectorAll('b');
    bTags.forEach(b => {
      b.outerHTML = b.outerHTML.replace('b>', 'strong>');
    });
  }
};

const onRender = (codes) => {
  document.documentElement.onload = () => {
    codes;
  }
};

const designEffect = {
  fadeIn: (element, duration = 1000) => {
    const el = document.querySelector(element);
    el.style.transition = `${duration}ms linear`;
    el.style.opacity = 1;
  },
  fadeOut: (element, duration = 1000) => {
    const el = document.querySelector(element);
    el.style.transition = `${duration}ms linear`;
    el.style.opacity = 0;
  }
};

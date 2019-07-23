import {expect} from 'chai';
import fs from 'fs';
const {JSDOM} = require('jsdom');


describe ('Our fisrt test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say users', () => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.equal('Users');
		dom.window.close();
  });
});

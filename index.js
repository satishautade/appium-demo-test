const wdio = require('webdriverio');
const assert = require('assert');

const opts = {
  port: 4723,
  capabilities: {
    platformName: "android",
    platformVersion: 7,
    app: './apks/ApiDemos-debug.apk',
    automationName: "UIAutomator2",
    deviceName: "Google Nexus 5",
    appActivity: ".view.TextFields",
    appPackage: "io.appium.android.apis",
  }
}

async function main(){
  const conn = await wdio.remote(opts);


  //Tests
  const field = await conn.$('android.widget.EditText');
  await field.setValue('Hello World!');
  const value = await field.getText();
  assert.equal(value, 'Hello World!');

  // Wait for session to close
  await conn.deleteSession();
}

main();
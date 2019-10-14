import { by, device, element, expect } from 'detox';

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show an alert popup after tap', async () => {
    await element(by.id('clickMeButton')).tap();
    await expect(element(by.text('clicked'))).toBeVisible();
  });
});
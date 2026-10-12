import { describe, expect, it } from 'vitest';
import html from '../index.html?raw';

describe('renderer content security policy', () => {
  it('allows no third-party analytics endpoints', () => {
    expect(html).not.toContain('posthog');
  });
});
